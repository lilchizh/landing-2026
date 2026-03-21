"use client"

// Dexes
import QuickswapLogo from "@/public/logos/quickswap.svg"
import StellaswapLogo from '@/public/logos/stellaswap.svg'
import ZyberswapLogo from '@/public/logos/zyberswap.svg'
import CamelotLogo from '@/public/logos/camelot.svg'
import ThenaLogo from '@/public/logos/thena.svg'
import SynthLogo from '@/public/logos/synthswap.svg'
import LynexLogo from '@/public/logos/lynex.svg'
import SwapsicleLogo from '@/public/logos/swapsicle.svg'
import SwaprLogo from '@/public/logos/swapr.svg'
import KimLogo from '@/public/logos/kim.png'
import HerculesLogo from '@/public/logos/hercules.svg'
import HorizonLogo from '@/public/logos/horizon.svg'
import SilverSwapLogo from '@/public/logos/silverswap.svg'
import FenixLogo from '@/public/logos/fenix.png'
import BladeLogo from '@/public/logos/blade.png'
import MoltenLogo from '@/public/logos/molten.jpg'
import ScribeLogo from '@/public/logos/scribe.png'
import MorFiLogo from '@/public/logos/morfi.png'
import OcelexLogo from '@/public/logos/ocelex.png'
import SwapXLogo from '@/public/logos/swapx.svg'
import HenjinLogo from '@/public/logos/henjin.jpg'
import VoltageLogo from '@/public/logos/voltage.svg'
import TrebleLogo from '@/public/logos/treble.png'
import WdexLogo from '@/public/logos/wdex.png'
import BullaLogo from '@/public/logos/bulla.png'
import WasabeeLogo from '@/public/logos/wasabee.svg'
import FibonacciLogo from '@/public/logos/fibonacci.jpg'
import GliquidLogo from '@/public/logos/gliquid.jpg'
import YakaLogo from '@/public/logos/yaka.svg'
import HyperCatLogo from '@/public/logos/hypercat.png'
import MorpheusLogo from '@/public/logos/morpheus.jpg'
import AtlantisOnSonicLogo from '@/public/logos/atlantis-on-sonic.jpg'
import HydrexLogo from '@/public/logos/hydrex.jpg'
import ArchLogo from '@/public/logos/arch.jpg'
import BlackholeLogo from '@/public/logos/blackhole.jpg'
import KittenSwapLogo from '@/public/logos/kittenswap.jpg'
import HxLogo from '@/public/logos/hx.jpg'
import ThirdfyLogo from '@/public/logos/thirdfy.jpg'
import RoosterLogo from '@/public/logos/rooster.jpg'
import CypherLogo from '@/public/logos/cypher.jpg'
import SatsumaLogo from '@/public/logos/satsuma.svg'
import AtlantisOnMonadLogo from '@/public/logos/atlantis-on-monad.png'
import AethonSwapLogo from '@/public/logos/aethonswap.png'
import NestLogo from '@/public/logos/nest.svg'
import SupernovaLogo from '@/public/logos/supernova.svg'
import SparkLogo from '@/public/logos/spark.svg'

// Chains
import PolygonLogo from '@/public/logos/polygon.svg'
import MoonbeamLogo from '@/public/logos/moonbeam.svg'
import DogechainLogo from '@/public/logos/dogechain.svg'
import ArbitrumLogo from '@/public/logos/arbitrum.svg'
import BNBLogo from '@/public/logos/bnb.svg'
import OptimismLogo from '@/public/logos/optimism.svg'
import BaseLogo from '@/public/logos/base.svg'
import LineaLogo from '@/public/logos/linea.svg'
import MantleLogo from '@/public/logos/mantle.svg'
import TelosLogo from '@/public/logos/telos.svg'
import GnosisLogo from '@/public/logos/gnosis.svg'
import ModeLogo from '@/public/logos/mode.svg'
import MetisLogo from '@/public/logos/metis.svg'
import FantomLogo from '@/public/logos/fantom.svg'
import BlastLogo from '@/public/logos/blast.svg'
import SankoLogo from '@/public/logos/sanko.png'
import XAILogo from '@/public/logos/xai.png'
import XLayerLogo from '@/public/logos/xlayer.svg'
import CoreLogo from '@/public/logos/core.svg'
import ScrollLogo from '@/public/logos/scroll.png'
import GravityLogo from '@/public/logos/gravity.svg'
import TaikoLogo from '@/public/logos/taiko.svg'
import ApechainLogo from '@/public/logos/apechain.svg'
import MorphLogo from '@/public/logos/morph.svg'
import ZircuitLogo from '@/public/logos/zircuit.svg'
import SonicLogo from '@/public/logos/sonic.png'
import FuseLogo from '@/public/logos/fuse.svg'
import BerachainLogo from '@/public/logos/berachain.svg'
import FormLogo from '@/public/logos/form.png'
import SoneiumLogo from '@/public/logos/soneium.jpg'
import HyperliquidLogo from '@/public/logos/hyperliquid.png'
import SeiLogo from '@/public/logos/sei.svg'
import MonadLogo from '@/public/logos/monad.svg'
import BotanixLogo from '@/public/logos/botanix.jpg'
import AvaxLogo from '@/public/logos/avalanche.svg'
import PlumeLogo from '@/public/logos/plume.svg'
import EthLogo from '@/public/logos/ethereum.svg'
import CitreaLogo from '@/public/logos/citrea.svg'
import FlareLogo from '@/public/logos/flare.jpg'

import AlgebraLogo from '@/public/all-dexes.png'

import type { IDexCards, IDexDetails, SupportedDEXsWithoutAlgebraProtocol } from './types'

import { useState } from "react"

import Image from "next/image"

const _dexes: Record<SupportedDEXsWithoutAlgebraProtocol, IDexDetails> = {
    ['QuickSwap Polygon']: { name: 'QuickSwap', network: 'Polygon', dexLogo: QuickswapLogo.src, networkLogo: PolygonLogo.src, id: 'QuickSwap Polygon' },
    ['ZyberSwap']: { name: 'ZyberSwap', network: 'Arbitrum', dexLogo: ZyberswapLogo.src, networkLogo: ArbitrumLogo.src, id: 'ZyberSwap' },
    ['ZyberSwap Optimism']: { name: 'ZyberSwap', network: 'Optimism', dexLogo: ZyberswapLogo.src, networkLogo: OptimismLogo.src, id: 'ZyberSwap Optimism' },
    ['Thena BNB']: { name: 'Thena', network: 'BNB', dexLogo: ThenaLogo.src, networkLogo: BNBLogo.src, id: 'Thena BNB' },
    ['Thena opBNB']: { name: 'Thena', network: 'opBNB', dexLogo: ThenaLogo.src, networkLogo: BNBLogo.src, id: 'Thena opBNB' },
    ['Camelot']: { name: 'Camelot', network: 'Arbitrum', dexLogo: CamelotLogo.src, networkLogo: ArbitrumLogo.src, id: 'Camelot' },
    ['Camelot XAI']: { name: 'Camelot', network: 'XAI', dexLogo: CamelotLogo.src, networkLogo: XAILogo.src, id: 'Camelot XAI' },
    ['Camelot Sanko']: { name: 'Camelot', network: 'Sanko', dexLogo: CamelotLogo.src, networkLogo: SankoLogo.src, id: 'Camelot Sanko' },
    ['Camelot Gravity']: { name: 'Camelot', network: 'Gravity', dexLogo: CamelotLogo.src, networkLogo: GravityLogo.src, id: 'Camelot Gravity' },
    ['Camelot ApeChain']: { name: 'Camelot', network: 'ApeChain', dexLogo: CamelotLogo.src, networkLogo: ApechainLogo.src, id: 'Camelot ApeChain' },
    ['StellaSwap']: { name: 'StellaSwap', network: 'Moonbeam', dexLogo: StellaswapLogo.src, networkLogo: MoonbeamLogo.src, id: 'StellaSwap' },
    ['StellaSwap V4']: { name: 'StellaSwap V4', network: 'Moonbeam', dexLogo: StellaswapLogo.src, networkLogo: MoonbeamLogo.src, id: 'StellaSwap V4' },
    ['Swapsicle Mantle']: { name: 'Swapsicle', network: 'Mantle', dexLogo: SwapsicleLogo.src, networkLogo: MantleLogo.src, id: 'Swapsicle Mantle' },
    ['Swapsicle Telos']: { name: 'Swapsicle', network: 'Telos', dexLogo: SwapsicleLogo.src, networkLogo: TelosLogo.src, id: 'Swapsicle Telos' },
    ['Swapsicle Taiko']: { name: 'Swapsicle', network: 'Taiko', dexLogo: SwapsicleLogo.src, networkLogo: TaikoLogo.src, id: 'Swapsicle Taiko' },
    ['SynthSwap']: { name: 'SynthSwap', network: 'Base', dexLogo: SynthLogo.src, networkLogo: BaseLogo.src, id: 'SynthSwap' },
    ['Lynex']: { name: 'Lynex', network: 'Linea', dexLogo: LynexLogo.src, networkLogo: LineaLogo.src, id: 'Lynex' },
    ['QuickSwap Dogechain']: { name: 'QuickSwap', network: 'Dogechain', dexLogo: QuickswapLogo.src, networkLogo: DogechainLogo.src, id: 'QuickSwap Dogechain' },
    ['QuickSwap zkEVM']: { name: 'QuickSwap', network: 'zkEVM', dexLogo: QuickswapLogo.src, networkLogo: PolygonLogo.src, id: 'QuickSwap zkEVM' },
    ['QuickSwap xLayer']: { name: 'QuickSwap', network: 'xLayer', dexLogo: QuickswapLogo.src, networkLogo: XLayerLogo.src, id: 'QuickSwap xLayer' },
    ['QuickSwap Soneium']: { name: 'QuickSwap', network: 'Soneium', dexLogo: QuickswapLogo.src, networkLogo: SoneiumLogo.src, id: 'QuickSwap Soneium' },
    ['QuickSwap Base']: { name: 'QuickSwap', network: 'Base', dexLogo: QuickswapLogo.src, networkLogo: BaseLogo.src, id: 'QuickSwap Base' },
    ['Molten']: { name: 'Molten', network: 'Core', dexLogo: MoltenLogo.src, networkLogo: CoreLogo.src, id: 'Molten' },
    ['Swapr']: { name: 'Swapr', network: 'Gnosis', dexLogo: SwaprLogo.src, networkLogo: GnosisLogo.src, id: 'Swapr' },
    ['Kim']: { name: 'Kim', network: 'Mode', dexLogo: KimLogo.src, networkLogo: ModeLogo.src, id: 'Kim' },
    ['Kim Base']: { name: 'Kim', network: 'Base', dexLogo: KimLogo.src, networkLogo: BaseLogo.src, id: 'Kim Base' },
    ['Hercules']: { name: 'Hercules', network: 'Metis', dexLogo: HerculesLogo.src, networkLogo: MetisLogo.src, id: 'Hercules' },
    // ['Horizon']: { name: 'Horizon', network: 'Linea', dexLogo: HorizonLogo.src, networkLogo: LineaLogo.src, id: 'Horizon' },
    ['SpiritSwap']: { name: 'SilverSwap', network: 'Fantom', dexLogo: SilverSwapLogo.src, networkLogo: FantomLogo.src, id: 'SpiritSwap' },
    ['SilverSwap']: { name: 'SilverSwap', network: 'Sonic', dexLogo: SilverSwapLogo.src, networkLogo: SonicLogo.src, id: 'SilverSwap' },
    ['Fenix']: { name: 'Fenix', network: 'Blast', dexLogo: FenixLogo.src, networkLogo: BlastLogo.src, id: 'Fenix' },
    ['Blade'] : { name: 'Blade', network: 'Blast', dexLogo: BladeLogo.src, networkLogo: BlastLogo.src, id: 'Blade' },
    ['Scribe'] : { name: 'Scribe', network: 'Scroll', dexLogo: ScribeLogo.src, networkLogo: ScrollLogo.src, id: 'Scribe' },
    ['MorFi'] : { name: 'MorFi', network: 'Morph', dexLogo: MorFiLogo.src, networkLogo: MorphLogo.src, id: 'MorFi' },
    ['Ocelex'] : { name: 'Ocelex', network: 'Zircuit', dexLogo: OcelexLogo.src, networkLogo: ZircuitLogo.src, id: 'Ocelex' },
    ['Swapx']: { name: 'SwapX', network: 'Sonic', dexLogo: SwapXLogo.src, networkLogo: SonicLogo.src, id: 'Swapx' },
    ['Voltage']: { name: 'Voltage', network: 'Fuse', dexLogo: VoltageLogo.src, networkLogo: FuseLogo.src, id: 'Voltage' },
    ['Henjin']: { name: 'Henjin', network: 'Base', dexLogo: HenjinLogo.src, networkLogo: BaseLogo.src, id: 'Henjin' },
    ['Treble']: { name: 'Treble', network: 'Base', dexLogo: TrebleLogo.src, networkLogo: BaseLogo.src, id: 'Treble' },
    ['W-DEX']: { name: 'W-DEX', network: 'Polygon', dexLogo: WdexLogo.src, networkLogo: PolygonLogo.src, id: 'W-DEX' },
    ['Bulla']: { name: 'Bulla', network: 'Berachain', dexLogo: BullaLogo.src, networkLogo: BerachainLogo.src, id: 'Bulla' },
    ['Wasabee']: { name: 'Wasabee', network: 'Berachain', dexLogo: WasabeeLogo.src, networkLogo: BerachainLogo.src, id: 'Wasabee' },
    ['Fibonacci']: { name: 'Fibonacci', network: 'Form', dexLogo: FibonacciLogo.src, networkLogo: FormLogo.src, id: 'Fibonacci' },
    ['Gliquid']: { name: 'Gliquid', network: 'HyperLiquid', dexLogo: GliquidLogo.src, networkLogo: HyperliquidLogo.src, id: 'Gliquid' },
    ['Yaka']: { name: 'Yaka', network: 'Sei', dexLogo: YakaLogo.src, networkLogo: SeiLogo.src, id: 'Yaka' },
    ['HyperCat']: { name: 'HyperCat', network: 'HyperLiquid', dexLogo: HyperCatLogo.src, networkLogo: HyperliquidLogo.src, id: 'HyperCat' },
    ['Morpheus']: { name: 'Morpheus', network: 'Monad', dexLogo: MorpheusLogo.src, networkLogo: MonadLogo.src, id: 'Morpheus' },
    ['Atlantis Sonic']: { name: 'Atlantis Sonic', network: 'Sonic', dexLogo: AtlantisOnSonicLogo.src, networkLogo: SonicLogo.src, id: 'Atlantis Sonic' },
    ['Atlantis Monad']: { name: 'Atlantis Monad', network: 'Monad', dexLogo: AtlantisOnMonadLogo.src, networkLogo: MonadLogo.src, id: 'Atlantis Monad' },
    ['Thena Integral']: { name: 'Thena Integral', network: 'BSC', dexLogo: ThenaLogo.src, networkLogo: BNBLogo.src, id: 'Thena Integral' },
    ['Hydrex']: { name: 'Hydrex', network: 'Base', dexLogo: HydrexLogo.src, networkLogo: BaseLogo.src, id: 'Hydrex' },
    ['ArchSwap']: { name: 'ArchSwap', network: 'Botanix', dexLogo: ArchLogo.src, networkLogo: BotanixLogo.src, id: 'ArchSwap' },
    ['Blackhole']: { name: 'Blackhole', network: 'Avalanche', dexLogo: BlackholeLogo.src, networkLogo: AvaxLogo.src, id: 'Blackhole' },
    ['KittenSwap']: { name: 'KittenSwap', network: 'HyperLiquid', dexLogo: KittenSwapLogo.src, networkLogo: HyperliquidLogo.src, id: 'KittenSwap' },
    ['HX Finance']: { name: 'HX Finance', network: 'HyperLiquid', dexLogo: HxLogo.src, networkLogo: HyperliquidLogo.src, id: 'HX Finance' },
    ['Thirdfy']: { name: 'Thirdfy', network: 'Base', dexLogo: ThirdfyLogo.src, networkLogo: BaseLogo.src, id: 'Thirdfy' },
    ['Rooster']: { name: 'Rooster', network: 'Plume', dexLogo: RoosterLogo.src, networkLogo: PlumeLogo.src, id: 'Rooster' },
    ['Cypher']: { name: 'Cypher', network: 'Ethereum', dexLogo: CypherLogo.src, networkLogo: EthLogo.src, id: 'Cypher' },
    ['Satsuma']: { name: 'Satsuma', network: 'Citrea', dexLogo: SatsumaLogo.src, networkLogo: CitreaLogo.src, id: 'Satsuma' },
    ['AethonSwap']: { name: 'AethonSwap', network: 'Monad', dexLogo: AethonSwapLogo.src, networkLogo: MonadLogo.src, id: 'AethonSwap' },
    ['Nest']: { name: 'Nest', network: 'HyperLiquid', dexLogo: NestLogo.src, networkLogo: HyperliquidLogo.src, id: 'Nest' },
    ['Supernova']: { name: 'Supernova', network: 'Ethereum', dexLogo: SupernovaLogo.src, networkLogo: EthLogo.src, id: 'Supernova' },
    ['SparkDex']: { name: 'SparkDex', network: 'Flare', dexLogo: SparkLogo.src, networkLogo: FlareLogo.src, id: 'SparkDex' },
}

function DexSelector({ isDisabled, selectedDex, selectDex, sortedByTvl }: IDexCards) {

    const [isOpen, setIsOpen] = useState(false)

    const dexes = [
        { name: 'All Dexes', network: 'All chains', dexLogo: AlgebraLogo.src, networkLogo: null, id: 'All Dexes' } as IDexDetails,
        ...sortedByTvl
            .filter(dex => _dexes[dex])
            .map(dex => _dexes[dex]),
    ]
        .map((dex, i) => i === 0 ? dex : ({ ...dex, locked: dex?.locked ? true : isDisabled }))

    const openSelector = () => {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeSelector = () => {
        setIsOpen(false)
        document.body.style.overflow = 'auto'
    }

    const handleSelectDex = (dex: IDexDetails) => {
        if (dex.locked) {
            selectDex(null)
        } else {
            selectDex(dex.id)
        }
        closeSelector()
    }

    return <>
        {isOpen && <div className="fixed h-[100dhv] inset-0 bg-dex-card-bg" style={{ zIndex: 10 }}>
            <div className="flex px-2.5 py-3">
                <div className="flex-1">
                    <button onClick={closeSelector} className="text-title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L17.9999 6.0001" stroke="currentColor" strokeWidth="2" />
                            <path d="M6 6L17.9999 17.9999" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
                <div className="text-small whitespace-no-wrap flex-2">DEXes running on Algebra</div>
                <div className="flex-1"></div>
            </div>
            <div className={`w-full flex flex-col overflow-auto`} style={{ height: 'calc(100% - 48px)' }}>
                {sortedByTvl.length ?
                    dexes.map((dex, i) => <div key={i} className={`relative flex whitespace-nowrap items-center border-solid  border-l-[8px] text-left flex-row py-6 px-8 ${dex.locked ? '' : 'cursor-pointer'} select-none ${selectedDex === dex.id ? 'bg-chart-list-selected-bg border-chart-list-selected-border' : `bg-chart-list-default-bg border-chart-list-default-border ${dex.locked ? 'cursor-default' : 'hover:bg-slate-bg'}`}`} onClick={() => handleSelectDex(dex)} >
                        <div className="relative min-w-[32px]">
                            {
                                dex.dexLogo ?
                                    <Image src={dex.dexLogo}
                                        alt={dex.name}
                                        width={32}
                                        height={32}
                                        className={`object-contain rounded-full border-1 w-[32px] h-[32px]`}
                                        loading="lazy"
                                    /> :
                                    <div className={`w-[32px] h-[32px] rounded-full bg-[#211f29] border-solid border-2 border-[#36f] bg-no-repeat bg-center bg-[length:25px_25px]`} style={{ backgroundImage: `url(${AlgebraLogo})` }}></div>
                            }
                            {
                                dex.networkLogo ?
                                    <Image src={dex.networkLogo}
                                        alt={dex.network}
                                        width={20}
                                        height={20}
                                        className={`absolute top-[-6px] right-[-6px] object-contain rounded-full border-solid border-2 w-[20px] h-[20px] bg-black ${selectedDex === dex.id ? 'border-[#130e28]' : 'border-[#0f0e15]'}`}
                                        loading="lazy"
                                    /> : null
                            }
                        </div>
                        <div className="text-title ml-4">
                            <div className={`font-semibold`}>{dex.name}</div>
                            <div className="rounded-b-lg text-xs">{dex.network}</div>
                        </div>
                        {
                            dex.locked ?
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                                </div> : null
                        }
                    </div>) : null
                }
            </div>
        </div>}
        <div className="w-full">
            <div className="text-small text-black/50 mb-1.5">Integrated DEXES</div>
            <button className="flex items-center justify-start gap-4 w-full px-3 py-2 bg-dex-card-bg border-2 border-black/10 rounded-md" onClick={openSelector}>
                <Image src={selectedDex !== 'All Dexes' ? _dexes[selectedDex]?.dexLogo! : AlgebraLogo.src} alt="Dex logo" width={32} height={32} />
                <span className="text-[#5b5b5b]">{selectedDex}</span>
                <svg className="ml-auto" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.706889 1.20703L5.20689 5.70703L10.207 0.707031" stroke="#000001" strokeWidth="2" />
                </svg>
            </button>
        </div>
    </>

}

export default function DexCards({ isDisabled, selectedDex, selectDex, sortedByTvl }: IDexCards) {

    const Loader = () => <span className="w-[24px] h-[24px] inline-block border-2 border-solid border-title rounded-full border-b-transparent animate-[rotation_1s_linear_infinite]"></span>

    const dexes = [
        { name: 'All Dexes', network: 'All chains', dexLogo: '/all-dexes.png', networkLogo: null, id: 'All Dexes' } as IDexDetails,
        ...sortedByTvl
            .filter(dex => _dexes[dex])
            .map((dex) => _dexes[dex]),
    ]
        .map((dex, i) => i === 0 ? dex : ({ ...dex, locked: dex?.locked ? true : isDisabled }))


    return <>
        <div className="flex lg:hidden py-6 px-4">
            <DexSelector isDisabled={isDisabled} selectDex={selectDex} selectedDex={selectedDex} sortedByTvl={sortedByTvl} />
        </div>
        <div className="hidden lg:flex lg:flex-col h-full lg:max-h-[568px]" dir={'rtl'}>
            <div className="p-4 w-full text-left hidden text-small text-black/50 lg:block">DEXes running on Algebra</div>
                <div className={`dex-scrollbar w-full flex flex-row-reverse lg:flex-col lg:overflow-y-scroll lg:rounded-bl-lg p-4 lg:p-0 gap-4 lg:gap-0 ${sortedByTvl.length ? '' : 'h-full'}`}>
                    {sortedByTvl.length ?
                        dexes.map((dex, i) => <div key={i} className={`relative flex whitespace-nowrap items-center border-solid text-left flex-row-reverse rounded-lg lg:rounded-none lg:border-l-[8px] py-6 px-8 ${dex.locked ? '' : 'cursor-pointer'} select-none ${selectedDex === dex.id ? 'bg-dex-card-bg border-button-primary lg:border-l-button-primary' : `bg-white border-white ${dex.locked ? 'cursor-default' : 'hover:bg-dex-card-bg/50'}`}`} onClick={() => dex.locked ? null : selectDex(dex.id)} >
                            <div className="relative min-w-[32px]">
                                {
                                    dex.dexLogo ?
                                        <Image src={dex.dexLogo}
                                            alt={dex.name}
                                            width={36}
                                            height={36}
                                            className={`object-contain rounded-full w-[36px] h-[36px]`}
                                            loading="lazy"
                                        /> :
                                        <div className={`w-[36px] h-[36px] rounded-full bg-slate-bg border-solid border-2 border-[#36f] bg-no-repeat bg-center bg-[length:25px_25px]`} style={{ backgroundImage: `url(${AlgebraLogo})` }}></div>
                                }
                                {
                                    dex.networkLogo ?
                                        <Image src={dex.networkLogo}
                                            alt={dex.network}
                                            width={20}
                                            height={20}
                                            className={`absolute top-[-6px] right-[-6px] object-contain rounded-full border-solid border-2 w-[20px] h-[20px] bg-white border-black/5`}
                                            loading="lazy"
                                        /> : null
                                }
                            </div>
                            <div className="ml-4 text-small">
                                <div>{dex.name}</div>
                                <div className="rounded-b-lg text-[#b7b7b7] text-xs">{dex.network}</div>
                            </div>
                            {
                                dex.locked ?
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10">
                                    </div> : null
                            }
                        </div>) : <div className="flex items-center h-full justify-center bg-slate-bg">
                            <Loader />
                        </div>
                    }
                </div>
        </div>
    </>
}
