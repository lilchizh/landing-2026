import { useMemo } from "react";
import { useAbsoluteData, useTotalStats } from "./use-dex-datas";

export function useStats () {

    const { data: absoluteData } = useAbsoluteData();
    const { data: totalStats } = useTotalStats()

    const tempTvl = useMemo(() => {
        if (!totalStats) return 150_000_000

        return Object.values(totalStats).reduce((acc: number, v: any) => acc + Number(v.daysData[1].tvlUSD), 0)
    }, [totalStats])

    const { volumeOneDay } = useMemo(() => {
        if (!absoluteData) return { tvl: 150_000_000, volumeOneDay: 120_000_000 };

        return {
            tvl: absoluteData.Total[1].tvlUSD,
            volumeOneDay: absoluteData.Total[1].volumeUSD
        };
    }, [absoluteData]);


    return {
        tvl: tempTvl,
        volumeOneDay
    }

}