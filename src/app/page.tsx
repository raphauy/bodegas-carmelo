import WineryCard from './winery-card'

const bodegas = [
  {
    name: 'El Legado Bodega Boutique',
    description: 'Lorem ipsun para El Legado',
    image: '/ellegado.jpg',
    url: 'https://www.legado.com.uy/',
  },
  {
    name: 'Almacén de la Capilla Bodega Cordano',
    description: 'Lorem ipsun para Almacén de la Capilla',
    image: '/almacendelacapilla.jpg',
    url: 'https://www.almacendelacapilla.com.uy/',
  },
  {
    name: 'Bodega Familia Irurtia',
    description: 'Lorem ipsun para Familia Irurtia',
    image: '/familiairurtia.jpg',
    url: 'https://www.familiairurtia.com.uy/',
  },
  {
    name: 'Bodega Zubizarreta',
    description: 'Lorem ipsun para Zubizarreta',
    image: '/zubizarreta.jpg',
    url: 'https://www.zubizarreta.com.uy/',
  },
  {
    name: 'Bodega y Posada Campotinto',
    description: 'Lorem ipsun para Campotinto',
    image: '/campotinto.jpg',
    url: 'https://www.campotinto.com.uy/',
  },
  {
    name: 'Narbona Wine Lodge',
    description: 'Lorem ipsun para Narbona',
    image: '/narbona.jpg',
    url: 'https://www.narbona.com.uy/',
  },
  {
    name: 'Pueblo Tannat',
    description: 'Lorem ipsun para Pueblo Tannat',
    image: '/pueblotannat.jpg',
    url: 'https://www.pueblotannat.com.uy/',
  },
]

export default function Home() {

  const bodegasRandomOrder = bodegas.sort(() => Math.random() - 0.5)

  return (
    <main className="min-h-screen p-3 flex items-center justify-center">
      <h1 className='hidden'>Bodegas de Carmelo</h1>
      <div className='flex gap-3 flex-col items-center justify-center lg:hidden'>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
          <WineryCard winery={bodegasRandomOrder[0]} />
          <WineryCard winery={bodegasRandomOrder[1]} />
          <WineryCard winery={bodegasRandomOrder[2]} />
          <WineryCard winery={bodegasRandomOrder[3]} />
          <WineryCard winery={bodegasRandomOrder[4]} />
          <WineryCard winery={bodegasRandomOrder[5]} />
        </div>
        <WineryCard winery={bodegasRandomOrder[6]} />     
      </div>

      <div className='lg:flex gap-3 flex-col items-center justify-center hidden 2xl:hidden'>
        <div className="grid grid-cols-4 gap-3 text-left">
          <WineryCard winery={bodegasRandomOrder[0]} />
          <WineryCard winery={bodegasRandomOrder[1]} />
          <WineryCard winery={bodegasRandomOrder[2]} />
          <WineryCard winery={bodegasRandomOrder[3]} />
        </div>
        <div className="grid grid-cols-3 gap-2 text-left">
          <WineryCard winery={bodegasRandomOrder[4]} />
          <WineryCard winery={bodegasRandomOrder[5]} />
          <WineryCard winery={bodegasRandomOrder[6]} />     
        </div>
      </div>

      <div className='2xl:flex gap-3 flex-col items-center justify-center hidden'>
        <div className="grid grid-cols-7 gap-3 text-left">
          <WineryCard winery={bodegasRandomOrder[0]} />
          <WineryCard winery={bodegasRandomOrder[1]} />
          <WineryCard winery={bodegasRandomOrder[2]} />
          <WineryCard winery={bodegasRandomOrder[3]} />
          <WineryCard winery={bodegasRandomOrder[4]} />
          <WineryCard winery={bodegasRandomOrder[5]} />
          <WineryCard winery={bodegasRandomOrder[6]} />     
        </div>
      </div>

    </main>
  )
}
