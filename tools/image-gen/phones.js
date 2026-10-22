// Builds the mobile-apps page images from real app screenshots.
// usage: node tools/image-gen/phones.js <dir with 5.png 6.png 7.png 8.jpg>
//   5.png  hand holding phone (WIS tank app)      6.png / 7.png  MubarakRishte app (home, matches)
//   8.jpg  WIS "Motor 1" screen (tall)
// Output: public/images/home/apps-hero.webp (1400x788) and apps-band.webp (1400x640).
// Personal data (member name, ID, avatar) in the MubarakRishte screens is blurred before use.
const sharp = require('sharp');
const path = require('path');
const dir = process.argv[2];
const out = path.join(__dirname, '../../public/images/home');
const P = (f) => path.join(dir, f);

const bgSvg = (w, h) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1dbcd6"/><stop offset="1" stop-color="#5cb85c"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/></svg>`
  );

// blur a rectangle of an image buffer
async function blurRegion(buf, box, sigma = 22) {
  const patch = await sharp(buf).extract(box).blur(sigma).toBuffer();
  return sharp(buf).composite([{ input: patch, left: box.left, top: box.top }]).png().toBuffer();
}

// rounded phone: image scaled to width w, clipped to rounded corners, dark bezel, soft shadow
async function phone(buf, w) {
  const img = await sharp(buf).resize({ width: w }).png().toBuffer();
  const { height: h } = await sharp(img).metadata();
  const r = Math.round(w * 0.11), bz = 7;
  const W = w + bz * 2, H = h + bz * 2;
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" fill="#fff"/></svg>`);
  const clipped = await sharp(img).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const frame = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r + bz}" fill="#14111c"/></svg>`
  );
  const body = await sharp(frame).composite([{ input: clipped, left: bz, top: bz }]).png().toBuffer();
  // shadow
  const pad = 50;
  const shadow = await sharp({ create: { width: W + pad * 2, height: H + pad * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" rx="${r + bz}" fill="#000" fill-opacity="0.45"/></svg>`), left: pad, top: pad }])
    .blur(18)
    .png()
    .toBuffer();
  const full = await sharp(shadow).composite([{ input: body, left: pad, top: pad - 8 }]).png().toBuffer();
  return { buf: full, pad, w: W, h: H };
}

(async () => {
  // MubarakRishte screens: blur member name/ID and avatar (top right)
  let s6 = await blurRegion(await sharp(P('6.png')).png().toBuffer(), { left: 440, top: 95, width: 222, height: 85 });
  let s7 = await blurRegion(await sharp(P('7.png')).png().toBuffer(), { left: 440, top: 95, width: 222, height: 85 });
  // Motor screen: top part only so the phone has a normal shape
  const m8 = await sharp(P('8.jpg')).extract({ left: 0, top: 0, width: 393, height: 860 }).png().toBuffer();

  // ---- hero: three phones on the brand gradient, tops visible, two bleed off the bottom
  const W = 1400, H = 788;
  const pw = 290;
  const A = await phone(s7, pw), B = await phone(s6, pw), C = await phone(m8, pw);
  const place = (p, x, y) => ({ input: p.buf, left: x - p.pad, top: y - p.pad });
  // compose on a taller canvas (sharp cannot composite past the edge), then crop to the final size
  // (sharp runs extract before composite, so composite to a buffer first)
  const heroFull = await sharp(bgSvg(W, H + 800))
    .composite([place(A, 215, 150), place(C, 895, 150), place(B, 555, 50)])
    .png()
    .toBuffer();
  await sharp(heroFull)
    .extract({ left: 0, top: 0, width: W, height: H })
    .webp({ quality: 84 })
    .toFile(path.join(out, 'apps-hero.webp'));

  // ---- band: hand-held phone photo on the left, two screens on gradient on the right
  const BW = 1400, BH = 640;
  const hand = await sharp(P('5.png')).resize({ height: BH }).png().toBuffer();
  const hm = await sharp(hand).metadata();
  const D = await phone(m8, 250), E = await phone(s7, 250);
  const px = hm.width;
  const bandFull = await sharp(bgSvg(BW, BH + 800))
    .composite([
      { input: hand, left: 0, top: 0 },
      place(D, px + 90, 60),
      place(E, px + 90 + 250 + 40, 110),
    ])
    .png()
    .toBuffer();
  await sharp(bandFull)
    .extract({ left: 0, top: 0, width: BW, height: BH })
    .webp({ quality: 84 })
    .toFile(path.join(out, 'apps-band.webp'));
  console.log('done, hand width', hm.width);
})();
