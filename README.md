# Session Haus

Landing de Session Haus, cervecería en Alem 599, Pergamino. React + TypeScript con Vite, publicada en Cloudflare Workers.

## Correr en tu compu

```bash
npm install
npm run dev
```

## Cambiar contenido

- **Precios y carta:** `src/data/menu.ts`
- **Promos, horarios, dirección, WhatsApp e Instagram:** `src/data/local.ts`
- **Fotos:** poné las originales en `assets/`, sumalas a la lista de `scripts/images.mjs` y corré `npm run images`.

## Publicar

```bash
npm run deploy
```

Compila el sitio y lo sube a Cloudflare (la primera vez pide `npx wrangler login`).
