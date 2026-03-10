import { Suspense } from "react";
import Container from "./container";
import { SWRConfig } from "swr";
import { chartCacheProvider } from "../statistics/services/cacheProvider";
import Chart from "../statistics/components/chart";

const Statistics = () => <section>
    <Container>
        <Suspense>
            <SWRConfig value={{ provider: chartCacheProvider }}>
                <Chart />
            </SWRConfig>
        </Suspense>
    </Container>
</section>

export default Statistics;