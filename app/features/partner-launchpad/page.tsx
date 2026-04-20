import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/partner-launchpad/one-click-token.svg", title: "One-click token creation" },
    { icon: "/icons/features/partner-launchpad/bonding-curve.svg", title: "Bonding curve" },
    { icon: "/icons/features/partner-launchpad/auto-lp.svg", title: "Auto LP" },
    { icon: "/icons/features/partner-launchpad/built-in-incentive.svg", title: "Built-in incentives system" },
    { icon: "/icons/features/partner-launchpad/fully-integrated.svg", title: "Fully integrated, no extra dev" },
    { icon: "/icons/features/partner-launchpad/cross-chain.svg", title: "Cross-chain ready" },
];

const FeaturesPartnerLaunchpadPage = () => <FeatureLayout 
    chip={"Partner Launchpad"}
    title={"Plug-and-play token launch infrastructure"}
    description={"Launch tokens directly on top of your DEX – all within Algebra codebase"}
    docsLink={"https://docs.algebra.finance"}
    additionalDescription={"A launchpad for rug-proof token launches, natively available to every Algebra-powered DEX by GU Labs"}
    features={features}
    image="/images/features/partner-launchpad.png"
    previousLink="/features/ve-33/"
    nextLink="/features/partner-perps/"
/>

export default FeaturesPartnerLaunchpadPage;