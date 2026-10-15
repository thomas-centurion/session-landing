import type { CSSProperties } from 'react'
import { Instagram } from 'lucide-react'
import { local, promos } from '../data/local'
import { Photo } from './Photo'
import './Promos.css'

export function Promos() {
  return (
    <section className="section promos" id="promos" aria-labelledby="promos-title">
      <div className="wrap">
        <h2 id="promos-title" className="neon neon--sign neon--pink">
          Promos de la casa
        </h2>

        <ul className="promos__list" style={{ '--cols': promos.length + 1 } as CSSProperties}>
          {promos.map((p, i) => (
            <li key={p.title} className={`promo promo--${i % 2 ? 'b' : 'a'}`}>
              {p.photo && <Photo name={p.photo} alt={p.photoAlt ?? ''} className="promo__photo" sizes="(min-width: 900px) 30vw, 100vw" />}
              <div className="promo__text">
                <h3 className="promo__title">{p.title}</h3>
                <p>{p.detail}</p>
              </div>
            </li>
          ))}
          <li className="lit-board promos__today">
            <p className="promos__today-title">¿Qué sale hoy?</p>
            <p>
              Las promos cambian seguido y no todas corren todos los días. Fijate las del día en nuestro Instagram.
            </p>
            <a className="btn btn--lit" href={local.instagram} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              {local.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
