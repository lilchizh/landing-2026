import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/plugins-architecture/farming.svg", title: "Farming" },
    { icon: "/icons/features/plugins-architecture/limit-orders.svg", title: "Limit Orders" },
    { icon: "/icons/features/plugins-architecture/gas-discounts.svg", title: "Gas Discounts" },
    { icon: "/icons/features/plugins-architecture/oracles.svg", title: "Oracles" },
    { icon: "/icons/features/plugins-architecture/kyc.svg", title: "KYC & Permissioned Access" },
];

const additionalFeatures = [
    { title: "Auditable & Trustless", description: "Independent contracts with clear interfaces." },
    { title: "Composable", description: "Chain multiple plugins together seamlessly." },
    { title: "Zero Core Modifications", description: "Extend functionality while the core stays immutable." },
]

const FeaturesPluginsArchitecturePage = () => <FeatureLayout 
    chip={"Plugins Architecture"}
    title={"Custom CL pools with V4 plugins"}
    description={"Enable any DeFi feature via hooks on top of pools"}
    docsLink={"https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/plugins/overview"}
    additionalDescription={"With the ‘plugin + core’ architecture, Algebra Integral allows DEXs to upgrade easily."}
    features={features}
    additionalFeatures={additionalFeatures}
    image="/images/features/plugin-architecture.png"
    previousLink="/features/cl-pools/"
    nextLink="/features/incentive-farming/"
/>

export default FeaturesPluginsArchitecturePage;