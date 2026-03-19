import EcosystemCard from "../components/EcosystemCard"
import EcosystemGrid from "../components/EcosystemGrid"

export const metadata = {
    title: "Algebra Labs | Ecosystem | Aggregators",
    description: "Algebra Labs ecosystem aggregators page",
};

const aggregators = [
    { logo: '/logos/1inch.svg', name: '1inch', description: 'A distributed network for various protocols on ETH, BNBChain, Avalanche, Polygon, OΞ, Arbitrum, Gnosis, and more' },
    { logo: '/logos/rubic.svg', name: 'Rubic', description: 'Cross-Chain Tech Aggregator for users + tools for dApps' },
    { logo: '/logos/velora.svg', name: 'Velora', description: 'Cross-Chain Tech Aggregator for users + tools for dApps' },
    { logo: '/logos/odos.svg', name: 'ODOS', description: 'Smart Order Routing across multiple blockchain protocols, 700+ Liquidity Sources and thousands of token pairs' },
    { logo: '/logos/openocean.svg', name: 'OpenOcean', description: 'Profitable liquidity provision powering sustainable on-chain returns and deep liquidity' },
    { logo: '/logos/orbs.svg', name: 'Orbs Network', description: 'Bringing CeFi-level execution to DeFi. L3 for advanced On-chain trading' },
    { logo: '/logos/zerox.svg', name: '0x', description: 'Embedding swaps in on-chain apps' },
]

const EcosystemAggregatorsPage = () => <EcosystemGrid>
    {aggregators.map(aggregator => <EcosystemCard key={`aggregator-card-${aggregator.name}`} {...aggregator} />)}
</EcosystemGrid>

export default EcosystemAggregatorsPage;