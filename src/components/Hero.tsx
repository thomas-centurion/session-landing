import { useEffect, useState, type CSSProperties } from 'react'
import { BookOpen, MessageCircle } from 'lucide-react'
import { barStatus, todayInArgentina, type Status } from '../lib/hours'
import { useMounted } from '../lib/useMounted'
import { dayNames, local, promos, type Promo } from '../data/local'
import { menu, peso } from '../data/menu'
import './Hero.css'

const golden = menu[0].groups[0].items[0]
const bigSession = menu[1].groups[0].items[0]

function useStatus() {
  const mounted = useMounted()
  const [status, setStatus] = useState<Status | null>(null)
  useEffect(() => {
    if (!mounted) return
    setStatus(barStatus())
    const id = setInterval(() => setStatus(barStatus()), 60_000)
    return () => clearInterval(id)
  }, [mounted])
  return status
}

/** Las palabras del cartel, en el orden en que se prenden los tubos. */
const tubes: { word: string; d: number; pink?: boolean; stutter?: boolean; br?: boolean }[] = [
  { word: 'Más', d: 0.1 },
  { word: 'amor', d: 0.3, stutter: true, br: true },
  { word: 'y', d: 0.75 },
  { word: 'más', d: 0.9, br: true },
  { word: 'cerveza', d: 1.15, pink: true, stutter: true },
]

/** Etiqueta de la promo en el tablero: "Hoy" si corre hoy, si no el día en que corre. */
function promoTag(p: Promo, knowsToday: boolean) {
  if (!p.days) return 'Promo'
  if (knowsToday && p.days.includes(todayInArgentina())) return 'Hoy'
  return p.days.map((d) => dayNames[d]).join(' y ')
}

export function Hero() {
  const status = useStatus()

  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 className="neon hero__title wall-spill" aria-label="Más amor y más cerveza">
            {tubes.map((t) => (
              <span key={t.word + t.d} aria-hidden="true">
                <span
                  data-glass={t.word}
                  className={`tube ${t.stutter ? 'tube--stutter' : ''} ${t.pink ? 'neon neon--pink' : ''}`}
                  style={{ '--d': `${t.d}s` } as CSSProperties}
                >
                  {t.word}
                </span>
                {t.br ? <br /> : ' '}
              </span>
            ))}
          </h1>
          <p className="lede hero__lede">
            Birras artesanales, burgers y patio en Alem 599, Pergamino. Para la juntada con amigos o para cortar la semana.
          </p>
          <div className="hero__actions">
            <a className="btn btn--lit" href="#carta">
              <BookOpen aria-hidden="true" />
              Ver la carta
            </a>
            <a className="btn" href={local.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Pedir delivery
            </a>
          </div>
        </div>

        <aside className="lit-board board" aria-labelledby="board-title">
          <h2 id="board-title" className="board__title">
            En la barra
          </h2>
          <p className={`board__status ${status?.open ? 'is-open' : ''}`} aria-live="polite">
            <span className="board__lamp" aria-hidden="true" />
            {!status ? (
              <>Miércoles a domingo desde las 18</>
            ) : status.open ? (
              <>Abierto ahora, hasta {status.closes}</>
            ) : (
              <>
                Cerrado · abrimos {status.when} a las {status.next.open}
              </>
            )}
          </p>
          <ul className="board__rows">
            {promos.map((p) => (
              <li key={p.title} className="lit-row">
                <a href="#promos">{p.title}</a>
                <span className="board__tag">{promoTag(p, status !== null)}</span>
              </li>
            ))}
            <li className="lit-row">
              <a href="#carta">{golden.name}</a>
              <span className="price">{peso(golden.price)}</span>
            </li>
            <li className="lit-row">
              <a href="#carta">{bigSession.name}</a>
              <span className="price">{peso(bigSession.price)}</span>
            </li>
          </ul>
          <a className="board__more" href="#carta">
            Toda la carta con precios
          </a>
        </aside>
      </div>
    </section>
  )
}
