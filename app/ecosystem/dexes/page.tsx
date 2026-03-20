import EcosystemCard from "../components/EcosystemCard";
import EcosystemGrid from "../components/EcosystemGrid";

export const metadata = {
    title: "Algebra Labs | Ecosystem | DEXes",
    description: "Algebra Labs ecosystem DEXes page",
};


const dexs = [
    { logo: '/logos/blackhole.jpg', network: '/logos/avalanche.svg', networkName: 'Avalanche', name: 'Blackhole', description: 'A groundbreaking DEX designed to serve as the Unified Liquidity Hub for all blockchain projects on Avalanche powered by Algebra Integral' },
    { logo: '/logos/thena.svg', network: '/logos/bnb.svg', networkName: 'BNB', name: 'THENA', description: 'THE ULTIMATE decentralized\nexchange with ve(3,3), V4 plugins & more' },
    { logo: '/logos/supernova.svg', network: '/logos/ethereum.svg', networkName: 'Ethereum', name: 'Supernova', description: 'Next-gen ve(3,3) DEX on Ethereum powered by Algebra Integral' },
    { logo: '/logos/camelot.svg', network: '/logos/arbitrum.svg', networkName: 'Arbitrum', additionalNetworks: 6, name: 'Camelot', description: 'The Arbitrum native DEX. Custom-\nbuilt liquidity infrastructure to\nsupport builders & generate real\nyield' },
    { logo: '/logos/main.png', network: '/logos/base.svg', networkName: 'Base', name: 'Main', description: 'The first AI-governed DEX for Agentic Finance: modular & AI-native' },
    { logo: '/logos/hydrex.jpg', network: '/logos/base.svg', networkName: 'Base', name: 'Hydrex', description: "Base's Frictionless Liquidity Hub:\nOmni-Liquidity MetaDEX powered by Integral" },
    { logo: '/logos/quickswap.svg', network: '/logos/polygon.svg', networkName: 'Polygon', additionalNetworks: 3, name: 'QuickSwap', description: 'The leading DEX on Polygon and Base. All-in-one DeFi hub with best rates for trading, liquidity, farms, perpetuals and more' },
    { logo: '/logos/stellaswap.svg', name: 'StellaSwap', network: '/logos/moonbeam.svg', networkName: 'Moonbeam', additionalNetworks: 1, description: 'A one-stop DEX: trading, LPing & liquid staking on Polkadot & Moonbeam' },
    { logo: '/logos/cypher.jpg', network: '/logos/ethereum.svg', networkName: 'Ethereum', name: 'Cypher', description: 'Ethereum Capital Markets. Native L1 market infrastructure powered by Integral' },
    { logo: '/logos/nest.svg', name: 'Nest', network: '/logos/hyperliquid.png', networkName: 'Hyperliquid', description: 'The MetaDEX built for Hyperliquid: smart pools & efficient swaps with ve(3,3) rewards, CLAMM & more' },
    { logo: '/logos/spark.svg', name: 'SparkDex', network: '/logos/flare.jpg', networkName: 'Flare', description: 'First AI-driven DeFi ecosystem on Flare Network' },
    { logo: '/logos/rooster.jpg', name: 'Rooster', network: '/logos/plume.svg', networkName: 'Plume', description: 'Official RWA liquidity hub on Plume Network, pioneering the future of RWAFi' },
    { logo: '/logos/henesys.svg', name: 'Henesys', network: '/logos/henesys.svg', networkName: 'Henesys', description: 'Better CLAMM + V4 pools with permissioned access on Henesys L1 by MapleStory' },
    { logo: '/logos/swapx.svg', name: 'SwapX', network: '/logos/sonic.svg', networkName: 'Sonic', description: 'Revolutionary Modular Architecture: CLAMM V4 DEX on Sonic, powered by Integral' },
    { logo: '/logos/kittenswap.jpg', name: 'KittenSwap', network: '/logos/hyperliquid.png', networkName: 'Hyperliquid', description: 'A community owned DEX on HyperEVM with ve(3,3) mechanics powered by Algebra' },
    { logo: '/logos/molten.jpg', name: 'Molten', network: '/logos/core.svg', networkName: 'Core DAO', description: 'Core’s native liquidity engine for Bitcoin DeFi. BTC-backed swaps, yield vaults & deep liquidity' },
    { logo: '/logos/satsuma.svg', name: 'Satsuma', network: '/logos/citrea.svg', networkName: 'Citrea', description: 'The Native Liquidity Layer on Citrea powered by Algebra Integral' },
    { logo: '/logos/swapr.svg', name: 'Swapr', network: '/logos/gnosis.svg', networkName: 'Gnosis', additionalNetworks: 4, description: 'DeFi power tool: swap, farm & bridge without worrying about privacy' },
    { logo: '/logos/voltage.svg', name: 'Voltage', network: '/logos/fuse.svg', networkName: 'Fuse', description: 'All-in-one DeFi hub on Fuse network. Trade, earn and govern' },
    { logo: '/logos/wdex.png', name: 'W-DEX', network: '/logos/polygon.svg', networkName: 'Polygon', description: 'Decentralized exchange of the Meta Whale ecosystem' },
    { logo: '/logos/blade.png', name: 'Blade', network: '/logos/blast.svg', networkName: 'Blast', description: 'Blast-native Dex with real-time vote reward & native multi-call' },
    { logo: '/logos/lynex.svg', name: 'Lynex', network: '/logos/linea.svg', networkName: 'Linea', description: "Linea's native onchain liquidity marketplace, offering a highly capital-efficient DeFi solution" },
    { logo: '/logos/yaka.svg', name: 'Yaka', network: '/logos/sei.svg', networkName: 'Sei', description: "The Liquidity Hub On Sei powered by Algebra Integral" },
    { logo: '/logos/thirdfy.jpg', name: 'ThirdFy', network: '/logos/base.svg', networkName: 'Base', description: 'A next-gen Agentic protocol powered by the o(3,3) incentives' },
    { logo: '/logos/tonco.svg', name: 'Tonco', network: '/logos/ton.svg', networkName: 'TON', description: 'First V3 DEX on TON with Concentrated Liquidity for better capital efficiency' },
    { logo: '/logos/hypercat.png', name: 'HyperCat',  network: '/logos/hyperliquid.png', networkName: 'Hyperliquid', description: 'V4 decentralized exchange on Hyperliquid powered by Algebra' },
    { logo: '/logos/hercules.svg', name: 'Hercules',  network: '/logos/metis.svg', networkName: 'Metis', description: 'A community-first, next-gen DEX for real yield & customizable liquidity infrastructure on Metis' },
    { logo: '/logos/bulla.png', name: 'Bulla',  network: '/logos/berachain.svg', networkName: 'Berachain', description: 'Native AMM with concentrated liquidity powered by Algebra on Berachain' },
    { logo: '/logos/treble.png', name: 'Treble',  network: '/logos/base.svg', networkName: 'Base', description: 'V4 DEX & DeFi Hub on Base powered by Integral: Launch, Swap, Farm, Spend and more' },
    { logo: '/logos/wasabee.svg', name: 'Wasabee',  network: '/logos/berachain.svg', networkName: 'Berachain', description: 'V4 DEX powered by Algebra. Leveling up meme trading & LP yields on Berachain' },
    { logo: '/logos/morfi.png', name: 'MorFi',  network: '/logos/morph.svg', networkName: 'Morph', description: 'The Native Liquidity and Exchange Layer on MorphLayer' },
    { logo: '/logos/silverswap.svg', name: 'SilverSwap',  network: '/logos/sonic.svg', networkName: 'Sonic', description: 'Most versatile DEX & DeFi suite on Fantom' },
    { logo: '/logos/hx.jpg', name: 'HX Finance',  network: '/logos/hyperliquid.png', networkName: 'Hyperliquid', description: 'The future of private DeFi on HyperEVM. Efficient swaps now, zero-knowledge privacy on the horizon' },
    { logo: '/logos/zyberswap.svg', name: 'ZyberSwap',  network: '/logos/arbitrum.svg', networkName: 'Arbitrum', additionalNetworks: 1, description: 'Community driven DEX on Arbitrum and Optimism' },
    { logo: '/logos/swapsicle.svg', name: 'Swapsicle',  network: '/logos/telos.svg', networkName: 'Telos', additionalNetworks: 2, description: 'A powerful All-In-One DeFi Hub on Telos and Mantle' },
    { logo: '/logos/henjin.jpg', name: 'Henjin',  network: '/logos/base.svg', networkName: 'Base', description: 'The native Taiko DEX' },
    { logo: '/logos/synthswap.svg', name: 'SynthSwap',  network: '/logos/base.svg', networkName: 'Base', description: 'The leading DEX on Base with concentrated liquidity, built by ZyberSwap' },
    { logo: '/logos/atlantis-on-monad.png', name: 'Atlantis',  network: '/logos/monad.svg', networkName: 'Monad', description: 'The Modular DeFi Hub on Monad' },
    { logo: '/logos/fenix.png', name: 'Fenix DEX',  network: '/logos/blast.svg', networkName: 'Blast', description: 'The Unified Trading and Liquidity Marketplace for Blast' },
    { logo: '/logos/atlantis-on-sonic.jpg', name: 'Atlantis',  network: '/logos/sonic.svg', networkName: 'Sonic', description: 'The first end-to-end DeFi ecosystem built on Sonic' },
    { logo: '/logos/ocelex.png', name: 'Ocelex',  network: '/logos/zircuit.svg', networkName: 'Zircuit', description: 'Most capital-efficient liquidity engine, offering tailored strategies through ALM aggregation, on Zircuit L2' },
    { logo: '/logos/planar.svg', name: 'Planar',  network: '/logos/blast.svg', networkName: 'Blast', description: 'Native DEX and Liquidity Infrastructure Protocol on Blast' },
    { logo: '/logos/honeypot.svg', name: 'Honeypot',  network: '/logos/berachain.svg', networkName: 'Berachain', description: 'DeFi Hub & PoL Accelerator that unites a fair launchpad and a secure DEX on Bera chain' },
    { logo: '/logos/tokan.svg', name: 'Tokan Exchange',  network: '/logos/scroll.png', networkName: 'Scroll', description: 'The Native Liquidity and Exchange Layer for Scroll' },
    { logo: '/logos/circuit.svg', name: 'Circuit',  network: '/logos/zircuit.svg', networkName: 'Zircuit', description: 'The first native thesis-driven DEX on Zircuit L2, providing the greatest liquidity efficiency' },
    { logo: '/logos/grizzly.jpg', name: 'Grizzly',  network: '/logos/berachain.svg', networkName: 'Grizzly', description: 'DeFi and Liquidity hub for strong Beras on Bera chain' },   
]

const EcosystemDEXsPage = () => <EcosystemGrid>
    {dexs.map((dex, idx) => <EcosystemCard key={`dex-card-${dex.name}-${idx}`} {...dex} />)}
</EcosystemGrid>

export default EcosystemDEXsPage;
