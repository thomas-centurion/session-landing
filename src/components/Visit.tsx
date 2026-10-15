import { useState } from 'react'
import { todayInArgentina } from '../lib/hours'
import { useMounted } from '../lib/useMounted'
import { Instagram, Map as MapIcon, MapPin } from 'lucide-react'
import { dayNames, hours, local } from '../data/local'
import './Visit.css'

const week = [3, 4, 5, 6, 0, 1, 2]

export function Visit() {
  // El día de hoy se marca recién en el navegador: el HTML pre-renderizado no sabe qué día es.
  const today = useMounted() ? todayInArgentina() : -1
  // El mapa de Google carga cookies de terceros: se carga recién cuando alguien lo pide.
  const [showMap, setShowMap] = useState(false)

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
          {showMap ? (
            <iframe
              title="Mapa: Session Haus en Alem 599, Pergamino"
              src={local.mapsEmbed}
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="visit__map-off">
              <p>Alem 599, Pergamino</p>
              <button type="button" className="btn" onClick={() => setShowMap(true)}>
                <MapIcon aria-hidden="true" />
                Ver mapa
              </button>
              <small>Carga el mapa de Google.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
