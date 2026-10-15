import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Promos } from './components/Promos'
import { Carta } from './components/Carta'
import { Patio } from './components/Patio'
import { Delivery } from './components/Delivery'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { MobileBar } from './components/MobileBar'

export default function App() {
  return (
    <>
      <a className="skip" href="#carta">Saltar a la carta</a>
      <Header />
      <main>
        <Hero />
        <Promos />
        <Carta />
        <Patio />
        <Delivery />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
