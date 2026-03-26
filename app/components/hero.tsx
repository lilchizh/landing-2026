import Image from "next/image";
import { SecondaryButton } from "./buttons";
import ArrowIcon from "./icons/arrow";
import Container from "./container";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";
import { useState } from "react";
import FormModal from "../form/components/form-modal";

const Hero = () => {

    const [open, setOpen] = useState(false);

    return (
        <section className="relative h-[100svh] w-full overflow-hidden">
            <FormModal isOpen={open} onClose={() => setOpen(false)} />
            <Image
                src="/hero.jpg"
                alt="Hero background with pyramid"
                fill
                className="block md:hidden object-cover object-bottom"
            />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-8%,rgba(103,184,240,0.45)_0%,rgba(103,184,240,0)_72%),radial-gradient(42%_52%_at_0%_0%,rgba(252,75,228,0.36)_0%,rgba(252,75,228,0)_72%)]" />
            </div>
            <Container className="relative flex flex-col h-full justify-center pb-24 pt-[calc(var(--header-height)_+_2.5rem)] text-center lg:pb-0 lg:pt-[calc(var(--header-height)_+_5rem)]">
                <div className="w-full">
                    <div className="text-h3 md:text-h1 md:pb-3">Leading DEX Infrastructure</div>
                    <p className="my-4 md:my-6 text-body md:text-body-l">
                        Launch a production-ready DEX in weeks, not months.
                        <br />
                        Modular infrastructure for teams building on EVM.
                    </p>
                    <SecondaryButton onClick={() => setOpen(true)}>
                        Build a DEX today
                        <ArrowIcon />
                    </SecondaryButton>
                </div>
                <div className="relative flex-1 overflow-visible">
                    <Image
                        src="/hero.png"
                        alt="Hero background with pyramid"
                        fill
                        className="hidden md:block w-full flex-1 object-cover overflow-visible"
                    />
                </div>
            </Container>

            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-end gap-8 lg:flex lg:flex-col">
                <div className="text-right">
                    <div className="text-h4 leading-none font-medium text-black">
                        $<CountUp to={150} duration={1.6} />M
                    </div>
                    <p className="mt-2 text-small">TVL</p>
                </div>
                <div className="text-right">
                    <div className="text-h4 leading-none font-medium text-black">
                        $<CountUp to={200} duration={1.8} />B+
                    </div>
                    <p className="mt-2 text-caption">TOTAL VOLUME</p>
                </div>
                <div className="text-right">
                    <div className="text-h4 leading-none font-medium text-black">
                        <CountUp to={100} duration={1.4} />+
                    </div>
                    <p className="mt-2 text-caption">INTEGRATED DEXES</p>
                </div>
                <div className="text-right">
                    <div className="text-h4 leading-none font-medium text-black">
                        <CountUp to={50} duration={1.4} />+
                    </div>
                    <p className="mt-2 text-caption">EVM CHAINS</p>
                </div>
            </div>

            <div className="absolute inset-x-4 bottom-4 grid grid-cols-4 gap-3 lg:hidden">
                <div className="text-center">
                    <div className="text-body-l leading-none font-medium text-black">
                        $<CountUp to={150} duration={1.6} />M
                    </div>
                    <p className="mt-1 text-caption">TVL</p>
                </div>
                <div className="text-center">
                    <div className="text-body-l leading-none font-medium text-black">
                        $<CountUp to={200} duration={1.8} />B+
                    </div>
                    <p className="mt-1 text-caption">TOTAL VOLUME</p>
                </div>
                <div className="text-center">
                    <div className="text-body-l leading-none font-medium text-black">
                        <CountUp to={100} duration={1.4} />
                    </div>
                    <p className="mt-1 text-caption">INTEGRATED DEXES</p>
                </div>
                <div className="text-center">
                    <div className="text-body-l leading-none font-medium text-black">
                        <CountUp to={50} duration={1.4} />+
                    </div>
                    <p className="mt-1 text-caption">EVM CHAINS</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;
