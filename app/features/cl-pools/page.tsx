import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/cl-pools/high-efficiency.svg", title: "High efficiency" },
    { icon: "/icons/features/cl-pools/custom-lp-positions.svg", title: "Custom LP strategies" },
    { icon: "/icons/features/cl-pools/deep-liquidity.svg", title: "Deep Liquidity" },
    { icon: "/icons/features/cl-pools/increased-lp-returns.svg", title: "Increased LP returns" },
    { icon: "/icons/features/cl-pools/higher-volume.svg", title: "Higher volume with less capital" },
    { icon: "/icons/features/cl-pools/customizable-tickspacing.svg", title: "Customizable Tickspacing" },
];

const FeaturesCLPoolsPage = () => <FeatureLayout 
    chip={"CL Pools"}
    title={"Concentrated Liquidity accessible to all DEXs on EVM"}
    description={"Enable V3-style pools for flexibility & custom strategies for your users with Algebra "}
    docsLink={"https://docs.algebra.finance/algebra-integral-documentation/algebra-integral-technical-reference/core-logic/pool-overview"}
    additionalDescription={"With CL pools, LPs can choose the price range where their liquidity is active, resulting in:"}
    features={features}
    image="/images/features/cl-pools.png"
    nextLink="/features/plugins-architecture/"
/>

export default FeaturesCLPoolsPage;