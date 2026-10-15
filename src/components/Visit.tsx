import { useMemo } from 'react'
import { Instagram, MapPin } from 'lucide-react'
import { dayNames, hours, local } from '../data/local'
import './Visit.css'

const week = [3, 4, 5, 6, 0, 1, 2]

export function Visit() {
  const today = useMemo(() => {
    const d = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Argentina/Buenos_Aires', weekday: 'short' }).format(new Date())
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(d)
  }, [])

  return (
    <section className="section visit" id="visita" aria-labelledby="visit-title">
      <div className="wrap visit__grid">
        <div>
          <h2 id="visit-title" className="neon neon--sign">
            Alem 599
          </h2>
          <p className="visit__city">
            {local.city} · CP {local.zip}
          </p>

          <dl className="visit__hours">
            {week.map((d) => {
              const shift = hours.find((h) => h.day === d)
              return (
                <div key={d} className={d === today ? 'is-today' : undefined}>
                  <dt>
                    {dayNames[d]}
                    {d === today && <span className="visit__today">Hoy</span>}
                  </dt>
                  <dd>{shift ? shift.label : 'Cerrado'}</dd>
                </div>
              )
            })}
          </dl>

          <div className="visit__actions">
            <a className="btn btn--lit" href={local.mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Cómo llegar
            </a>
            <a className="btn" href={local.instagram} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              {local.instagramHandle}
            </a>
          </div>
        </div>

        <div className="visit__map lit-board">
          <iframe
            title="Mapa: Session Haus en Alem 599, Pergamino"
            src={local.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
