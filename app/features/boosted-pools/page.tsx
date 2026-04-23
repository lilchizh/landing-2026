import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/boosted-pools/enhanced-router.svg", title: "Enhanced Router" },
    { icon: "/icons/features/boosted-pools/no-liquidity-fragmentation.svg", title: "No Liquidity Fragmentation" },
    { icon: "/icons/features/boosted-pools/dual-yield.svg", title: "Dual Yield Generation" },
    { icon: "/icons/features/boosted-pools/sdk.svg", title: "Dedicated SDK" },
    { icon: "/icons/features/boosted-pools/higher-volume.svg", title: "Higher Volume With Less Capital" },
    { icon: "/icons/features/boosted-pools/ux.svg", title: "Seamless UX" },
];

const FeaturesBoostedPoolsPage = () => <FeatureLayout 
    chip={"Boosted Pools"}
    title={"CLAMM pools with built-in yield"}
    description={"Boosted Pools combine trading fees with\nERC-4626 yield, enabling seamless use of both wrapped & underlying tokens for extra yield"}
    docsLink={"https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/boosted-pools"}
    additionalDescription={"Integrating ERC-4626 vault strategies via lending & liquidity staking on top of pools"}
    features={features}
    image="/images/features/boosted-pools.png"
    previousLink="/features/incentive-farming/"
    nextLink="/features/ve-33/"
/>

export default FeaturesBoostedPoolsPage;