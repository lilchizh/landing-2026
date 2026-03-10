export const heroCacheProvider = () => {
    // Return an empty map if SSR
    if (typeof window === "undefined") return new Map();

    // When initializing, we restore the data from `localStorage` into a map.
    const map = new Map(JSON.parse(localStorage.getItem("hero-stats-cache") || "[]"));

    // Before unloading the app, we write back all the data into `localStorage`.
    window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("hero-stats-cache", appCache);
    });

    return map;
};

export const chartCacheProvider = () => {
    // Return an empty map if SSR
    if (typeof window === "undefined") return new Map();

    // When initializing, we restore the data from `localStorage` into a map.
    const map = new Map(JSON.parse(localStorage.getItem("chart-stats-cache") || "[]"));

    // Before unloading the app, we write back all the data into `localStorage`.
    window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("chart-stats-cache", appCache);
    });

    return map;
};
