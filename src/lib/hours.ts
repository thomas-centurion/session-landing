import { hours, dayNames, type Shift } from '../data/local'

/** Día y hora actuales en Argentina, sin importar dónde esté quien mira. */
function nowInArgentina(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0'
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  return { day, hour: Number(get('hour')) + Number(get('minute')) / 60 }
}

/** Día de hoy en Argentina (0 domingo … 6 sábado). */
export const todayInArgentina = () => nowInArgentina().day

export type Status =
  | { open: true; shift: Shift; closes: string }
  | { open: false; next: Shift; when: string }

const closeLabel = (s: Shift) => (s.close === 24 ? 'las 00' : 'las 4')

export function barStatus(date = new Date()): Status {
  const { day, hour } = nowInArgentina(date)

  // Turno de hoy, o el de anoche que sigue abierto pasada la medianoche.
  const today = hours.find((s) => s.day === day && hour >= s.open && hour < s.close)
  if (today) return { open: true, shift: today, closes: closeLabel(today) }
  const yesterday = hours.find((s) => s.day === (day + 6) % 7 && hour + 24 < s.close)
  if (yesterday) return { open: true, shift: yesterday, closes: closeLabel(yesterday) }

  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7
    const s = hours.find((h) => h.day === d)
    if (s && (i > 0 || hour < s.open)) {
      const when = i === 0 ? 'hoy' : i === 1 ? 'mañana' : `el ${dayNames[d].toLowerCase()}`
      return { open: false, next: s, when }
    }
  }
  return { open: false, next: hours[0], when: 'pronto' }
}
