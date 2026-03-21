import Container from "./container";
import { PrimaryButton } from "./buttons";
import ArrowIcon from "./icons/arrow";
import CountUp from "@/components/CountUp";
import { useStats } from "../hooks/use-stats";

const InNumbers = () => {

    const { tvl } = useStats()

    return (
        <section className="py-16 lg:py-24">
            <Container className="px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="text-center lg:text-left">
                        <div className="inline-block text-[11px] tracking-[12%] uppercase px-1 border border-black rounded-[3px] mb-4">Your Trusted Partner</div>
                        <h1 className="mt-4 md:mt-6 text-h3 md:text-h1">
                            Algebra
                            <br />
                            in numbers
                        </h1>
                        <p className="mx-auto mt-8 max-w-xl text-body md:text-body-l lg:mx-0">
                            Helping partners to launch - and <br /> onboard with integrators &amp; key <br />
                            partnerships
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <PrimaryButton href="/form" classes="!text-black">
                                INTEGRATE
                                <ArrowIcon />
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <article className="mt-auto border-b border-black/10 pb-3 text-left">
                            <div className="text-h4 md:text-h1">
                                $<CountUp to={150} duration={1.4} />M
                            </div>
                            <p className="mt-3 text-small">TVL</p>
                        </article>

                        <article className="mt-auto border-b border-black/10 pb-3 text-left">
                            <div className="text-h4 md:text-h1">
                                $<CountUp to={200} duration={1.4} />B+
                            </div>
                            <p className="mt-3 text-small">TOTAL VOLUME</p>
                        </article>

                        <article className="mt-auto border-b border-black/10 pb-3 text-left">
                            <div className="text-h4 md:text-h1">
                                <CountUp to={100} duration={1.4} />+
                            </div>
                            <p className="mt-3 text-small">INTEGRATED DEXES</p>
                        </article>

                        <article className="mt-auto border-b border-black/10 pb-3 text-left">
                            <div className="text-h4 md:text-h1">
                                #<CountUp to={2} duration={1.4} />
                            </div>
                            <p className="mt-3 text-small">MOST POPULAR AMM PROTOCOL FOR DEXES</p>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default InNumbers;
