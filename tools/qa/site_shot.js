// usage: node site_shot.js <url> <width> <height> <out.png> [fullpage]
// Screenshot of any public URL via headless Chrome (used for portfolio project images).
const { spawn } = require('child_process');
const fs = require('fs');
const [url, W, H, out, full, pre] = process.argv.slice(2); // pre: optional JS run before capture (e.g. close a popup)
const w = Number(W), h = Number(H);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9362', '--window-size=' + w + ',' + h, '--user-data-dir=' + process.env.TEMP + '/cdp-prof14', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9362/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url });
  await sleep(7000);
  if (pre) { console.log('pre ->', await ev(pre)); await sleep(1500); }
  const hh = await ev('document.documentElement.scrollHeight');
  console.log('page height', hh, 'title', await ev('document.title'));
  const params = { format: 'png' };
  if (full) { params.captureBeyondViewport = true; params.clip = { x: 0, y: 0, width: w, height: Math.min(hh, 4000), scale: 1 }; }
  const s = await send('Page.captureScreenshot', params);
  fs.writeFileSync(out, Buffer.from(s.data, 'base64'));
  chrome.kill();
  process.exit(0);
})();
