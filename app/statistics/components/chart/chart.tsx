"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CHART_SPAN, CHART_VIEW, type IChart } from "./types";
import * as LightWeightCharts from "lightweight-charts";
import useIsClient from "@/app/hooks/use-is-client";
import { format } from "@/app/lib/currency-formatter";

export default function Chart({ chartData, chartType, chartTitle, chartCurrentValue, chartSpan, setChartSpan }: IChart) {

    const chartRef = useRef<HTMLDivElement>(null);

    const { isClient } = useIsClient();

    const [series, setSeries] = useState<LightWeightCharts.ISeriesApi<"Line" | "Area" | "Histogram"> | undefined>();
    const [chartCreated, setChart] = useState<LightWeightCharts.IChartApi | undefined>();

    const [displayValue, setDisplayValued] = useState(chartCurrentValue)
    const [displayDate, setDisplayDate] = useState(new Date().toLocaleDateString())

    const handleResize = useCallback(() => {
        if (chartCreated && chartRef?.current?.parentElement) {
            chartCreated.resize(chartRef.current.offsetWidth - 32, chartRef.current.offsetHeight);
            chartCreated.timeScale().fitContent();
            chartCreated.timeScale().scrollToPosition(0, false);
        }
    }, [chartCreated, chartRef])

    const crosshairMoveHandler = useCallback((param: any) => {
        if (param.point) {
            setDisplayValued(format.format(param.seriesData.values().next().value.value))
            setDisplayDate(new Date(param.time * 1000).toLocaleDateString())
        } else {
            setDisplayValued(chartCurrentValue)
            setDisplayDate(new Date().toLocaleDateString())
        }
    }, [chartCurrentValue])

    useEffect(() => {
        if (!isClient) {
            return;
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isClient, chartRef, handleResize]);

    useEffect(() => {
        if (!chartData && chartCreated && series) {
            chartCreated.remove()
            chartCreated.unsubscribeCrosshairMove(crosshairMoveHandler)
        }
    }, [chartData, chartCreated, series, crosshairMoveHandler])


    useLayoutEffect(() => {
        if (!chartRef.current || !chartData) return;

        if (chartRef.current.hasChildNodes()) chartRef.current.innerHTML = "";

        const chart = LightWeightCharts.createChart(chartRef.current, {
            width: chartRef.current.parentElement?.clientWidth,
            height: chartRef.current.parentElement?.clientHeight || 460,
            layout: {
                background: {
                    type: LightWeightCharts.ColorType.Solid,
                    color: 'transparent'
                },
                textColor: "#585858",
                attributionLogo: false,
            },
            grid: {
                vertLines: {
                    color: "rgba(244, 244, 245, 0.8)",
                },
                horzLines: {
                    color: "rgba(244, 244, 245, 0.8)",
                    style: 3
                },
            },
            crosshair: {
                mode: LightWeightCharts.CrosshairMode.Magnet,
            },
            leftPriceScale: {
                visible: true,
                borderColor: "#ffffff"
            },
            rightPriceScale: {
                visible: false,
                borderColor: "#ffffff",
            },
            timeScale: {
                borderColor: "#ffffff",
            },
            handleScale: {
                mouseWheel: false,
            },
            handleScroll: {
                pressedMouseMove: false,
                vertTouchDrag: false,
                horzTouchDrag: false,
                mouseWheel: false
            }
        });

        let series;

        if (chartType === CHART_VIEW.AREA) {

            series = chart?.addSeries(LightWeightCharts.AreaSeries, {
                topColor: "rgba(35, 226, 255, 0.6)",
                bottomColor: "rgba(35, 226, 255, 0.04)",
                lineColor: "rgba(35, 226, 255, 1)",
                priceScaleId: 'left',
                priceFormat: {
                    type: 'custom',
                    formatter: (price: LightWeightCharts.BarPrice) => format.format(price)
                },
                autoscaleInfoProvider: () => ({
                    priceRange: {
                        minValue: 0,
                        maxValue: Math.max(...chartData.map(v => v.value))
                    }
                })
            });

        } else {
            series = chart?.addSeries(LightWeightCharts.HistogramSeries, {
                color: "rgba(35, 226, 255, 1)",
                priceLineVisible: false,
                priceScaleId: 'left',
                priceFormat: {
                    type: 'custom',
                    formatter: (price: LightWeightCharts.BarPrice) => format.format(price)
                },
                autoscaleInfoProvider: () => ({
                    priceRange: {
                        minValue: 0,
                        maxValue: Math.max(...chartData.map(v => v.value))
                    }
                })
            });
        }

        series.setData(chartData)

        chart.timeScale().fitContent();

        setChart(chart);
        setSeries(series)


    }, [chartRef, chartData, chartType, isClient]);

    useEffect(() => {

        if (!chartCreated) return

        chartCreated.subscribeCrosshairMove(crosshairMoveHandler)

        return () => chartCreated.unsubscribeCrosshairMove(crosshairMoveHandler)

    }, [chartCreated, crosshairMoveHandler])

    useEffect(() => {
        setDisplayValued(chartCurrentValue)
    }, [chartCurrentValue])

    if (!isClient) return null

    return <>
        <div className="flex flex-col-reverse px-3 text-small lg:px-0 lg:flex-row items-start lg:justify-between">

            <div>

                <div className="mb-2 text-black/50">{chartTitle}</div>

                <div className="text-h2 mb-2">
                    {displayValue ? displayValue : chartCurrentValue ? chartCurrentValue : <div className="min-h-[56px]">
                        <span className="w-[24px] h-[24px] inline-block border-2 border-solid border-white rounded-full border-b-transparent animate-[rotation_1s_linear_infinite]"></span>
                    </div>}
                </div>

                <div className="text-[#b7b7b7] text-sm mb-5">
                    {displayValue ? displayDate : null}
                </div>

            </div>

            <div className="w-full md:w-fit">
                <div className="block md:hidden uppercase mb-1.5 text-black/50">Interval</div>
                <div className="flex w-full lg:w-fit bg-black/5 text-black/70 border border-dex-card-bg text-center cursor-pointer rounded-sm text-body mt-4 lg:mt-0 mb-4 lg:mb-0 p-1">
                    <button className={`py-1 px-2 w-full border-2 border-solid rounded-sm ${chartSpan === CHART_SPAN.MONTH ? 'border-white bg-white text-black' : 'border-transparent hover:bg-slate-bg'}`} onClick={() => setChartSpan(CHART_SPAN.MONTH)}>30D</button>
                    <button className={`py-1 px-2 w-full border-2 border-solid rounded-sm ${chartSpan === CHART_SPAN.THREE_MONTH ? 'border-white bg-white text-black' : 'border-transparent hover:bg-slate-bg'}`} onClick={() => setChartSpan(CHART_SPAN.THREE_MONTH)}>3M</button>
                    <button className={`py-1 px-2 w-full border-2 border-solid rounded-sm ${chartSpan === CHART_SPAN.YEAR ? 'border-white bg-white text-black' : 'border-transparent hover:bg-slate-bg'}`} onClick={() => setChartSpan(CHART_SPAN.YEAR)}>ALL</button>
                </div>
            </div>

        </div>
        <div className="relative">
            <div style={{ height: '460px' }} ref={chartRef}></div>
            {!chartData ? <div className="absolute flex items-center justify-center w-full h-full top-0">
                <span className="w-[48px] h-[48px] border-2 border-solid border-white rounded-full border-b-transparent animate-[rotation_1s_linear_infinite]"></span>
            </div> : null}
        </div>
    </>

}