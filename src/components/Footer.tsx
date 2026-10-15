import { local } from '../data/local'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <img className="footer__logo" src="/img/logo.png" alt="Session Haus" width="520" height="271" loading="lazy" />
        <p className="neon footer__line">Más amor y más cerveza</p>
        <div className="footer__meta">
          <p>
            {local.address}, {local.city}
          </p>
          <p>
            <a href={local.instagram} target="_blank" rel="noreferrer">
              {local.instagramHandle}
            </a>
          </p>
          <p className="footer__legal">Beber con moderación. Prohibida la venta de alcohol a menores de 18 años.</p>
        </div>
      </div>
    </footer>
  )
}
