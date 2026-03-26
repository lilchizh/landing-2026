"use client"

import { useAlgbBuyback, useTotalStats } from "@/app/hooks/use-dex-datas";
import useIsClient from "@/app/hooks/use-is-client";
import { getPercentChange } from "@/app/lib/percent-change";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Charts from "./charts";
import DexCards from "./dex-cards";
import TotalStats from "./total-stats";
import { CHART_SPAN, CHART_TYPE, ChartSpanType, ChartTypeType, DEXTypeType, DEX_TYPE, SupportedDEXs, SupportedDEXsWithoutAlgebraProtocol } from "./types";

const ALGEBRA_PROTOCOL = 'All Dexes'

const INTEGRAL_DEXES = [
    'Swapsicle Telos', 
    'Swapsicle Mantle', 
    'Swapsicle Taiko', 
    'Kim', 
    'Kim Base', 
    'Horizon', 
    'SpiritSwap', 
    'Fenix', 
    'Blade', 
    'Molten', 
    'Scribe', 
    'Swapx', 
    'Voltage', 
    'Henjin', 
    'Treble', 
    'W-DEX', 
    'Bulla',
    'StellaSwap V4',
    'SilverSwap',
    'Wasabee',
    'Fibonacci',
    'Yaka',
    'HyperCat',
    'Morpheus',
    'Atlantis Sonic',
    'Atlantis Monad',
    'Gliquid',
    'MorFi',
    'Thena Integral',
    'Hydrex',
    'ArchSwap',
    'Blackhole',
    'KittenSwap',
    'HX Finance',
    'Thirdfy',
    'QuickSwap Soneium',
    'QuickSwap Base',
    'Rooster',
    'Cypher',
    'Satsuma',
    'AethonSwap',
    'Nest',
    'Supernova',
    'SparkDex'
]

export default function ChartLayout ({ initialDexType = DEX_TYPE.ALL, enableNavigation = false }: { initialDexType?: DEXTypeType, enableNavigation?: boolean }) {

    const { replace } = useRouter()
    const searchParams = new URLSearchParams(useSearchParams())

    const [selectedDex, setSelectedDex] = useState<SupportedDEXs>(ALGEBRA_PROTOCOL)
    const [selectedChart, setSelectedChart] = useState<ChartTypeType>(CHART_TYPE.TVL)
    const [chartSpan, setChartSpan] = useState<ChartSpanType>(CHART_SPAN.MONTH)
    const [dexType, setDexType] = useState<DEXTypeType>(initialDexType)

    const { data: totalStats } = useTotalStats()
    const { data: algbBuyback } = useAlgbBuyback()

    const handleChartTypeSelect = (chartType: ChartTypeType) => {
        if (chartType === CHART_TYPE.ALGB_BUYBACK) setSelectedDex(ALGEBRA_PROTOCOL)
        setSelectedChart(chartType)
    }

    const handleDexTypeSelect = (dexType: DEXTypeType) => {
        setSelectedDex(ALGEBRA_PROTOCOL)
        setDexType(dexType)
        if (enableNavigation) {
            searchParams.set('version', dexType.toLowerCase())
            replace(`?${searchParams}`, { scroll: false })
        }
    }

    const { currentTVL, currentVolume, currentFees } = useMemo(() => {

        if (!totalStats) return {}

        const {
            dexTypesTvlSummaryNow,
            dexTypesTvlSummary24,
            dexTypesVolumeSummaryNow,
            dexTypesVolumeSummary24,
            dexTypesFeesSummaryNow,
            dexTypesFeesSummary24,
        } = Object.entries(totalStats)
            .filter(([dex]) => dexType === DEX_TYPE.ALL ? true : dexType === DEX_TYPE.INTEGRAL ? INTEGRAL_DEXES.includes(dex) : !INTEGRAL_DEXES.includes(dex))
            .reduce((acc, [, v]: any) => ({
                dexTypesTvlSummaryNow: +v.daysData[1].tvlUSD + acc.dexTypesTvlSummaryNow,
                dexTypesTvlSummary24: +v.daysData[2].tvlUSD + acc.dexTypesTvlSummary24,

                dexTypesVolumeSummaryNow: +v.daysData[1].volumeUSD + acc.dexTypesVolumeSummaryNow,
                dexTypesVolumeSummary24: +v.daysData[2].volumeUSD + acc.dexTypesVolumeSummary24,
                
                dexTypesFeesSummaryNow: +v.daysData[1].feesUSD + acc.dexTypesFeesSummaryNow,
                dexTypesFeesSummary24: +v.daysData[2].feesUSD + acc.dexTypesFeesSummary24,
            }), {
                dexTypesTvlSummaryNow: 0,
                dexTypesTvlSummary24: 0,
                dexTypesVolumeSummaryNow: 0,
                dexTypesVolumeSummary24: 0,
                dexTypesFeesSummaryNow: 0,
                dexTypesFeesSummary24: 0,
            })

        const tvlSummaryNow = dexTypesTvlSummaryNow
        const tvlSummary24 = dexTypesTvlSummary24
    
        const volumeSummaryNow = dexTypesVolumeSummaryNow
        const volumeSummary24 = dexTypesVolumeSummary24
    
        const feesSummaryNow = dexTypesFeesSummaryNow
        const feesSummary24 = dexTypesFeesSummary24

        if (selectedDex === ALGEBRA_PROTOCOL) {

            return {
                currentTVL: {
                    value: tvlSummaryNow,
                    change: getPercentChange(tvlSummaryNow, tvlSummary24),
                },
                currentVolume: {
                    value: volumeSummaryNow,
                    change: getPercentChange(volumeSummaryNow, volumeSummary24),
                },
                currentFees: {
                    value: feesSummaryNow,
                    change: getPercentChange(feesSummaryNow, feesSummary24),
                }
            }

        }

        if (!totalStats[selectedDex]) return {}

        return {
            currentTVL: {
                value: totalStats[selectedDex].daysData[1].tvlUSD,
                change: getPercentChange(totalStats[selectedDex].daysData[1].tvlUSD, totalStats[selectedDex].daysData[2].tvlUSD),
            },
            currentVolume: {
                value: totalStats[selectedDex].daysData[1].volumeUSD,
                change: getPercentChange(totalStats[selectedDex].daysData[1].volumeUSD, totalStats[selectedDex].daysData[2].volumeUSD),
            },
            currentFees: {
                value: totalStats[selectedDex].daysData[1].feesUSD,
                change: getPercentChange(totalStats[selectedDex].daysData[1].feesUSD, totalStats[selectedDex].daysData[2].feesUSD),
            }
        }

    }, [selectedDex, totalStats, dexType])


    const currentALGBBuyback = useMemo(() => {

        if (!algbBuyback) return

        const len = algbBuyback.buybackHistory.length - 1

        return {
            value: algbBuyback.buybackHistory[len].value,
            change: getPercentChange(algbBuyback.buybackHistory[len].value, algbBuyback.buybackHistory[len - 1].value)
        }
    }, [algbBuyback])

    const chartData = useMemo(() => {

        if (!totalStats || !algbBuyback) return

        const dexTypesDaysData = Object.entries(totalStats)
            .filter(([dex]) => dexType === DEX_TYPE.ALL ? true : dexType === DEX_TYPE.INTEGRAL ? INTEGRAL_DEXES.includes(dex) : !INTEGRAL_DEXES.includes(dex))
            .reduce((acc: { [key: number]: any }, [dex, v]: any) => {

                for (const day of v.daysData) {
                    acc[day.date] = {
                        date: day.date,
                        tvlUSD: +day.tvlUSD + (acc[day.date]?.tvlUSD || 0),
                        volumeUSD: +day.volumeUSD + (acc[day.date]?.volumeUSD || 0),
                        feesUSD: +day.feesUSD + (acc[day.date]?.feesUSD || 0),
                    }
                }

                return acc

            }, {})
        
        const source = selectedChart === 'ALGB Buyback' ?  [...algbBuyback.buybackHistory].reverse() : selectedDex === ALGEBRA_PROTOCOL ? Object.values(dexTypesDaysData).reverse() : totalStats[selectedDex].daysData

        const data = source.map((v: any) => {
            if (selectedChart === 'ALGB Buyback') {
                return {
                    time: +v.time,
                    value: +v.value
                }
            } else if (selectedChart === 'Fees') {
                return {
                    time: +v.date,
                    value: +v.feesUSD
                }
            } else if (selectedChart === 'Total Value Locked') {
                return {
                    time: +v.date,
                    value: +v.tvlUSD
                }
            } else {
                return {
                    time: +v.date,
                    value: +v.volumeUSD
                }
            }
        })

        if (selectedDex === ALGEBRA_PROTOCOL) {
            return data.reverse().slice(selectedChart === CHART_TYPE.ALGB_BUYBACK ? -Math.ceil(Number(chartSpan) / 7) : -chartSpan)
        }

        return data.reverse().slice(-chartSpan)

    }, [totalStats, algbBuyback, selectedChart, selectedDex, chartSpan, dexType])


    const dexesTVL = Object.entries(totalStats || {})
        .filter(([dex]) => dexType === DEX_TYPE.ALL ? true : dexType === DEX_TYPE.INTEGRAL ? INTEGRAL_DEXES.includes(dex) : !INTEGRAL_DEXES.includes(dex))
        .reduce((acc, [dex, v]: [string, any]) => ({ ...acc, [dex]: v.daysData[0].tvlUSD }), {})

    const sortedByTvl = dexesTVL ? Object.entries<any>(dexesTVL).sort(([, valuesA]: [string, any[]], [, valuesB]: [string, any[]]) => {
        if (Number(valuesA) < Number(valuesB)) {
            return 1
        } else {
            return -1
        }
    }).map(([dex]) => dex as SupportedDEXsWithoutAlgebraProtocol) : [];

    useEffect(() => {
        if (enableNavigation) {
            const version = searchParams.get('version')

            if (!version) {
                searchParams.set('version', 'all')
                replace(`?${searchParams}`, { scroll: false })
            } else if (version.toUpperCase() in DEX_TYPE) {
                setDexType(version.toUpperCase() as DEXTypeType)
            }
        }
    }, [enableNavigation, searchParams, replace])

    const { isClient } = useIsClient()

    if (!isClient) return null;

    return <section id="statistics">
        <div
            className="py-20"
        >

            <div className="flex items-center justify-between flex-col md:flex-row mb-8">

                <h2 className="text-h3 md:text-h1">Statistics</h2>

                <div className="flex ml-auto whitespace-nowrap overflow-auto w-screen md:w-fit mt-4 md:mt-0">
                    <button className={`w-full h-fit px-6 py-3 border-b-2 duration-75 text-small ${dexType === DEX_TYPE.ALL ? 'border-black' : 'border-transparent text-black/50 hover:border-black/50'}`} onClick={() => handleDexTypeSelect(DEX_TYPE.ALL)}>All Versions</button>
                    <button className={`w-full h-fit px-6 py-3 border-b-2 duration-75 text-small ${dexType === DEX_TYPE.INTEGRAL ? 'border-black' : 'border-transparent text-black/50 hover:border-black/50'}`} onClick={() => handleDexTypeSelect(DEX_TYPE.INTEGRAL)}>Algebra Integral</button>
                    <button className={`w-full h-fit px-6 py-3 border-b-2 duration-75 text-small ${dexType === DEX_TYPE.V3 ? 'border-black' : 'border-transparent text-black/50 hover:border-black/50'}`} onClick={() => handleDexTypeSelect(DEX_TYPE.V3)}>Algebra V3</button>
                </div>

            </div>

            <div className="flex flex-col text-black lg:mx-0 md:rounded-3xl">

                <div className="flex flex-col lg:flex-row w-full lg:pb-10">
                    <div className="flex-1 w-full">
                        <TotalStats currentTVL={currentTVL} currentVolume={currentVolume} currentFees={currentFees} currentALGBBuyback={currentALGBBuyback} selectedChart={selectedChart} selectChart={handleChartTypeSelect} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full overflow-x-auto flex-1 lg:max-w-[308px]">
                        <DexCards isDisabled={selectedChart === CHART_TYPE.ALGB_BUYBACK} selectedDex={selectedDex} selectDex={(dex) => setSelectedDex(dex!)} sortedByTvl={sortedByTvl} />
                    </div>
                    <div className="w-full flex-1">
                        <div className="h-full min-h-[608px]">
                            <Charts chartData={chartData} chartType={selectedChart} chartDEX={selectedDex} chartSpan={chartSpan} setChartSpan={setChartSpan} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
