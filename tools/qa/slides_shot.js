// usage: node slides_shot.js <port> <width> <outdir>
// Opens the home page, selects each hero slide in turn and captures the stage at several moments, then builds one
// contact sheet per slide (slide<N>_<width>.png) so an animation can be reviewed in a single image.
const { spawn } = require('child_process');
const fs = require('fs');
const sharp = require('sharp');
const [port = '3010', W = '1440', out = '.'] = process.argv.slice(2);
const w = Number(W);
const TIMES = (process.env.TIMES || '0.6,2.0,3.4,4.8,6.2,7.4,8.4,9.8').split(',').map(Number);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9382', '--window-size=' + w + ',900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof16', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9382/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: 900, deviceScaleFactor: 1, mobile: w < 600 });
  await send('Page.navigate', { url: 'http://localhost:' + port + '/' });
  await sleep(5500);
  await ev("window.scrollTo(0,0)");
  for (let slide = 0; slide < 3; slide++) {
    await ev(`document.getElementById('live-tab-${slide}').click()`);
    const t0 = Date.now();
    const frames = [];
    for (const sec of TIMES) {
      const wait = sec * 1000 - (Date.now() - t0);
      if (wait > 0) await sleep(wait);
      const r = await ev(`(()=>{const b=document.querySelector('.v-live .stage').getBoundingClientRect();return {x:b.left,y:b.top+scrollY,w:b.width,h:b.height}})()`);
      const s = await send('Page.captureScreenshot', { format: 'png', clip: { x: r.x, y: r.y, width: r.w, height: r.h, scale: 1 } });
      frames.push(Buffer.from(s.data, 'base64'));
    }
    const fw = Math.round(frames.length ? (await sharp(frames[0]).metadata()).width : 0);
    const fh = (await sharp(frames[0]).metadata()).height;
    const cols = 4, rows = Math.ceil(frames.length / cols), tw = Math.round(fw * 0.5), th = Math.round(fh * 0.5);
    const tiles = await Promise.all(frames.map((f) => sharp(f).resize(tw, th).png().toBuffer()));
    await sharp({ create: { width: tw * cols, height: th * rows, channels: 3, background: '#111' } })
      .composite(tiles.map((b, i) => ({ input: b, left: (i % cols) * tw, top: Math.floor(i / cols) * th })))
      .png()
      .toFile(`${out}/slide${slide}_${w}.png`);
    console.log('slide', slide, 'sheet done');
  }
  chrome.kill();
  process.exit(0);
})();
