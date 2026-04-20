'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const FeaturesPage = () => {
    const router = useRouter()
    
    useEffect(() => {
        router.push('/features/cl-pools')
    }, [])
    
    return null
}

export default FeaturesPage