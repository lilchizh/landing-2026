import FeatureLayout from "../components/feature-layout";

const additionalFeatures = [
    { title: "ALM-ready architecture", description: "Seamlessly integrates with ALM Vaults for automated rewards." },
    { title: "Efficient emissions", description: "Reducing idle farming & maximizing real yield." },
    { title: "Flexible tokenomics", description: "Configurable emission splits (LPs, rebase, treasury) to fit any DEX model." },
]

const FeaturesVe33Page = () => <FeatureLayout 
    chip={"Algebra ve(3,3)"}
    title={"Optimized Vote Escrow Tokenomics"}
    description={"Enhanced with Integral & available for all DEXs running on our modular architecture"}
    docsLink={"https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/algebra-ve-3-3"}
    additionalFeatures={additionalFeatures}
    image="/images/features/ve-33.png"
    previousLink="/features/boosted-pools/"
    nextLink="/features/partner-launchpad/"
/>

export default FeaturesVe33Page;