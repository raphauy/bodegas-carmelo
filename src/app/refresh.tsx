"use client"

import { useRouter } from "next/navigation"

export default function Refresh() {

    const router= useRouter()

    function refresh() {
        router.refresh()
    }

    // refresh automatically every 5 seconds
    setTimeout(() => {
        refresh()
    }, 10000)


    return (
        <></>
    )
}
