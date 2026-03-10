export const CHART_TYPE = {
    TVL: 'Total Value Locked',
    VOLUME: 'Volume',
    FEES: 'Fees',
    ALGB_BUYBACK: 'ALGB Buyback'
} as const

export const CHART_SPAN = {
    YEAR: '365',
    THREE_MONTH: '90',
    MONTH: '30'
} as const

export const CHART_VIEW = {
    AREA: 'area',
    BAR: 'bar'
} as const

export const DEX_TYPE = {
    ALL: 'ALL',
    INTEGRAL: 'INTEGRAL',
    V3: 'V3'
} as const

export type ChartTypeType = (typeof CHART_TYPE)[keyof typeof CHART_TYPE]
export type ChartSpanType = (typeof CHART_SPAN)[keyof typeof CHART_SPAN]
export type ChartViewType = (typeof CHART_VIEW)[keyof typeof CHART_VIEW]
export type DEXTypeType = (typeof DEX_TYPE)[keyof typeof DEX_TYPE]

export type ChartPiece = { time: number, tvl: string, volume: string, fees: string };

export type StatsData = { [key: string]: ChartPiece[] | null }

export type SummaryData = { totalVolumeUSD: number; totalValueLockedUSD: number; totalFeesUSD: number }

export interface IChart {
    chartData: any[];
    chartType: ChartViewType;
    chartTitle: string;
    chartCurrentValue: string | undefined;
    chartSpan: ChartSpanType;
    setChartSpan: (chartSpan: ChartSpanType) => void
}

export interface ICharts {
    chartData: any;
    chartType: ChartTypeType;
    chartDEX: string;
    chartSpan: ChartSpanType;
    setChartSpan: (chartSpan: ChartSpanType) => void;
}

export interface IDexCards {
    isDisabled: boolean;
    selectedDex: SupportedDEXs;
    selectDex: (dex: SupportedDEXs | null) => void;
    sortedByTvl: SupportedDEXsWithoutAlgebraProtocol[];
}

export type StatsCard = {
    value: number;
    change: number;
}

export interface ITotalStats {
    currentTVL: StatsCard | undefined;
    currentVolume: StatsCard | undefined;
    currentFees: StatsCard | undefined;
    currentALGBBuyback: StatsCard | undefined;
    selectedChart: ChartTypeType;
    selectChart: (chart: ChartTypeType) => void;
}

export const SUPPORTED_DEXS = {
    ALGEBRA_PROTOCOL: 'All Dexes',
    QUICKSWAP_POLYGON: 'QuickSwap Polygon',
    ZYBERSWAP: 'ZyberSwap',
    ZYBERSWAP_OPTIMISM: 'ZyberSwap Optimism',
    THENA_BNB: 'Thena BNB',
    THENA_OPBNB: 'Thena opBNB',
    CAMELOT: 'Camelot',
    CAMELOT_XAI: 'Camelot XAI',
    CAMELOT_SANKO: 'Camelot Sanko',
    CAMELOT_GRAVITY: 'Camelot Gravity',
    CAMELOT_APECHAIN: 'Camelot ApeChain',
    STELLASWAP: 'StellaSwap',
    STELLASWAP_V4: 'StellaSwap V4',
    SWAPSICLE_MANTLE: 'Swapsicle Mantle',
    SWAPSICLE_TELOS: 'Swapsicle Telos',
    SWAPSICLE_TAIKO: 'Swapsicle Taiko',
    SYNTHSWAP: 'SynthSwap',
    LYNEX: 'Lynex',
    QUICKSWAP_DOGECHAIN: 'QuickSwap Dogechain',
    QUICKSWAP_ZKEVM: 'QuickSwap zkEVM',
    QUICKSWAP_XLAYER: 'QuickSwap xLayer',
    QUICKSWAP_SONEIUM: 'QuickSwap Soneium',
    QUICKSWAP_BASE: 'QuickSwap Base',
    SWAPR: 'Swapr',
    KIM: 'Kim',
    KIM_BASE: 'Kim Base',
    HERCULES: 'Hercules',
    // HORIZON: 'Horizon',
    SPIRITSWAP: 'SpiritSwap',
    SILVERSWAP: 'SilverSwap',
    FENIX: 'Fenix',
    BLADE: 'Blade',
    MOLTEN: 'Molten',
    SCRIBE: 'Scribe',
    MORFI: 'MorFi',
    OCELEX: 'Ocelex',
    SWAPX: 'Swapx',
    VOLTAGE: 'Voltage',
    HENJIN: 'Henjin',
    W_DEX: 'W-DEX',
    TREBLE: 'Treble',
    BULLA: 'Bulla',
    FIBONACCI: 'Fibonacci',
    WASABEE: 'Wasabee',
    GLIQUID: 'Gliquid',
    YAKA: 'Yaka',
    HYPER_CAT: 'HyperCat',
    MORPHEUS: 'Morpheus',
    ATLANTIS_SONIC: 'Atlantis Sonic',
    ATLANTIS_MONAD: 'Atlantis Monad',
    THENA_INTEGRAL: 'Thena Integral',
    HYDREX: 'Hydrex',
    ARCH_SWAP: 'ArchSwap',
    BLACKHOLE: 'Blackhole',
    KITTENSWAP: 'KittenSwap',
    HX_FINANCE: 'HX Finance',
    THIRDFY: 'Thirdfy',
    ROOSTER: 'Rooster',
    CYPHER: 'Cypher',
    SATSUMA: 'Satsuma',
    AETHONSWAP: 'AethonSwap',
    NEST: 'Nest',
    SUPERNOVA: 'Supernova',
    SPARK: 'SparkDex'
} as const;

export type SupportedDEXs = (typeof SUPPORTED_DEXS)[keyof typeof SUPPORTED_DEXS];

export type SupportedDEXsWithoutAlgebraProtocol = Exclude<SupportedDEXs, typeof SUPPORTED_DEXS.ALGEBRA_PROTOCOL>

export interface IDexDetails { 
    name: string; 
    network: string;
    dexLogo: string | null;
    networkLogo: string | null; 
    id: SupportedDEXs;
    locked?: boolean;
};
