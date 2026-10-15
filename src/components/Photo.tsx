type Props = {
  name: string
  alt: string
  className?: string
  sizes?: string
  eager?: boolean
}

/** Foto de public/img en dos anchos (640 y 1280). */
export function Photo({ name, alt, className, sizes = '(min-width: 900px) 45vw, 100vw', eager }: Props) {
  return (
    <img
      className={className}
      src={`/img/${name}-1280.webp`}
      srcSet={`/img/${name}-640.webp 640w, /img/${name}-1280.webp 1280w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
