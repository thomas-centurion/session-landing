// Saca de dist/ los archivos de procedencia de las fotos (*.json): son para el proyecto, no para el sitio.
import { readdir, rm } from 'node:fs/promises'
import path from 'node:path'

const dir = 'dist/img'
for (const f of await readdir(dir)) if (f.endsWith('.json')) await rm(path.join(dir, f))
