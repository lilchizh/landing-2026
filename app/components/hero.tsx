import Image from "next/image";
import { SecondaryButton } from "./buttons";
import ArrowIcon from "./icons/arrow";
import Container from "./container";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";

const Hero = () => (
    <section className="relative h-[100svh] w-full overflow-hidden">

    {/* <div className="bg-red-500 fixed top-0">
        <LogoLoop
                            logos={gradientWave}
                            speed={20}
                            direction="left"
                            logoHeight={28}
                            gap={24}
                            hoverSpeed={0}
                            fadeOut
                            fadeOutColor="#ffffff"
                            ariaLabel="Technology partners"
                        />
                        </div> */}
        <Image
            src="/hero.jpg"
            alt="Hero background with pyramid"
            fill
            priority
            className="object-cover object-bottom"
        />
        <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-8%,rgba(103,184,240,0.45)_0%,rgba(103,184,240,0)_72%),radial-gradient(42%_52%_at_0%_0%,rgba(252,75,228,0.36)_0%,rgba(252,75,228,0)_72%)]" />
        </div>
        <Container className="relative flex h-full justify-center pb-24 pt-[calc(var(--header-height)_+_2.5rem)] text-center lg:pb-0 lg:pt-[calc(var(--header-height)_+_5rem)]">
            <div className="w-full">
                <div className="text-h3 md:text-h1 md:pb-3">Leading DEX Infrastructure</div>
                <p className="my-4 md:my-6 text-body md:text-body-l">
                    Launch a production-ready DEX in weeks, not months.
                    <br />
                    Modular infrastructure for teams building on EVM.
                </p>
                <SecondaryButton href="/">
                    Build a DEX today
                    <ArrowIcon />
                </SecondaryButton>
            </div>
        </Container>

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-end gap-8 lg:flex lg:flex-col">
            <div className="text-right">
                <div className="text-h4 leading-none font-medium text-black">
                    $<CountUp to={145} duration={1.6} />M
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
                    <CountUp to={100} duration={1.4} />
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
                    $<CountUp to={145} duration={1.6} />M
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
);

export default Hero;
