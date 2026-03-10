"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { GhostButton, PrimaryButton, SecondaryHollowButton } from "./buttons"
import { usePathname } from "next/navigation"
import { classNames } from "../lib/utils"
import SocialIcon from "./icons/social-icon"
// import ThemeSwitcher from "./ThemeSwitcher"

const headerItems = [
    { title: 'Build Plugins', href: '/plugins' },
    { title: 'Ecosystem', href: '/ecosystem/dexes' },
    { title: 'Team', href: '/team' },
    { title: 'Plugin Marketplace', href: '/marketplace' },
]

const socialItems = [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/algebra-finance", icon: "linkedin" as const },
    { title: "Telegram", href: "https://t.me/cryptoalgebra", icon: "telegram" as const },
    { title: "Discord", href: "https://discord.gg/CVMSrW3JZm", icon: "discord" as const },
    { title: "X (Twitter)", href: "https://twitter.com/CryptoAlgebra", icon: "x" as const },
]

const menuLinksLeft = [
    { title: "FAQ", href: "https://docs.algebra.finance/algebra-integral-documentation/overview-faq/what-is-algebra", out: true },
    { title: "Security", href: "https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/audits", out: true },
    { title: "Blog", href: "https://medium.com/@crypto_algebra", out: true },
    { title: "Contact Us", href: "/form", out: false },
    { title: "OG Staking", href: "https://og.algebra.finance", out: true },
    { title: "Brand Assets", href: "https://docs.algebra.finance/algebra-integral-documentation/overview-faq/brand-assets", out: true },
]

const menuLinksRight = [
    { title: "GitHub", href: "https://github.com/cryptoalgebra", out: true },
    { title: "Docs", href: "https://docs.algebra.finance/", out: true },
    { title: "Tech Paper", href: "/static/Algerbra%20Tech%20Paper-15411d15f8653a81d5f7f574bfe655ad.pdf", out: true },
    { title: "For Plugin Developers", href: "/plugins", out: false },
    { title: "Holesky UI", href: "https://integral.algebra.finance/", out: true },
    { title: "Berachain UI", href: "https://berachain.algebra.finance/pools", out: true },
]

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 100)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const openMenu = () => {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeMenu = () => {
        setIsOpen(false)
        document.body.style.overflow = 'auto'
    }

    const pathname = usePathname()

    return <header className={classNames("fixed flex flex-col top-0 w-full z-5 duration-150", isScrolled ? "bg-white/80" : "bg-slate-bg")} style={{ zIndex: 5 }}>

        <nav className="flex items-center px-2.5 py-3 bg-slate-bg md:hidden">
            <div className="flex-2">
                <Link href="/">
                    <Image src="/algebra-logo.png" alt="Algbera" width={114} height={22} />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <PrimaryButton href="/form" classes="!p-2 !text-black">Integrate</PrimaryButton>
                </div>
                <div>
                    {
                        isOpen ?
                            <button onClick={closeMenu} className="bg-white p-1">
                                <Image src="/icons/close.svg" alt="Close Menu" width={24} height={24} />
                            </button>
                            : <button onClick={openMenu} className="bg-white p-1">
                                <Image src="/icons/menu.svg" alt="Open Menu" width={24} height={24} />
                            </button>
                    }
                </div>
            </div>
        </nav>

        {isOpen && <div className="fixed inset-x-0 bottom-0 top-[56px] overflow-y-auto bg-dex-card-bg md:hidden" style={{ zIndex: 10 }}>
            <div className="mx-auto flex w-full max-w-[var(--section-max-width)] flex-col gap-8 p-8">
                <ul className="flex flex-col gap-3">
                    {
                        headerItems.map((item, idx) => (
                            <li key={`header-link-${idx}`}>
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-4 rounded-[8px] bg-white px-6 py-5 text-button tracking-[2px]"
                                    onClick={closeMenu}
                                >
                                    {item.title}
                                    <Image src="/icons/arrow-right.svg" className="text-black" alt="" width={24} height={24} aria-hidden />
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex flex-col gap-4">
                    <PrimaryButton href="/form" classes="!w-full !text-black" >
                        Integrate
                        <Image src="/icons/arrow-right.svg" alt="" width={24} height={24} aria-hidden />
                    </PrimaryButton>
                    <SecondaryHollowButton
                        out
                        href="https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/intro"
                        classes="!w-full"
                    >
                        Docs
                    </SecondaryHollowButton>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {socialItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-center"
                        >
                            <span className="flex w-[56px] h-[56px] items-center justify-center rounded-[4px] bg-white text-black">
                                <SocialIcon name={item.icon} size={24} />
                            </span>
                            <span className="text-small">{item.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-14">

                    <div className="flex flex-col gap-4">
                        {menuLinksLeft.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="text-small"
                                target={item.out ? "_blank" : "_self"}
                                rel={item.out ? "noopener noreferrer" : undefined}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        {menuLinksRight.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="text-small"
                                target={item.out ? "_blank" : "_self"}
                                rel={item.out ? "noopener noreferrer" : undefined}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>}

        <nav className="hidden py-3.5 md:block text-caption">
            <div
                className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
            >
                <Link href="/" className="flex-1 inline-flex items-center gap-4">
                    <Image src="/algebra-logo.png" alt="Algbera" width={114} height={22} />
                </Link>
                <div className="flex flex-1 items-center justify-center gap-10 whitespace-nowrap">
                    <div className="sm:inline-block">
                        <ul
                            className="flex space-x-2.5"
                        >
                            {
                                headerItems.map((item, idx) => <li key={`header-link-${idx}`}>
                                    <Link
                                        href={item.href}
                                        target={item.href.includes('https://') ? '_blank' : '_self'}
                                        className={classNames('block p-2.5 text-caption duration-100 lg:border-0 ', pathname.includes(item.href) ? 'bg-black' : 'hover:bg-black/5')}
                                        aria-current="page">
                                        {item.title}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-3">
                    <GhostButton out href="https://x.com/CryptoAlgebra" classes="!p-1.5 !text-black">
                        <SocialIcon name="x" size={20} />
                    </GhostButton>
                    <SecondaryHollowButton out href="https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/intro" classes="!p-3 !h-8">Docs</SecondaryHollowButton>
                    <PrimaryButton href="/form" classes="!p-3 !h-8 !text-black">Integrate</PrimaryButton>
                </div>
            </div>
        </nav>
    </header>

}
