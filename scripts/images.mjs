// Genera las versiones web de las fotos de assets/ en public/img/.
// Correr con `npm run images` cada vez que cambie una foto.
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'assets'
const OUT = 'public/img'

const photos = [
  ['1.jpg', 'patio-saludo'],
  ['2.jpg', 'ventana'],
  ['3.jpg', 'vereda'],
  ['4.jpg', 'neon-patio'],
  ['5.jpg', 'mesa'],
  ['6.jpg', 'interior'],
  ['7.jpg', 'canilla'],
  ['8.jpg', 'wrap-neon'],
  ['9.jpg', 'nachos'],
  ['promocion1_3.jpg', 'promo-2x1'],
]
const widths = [640, 1280]

await mkdir(OUT, { recursive: true })

for (const [file, name] of photos) {
  for (const w of widths) {
    await sharp(path.join(SRC, file))
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 74 })
      .toFile(path.join(OUT, `${name}-${w}.webp`))
  }
  console.log('ok', name)
}

// Burger sin texto: la parte de abajo de la placa promocion1_1 (el texto está arriba).
for (const w of widths) {
  await sharp(path.join(SRC, 'promocion1_1.jpg'))
    .extract({ left: 0, top: 470, width: 1080, height: 880 })
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(path.join(OUT, `burger-${w}.webp`))
}
console.log('ok burger')

// El sticker recortado del logo sale de scripts/logo.mjs.
await sharp(path.join(SRC, 'logo.jfif'))
  .resize({ width: 512, height: 512 })
  .png()
  .toFile('public/favicon.png')
console.log('ok logo')
