// Recorta el sticker del logo: borra el fondo desenfocado de logo.jfif
// rellenando desde los bordes hasta el filo blanco del sticker.
import sharp from 'sharp'

const { data, info } = await sharp('assets/logo.jfif').ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: w, height: h } = info
const px = (x, y) => (y * w + x) * 4
const isWhite = (i) => data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200

const bg = new Uint8Array(w * h)
const stack = []
for (let x = 0; x < w; x++) stack.push([x, 0], [x, h - 1])
for (let y = 0; y < h; y++) stack.push([0, y], [w - 1, y])
while (stack.length) {
  const [x, y] = stack.pop()
  if (x < 0 || y < 0 || x >= w || y >= h) continue
  const k = y * w + x
  if (bg[k] || isWhite(px(x, y))) continue
  bg[k] = 1
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

// Fondo transparente; el borde blanco se suaviza según cuán blanco es.
let minX = w, minY = h, maxX = 0, maxY = 0
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
  const k = y * w + x
  const i = k * 4
  if (bg[k]) { data[i + 3] = 0; continue }
  const touchesBg = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => bg[(y + dy) * w + x + dx])
  if (touchesBg) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i + 3] = Math.max(0, Math.min(255, (lum - 120) * 2))
    data[i] = data[i + 1] = data[i + 2] = 255
  }
  minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y)
}

await sharp(data, { raw: { width: w, height: h, channels: 4 } })
  .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
  .resize({ width: 520 })
  .png({ compressionLevel: 9 })
  .toFile('public/img/logo.png')
console.log('logo', maxX - minX + 1, 'x', maxY - minY + 1)
