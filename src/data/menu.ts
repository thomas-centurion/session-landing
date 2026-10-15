// La carta de Session Haus, transcripta de assets/Menú Session.pdf.
// Para cambiar un precio, editá el número acá; la página se actualiza sola.

export type Item = {
  name: string
  detail?: string
  price: number
  /** Precio de happy hour, cuando lo tiene. */
  happy?: number
  /** Marca "Recomendado de la casa". */
  house?: boolean
}

export type Group = { title?: string; items: Item[] }

export type Category = {
  id: string
  label: string
  /** Foto real que abre la categoría (nombre en public/img, sin ancho ni extensión). */
  photo: string
  photoAlt: string
  note?: string
  groups: Group[]
}

export const menu: Category[] = [
  {
    id: 'birras',
    label: 'Birras',
    photo: 'canilla',
    photoAlt: 'Cerveza saliendo de la canilla a un vaso de Session Haus',
    note: 'El precio happy hour vale en el horario de happy: preguntalo en la barra o en nuestro Instagram.',
    groups: [
      {
        items: [
          { name: 'Golden Ale', detail: 'Rojizo pálido a dorado, chispeante y cristalina. Liviana, sabrosa y muy refrescante. Bajo amargor.', price: 6600, happy: 4600 },
          { name: 'Irish Red Ale', detail: 'Ligeramente maltosa, dulzor suave a caramelo y toffee, final tostado y seco. Bajo amargor.', price: 6600, happy: 5300 },
          { name: 'Honey', detail: 'Un toque de miel de campo; untuosa en boca, con comedida dulzura. Bajo amargor.', price: 6600, happy: 5300 },
          { name: 'Red Honey', detail: 'Honey beer con notas tostadas y dulces a caramelo y bizcocho, de cuerpo medio.', price: 6600, happy: 5300 },
          { name: 'Dry Stout Negra', price: 6600, happy: 5300 },
          { name: 'Porter', detail: 'Malta tostada, a veces chocolate o café, con final seco. Moderado amargor.', price: 6600, happy: 5300 },
          { name: 'Weiss', detail: 'Cerveza de trigo, suave y refrescante.', price: 6600, happy: 5300 },
          { name: 'IPA Argentina', detail: 'Lupulada, con aromas a frutas tropicales y cítricos.', price: 7300, happy: 6000 },
          { name: 'IPA Citra Mosaic', detail: 'Decididamente lupulada y amarga, con notas de mango y maracuyá.', price: 8000, happy: 6200 },
          { name: 'West Coast IPA', detail: 'Lúpulo fresco, aromático, resinoso. Dorada, amargor firme y final seco.', price: 8000, happy: 6200 },
        ],
      },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    photo: 'burger',
    photoAlt: 'Una burger con cheddar y cebolla, sostenida en la mano',
    note: 'Todas vienen con papas fritas, salvo la Cheese Burger y la Secreta.',
    groups: [
      {
        items: [
          { name: 'Big Session', detail: 'Nuestra versión del Big Mac, con 220 g de pura carne.', price: 17600 },
          { name: 'Doble Cuarto con panceta', detail: 'El cuarto de libra recreado con carne argenta y panceta.', price: 17600 },
          { name: 'Americana', detail: '220 g de carne, cheddar, panceta, lechuga, tomate, pepino y huevo frito.', price: 17600 },
          { name: 'Oklahoma Fried Onion Burger', detail: 'Homenaje a George Motz: carne, cebolla smash y cheddar.', price: 17600 },
          { name: 'Burger Chill', detail: '220 g de blend de carnes, chiles, lechuga, tomate y mayonesa picosa.', price: 17600 },
          { name: 'Blue Cheese', detail: '220 g de carne, queso azul, tybo, cebolla caramelizada, rúcula y tomate.', price: 17600 },
          { name: 'Cheese Burger', detail: 'Simple: un medallón increíble, mucho cheddar y pan de papa.', price: 14700 },
          { name: 'Secreta', detail: '¡Una bomba! Triple hamburguesa con panceta y mucho cheddar.', price: 21400 },
        ],
      },
    ],
  },
  {
    id: 'picar',
    label: 'Para picar',
    photo: 'nachos',
    photoAlt: 'Nachos con cheddar y cerdo desmenuzado, con el salón de fondo',
    groups: [
      {
        items: [
          { name: 'Platter Haus', detail: 'Nachos, papas Session, quesos, chicken finger, empanadas de bondiola a la barbacoa y papas picosas.', price: 29900 },
          { name: 'Papas Session', detail: 'Rústicas con salsa de quesos y verdeo.', price: 13700 },
          { name: 'Papas Picosas', detail: 'Mayonesa súper picante y hierbas.', price: 13700 },
          { name: 'Papas Cheddar', detail: 'Rústicas con salsa de cheddar y panceta.', price: 15300 },
          { name: 'Papas Maradona', detail: 'Abundante porción con dos cazuelas: cheddar y panceta, y salsa Session.', price: 16200 },
          { name: 'Chicken Finger', detail: 'Dedos de pollo con salsa BBQ.', price: 14700 },
          { name: 'Bastones de quesos', detail: 'Mix de tybo y muzzarella.', price: 14700 },
          { name: 'Nachos', detail: 'Con cheddar y cerdo desmenuzado.', price: 14700 },
        ],
      },
      {
        title: 'Pizzas',
        items: [
          { name: 'Muzzarella', price: 16200 },
          { name: 'BBQ Pulled Pork', detail: 'Muzza, cebolla confitada, cerdo braseado y salsa barbacoa.', price: 17600 },
          { name: 'Panceta y morrones', price: 17600 },
          { name: 'Cheese Burger', price: 17600 },
        ],
      },
    ],
  },
  {
    id: 'cocina',
    label: 'Sándwiches y más',
    photo: 'ventana',
    photoAlt: 'Dos chicas sonriendo detrás del vidrio que dice artesanal',
    groups: [
      {
        title: 'Sándwich del cheff',
        items: [
          { name: 'Bondiola', detail: 'Bondiola braseada, salsa dijon, tomate y cebolla confitada.', price: 17600 },
          { name: 'Burger Vegetariana', detail: 'Doble medallón, pan de papa, huevo frito, tybo, cebolla morada, tomate y lechuga, con papas.', price: 17600 },
          { name: 'Burger Vegana', detail: 'Doble medallón, pan integral y centeno, tomate, berenjena, rúcula y cebollas, con papas.', price: 17600 },
          { name: 'Burrito IPA', detail: 'De cerdo, con guarnición de nachos.', price: 17600 },
        ],
      },
      {
        title: 'Ensaladas',
        items: [
          { name: 'Completa', detail: 'Lechuga, tomate, zanahoria, remolacha, huevo y queso.', price: 12500 },
          { name: 'Pollo completa', detail: 'Hojas verdes, tomates cherry, pollo y zanahoria.', price: 14700 },
        ],
      },
      {
        title: 'Postres',
        items: [
          { name: 'Brownie de chocolate artesanal', detail: 'Con helado de americana y salsa de frutos rojos.', price: 6500 },
          { name: 'Helado de americana', price: 4500 },
        ],
      },
    ],
  },
  {
    id: 'tragos',
    label: 'Tragos y vinos',
    photo: 'mesa',
    photoAlt: 'Amigos alrededor de una mesa con tragos y cervezas',
    groups: [
      {
        title: 'Tragos',
        items: [
          { name: 'Gran golpe de Vermut 1973', price: 6400, house: true },
          { name: 'Vermut 1973', detail: 'Con soda o con pomelo.', price: 7600, house: true },
          { name: 'Gin tonic 1973', detail: 'Con frutilla, pomelo, naranja, lima, pepino, limón, albahaca o maracuyá.', price: 7600, house: true },
          { name: 'Gin tonic Beefeater, Bombay, Heredero, Bosque, Tanqueray o Aconcagua', price: 10000 },
          { name: 'Caipi Jager', detail: 'Lima, azúcar, jägermeister y un toque de pomelo.', price: 10900 },
          { name: 'Aperol Spritz', detail: 'Aperol, champagne y un toque de soda.', price: 10000 },
          { name: 'Caipiroska', detail: 'Con frutos rojos, lima o maracuyá.', price: 9600 },
          { name: 'Mojito', detail: 'Havana Club, limón, menta fresca y soda.', price: 9600 },
          { name: 'Cuba libre', detail: 'Pinta de medio litro: ron Havana y coca-cola.', price: 8800 },
          { name: 'Cynar julep', detail: 'El mojito argentino: cynar, pomelo rosado, azúcar y menta.', price: 8800 },
          { name: 'Fernet', detail: 'Pinta de medio litro con coca-cola.', price: 7600 },
          { name: 'Campari', detail: 'Con tónica o con jugo de naranja.', price: 7600 },
          { name: 'Gancia', detail: 'Pinta de medio litro con sprite.', price: 7600 },
          { name: 'Smirnoff', detail: 'Con el jugo o la gaseosa que prefieras.', price: 7600 },
        ],
      },
      {
        title: 'Vinos',
        items: [
          { name: 'Partridge Malbec', detail: 'Frutos rojos, ciruelas y moras.', price: 21800 },
          { name: 'Cordero con Piel de Lobo', detail: 'Blend de malbec, frutado y de taninos equilibrados.', price: 21800 },
          { name: 'Trumpeter Malbec', detail: 'Sabroso y franco, buen balance entre acidez, dulzor y tanino.', price: 29300 },
        ],
      },
      {
        title: 'Sin alcohol',
        items: [
          { name: 'Coca-Cola 500 cc', detail: 'Light, Zero o Clásica.', price: 4400 },
          { name: 'Fanta, Sprite o Aquarius 500 cc', price: 4400 },
          { name: 'Agua 500 cc', detail: 'Con o sin gas.', price: 4400 },
          { name: 'Limonada', detail: 'Limón, menta y jengibre.', price: 5800 },
          { name: 'Speed', price: 5800 },
        ],
      },
    ],
  },
]

export const peso = (n: number) => '$' + n.toLocaleString('es-AR')
