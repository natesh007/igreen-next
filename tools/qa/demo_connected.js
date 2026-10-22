const { spawn } = require('child_process'); const fs = require('fs');
const W = Number(process.argv[2]), H = Number(process.argv[3]), out = process.argv[4];
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9341', '--window-size=' + W + ',' + H, '--user-data-dir=' + process.env.TEMP + '/cdp-prof9', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t; for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9341/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl); await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {}; ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 600 });
  await send('Page.navigate', { url: 'http://localhost:3000/' }); await sleep(5000);
  await ev("document.documentElement.style.scrollBehavior='auto'");
  const hh = await ev('document.documentElement.scrollHeight'); for (let y = 0; y < hh; y += 400) { await ev('window.scrollTo(0,' + y + ')'); await sleep(120); } await sleep(600);
  await ev("(()=>{const e=document.querySelector('#demo');window.scrollTo(0,e.getBoundingClientRect().top+scrollY-80)})()"); await sleep(600);
  // tap the spots on the image (not the buttons below) in sequence
  for (let i = 0; i < 4; i++) { await ev(`document.querySelectorAll('.v-hot')[${i}].click()`); await sleep(250); }
  await sleep(900);
  console.log('state:', await ev("JSON.stringify({connected:[...document.querySelectorAll('.v-hot.on')].length,badge:!!document.querySelector('.v-done'),imgH:Math.round(document.querySelector('.v-night').getBoundingClientRect().height)})"));
  const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 78 }); fs.writeFileSync(out, Buffer.from(s.data, 'base64'));
  ws.close(); chrome.kill(); process.exit(0);
})();
