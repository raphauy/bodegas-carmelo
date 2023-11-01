"use client"

import { useRouter } from "next/navigation"
import WineryCard from "./winery-card"
import { useEffect, useState } from "react"
import { Winery } from "./page"

type Props = {
    initialData: Winery[]
}

export default function WineryList({ initialData }: Props) {

    const bodegas = initialData.sort(() => 0.5 - Math.random())

    const [counter, setCounter] = useState(0)

    console.log("Client rendering...")    

    setTimeout(() => {        
        setCounter(counter + 1)      
    }, 10000)

    useEffect(() => {
        
    }, [counter])
    

    return (
        <>
            <div className='flex gap-3 flex-col items-center justify-center lg:hidden'>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <WineryCard winery={bodegas[0]} />
                <WineryCard winery={bodegas[1]} />
                <WineryCard winery={bodegas[2]} />
                <WineryCard winery={bodegas[3]} />
                <WineryCard winery={bodegas[4]} />
                <WineryCard winery={bodegas[5]} />
                </div>
                <WineryCard winery={bodegas[6]} />     
            </div>

            <div className='lg:flex gap-3 flex-col items-center justify-center hidden 2xl:hidden'>
                <div className="grid grid-cols-4 gap-3 text-left">
                <WineryCard winery={bodegas[0]} />
                <WineryCard winery={bodegas[1]} />
                <WineryCard winery={bodegas[2]} />
                <WineryCard winery={bodegas[3]} />
                </div>
                <div className="grid grid-cols-3 gap-2 text-left">
                <WineryCard winery={bodegas[4]} />
                <WineryCard winery={bodegas[5]} />
                <WineryCard winery={bodegas[6]} />     
                </div>
            </div>

            <div className='2xl:flex gap-3 flex-col items-center justify-center hidden'>
                <div className="grid grid-cols-7 gap-3 text-left">
                <WineryCard winery={bodegas[0]} />
                <WineryCard winery={bodegas[1]} />
                <WineryCard winery={bodegas[2]} />
                <WineryCard winery={bodegas[3]} />
                <WineryCard winery={bodegas[4]} />
                <WineryCard winery={bodegas[5]} />
                <WineryCard winery={bodegas[6]} />     
                </div>
            </div>


        </>
    )
}
