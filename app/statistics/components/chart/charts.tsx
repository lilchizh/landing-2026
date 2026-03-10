import { useMemo } from "react"
import Chart from "./chart"
import { CHART_TYPE, CHART_VIEW, type ICharts } from "./types"
import { format } from "@/app/lib/currency-formatter"

export default function Charts( { chartData, chartType, chartDEX, chartSpan, setChartSpan }: ICharts ) {

    const currentValue = useMemo(() => {

        if (!chartData) return

        return format.format(chartData[chartData.length - 1].value)

    }, [chartData])

    const chartView = chartType === CHART_TYPE.TVL ? CHART_VIEW.AREA : CHART_VIEW.BAR

    const chartTitle = `${chartType} ${chartDEX ? `(${chartDEX === 'All Dexes' ? 'Algebra-powered DEXes' : chartDEX})` : ''}`

    return <div className="flex flex-col w-full h-full lg:pl-8 bg-slate-bg">
            <div className="flex flex-col pt-0 md:pl-8 pb-8">
                <Chart chartData={chartData} chartType={chartView} chartTitle={chartTitle} chartCurrentValue={currentValue} chartSpan={chartSpan} setChartSpan={setChartSpan} />
            </div>
    </div>
}