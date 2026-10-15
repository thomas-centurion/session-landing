import { Photo } from './Photo'
import './Patio.css'

const wall = [
  { name: 'patio-saludo', alt: 'Un chico saluda con una birra en la mano bajo las guirnaldas del patio' },
  { name: 'vereda', alt: 'Dos amigas miran el celular sentadas en la vereda con un trago' },
  { name: 'ventana', alt: 'Chicas sonriendo detrás del vidrio con la palabra artesanal' },
  { name: 'mesa', alt: 'Una mesa de amigos riéndose con cervezas y comida' },
]

export function Patio() {
  return (
    <section className="section patio" id="patio" aria-labelledby="patio-title">
      <div className="wrap patio__grid">
        <div className="patio__intro">
          <h2 id="patio-title" className="neon neon--sign">
            Bienvenido al patio
          </h2>
          <p className="lede">
            Guirnaldas, birra tirada y mesas que se juntan. Vení con tu grupo o con esa persona que querés conocer mejor: acá
            las dos noches salen bien.
          </p>
          <Photo
            name="neon-patio"
            alt='Cartel de neón "Bienvenido al patio de La Tía" sobre la gente en el patio'
            className="patio__sign"
            sizes="(min-width: 900px) 38vw, 100vw"
          />
        </div>

        <ul className="patio__wall">
          {wall.map((p) => (
            <li key={p.name}>
              <Photo name={p.name} alt={p.alt} sizes="(min-width: 900px) 26vw, 50vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
