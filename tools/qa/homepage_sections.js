const { spawn } = require('child_process');
const fs = require('fs');
const W = Number(process.argv[2]);
const out = process.argv[3];
const H = Number(process.argv[4] || 900);
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--remote-debugging-port=9339', '--window-size=' + W + ',' + H, '--user-data-dir=' + process.env.TEMP + '/cdp-prof7', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  let t;
  for (let i = 0; i < 40; i++) { try { t = await (await fetch('http://127.0.0.1:9339/json')).json(); if (t.length) break; } catch {} await sleep(500); }
  const ws = new WebSocket(t.find((x) => x.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const pend = {};
  ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d.result); };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, returnByValue: true })).result.value;
  await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: W < 600 });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await sleep(5000);
  await ev("document.documentElement.style.scrollBehavior='auto'");
  const hh = await ev('document.documentElement.scrollHeight');
  for (let y = 0; y < hh; y += 400) { await ev('window.scrollTo(0,' + y + ')'); await sleep(150); }
  await sleep(800);
  const shot = async (name) => {
    await sleep(900);
    const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 78 });
    fs.writeFileSync(out + '/' + name + '_' + W + '.jpg', Buffer.from(s.data, 'base64'));
  };
  const go = async (sel, offset = 90) => {
    await ev(`(()=>{const e=document.querySelector('${sel}');window.scrollTo(0,e.getBoundingClientRect().top+scrollY-${offset})})()`);
  };
  await ev('window.scrollTo(0,0)'); await shot('s1_top');
  await go('.v-flips', 120); await shot('s2_flips_front');
  await ev("document.querySelectorAll('.v-flip').forEach(b=>b.click())"); await sleep(900); await shot('s3_flips_back');
  await go('#enquire', 90); await shot('s4_cta');
  await ev('window.scrollTo(0,document.documentElement.scrollHeight)'); await shot('s5_footer');
  if (W < 1024) {
    await ev('window.scrollTo(0,0)'); await sleep(300);
    await ev("document.querySelector('.v-menu-btn').click()"); await shot('s6_menu');
  } else {
    await ev('window.scrollTo(0,0)'); await sleep(300);
    await ev("(()=>{const b=document.querySelector('.dd-btn');b.focus()})()"); await shot('s6_dropdown');
  }
  ws.close(); chrome.kill(); process.exit(0);
})();
