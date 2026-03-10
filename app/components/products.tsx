import Image from "next/image";
import Container from "./container";
import LogoLoop from "@/components/LogoLoop";

const featureNode = (icon: string, title: string) => (
    <article className="inline-flex items-center gap-1 rounded-[8px] bg-dex-card-bg px-4 py-2">
        <Image src={icon} alt="" width={24} height={24} aria-hidden />
        <p className="text-body whitespace-nowrap">{title}</p>
    </article>
);

const featureItems = [
    {
        node: featureNode("/icons/features/concentrated-liquidity.svg", "Concentrated Liquidity"),
        title: "Concentrated Liquidity",
    },
    {
        node: featureNode("/icons/features/discount.svg", "NFT Discounts"),
        title: "NFT Discounts",
    },
    {
        node: featureNode("/icons/features/dynamic-fees.svg", "Dynamic Fees"),
        title: "Dynamic Fees",
    },
    {
        node: featureNode("/icons/features/ve33.svg", "ve(3,3)"),
        title: "ve(3,3)",
    },
    {
        node: featureNode("/icons/features/kyc.svg", "KYC"),
        title: "KYC",
    },
    {
        node: featureNode("/icons/features/limit-orders.svg", "Limit Orders"),
        title: "Limit Orders",
    },
    {
        node: featureNode("/icons/features/light-core.svg", "Light Core"),
        title: "Light Core",
    },
    {
        node: featureNode("/icons/features/alm.svg", "ALM"),
        title: "ALM",
    },
    {
        node: featureNode("/icons/features/zk-swaps.svg", "ZK Swaps"),
        title: "ZK Swaps",
    },
    {
        node: featureNode("/icons/features/rwa.svg", "RWA"),
        title: "RWA",
    },
    {
        node: featureNode("/icons/features/evm.svg", "EVM"),
        title: "EVM",
    },
    {
        node: featureNode("/icons/features/perps.svg", "Perps"),
        title: "Perps",
    },
    {
        node: featureNode("/icons/features/ai.svg", "AI"),
        title: "AI",
    },
    {
        node: featureNode("/icons/features/clamm.svg", "CLAMM"),
        title: "CLAMM",
    },
    {
        node: featureNode("/icons/features/v2.svg", "V2 Liquidity"),
        title: "V2 Liquidity",
    },
    {
        node: featureNode("/icons/features/elastic-supply.svg", "Elastic-supply tokens"),
        title: "Elastic-supply tokens",
    },
    {
        node: featureNode("/icons/features/oracles.svg", "Oracles"),
        title: "Oracles",
    },
    {
        node: featureNode("/icons/features/mev.svg", "MEV"),
        title: "MEV",
    },
    {
        node: featureNode("/icons/features/anti-snipe.svg", "Anti-Snipe"),
        title: "Anti-Snipe",
    },
    {
        node: featureNode("/icons/features/v4.svg", "V4 Pools"),
        title: "V4 Pools",
    },
];

const Products = () => (
    <section className="py-16 lg:py-24">
        <Container className="px-4 sm:px-8">
            <div className="text-center">
                <div className="inline-block text-[11px] tracking-[12%] uppercase px-1 border border-black rounded-[3px] mb-4 md:mb-6">Our Product</div>
                <h1 className="text-h3 md:text-h1">Algebra Integral <br/> <span className="text-[#80888A]">How it works</span></h1>
                <p className="mx-auto mt-6 max-w-3xl text-body md:text-body-l">
                    White-label V4 AMM codebase combining modular architecture <br className="hidden md:block"/>
                    with CLAMM pools.
                </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-1 xl:grid-cols-[1.05fr_1fr]">
                
                <div className="grid grid-cols-1 gap-4 md:gap-3">
                    
                    <article className="relative overflow-hidden rounded-[12px] px-4 py-8 lg:p-8">
                        <Image
                            src="/images/features/core-bg.png"
                            alt=""
                            fill
                            className="w-[150px] object-cover"
                            aria-hidden
                        />
                        <div>
                            <div className="relative flex items-start gap-4">
                                <Image
                                    src="/images/features/core.png"
                                    alt="Core module visual"
                                    width={200}
                                    height={200}
                                    className="hidden md:block"
                                />
                                <div>
                                    <h3 className="text-h3 text-white">CORE</h3>
                                    <div className="mt-3 flex flex-wrap flex-col md:flex-row gap-2">
                                        <span className="w-fit rounded-[6px] bg-[#E5703D] border border-[#D86330] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Maximum Security</span>
                                        <span className="w-fit rounded-[6px] bg-[#206DC7] border border-[#4198FF] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Gas Efficient</span>
                                        <span className="w-fit rounded-[6px] bg-[#13CA68] border border-[#99D5B5] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Audited</span>
                                        <span className="w-fit rounded-[6px] bg-[#BE0CCB] border border-[#F557DE] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Limitless Flexibility</span>
                                    </div>
                                    <p className="mt-6 text-body text-white hidden md:block">
                                        Secure &amp; efficient contracts implementing the essential CLAMM
                                        capabilities. Includes liquidity pools, math &amp; swap routing.
                                    </p>
                                </div>
                                <Image
                                    src="/images/features/core.png"
                                    alt="Core module visual"
                                    width={120}
                                    height={120}
                                    className="md:hidden ml-auto"
                                />

                            </div>
                            <p className="relative mt-8 text-body-l text-white block md:hidden">
                                Secure &amp; efficient contracts implementing the essential CLAMM
                                capabilities. Includes liquidity pools, math &amp; swap routing.
                            </p>
                        </div>
                    </article>

                    <article className="relative overflow-hidden rounded-[12px] px-4 py-8 lg:p-8">
                        <Image
                            src="/images/features/plugins-bg.png"
                            alt=""
                            fill
                            className="object-cover"
                            aria-hidden
                        />
                        <div>
                            <div className="relative flex items-center gap-4">
                                <Image
                                    src="/images/features/plugins.png"
                                    alt="Plugins module visual"
                                    width={120}
                                    height={120}
                                    className="block md:hidden"
                                />
                                <div>
                                    <h3 className="text-h3 text-white">Plugins</h3>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="w-fit rounded-[6px] bg-[#33373C] border border-[#888C91] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Limitless Flexibility</span>
                                        <span className="w-fit rounded-[6px] bg-[#531B4A] border border-[#CE5BBB] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">Live Upgrades</span>
                                        <span className="w-fit rounded-[6px] bg-[#206DC7] border border-[#4198FF] py-1 px-2 tracking-[12%] text-[11px] uppercase text-white">No Migration Needed</span>
                                    </div>
                                    <p className="mt-6 text-body text-white hidden md:block">
                                        Smart contracts that connect to liquidity pools &amp; extend
                                        functionality. Plugins can implement virtually any DeFi logic - and
                                        can be upgraded without liquidity migration.
                                    </p>
                                </div>
                                <Image
                                    src="/images/features/plugins.png"
                                    alt="Plugins module visual"
                                    width={200}
                                    height={200}
                                    className="hidden md:block"
                                />
                            </div>
                            <p className="relative mt-8 text-body-l text-white block md:hidden">
                                Smart contracts that connect to liquidity pools &amp; extend
                                functionality. Plugins can implement virtually any DeFi logic - and
                                can be upgraded without liquidity migration.
                            </p>
                        </div>
                    </article>
                </div>

                <article className="relative min-h-[420px] overflow-hidden rounded-[12px] bg-white">
                    <Image
                        src="/images/features/schema.png"
                        alt="Algebra Integral feature schema"
                        fill
                        className="object-contain object-center"
                    />
                </article>
            </div>
            <div className="relative mt-4 md:mt-16 flex flex-col gap-5 overflow-x-hidden">
                <LogoLoop
                    logos={featureItems}
                    speed={20}
                    direction="left"
                    logoHeight={28}
                    gap={24}
                    hoverSpeed={0}
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
                <LogoLoop
                    logos={featureItems}
                    speed={20}
                    direction="right"
                    logoHeight={28}
                    gap={24}
                    hoverSpeed={0}
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
                <LogoLoop
                    logos={featureItems}
                    speed={20}
                    direction="left"
                    logoHeight={28}
                    gap={24}
                    hoverSpeed={0}
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div>
        </Container>
    </section>
);

export default Products;
