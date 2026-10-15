import { useRef, useState, type KeyboardEvent } from 'react'
import { menu, peso } from '../data/menu'
import { Photo } from './Photo'
import './Carta.css'

export function Carta() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const cat = menu[active]

  function onKey(e: KeyboardEvent) {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (active + step + menu.length) % menu.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="section carta" id="carta" aria-labelledby="carta-title">
      <div className="wrap">
        <h2 id="carta-title" className="neon neon--sign">
          La carta
        </h2>

        <div className="carta__tabs" role="tablist" aria-label="Categorías de la carta" onKeyDown={onKey}>
          {menu.map((c, i) => (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el
              }}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${c.id}`}
              tabIndex={i === active ? 0 : -1}
              className="carta__tab"
              onClick={() => setActive(i)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="carta__panel" role="tabpanel" id={`panel-${cat.id}`} aria-labelledby={`tab-${cat.id}`} key={cat.id}>
          <figure className="carta__figure">
            <Photo name={cat.photo} alt={cat.photoAlt} className="carta__photo" sizes="(min-width: 900px) 34vw, 100vw" />
            <figcaption className="neon neon--pink carta__label" aria-hidden="true">
              {cat.label}
            </figcaption>
          </figure>

          <div className="carta__lists lit-board">
            {cat.note && <p className="carta__note">{cat.note}</p>}
            {cat.groups.map((g, gi) => (
              <div className="carta__group" key={g.title ?? gi}>
                {g.title && <h3 className="carta__group-title">{g.title}</h3>}
                <ul>
                  {g.items.map((it) => (
                    <li className="item lit-row" key={it.name}>
                      <div className="item__line">
                        <span className="item__name">
                          {it.name}
                          {it.house && <span className="item__house">De la casa</span>}
                        </span>
                        <span className="item__dots" aria-hidden="true" />
                        <span className="price item__price">{peso(it.price)}</span>
                      </div>
                      {(it.detail || it.happy) && (
                        <p className="item__detail">
                          {it.detail}
                          {it.happy && (
                            <span className="item__happy">
                              Happy hour <span className="price">{peso(it.happy)}</span>
                            </span>
                          )}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="carta__foot">Tenemos menú sin TACC: pedilo en la barra.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
