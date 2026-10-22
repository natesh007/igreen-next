// usage: node page_views.js <width> <height> <outdir> <path>:<selector-to-scroll-to> ...
const { spawn } = require('child_process');
const fs = require('fs');
const [W, H, out, ...jobs] = process.argv.slice(2);
const w = Number(W), h = Number(H);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9342', '--window-size=' + w + ',' + h, '--user-data-dir=' + process.env.TEMP + '/cdp-prof10', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9342/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  for (const job of jobs) {
    const [path, sel, name] = job.split('|');
    await send('Page.navigate', { url: 'http://localhost:3000' + path });
    await sleep(4500);
    await ev("document.documentElement.style.scrollBehavior='auto'");
    const hh = await ev('document.documentElement.scrollHeight');
    for (let y = 0; y < hh; y += 400) { await ev('window.scrollTo(0,' + y + ')'); await sleep(110); }
    await sleep(700);
    if (sel) await ev(`(()=>{const e=document.querySelector('${sel}');if(e)window.scrollTo(0,e.getBoundingClientRect().top+scrollY-90)})()`);
    else await ev('window.scrollTo(0,0)');
    await sleep(900);
    const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 78 });
    fs.writeFileSync(out + '/' + name + '_' + w + '.jpg', Buffer.from(s.data, 'base64'));
    console.log(name, 'ok');
  }
  ws.close(); chrome.kill(); process.exit(0);
})();
