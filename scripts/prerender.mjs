// Mete el HTML pre-renderizado de la página dentro de dist/index.html.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const { render } = await import(pathToFileURL(path.resolve('dist-server/entry-server.js')).href)
const file = 'dist/index.html'
const html = await readFile(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Falta <!--app-html--> en index.html')
await writeFile(file, html.replace('<!--app-html-->', render()))
await rm('dist-server', { recursive: true, force: true })
console.log('prerender ok')
