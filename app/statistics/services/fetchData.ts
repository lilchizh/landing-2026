import { algbBuybackAPI, totalStatsAPI, landingDayDataAPI, absoluteStatsAPI } from "@/app/shared/apis";

export const fetchData = async (api: string) => {
    const data = await fetch(api);

    if (!data.ok) throw new Error("Failed to fetch data");

    return data.json();
};

export const fetchTotalData = () => fetchData(totalStatsAPI);
export const fetchALGBBuybackData = () => fetchData(algbBuybackAPI);
export const fetchAbsoluteData = () => fetchData(absoluteStatsAPI);
export const fetchLandingDayData = () => fetchData(landingDayDataAPI);
