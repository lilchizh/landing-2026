import FeatureLayout from "../components/feature-layout";

const features = [
    { icon: "/icons/features/incentive-farming/flexible-rewards.svg", title: "Flexible Rewards" },
    { icon: "/icons/features/incentive-farming/precise-distribution.svg", title: "Precise Distribution" },
    { icon: "/icons/features/incentive-farming/built-in-feature.svg", title: "Built-in feature" },
    { icon: "/icons/features/incentive-farming/time-based-campaigns.svg", title: "Time-based campaigns" },
    { icon: "/icons/features/incentive-farming/boosting-liquidity.svg", title: "Boosting Liquidity" },
    { icon: "/icons/features/incentive-farming/one-click-creation.svg", title: "One-click Creation" },
];

const FeaturesIncentiveFarmingPage = () => <FeatureLayout 
    chip={"Incentive Farming"}
    title={"Native farming on liquidity positions"}
    description={"Let users earn fees & extra rewards directly on a DEX, boosting engagement & liquidity depth"}
    docsLink={"https://docs.algebra.finance"}
    additionalDescription={"Reward LPs without sending users off-platform: provide highest APRs with CL pools & encourage users with extra yield"}
    features={features}
    image="/images/features/incentive-farming.png"
    previousLink="/features/plugins-architecture/"
    nextLink="/features/boosted-pools/"
/>

export default FeaturesIncentiveFarmingPage;