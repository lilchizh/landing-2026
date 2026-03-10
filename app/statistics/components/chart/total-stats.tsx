import { CHART_TYPE, type ITotalStats } from './types'
import { format } from '@/app/lib/currency-formatter'

const Loader = () => <span className="w-[24px] h-[24px] inline-block border-2 border-solid border-title rounded-full border-b-transparent animate-[rotation_1s_linear_infinite]"></span>

export default function TotalStats({ currentTVL, currentVolume, currentFees, currentALGBBuyback, selectedChart, selectChart }: ITotalStats) {

    const cards: { title: string, type: any, value: number | undefined, change: number | undefined }[] = [
        { title: 'Total Value Locked', type: CHART_TYPE.TVL, value: currentTVL?.value, change: currentTVL?.change },
        { title: 'Volume 24H', type: CHART_TYPE.VOLUME, value: currentVolume?.value, change: currentVolume?.change },
        { title: 'DEX Fees 24H', type: CHART_TYPE.FEES, value: currentFees?.value, change: currentFees?.change },
        // { title: 'ALGB Buyback 1W', type: CHART_TYPE.ALGB_BUYBACK, value: currentALGBBuyback?.value, change: currentALGBBuyback?.change }
    ]

    return <div className="flex flex-col gap-3 px-4 md:px-0 lg:gap-4 lg:flex-row w-full h-full lg:rounded-bl-lg overflow-hidden">
        {
            cards.map((card, i) =>
                <div key={i} className={`flex items-center justify-between flex-col items-start justify-start md:items-start md:justify-start md:flex-col flex-1 p-6 md:px-12 md:py-8 ${selectedChart === card.type ? 'bg-button-primary/10' : 'bg-dex-card-bg hover:bg-dex-card-bg/50 cursor-pointer'}`} onClick={() => selectChart(card.type)}>
                    <div className="text-small whitespace-nowrap text-black/50 mb-2">{card.title}</div>
                    {
                        card.value ?
                            <div className="flex md:flex-col md:flex-row items-center w-full">
                                <div className="md:ml-0 text-h4">{format.format(card.value)}</div>
                                {card.change !== undefined && <div className={`text-body ml-auto md:ml-6 ${card.change > 0 ? 'text-[#16A249]' : 'text-[#DC2828]'}`}>
                                    <span>{card.change > 0 ? '+' : ''}</span>
                                    <span>{`${card.change.toFixed(2)}%`}</span>
                                </div>
                                }
                            </div> : <div className="flex items-center min-h-[54px]">
                                <Loader />
                            </div>
                    }
                </div>
            )
        }
    </div>

}