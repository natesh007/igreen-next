// usage: node modal_shot.js <width> <height> <out.jpg> <path> <button text>
// Opens the page, clicks the first button whose text matches, and screenshots the result.
const { spawn } = require('child_process');
const fs = require('fs');
const [W, H, out, path, label] = process.argv.slice(2);
const w = Number(W), h = Number(H);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9344', '--window-size=' + w + ',' + h, '--user-data-dir=' + process.env.TEMP + '/cdp-prof12', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9344/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  await send('Page.navigate', { url: 'http://localhost:3000' + path });
  await sleep(4500);
  const ok = await ev(`(()=>{const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim().includes(${JSON.stringify(label)}));if(!b)return false;b.click();return true})()`);
  console.log('clicked', ok);
  await sleep(1200);
  const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 78 });
  fs.writeFileSync(out, Buffer.from(s.data, 'base64'));
  chrome.kill();
  process.exit(0);
})();
