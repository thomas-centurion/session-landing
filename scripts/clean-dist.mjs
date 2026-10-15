// Saca de dist/ lo que no va al sitio: los archivos de procedencia de las fotos (*.json)
// y capturas de pantalla sueltas que hayan quedado en public/.
import { readdir, rm } from 'node:fs/promises'
import path from 'node:path'

for (const dir of ['dist', 'dist/img'])
  for (const f of await readdir(dir))
    if (f.endsWith('.json') || f === 'preview.png') await rm(path.join(dir, f))
