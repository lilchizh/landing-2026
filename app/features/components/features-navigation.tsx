"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { classNames } from "@/app/lib/utils"

const tabs = [
    { title: 'CL Pools', href: '/features/cl-pools/' },
    { title: 'Plugins Architecture', href: '/features/plugins-architecture/' },
    { title: 'Incentive Farming', href: '/features/incentive-farming/' },
    { title: 'Boosted Pools', href: '/features/boosted-pools/' },
    { title: 'Algebra ve(3,3)', href: '/features/ve-33/' },
    { title: 'Partner Launchpad', href: '/features/partner-launchpad/' },
    { title: 'Partner Perps', href: '/features/partner-perps/' },
]

export default function FeaturesNavigation() {

    const pathname = usePathname()

    return <div className="sticky top-0 hidden sm:flex px-4 pt-17 md:px-0 md:justify-center w-full text-xs whitespace-nowrap overflow-auto bg-white/50 backdrop-blur-sm z-2">
        {
            tabs.map((tab, idx) => <Link key={`features-navigation-${idx}`} href={tab.href} className={
                classNames(
                    "py-2 px-4 duration-75 flex border-b-2 text-black uppercase tracking-[12%]",
                    tab.href === pathname ? 'cursor-default border-button-primary bg-white' : 'border-transparent hover:bg-button-primary-hover/50'
                )
            }>
                {tab.title}
            </Link>)
        }
    </div>
}