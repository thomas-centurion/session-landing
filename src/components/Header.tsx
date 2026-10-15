import { Instagram } from 'lucide-react'
import { local } from '../data/local'
import './Header.css'

const links = [
  ['#carta', 'Carta'],
  ['#promos', 'Promos'],
  ['#patio', 'El patio'],
  ['#delivery', 'Delivery'],
  ['#visita', 'Cómo llegar'],
]

export function Header() {
  return (
    <header className="header">
      <div className="wrap header__row">
        <a href="#top" className="header__logo" aria-label="Session Haus, inicio">
          <img src="/img/logo.png" alt="" width="520" height="271" />
        </a>
        <nav aria-label="Secciones">
          <ul className="header__nav">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header__ig" href={local.instagram} target="_blank" rel="noreferrer" aria-label="Instagram de Session Haus">
          <Instagram aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
