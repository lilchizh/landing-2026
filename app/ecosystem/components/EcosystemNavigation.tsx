"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { classNames } from "@/app/lib/utils"

const tabs = [
    { title: 'Integrated DEXs', href: '/ecosystem/dexes/' },
    { title: 'ALMs', href: '/ecosystem/alms/' },
    { title: 'Aggregators', href: '/ecosystem/aggregators/' },
    { title: 'Blockchains', href: '/ecosystem/blockchains/' },
    { title: 'Auditors', href: '/ecosystem/auditors/' },
    { title: 'Plugin Builders & Other', href: '/ecosystem/plugin-developers/' },
]

export default function EcosystemNavigation() {

    const pathname = usePathname()

    return <div className="flex px-4 md:px-0 md:justify-center w-full gap-2 text-sm whitespace-nowrap overflow-auto">
        {
            tabs.map((tab, idx) => <Link key={`ecosystem-navigation-${idx}`} href={tab.href} className={
                classNames(
                    "p-3 duration-75 flex rounded-md text-black uppercase",
                    tab.href === pathname ? 'cursor-default bg-button-primary' : ' bg-dex-card-bg hover:bg-button-primary-hover'
                )
            }>
                {tab.title}
            </Link>)
        }
    </div>
}