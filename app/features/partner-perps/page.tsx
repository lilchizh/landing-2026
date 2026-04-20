import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/partner-perps/deep-liquidity.svg", title: "Deep liquidity" },
    { icon: "/icons/features/partner-perps/no-markets.svg", title: "No market makers needed" },
    { icon: "/icons/features/partner-perps/white-label.svg", title: "Fully white-label" },
    { icon: "/icons/features/partner-perps/automated-execution.svg", title: "Automated execution" },
    { icon: "/icons/features/partner-perps/risk-management.svg", title: "Risk management" },
    { icon: "/icons/features/partner-perps/high-leverage.svg", title: "High leverage" },
];

const FeaturesPartnerLaunchpadPage = () => <FeatureLayout 
    chip={"Partner Perps"}
    title={"Instant access to onchain derivatives"}
    description={"Launch perps trading without infrastructure overhead via Orbs Network"}
    docsLink={"https://docs.algebra.finance"}
    additionalDescription={"Complete, ready-to-launch solution for onchain perps trading, allowing DEXs to enter the derivatives market instantly"}
    features={features}
    image="/images/features/partner-perps.png"
    previousLink="/features/partner-launchpad/"
/>

export default FeaturesPartnerLaunchpadPage;