// Datos del local. Las promos cambian seguido: editá la lista `promos`.
// No pongas "hoy" en el título: la página no sabe qué días corre cada una.

export const local = {
  address: 'Alem 599',
  city: 'Pergamino, Buenos Aires',
  zip: '2700',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alem+599+Pergamino+Buenos+Aires',
  mapsEmbed: 'https://www.google.com/maps?q=Alem+599,+Pergamino,+Buenos+Aires&output=embed',
  instagram: 'https://www.instagram.com/sessionhaus/',
  instagramHandle: '@sessionhaus',
  whatsapp:
    'https://api.whatsapp.com/send?phone=542477607686&text=' +
    encodeURIComponent('¡Hola Session! Quiero hacer un pedido.'),
}

/** Día de la semana: 0 domingo … 6 sábado. Cierre en horas desde la medianoche del día de apertura (24 = 00 hs, 28 = 4 hs). */
export type Shift = { day: number; open: number; close: number; label: string }

export const hours: Shift[] = [
  { day: 3, open: 18, close: 24, label: '18 a 00 hs' },
  { day: 4, open: 18, close: 24, label: '18 a 00 hs' },
  { day: 5, open: 18, close: 28, label: '18 a 4 hs' },
  { day: 6, open: 18, close: 28, label: '18 a 4 hs' },
  { day: 0, open: 18, close: 28, label: '18 a 4 hs' },
]

export const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export type Promo = {
  title: string
  detail: string
  /** Placa de la promo tal como se publicó en Instagram (ya trae su texto). */
  photo?: string
  photoAlt?: string
  /** Días en que corre (0 domingo … 6 sábado). Sin días: corre siempre que esté abierto. */
  days?: number[]
}

export const promos: Promo[] = [
  {
    title: 'Jueves de 2x1 en burgers',
    detail: 'Todas las burgers, en el local, por delivery y take away.',
    days: [4],
    photo: 'promo-2x1',
    photoAlt: 'Placa de la promo: 2x1 en todas las burgers, local, delivery y take away',
  },
]
