import { useEffect, useState } from 'react'

/**
 * false en el HTML pre-renderizado y en la primera pasada del navegador; true después.
 * Lo que depende de la hora (abierto/cerrado, "Hoy") se muestra recién cuando es true,
 * así el HTML generado al compilar no queda con la hora del momento del build.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}
