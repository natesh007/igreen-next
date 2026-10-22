const { spawn } = require('child_process');
const fs = require('fs');
const [outDir, width, ...paths] = process.argv.slice(2);
const W = Number(width);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9334', '--window-size=' + W + ',900', '--user-data-dir=' + process.env.TEMP + '/cdp-prof2', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let targets;
  for (let i = 0; i < 40; i++) { try { targets = await (await fetch('http://127.0.0.1:9334/json')).json(); if (targets.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: 900, deviceScaleFactor: 1, mobile: W < 600 });
  for (const p of paths) {
    await send('Page.navigate', { url: 'http://localhost:3000' + p });
    await sleep(5000);
    const h = await ev('document.documentElement.scrollHeight');
    for (let y = 0; y < h; y += 450) { await ev(`window.scrollTo(0,${y})`); await sleep(250); }
    await ev('window.scrollTo(0,0)'); await sleep(800);
    const H = Math.min(await ev('document.documentElement.scrollHeight'), 12000);
    const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true, clip: { x: 0, y: 0, width: W, height: H, scale: 1 } });
    const name = (p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')) + '_' + W + '.jpg';
    fs.writeFileSync(outDir + '/' + name, Buffer.from(shot.data, 'base64'));
    console.log(name, H);
  }
  ws.close(); chrome.kill(); process.exit(0);
})();
