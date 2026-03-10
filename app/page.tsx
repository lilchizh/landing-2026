"use client"
import Head from "next/head";
import { SWRConfig } from "swr";
import { chartCacheProvider, heroCacheProvider } from "./statistics/services/cacheProvider";
import { Suspense } from "react";
import Chart from "./statistics/components/chart";
import Hero from "./components/hero";
import LeadingDexes from "./components/leading-dexes";
import WhyAlgebra from "./components/why-algebra";
import IntegrationFlow from "./components/integration-flow";
import LaunchToday from "./components/launch-today";
import InNumbers from "./components/in-numbers";
import Products from "./components/products";
import Statistics from "./components/statistics";

const HomePage = () => {
  return <section>
    <Head>
      <title>Algebra Labs</title>
    </Head>
    <SWRConfig value={{ provider: heroCacheProvider }}>
      <Hero />
    </SWRConfig>
    <LeadingDexes />
    <WhyAlgebra />
    <Products />
    <IntegrationFlow />
    <Statistics />
    <InNumbers />
    <LaunchToday />
  </section>
}

export default HomePage;
