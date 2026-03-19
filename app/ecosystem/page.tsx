'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const EcosystemPage = () => {
    const router = useRouter()
    
    useEffect(() => {
        router.push('/ecosystem/dexes')
    }, [])
    
    return null
}

export default EcosystemPage