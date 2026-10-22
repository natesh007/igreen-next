// Builds the "Consumer platforms" industry images: the VWI website in a browser window with
// two MubarakRishte app screens layered over it, on the brand gradient.
// usage: node tools/image-gen/consumer.js <dir with 6.png 7.png>
//   Output: public/images/industries/consumer-platforms.webp (900x675) and consumer-screens-wide.webp (1400x640)
//   VWI web screen comes from public/images/home/vwi.webp (see tools/qa/site_shot.js).
// Member name/ID/avatar in the app screens are blurred.
const sharp = require('sharp');
const path = require('path');
const dir = process.argv[2];
const root = path.join(__dirname, '../..');
const P = (f) => path.join(dir, f);

const bgSvg = (w, h) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1dbcd6"/><stop offset="1" stop-color="#5cb85c"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/></svg>`
  );

async function blurRegion(buf, box, sigma = 22) {
  const patch = await sharp(buf).extract(box).blur(sigma).toBuffer();
  return sharp(buf).composite([{ input: patch, left: box.left, top: box.top }]).png().toBuffer();
}

// wrap an image (already sized) with a rounded dark frame + soft shadow; returns {buf, pad}
async function framed(img, r, bz, chromeSvg) {
  const { width: w, height: h } = await sharp(img).metadata();
  const W = w + bz * 2, H = h + bz * 2;
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" fill="#fff"/></svg>`);
  const clipped = await sharp(img).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const frame = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r + bz}" fill="#14111c"/></svg>`);
  const layers = [{ input: clipped, left: bz, top: bz }];
  if (chromeSvg) layers.push({ input: chromeSvg(w), left: bz, top: bz });
  const body = await sharp(frame).composite(layers).png().toBuffer();
  const pad = 50;
  const shadow = await sharp({ create: { width: W + pad * 2, height: H + pad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r + bz}" fill="#000" fill-opacity="0.45"/></svg>`), left: pad, top: pad }])
    .blur(18)
    .png()
    .toBuffer();
  const buf = await sharp(shadow).composite([{ input: body, left: pad, top: pad - 8 }]).png().toBuffer();
  return { buf, pad };
}

const phone = async (buf, w) => framed(await sharp(buf).resize({ width: w }).png().toBuffer(), Math.round(w * 0.11), 7);

// browser window: tab-bar strip with three dots above the page screenshot
async function browser(buf, w) {
  const bar = 30;
  const shot = await sharp(buf).resize({ width: w }).png().toBuffer();
  const { height: sh } = await sharp(shot).metadata();
  const page = await sharp({ create: { width: w, height: sh + bar, channels: 4, background: '#e9e6ee' } })
    .composite([{ input: shot, left: 0, top: bar }])
    .png()
    .toBuffer();
  const chrome = (cw) =>
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${cw}" height="${bar}"><rect width="${cw}" height="${bar}" fill="#e9e6ee"/><circle cx="16" cy="15" r="5" fill="#ff5f57"/><circle cx="34" cy="15" r="5" fill="#febc2e"/><circle cx="52" cy="15" r="5" fill="#28c840"/><rect x="76" y="6" width="${Math.max(80, cw - 100)}" height="18" rx="9" fill="#fff"/></svg>`
    );
  return framed(page, 12, 5, chrome);
}

(async () => {
  const s6 = await blurRegion(await sharp(P('6.png')).png().toBuffer(), { left: 440, top: 95, width: 222, height: 85 });
  const s7 = await blurRegion(await sharp(P('7.png')).png().toBuffer(), { left: 440, top: 95, width: 222, height: 85 });
  const vwi = path.join(root, 'public/images/home/vwi.webp');
  const outDir = path.join(root, 'public/images/industries');
  const place = (p, x, y) => ({ input: p.buf, left: x - p.pad, top: y - p.pad });

  async function make(W, H, name, layout) {
    const full = await sharp(bgSvg(W, H + 800))
      .composite(layout)
      .png()
      .toBuffer();
    await sharp(full).extract({ left: 0, top: 0, width: W, height: H }).webp({ quality: 84 }).toFile(path.join(outDir, name));
  }

  // wide hero 1400x640
  {
    const b = await browser(vwi, 800), a = await phone(s6, 250), c = await phone(s7, 250);
    await make(1400, 640, 'consumer-screens-wide.webp', [place(b, 150, 85), place(a, 800, 40), place(c, 1020, 120)]);
  }
  // card 900x675
  {
    const b = await browser(vwi, 540), a = await phone(s6, 200), c = await phone(s7, 200);
    await make(900, 675, 'consumer-screens.webp', [place(b, 40, 150), place(a, 490, 70), place(c, 650, 150)]);
  }
  console.log('done');
})();
