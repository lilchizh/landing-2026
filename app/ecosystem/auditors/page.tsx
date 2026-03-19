import EcosystemCard from "../components/EcosystemCard"
import EcosystemGrid from "../components/EcosystemGrid"

export const metadata = {
    title: "Algebra Labs | Ecosystem | Auditors",
    description: "Algebra Labs ecosystem auditors page",
};

const auditors = [
    { logo: '/logos/paladin.svg', name: 'Paladin', description: "Smart contract audits with a focus on safety from the consumer's perspective" },
    { logo: '/logos/bailsec.png', name: 'Bailsec', description: 'High-quality smart contract audits conducted by experienced senior auditors only' },
    { logo: '/logos/hacken.svg', name: 'Hacken', description: 'We make #Web3 a safer place by protecting projects from getting hacked' },
    { logo: '/logos/mixbytes.svg', name: 'MixBytes', description: 'Making DeFi yet more efficient and secure' },
    { logo: '/logos/abdk.svg', name: 'ABDK', description: 'Smart contract and cryptography audits' },
    { logo: '/logos/code4rena.svg', name: 'code4rena', description: 'Web3 security, on demand. $20M+ in rewards paid. 950+ High Severity vulns found' },
    { logo: '/logos/hexens.svg', name: 'Hexens', description: 'New approach to cybersecurity solutions. Indisputable skills and a unique perspective on every single case are the value we create' },
    { logo: '/logos/hypernative.png', name: 'Hypernative Labs', description: 'Hypernative stops zero day cyber-attacks and economic risks. We are protecting digital assets, protocols, and Web3 applications from significant losses' },
]

const EcosystemAuditorsPage = () => <EcosystemGrid>
    {auditors.map(auditor => <EcosystemCard key={`auditor-card-${auditor.name}`} {...auditor} />)}
</EcosystemGrid>

export default EcosystemAuditorsPage;
