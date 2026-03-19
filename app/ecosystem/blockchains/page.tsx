import EcosystemCard from "../components/EcosystemCard"
import EcosystemGrid from "../components/EcosystemGrid"

export const metadata = {
    title: "Algebra Labs | Ecosystem | Blockchains",
    description: "Algebra Labs ecosystem blockchains page",
};

const blockchains = [
    { logo: '/logos/polygon.svg', name: 'Polygon', description: 'Aggregated blockchain scaling Ethereum with zk tech' },
    { logo: '/logos/bnb.svg', name: 'BNB', description: 'A community-driven blockchain ecosystem of Layer-1 and Layer-2 scaling solutions' },
    { logo: '/logos/kite.svg', name: 'Kite', description: 'The first AI payment blockchain: empowering autonomous agents to operate and transact identity, verification & more' },
    { logo: '/logos/arbitrum.svg', name: 'Arbitrum', description: 'A technology suite designed to scale Ethereum' },
    { logo: '/logos/ethereum.svg', name: 'Ethereum', description: 'The universal platform for crypto, blockchain apps, stablecoins & decentralized tech' },
    { logo: '/logos/hyperliquid.png', name: 'Hyperliquid', description: 'A layer one blockchain (L1) written and optimized from first principles' },
    { logo: '/logos/monad.svg', name: 'Monad', description: 'The most performant EVM-compatible blockchain with 10000 TPS, 0.8s finality, and 0.4s block times' },
    { logo: '/logos/avalanche.svg', name: 'Avalanche', description: 'A modular Layer 1 blockchain ecosystem focused on high throughput, sub-second finality, and flexible custom chains' },
    { logo: '/logos/moonbeam.svg', name: 'Moonbeam', description: 'A platform for cross-chain connected applications, uniting functionality from Ethereum, @Polkadot, and beyond' },
    { logo: '/logos/zksync.svg', name: 'zkSync', description: 'Hyperscaling Ethereum with ZK tech' },
    { logo: '/logos/dogechain.svg', name: 'DogeChain', description: 'Dogechain supercharges $Dogecoin to bring crypto applications like NFTs, games, and DeFi to the $Dogecoin community' },
    { logo: '/logos/telos.svg', name: 'Telos', description: 'Telos, a Layer 0 network enabling Zero Knowledge technology for scalability and privacy to support all industries and applications' },
    { logo: '/logos/polygon.svg', name: 'Polygon zkEVM', description: 'Polygon zkEVM features a zk-rollup architecture that leverages zero-knowledge proofs to provide an L2 solution on top of Ethereum' },
    { logo: '/logos/base.svg', name: 'Base', description: 'Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain' },
    { logo: '/logos/optimism.svg', name: 'Optimism', description: 'Scaling Ethereum & its values' },
    { logo: '/logos/linea.svg', name: 'Linea', description: 'A developer friendly zk-Rollup, powered by ConsenSys. Committed to Ethereum' },
    { logo: '/logos/opbnb.svg', name: 'opBNB', description: 'High-performance layer-2 solution within the BNB ecosystem, built using the OP Stack' },
    { logo: '/logos/mantle.svg', name: 'Mantle', description: 'Mantle Network is a technology stack for scaling Ethereum' },
    { logo: '/logos/gnosis.svg', name: 'Gnosis', description: 'Decentralized infrastructure for the Ethereum ecosystem' },
    { logo: '/logos/berachain.svg', name: 'Berachain', description: 'An EVM-equivalent L1 built on the Cosmos SDK and powered by Proof of Liquidity' },
    { logo: '/logos/blast.svg', name: 'Blast', description: 'The L2 with native yield' },
    { logo: '/logos/sei.svg', name: 'SEI', description: 'The Fastest Layer 1. Parallelizing the EVM' },
    { logo: '/logos/plume.svg', name: 'Plume', description: 'Transforming assets into globally accessible financial tools with true crypto-native utility' },
    { logo: '/logos/gravity.svg', name: 'Gravity', description: 'A chain designed for omnichain identity, quests, loyalty, and mass adoption' },
    { logo: '/logos/apechain.svg', name: 'Apechain', description: 'An EVM-compatible Layer 3 blockchain built as an Arbitrum Orbit Chain' },
    { logo: '/logos/sonic.svg', name: 'Sonic', description: 'A high-performance Layer 1 blockchain designed for decentralized applications (dApps), DeFi protocols, and enterprise solutions' },
    { logo: '/logos/soneium.jpg', name: 'Soneium', description: "An Ethereum Layer-2 protocol powered by Optimism's Superchain technology, is developed by Sony Block Solutions Labs" },
    { logo: '/logos/core.svg', name: 'Core', description: "Revolutionizing blockchain with unparalleled security and decentralized financial solutions, Core Blockchain stands as a beacon of integrity and innovation" },
    { logo: '/logos/citrea.svg', name: 'Citrea', description: "A ZK-rollup for Bitcoin that processes transactions off-chain and submits cryptographic proofs to the main Bitcoin blockchain" },
    { logo: '/logos/fuse.svg', name: 'Fuse', description: "A community-centric EVM-based protocol secured by staking-based consensus that also has smart contracts capabilities" },
    { logo: '/logos/metis.svg', name: 'Metis', description: "A permissionless Ethereum Layer 2 network powering the next generation of decentralized applications" },
    { logo: '/logos/henesys.svg', name: 'MapleStory', description: "A groundbreaking blockchain ecosystem that goes beyond the bounds of the original MapleStory MMORPG" },
    { logo: '/logos/zircuit.svg', name: 'Zircuit', description: "A zk-rollup, a type of Ethereum Layer 2 that bundles transactions and submits cryptographic proofs to the mainnet for efficiency" },
    { logo: '/logos/fantom.svg', name: 'Fantom', description: 'Fantom is a fast and scalable next-gen Layer-1 platform' },
    { logo: '/logos/xlayer.svg', name: 'XLayer', description: 'An EVM-based Layer 2 network dedicated to helping builders collectively construct a global, diversified on-chain economic ecosystem' },
    { logo: '/logos/morph.svg', name: 'Morph', description: 'A secure settlement layer for global crypto payments, offering seamless on-chain stablecoin infrastructure with BGB' },
    { logo: '/logos/sanko.png', name: 'Sanko', description: 'An NFT and gaming-focused Orbit stack L3 on Arbitrum with AnyTrust DA and DMT' },
    { logo: '/logos/taiko.svg', name: 'Taiko', description: 'A fully permissionless, Ethereum-equivalent based rollup. Inspired, secured, and sequenced by Ethereum' },
    { logo: '/logos/skale.svg', name: 'Skale', description: 'A purpose-built environment for AI agents to thrive onchain, offering unparalleled performance, privacy, and economic models' },
   
]

const EcosystemBlockchainsPage = () => <EcosystemGrid>
    {blockchains.map(blockchain => <EcosystemCard key={`blockchain-card-${blockchain.name}`} {...blockchain} />)}
</EcosystemGrid>

export default EcosystemBlockchainsPage;