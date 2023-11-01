import { revalidatePath } from 'next/cache'
import WineryCard from './winery-card'
import { redirect } from 'next/navigation'
import Refresh from './refresh'

export type Winery = {
  name: string
  description: string
  image: string
  url: string
}

const bodegas: Winery[] = [
  {
    name: 'El Legado Bodega Boutique',
    description: 'Lorem ipsun para El Legado',
    image: '/ellegado.jpg',
    url: 'https://www.instagram.com/el_legado_bodega_',
  },
  {
    name: 'Almacén de la Capilla Bodega Cordano',
    description: 'Lorem ipsun para Almacén de la Capilla',
    image: '/almacendelacapilla.jpg',
    url: 'https://www.instagram.com/almacen_de_la_capilla',
  },
  {
    name: 'Finca Buenavista',
    description: 'Lorem ipsun para Finca Buenavista',
    image: '/fincabuenavista.jpg',
    url: 'https://www.instagram.com/buenavistacarmelo',
  },
  {
    name: 'Bodega Zubizarreta',
    description: 'Lorem ipsun para Zubizarreta',
    image: '/zubizarreta.jpg',
    url: 'https://bodegazubizarreta.com.uy',
  },
  {
    name: 'Bodega y Posada Campotinto',
    description: 'Lorem ipsun para Campotinto',
    image: '/campotinto.jpg',
    url: 'https://www.campotinto.com',
  },
  {
    name: 'Narbona Wine Lodge',
    description: 'Lorem ipsun para Narbona',
    image: '/narbona.jpg',
    url: 'https://www.narbona.com.uy',
  },
  {
    name: 'Pueblo Tannat',
    description: 'Lorem ipsun para Pueblo Tannat',
    image: '/pueblotannat.jpg',
    url: 'https://www.pueblotannat.com.uy',
  },
]

export default function Home() {

  let bodegasRandomOrder = bodegas.sort(() => Math.random() - 0.5)

  console.log("Rendering...");

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

      <Refresh />

    </main>
  )
}
