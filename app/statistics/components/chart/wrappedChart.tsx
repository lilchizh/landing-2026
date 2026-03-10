"use client";
import { SWRConfig } from "swr";
import { DEX_TYPE } from "./types";
import { chartCacheProvider } from "../../services/cacheProvider";
import ChartLayout from ".";

export const WrappedChart = () => {
    return (
        <SWRConfig value={{ provider: chartCacheProvider }}>
            <ChartLayout initialDexType={DEX_TYPE.ALL} enableNavigation />
        </SWRConfig>
    );
};
