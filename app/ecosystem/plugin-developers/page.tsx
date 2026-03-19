import EcosystemCard from "../components/EcosystemCard"
import EcosystemGrid from "../components/EcosystemGrid"

export const metadata = {
    title: "Algebra Labs | Ecosystem | Plugin Developers",
    description: "Algebra Labs ecosystem plugin developers page",
};

const pluginDevelopers = [
    { logo: '/logos/chainalysis.svg', name: 'Chainalysis', description: "Cryptocurrency investigation and compliance solutions to global law enforcement agencies, regulators, and businesses" },
    { logo: '/logos/gu-labs.svg', name: 'GU Labs', description: "Launchpad for rug-proof token launches, natively available to every Algebra-powered DEX" },
    { logo: '/logos/brevis.svg', name: 'Brevis', description: "The Infinite Compute Layer for Web3 and Everything. ZK Power, Real Adoption" },
    { logo: '/logos/tycho.svg', name: 'Tycho', description: "An open-source interface to on-chain liquidity: index, simulate, and execute swaps across all DEXs" },
    { logo: '/logos/orbs.svg', name: 'Orbs', description: "L3 for advanced On-chain trading: bringing CeFi-level execution to DeFi" },
    { logo: '/logos/reflex.svg', name: 'Reflex', description: "Turning MEV into protocol revenue. On-chain. Same-transaction. No relayers" },
    { logo: '/logos/mev-x.svg', name: 'MEV-X', description: "A unique project that transforms knowledge into Maximum Extractable Value, and shares its benefits with the community" },
]

const PluginDevelopersPage = () => <EcosystemGrid>
    {pluginDevelopers.map(developer => <EcosystemCard key={`auditor-card-${developer.name}`} {...developer} />)}
</EcosystemGrid>

export default PluginDevelopersPage;