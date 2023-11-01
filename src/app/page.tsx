import { revalidatePath } from 'next/cache'
import WineryCard from './winery-card'
import { redirect } from 'next/navigation'
import Refresh from './winery-list'
import { getRandomNumber } from './actions'
import WineryList from './winery-list'

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
    name: 'Finca Buena Vista',
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
    url: 'https://www.instagram.com/pueblo_tannat',
  },
]

export default async function Home() {


  console.log("Rendering...")

  return (
    <main className="min-h-screen p-3 flex items-center justify-center">
      <h1 className='hidden'>Bodegas de Carmelo</h1>
      
      <WineryList initialData={bodegas} />

    </main>
  )
}
