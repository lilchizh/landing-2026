import { useEffect, useState } from "react";
import { fetchALGBBuybackData, fetchTotalData, fetchLandingDayData, fetchAbsoluteData } from "../statistics/services/fetchData";
import useSWR, { useSWRConfig } from "swr";

export function useTotalStats() {
    const { cache } = useSWRConfig();

    const { data: totalStats, mutate: mutateTotalStats } = useSWR("totalData", fetchTotalData, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
    });

    useEffect(() => {
        const lastUpdated = cache.get("totalDataLastUpdated");
        const shouldFetch = !lastUpdated || isTimeToUpdate(Number(lastUpdated));

        if (shouldFetch) {
            mutateTotalStats();
            cache.set("totalDataLastUpdated", new Date().getTime() as any);
        }

        const timeleft = timeleftToNextUpdate(10, 7);

        // update data every 10 minutes at 7th minute mark
        const timeoutId = setTimeout(() => {
            mutateTotalStats();
            cache.set("totalDataLastUpdated", new Date().getTime() as any);
        }, timeleft);

        return () => clearTimeout(timeoutId);
    }, [mutateTotalStats, cache]);

    return { data: totalStats };
}

export function useAlgbBuyback() {
    const { cache } = useSWRConfig();

    const { data: algbBuyback, mutate: mutateAlgbBuyback } = useSWR("ALGBBuyback", fetchALGBBuybackData, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
    });

    useEffect(() => {
        const lastUpdated = cache.get("buybackLastUpdated");
        const shouldFetch = !lastUpdated || isTimeToUpdate(lastUpdated as number, 30);

        if (shouldFetch) {
            mutateAlgbBuyback();
            cache.set("buybackLastUpdated", new Date().getTime() as any);
        }

        const timeleft = timeleftToNextUpdate(30, 7);

        // update data every 30 minutes at 7th minute mark
        const timeoutId = setTimeout(() => {
            mutateAlgbBuyback();
            cache.set("buybackLastUpdated", new Date().getTime() as any);
        }, timeleft);

        return () => clearTimeout(timeoutId);
    }, [mutateAlgbBuyback, cache]);

    return { data: algbBuyback };
}

export function useLandingDayData() {
    const { cache } = useSWRConfig();

    const { data: dayData, mutate: mutateDayData } = useSWR("landingDayData", fetchLandingDayData, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
    });

    const [prevData, setPrevData] = useState(dayData);

    useEffect(() => {
        const lastUpdated = cache.get("lastUpdated");
        const shouldFetch = !lastUpdated || isTimeToUpdate(Number(lastUpdated));

        if (shouldFetch) {
            setPrevData(dayData);
            mutateDayData();
            cache.set("lastUpdated", new Date().getTime() as any);
        }

        const timeleft = timeleftToNextUpdate(10, 7);

        // update data every 10 minutes at 7th minute mark
        const timeoutId = setTimeout(() => {
            setPrevData(dayData);
            mutateDayData();
            cache.set("lastUpdated", new Date().getTime() as any);
        }, timeleft);

        return () => clearTimeout(timeoutId);
    }, [mutateDayData, cache, dayData]);

    return { data: dayData, prevData };
}

export function useAbsoluteData() {
    const { cache } = useSWRConfig();

    const { data: absoluteData, mutate: mutateAbsoluteData } = useSWR("absoluteData", fetchAbsoluteData, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
    });

    const [prevData, setPrevData] = useState(absoluteData);

    useEffect(() => {
        const lastUpdated = cache.get("lastUpdated");
        const shouldFetch = !lastUpdated || isTimeToUpdate(Number(lastUpdated));

        if (shouldFetch) {
            setPrevData(absoluteData);
            mutateAbsoluteData();
            cache.set("lastUpdated", new Date().getTime() as any);
        }

        const timeleft = timeleftToNextUpdate(10, 7);

        // update data every 10 minutes at 7th minute mark
        const timeoutId = setTimeout(() => {
            setPrevData(absoluteData);
            mutateAbsoluteData();
            cache.set("lastUpdated", new Date().getTime() as any);
        }, timeleft);

        return () => clearTimeout(timeoutId);
    }, [mutateAbsoluteData, cache, absoluteData]);

    return { data: absoluteData, prevData };
}

function isTimeToUpdate(timestamp: number, pastMinutes: number = 11): boolean {
    const currentTime = new Date().getTime();

    return currentTime - timestamp > 1000 * 60 * pastMinutes; // more than pastMinutes minutes elapsed
}

function timeleftToNextUpdate(everyMinutes: number = 10, minuteMark: number = 7): number {
    const currentTime = new Date();
    const currentMinutes = currentTime.getMinutes();

    let nextUpdateMinutes: number;

    // Find the next 7th minute mark
    if (currentMinutes % everyMinutes < minuteMark) {
        nextUpdateMinutes = Math.floor(currentMinutes / everyMinutes) * everyMinutes + minuteMark;
    } else {
        nextUpdateMinutes = Math.floor(currentMinutes / everyMinutes) * everyMinutes + everyMinutes + minuteMark;
    }

    // If the nextUpdateMinutes exceeds 59, adjust the hour and reset minutes to 8
    if (nextUpdateMinutes >= 60) {
        nextUpdateMinutes -= 60;
        currentTime.setHours(currentTime.getHours() + 1);
    }

    currentTime.setMinutes(nextUpdateMinutes, 0, 0);
    const nextUpdateTime = currentTime.getTime();

    const currentTimeInMs = new Date().getTime();
    const timeToNextUpdate = nextUpdateTime - currentTimeInMs;

    return timeToNextUpdate;
}
