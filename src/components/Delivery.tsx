import { MessageCircle } from 'lucide-react'
import { local } from '../data/local'
import { Photo } from './Photo'
import './Delivery.css'

export function Delivery() {
  return (
    <section className="section delivery" id="delivery" aria-labelledby="delivery-title">
      <div className="wrap delivery__grid">
        <div className="delivery__copy wall-spill wall-spill--pink">
          <h2 id="delivery-title" className="neon neon--pink delivery__sign">
            ¿Hoy es
            <br />
            en casa?
          </h2>
          <p className="lede">
            Hacemos delivery y take away. Escribinos por WhatsApp, decinos qué querés y si lo pasás a buscar o te lo
            llevamos.
          </p>
          <a className="btn btn--lit" href={local.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Pedir por WhatsApp
          </a>
        </div>
        <Photo
          name="wrap-neon"
          alt='Wrap con cheddar y nachos frente al neón "Más amor y más cerveza"'
          className="delivery__photo"
          sizes="(min-width: 900px) 38vw, 100vw"
        />
      </div>
    </section>
  )
}
