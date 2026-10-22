const sharp = require('E:/xampp/htdocs/igreen-next/node_modules/sharp');
const SRC = 'E:/xampp/htdocs/wisadmin2.0/Approved/Images/nift-scene.jpg';
const OUT = 'E:/xampp/htdocs/igreen-next/public/images/home/night-building.webp';
const PREVIEW = process.argv[2];

(async () => {
  const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, N = W * H;
  const px = (i) => [data[i * 3], data[i * 3 + 1], data[i * 3 + 2]];

  // 1) background = near-white region connected to the border (flood fill)
  const isBg = (i) => { const [r, g, b] = px(i); return Math.min(r, g, b) >= 244 && Math.max(r, g, b) - Math.min(r, g, b) <= 10; };
  const bg = new Uint8Array(N);
  const stack = [];
  const push = (x, y) => { const i = y * W + x; if (!bg[i] && isBg(i)) { bg[i] = 1; stack.push(i); } };
  for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
  for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
  while (stack.length) {
    const i = stack.pop(); const x = i % W, y = (i / W) | 0;
    if (x > 0) push(x - 1, y); if (x < W - 1) push(x + 1, y); if (y > 0) push(x, y - 1); if (y < H - 1) push(x, y + 1);
  }
  // grow the background 2px into whitish edge pixels to remove the halo
  let cur = bg;
  for (let pass = 0; pass < 2; pass++) {
    const nxt = new Uint8Array(cur);
    for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
      const i = y * W + x; if (cur[i]) continue;
      if (cur[i - 1] || cur[i + 1] || cur[i - W] || cur[i + W]) { const [r, g, b] = px(i); if (Math.min(r, g, b) > 205) nxt[i] = 1; }
    }
    cur = nxt;
  }
  const alpha = Buffer.alloc(N);
  for (let i = 0; i < N; i++) alpha[i] = cur[i] ? 0 : 255;
  const oneChannel = async (buf, s) => { const r = await sharp(buf, { raw: { width: W, height: H, channels: 1 } }).blur(s).raw().toBuffer({ resolveWithObject: true }); const c = r.info.channels; if (c === 1) return r.data; const o = Buffer.alloc(N); for (let i = 0; i < N; i++) o[i] = r.data[i * c]; return o; };
  const softAlpha = await oneChannel(alpha, 1.1);

  // 2) night grade + window glow masks
  const night = Buffer.alloc(N * 3);
  const glowCyan = Buffer.alloc(N); const glowAmber = Buffer.alloc(N);
  const sx = W / 1400, sy = H / 933;
  const inBox = (x, y, x0, y0, x1, y1) => x >= x0 * sx && x <= x1 * sx && y >= y0 * sy && y <= y1 * sy;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x; const [r, g, b] = px(i);
    const L = 0.3 * r + 0.59 * g + 0.11 * b;
    // base night look: dark, blue-tinted, a little contrast
    let nr = (r * 0.17) + 6, ng = (g * 0.26) + 12, nb = (b * 0.46) + 30;
    // facade glass: strongly blue -> glowing cyan-white
    const blueness = b - r;
    if (inBox(x, y, 610, 140, 1075, 545) && blueness > 18 && L > 55) {
      const k = Math.min(1, (blueness - 14) / 55); glowCyan[i] = Math.round(255 * k);
    }
    // side windows: darker panes inside the two white wings, not green foliage
    const wing = inBox(x, y, 445, 165, 612, 470) || inBox(x, y, 1088, 190, 1340, 640);
    if (wing && L < 150 && L > 40 && g <= r + 6 && g <= b + 6 && b - r > -4) glowAmber[i] = 255;
    data[i * 3] = Math.min(255, nr); data[i * 3 + 1] = Math.min(255, ng); data[i * 3 + 2] = Math.min(255, nb);
    night[i * 3] = data[i * 3]; night[i * 3 + 1] = data[i * 3 + 1]; night[i * 3 + 2] = data[i * 3 + 2];
  }
  const blurMask = oneChannel;
  const cyanSharp = await blurMask(glowCyan, 1.2), cyanBloom = await blurMask(glowCyan, 14), cyanWide = await blurMask(glowCyan, 40);
  const ambSharp = await blurMask(glowAmber, 0.8), ambBloom = await blurMask(glowAmber, 8);
  for (let i = 0; i < N; i++) {
    let r = night[i * 3], g = night[i * 3 + 1], b = night[i * 3 + 2];
    const cs = cyanSharp[i] / 255, cb = cyanBloom[i] / 255, cw = cyanWide[i] / 255, as = ambSharp[i] / 255, ab = ambBloom[i] / 255;
    // lit panes
    r = r * (1 - cs) + (150) * cs; g = g * (1 - cs) + (232) * cs; b = b * (1 - cs) + (255) * cs;
    r = r * (1 - as) + 255 * as; g = g * (1 - as) + 206 * as; b = b * (1 - as) + 120 * as;
    // bloom (additive)
    r += 40 * cb + 22 * cw + 120 * ab; g += 120 * cb + 60 * cw + 78 * ab; b += 150 * cb + 80 * cw + 30 * ab;
    night[i * 3] = Math.min(255, r); night[i * 3 + 1] = Math.min(255, g); night[i * 3 + 2] = Math.min(255, b);
  }
  const subject = await sharp(night, { raw: { width: W, height: H, channels: 3 } })
    .joinChannel(softAlpha, { raw: { width: W, height: H, channels: 1 } }).png().toBuffer();

  // 3) wide night canvas: sky gradient, stars, skyline, ground glow
  const CW = 1500, CH = 700;
  const scale = (CH - 20) / H; const sw = Math.round(W * scale), sh = Math.round(H * scale);
  const left = Math.round((CW - sw) / 2) + 30, top = 10;
  let stars = ''; let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 170; i++) { const x = rnd() * CW, y = rnd() * CH * 0.62, r = 0.5 + rnd() * 1.5, o = 0.25 + rnd() * 0.7; stars += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="#fff" opacity="${o.toFixed(2)}"/>`; }
  let skyline = ''; let x = 0; while (x < CW) { const w = 36 + rnd() * 80, h = 30 + rnd() * 110; skyline += `<rect x="${x.toFixed(0)}" y="${(CH - 120 - h).toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="#0a1226"/>`; for (let k = 0; k < 4; k++) skyline += `<rect x="${(x + 6 + rnd() * (w - 14)).toFixed(0)}" y="${(CH - 120 - h + 8 + rnd() * (h - 20)).toFixed(0)}" width="4" height="5" fill="#ffd27a" opacity="${(0.35 + rnd() * 0.5).toFixed(2)}"/>`; x += w + 4; }
  const bgSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050816"/><stop offset=".55" stop-color="#0b1b3a"/><stop offset="1" stop-color="#14405a"/></linearGradient>
      <radialGradient id="moon" cx=".12" cy=".18" r=".28"><stop offset="0" stop-color="#6fb9ff" stop-opacity=".35"/><stop offset="1" stop-color="#6fb9ff" stop-opacity="0"/></radialGradient>
      <radialGradient id="ground" cx=".5" cy="1" r=".6"><stop offset="0" stop-color="#1dbcd6" stop-opacity=".55"/><stop offset=".5" stop-color="#5cb85c" stop-opacity=".16"/><stop offset="1" stop-color="#5cb85c" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#sky)"/><rect width="100%" height="100%" fill="url(#moon)"/>${stars}${skyline}
    <rect y="${CH - 120}" width="100%" height="120" fill="#07111f"/><rect width="100%" height="100%" fill="url(#ground)"/></svg>`);
  const subjectScaled = await sharp(subject).resize(sw, sh).png().toBuffer();
  const shadow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}"><ellipse cx="${left + sw * 0.52}" cy="${top + sh * 0.9}" rx="${sw * 0.5}" ry="${sh * 0.085}" fill="#000" opacity=".6"/></svg>`);
  const shadowBlur = await sharp(shadow).blur(18).png().toBuffer();
  // halo of light around the glowing facade (spills onto the sky)
  const haloRaw = Buffer.alloc(N * 4);
  for (let i = 0; i < N; i++) { haloRaw[i * 4] = 70; haloRaw[i * 4 + 1] = 200; haloRaw[i * 4 + 2] = 255; haloRaw[i * 4 + 3] = Math.min(255, cyanWide[i] * 0.9); }
  const halo = await sharp(haloRaw, { raw: { width: W, height: H, channels: 4 } }).resize(sw, sh).blur(26).png().toBuffer();
  const final = await sharp(bgSvg).composite([{ input: shadowBlur }, { input: halo, left, top }, { input: subjectScaled, left, top }]).toBuffer();
  await sharp(final).webp({ quality: 80 }).toFile(OUT);
  if (PREVIEW) await sharp(final).resize(1400).jpeg({ quality: 80 }).toFile(PREVIEW);
  // spot positions as fractions of the final canvas (from 1400x933 coordinates)
  const fx = (px1400) => ((left + (px1400 / 1400) * sw) / CW), fy = (py933) => ((top + (py933 / 933) * sh) / CH);
  const spots = { water: [fx(135), fy(450)], energy: [fx(740), fy(520)], tank: [fx(1092), fy(70)], pump: [fx(845), fy(700)] };
  console.log(JSON.stringify(Object.fromEntries(Object.entries(spots).map(([k, v]) => [k, v.map((n) => +(n * 100).toFixed(1))]))), 'canvas', CW, CH, 'bytes', require('fs').statSync(OUT).size);
})();
