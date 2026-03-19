import EcosystemCard from "../components/EcosystemCard"
import EcosystemGrid from "../components/EcosystemGrid"

export const metadata = {
    title: "Algebra Labs | Ecosystem | ALMs",
    description: "Algebra Labs ecosystem alms page",
};

const alms = [
    { logo: '/logos/gamma.svg', name: 'Gamma Strategies', description: 'A protocol for active liquidity management and market making strategies' },
    { logo: '/logos/amplifi.svg', name: 'Amplifi', description: 'On-chain market making infrastructure for the next generation of DeFi protocols' },
    { logo: '/logos/steer.svg', name: 'Steer Protocol', description: 'Multi-chain compute protocol with next-gen automated liquidity management' },
    { logo: '/logos/clip.jpg', name: 'Clip Finance', description: 'Simplifying & optimizing yield farming with intents-centric architecture & AI-driven liquidity management' },
    { logo: '/logos/krystal.png', name: 'Krystal', description: 'Automate and manage your crypto liquidity earnings on 8 supported DEXes across 9 different chains' },
    { logo: '/logos/beefy.svg', name: 'Beefy', description: 'THE Yield Optimizer. The easiest way to earn more crypto' },
]

const EcosystemALMsPage = () => <EcosystemGrid>
    {alms.map(alm => <EcosystemCard key={`alm-card-${alm.name}`} {...alm} />)}
</EcosystemGrid>

export default EcosystemALMsPage;
