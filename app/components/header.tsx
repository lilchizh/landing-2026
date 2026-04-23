"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { GhostButton, PrimaryButton, SecondaryHollowButton } from "./buttons"
import { usePathname } from "next/navigation"
import { classNames } from "../lib/utils"
import SocialIcon from "./icons/social-icon"
import FormModal from "../form/components/form-modal"
// import ThemeSwitcher from "./ThemeSwitcher"

const headerItems = [
    { title: 'Features', href: '/features' },
    { title: 'Ecosystem', href: '/ecosystem' },
    { title: 'Team', href: '/team' },
    { title: 'Plugin Marketplace', href: 'https://market.algebra.finance/' },
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
    // { title: "For Plugin Developers", href: "/plugins", out: false },
    { title: "Base Sepolia UI", href: "https://integral.algebra.finance/", out: true },
]

const featuresMenuLinks = [
    { title: "CL Pools", image: "/images/features/cl-pools-small.png", link: "/features/cl-pools" },
    { title: "Plugins Architecture", image: "/images/features/plugins-architecture-small.png", link: "/features/plugins-architecture" },
    { title: "Incentive Farming", image: "/images/features/incentive-farming-small.png", link: "/features/incentive-farming" },
    { title: "Boosted Pools", image: "/images/features/boosted-pools-small.png", link: "/features/boosted-pools" },
    { title: "Algebra ve(3,3)", image: "/images/features/ve-33-small.png", link: "/features/ve-33" },
    { title: "Partner Launchpad", image: "/images/features/partner-launchpad-small.png", link: "/features/partner-launchpad" },
    { title: "Partner Pers", image: "/images/features/partner-perps-small.png", link: "/features/partner-perps" },
]

function FeaturesHoverMenu() {
    return <div className="p-2 rounded bg-white/50 backdrop-blur-lg grid grid-cols-2 gap-2">
        {featuresMenuLinks.map((link) => (
            <Link href={link.link} key={`${link.title}-link`} className="flex items-center gap-3 hover:bg-white/50 p-1 rounded-sm text-caption tracking-[12%]">
                <Image src={link.image} alt={link.title} width={32} height={32} />
                <span>{link.title}</span>
            </Link>
        ))}
    </div>
}

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const [isFormOpen, setIsFormOpen] = useState(false)

    const [isFeaturesMenuOpen, setIsFeaturesMenuOpen] = useState(false);

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

    const timeoutRef = useRef<any>(null);

    const handleEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsFeaturesMenuOpen(true);
      };
    
      const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsFeaturesMenuOpen(false);
        }, 120); // small delay = smooth UX
      };

    const pathname = usePathname()

    return <header className={classNames("fixed flex flex-col top-0 w-full z-5 mx-auto duration-150", isScrolled ? "bg-white/80" : pathname.includes("features") ? "bg-white" : "bg-slate-bg")} style={{ zIndex: 5 }}>
        <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
        <nav className="flex items-center px-2.5 py-3 bg-slate-bg md:hidden">
            <div className="flex-2">
                <Link href="/">
                    <Image src="/algebra-logo.png" alt="Algbera" width={114} height={22} />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <PrimaryButton onClick={() => setIsFormOpen(true)} classes="!p-2 !text-black">Integrate</PrimaryButton>
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
                    <PrimaryButton onClick={() => setIsFormOpen(true)} classes="!w-full !text-black" >
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
                className="flex flex-wrap items-center justify-between px-4 mx-auto max-w-[1376px]"
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
                                headerItems.map((item, idx) => (<li key={`header-link-${idx}`}>
                                    <Link
                                        href={item.href}
                                        target={item.href.includes('https://') ? '_blank' : '_self'}
                                        className={classNames('block p-2.5 text-caption duration-100 lg:border-0 tracking-[12%] rounded', pathname.includes(item.href) ? 'bg-black text-white' : 'hover:bg-black/5')}
                                        aria-current="page">
                                        {item.title}
                                    </Link>
                                </li>))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-3">
                    <GhostButton out href="https://x.com/CryptoAlgebra" classes="!p-1.5 !text-black">
                        <SocialIcon name="x" size={20} />
                    </GhostButton>
                    <SecondaryHollowButton out href="https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/intro" classes="!p-3 !h-8">Docs</SecondaryHollowButton>
                    <PrimaryButton onClick={() => setIsFormOpen(true)} classes="!p-3 !h-8 !text-black">Integrate</PrimaryButton>
                </div>
            </div>
        </nav>
    </header>

}
