// Se usa solo al compilar: genera el HTML de la página para que llegue completo sin esperar al JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
