import Image from "next/image"
import Link from "next/link"
import SocialIcon from "./icons/social-icon"

const socialItems = [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/algebra-finance", icon: "linkedin" as const },
    { title: "Telegram", href: "https://t.me/cryptoalgebra", icon: "telegram" as const },
    { title: "Discord", href: "https://discord.gg/CVMSrW3JZm", icon: "discord" as const },
    { title: "X", href: "https://twitter.com/CryptoAlgebra", icon: "x" as const },
]

const Footer = () => {
    return <footer className="bg-black text-white">
        <div
            className="flex flex-col md:flex-row gap-8 justify-between max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10"
        >
            <div className="max-w-[400px]">
                <Link href="/" className="inline-flex items-center gap-4">
                    <Image
                        src="/algebra-logo-white.png"
                        alt="Algebra Integral"
                        height={25}
                        width={130}
                    />
                </Link>
                <p className="text-small text-white/50 mt-5">Algebra Labs develops advanced AMM infra for decentralized exchanges, combining concentrated liquidity with modular architecture. Integrated across 100+ DEXes — including Camelot, THENA, QuickSwap, Hydrex, Blackhole, and others — Algebra enables higher capital efficiency, flexible monetization, and faster product evolution.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <div>
                    <h3 className="mb-6 text-body-l text-button-primary dark:text-white uppercase">
                        About
                    </h3>
                    <ul className="text-small text-white dark:text-gray-300">
                        <li className="mb-4">
                            <Link
                                href="https://docs.algebra.finance/algebra-integral-documentation/overview-faq/what-is-algebra"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                FAQ
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/audits"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Security
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://medium.com/@crypto_algebra"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="/form"
                                className="hover:underline">
                                Contact us
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href={'/static/terms-of-use.pdf'}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hover:underline">
                                Terms of use
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href={'/static/privacy-policy.pdf'}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hover:underline">
                                Privacy policy
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href={'https://og.algebra.finance'}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hover:underline">
                                OG Staking
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href={'https://docs.algebra.finance/algebra-integral-documentation/overview-faq/brand-assets'}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hover:underline">
                                Brand Assets
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-body-l font-semibold text-button-primary dark:text-white uppercase">
                        Developers
                    </h3>
                    <ul className="text-small text-white dark:text-gray-300">
                        <li className="mb-4">
                            <Link
                                href="https://github.com/cryptoalgebra"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                GitHub
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://docs.algebra.finance/"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Docs
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="/static/Algerbra%20Tech%20Paper-15411d15f8653a81d5f7f574bfe655ad.pdf"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">Tech Paper</Link>
                        </li>
                        {/* <li className="mb-4">
                            <Link
                                href="/plugins"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">For Plugin Developers</Link>
                        </li> */}
                        {/* <li className="mb-4">
                            <Link
                                href="https://algebra.finance/integral/"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">For Blockchains</Link>
                        </li> */}
                        <li className="mb-4">
                            <Link
                                href="https://integral.algebra.finance/"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Base Sepolia UI
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <h3 className="mb-6 text-body-l font-semibold text-button-primary dark:text-white uppercase">
                        Social
                    </h3>
                    <ul className="text-small text-white dark:text-gray-300">
                        <li className="mb-4">
                            <Link
                                href="https://twitter.com/CryptoAlgebra"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                X
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://t.me/cryptoalgebra"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Telegram Channel
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://t.me/cryptoalgebra_chat"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Telegram Chat
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://discord.gg/CVMSrW3JZm"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                Discord
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                href="https://www.linkedin.com/company/algebra-finance"
                                rel="noreferrer noopener"
                                target="_blank"
                                className="hover:underline">
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <div className="mx-auto max-w-screen-xl px-4 py-6 md:px-8 lg:px-10">
                <div className="hidden items-center justify-between gap-6 md:flex">
                    <div className="flex items-center gap-10">
                        <span className="text-small text-white/40">© 2026 ALGEBRA. ALL RIGHTS RESERVED.</span>
                        <Link href="/static/terms-of-use.pdf" target="_blank" rel="noopener noreferrer" className="text-small text-white/40 hover:text-white/70">TERMS OF USE</Link>
                        <Link href="/static/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-small text-white/40 hover:text-white/70">PRIVACY POLICY</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {socialItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-[44px] w-[44px] items-center justify-center rounded-[6px] bg-[#0B1F33] text-button-primary"
                            >
                                <SocialIcon name={item.icon} size={20} />
                            </Link>
                        ))}
                        <Link href="#top" className="ml-4 inline-flex h-[44px] items-center justify-center rounded-[6px] bg-[#0B1F33] px-8 text-small text-button-primary">
                            BACK TO TOP
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:hidden">
                    <div className="grid grid-cols-4 gap-4">
                        {socialItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-[64px] items-center justify-center rounded-[6px] bg-[#0B1F33] text-button-primary"
                            >
                                <SocialIcon name={item.icon} size={24} />
                            </Link>
                        ))}
                    </div>

                    <Link href="#top" className="inline-flex h-[52px] w-full max-w-[220px] items-center justify-center rounded-[6px] bg-[#0B1F33] text-button text-button-primary">
                        BACK TO TOP
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link href="/static/terms-of-use.pdf" target="_blank" rel="noopener noreferrer" className="text-small text-white/40">TERMS OF USE</Link>
                        <Link href="/static/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-small text-white/40">PRIVACY POLICY</Link>
                    </div>

                    <span className="text-small text-white/40">© 2026 ALGEBRA. ALL RIGHTS RESERVED.</span>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
