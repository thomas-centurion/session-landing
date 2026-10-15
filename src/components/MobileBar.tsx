import { useEffect, useState } from 'react'
import { BookOpen, MessageCircle } from 'lucide-react'
import { local } from '../data/local'
import './MobileBar.css'

/** Barra fija en el celular: aparece cuando los botones de la primera pantalla ya no se ven. */
export function MobileBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const target = document.querySelector('.hero__actions')
    if (!target) return
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0))
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return (
    <nav className={`mobilebar ${show ? 'is-shown' : ''}`} aria-label="Accesos rápidos" aria-hidden={!show}>
      <a href="#carta" tabIndex={show ? 0 : -1}>
        <BookOpen aria-hidden="true" />
        Carta
      </a>
      <a className="is-lit" href={local.whatsapp} target="_blank" rel="noreferrer" tabIndex={show ? 0 : -1}>
        <MessageCircle aria-hidden="true" />
        Pedir por WhatsApp
      </a>
    </nav>
  )
}
