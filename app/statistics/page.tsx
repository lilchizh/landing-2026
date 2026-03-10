import { Suspense } from "react";
import { WrappedChart } from "./components/chart/wrappedChart";

export const metadata = {
    title: "Algebra Labs | Statistics",
    description: "Algebra Labs statistics page",
};

const StatisticsPage = () => {
    return (
        <Suspense>
            <WrappedChart />
        </Suspense>
    );
};

export default StatisticsPage;
