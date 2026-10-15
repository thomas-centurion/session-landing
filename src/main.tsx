import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/quicksand/latin-500.css'
import '@fontsource/quicksand/latin-600.css'
import '@fontsource/baloo-2/latin-700.css'
import '@fontsource/baloo-2/latin-800.css'
import '@fontsource/archivo-narrow/latin-500.css'
import '@fontsource/archivo-narrow/latin-600.css'
import '@fontsource/archivo-narrow/latin-700.css'
import './styles/base.css'
import './styles/neon.css'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En producción la página llega pre-renderizada y React la retoma; en desarrollo se dibuja de cero.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
