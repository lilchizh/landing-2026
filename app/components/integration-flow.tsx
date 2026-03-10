import Container from "./container";
import Image from "next/image";
import { PrimaryButton } from "./buttons";
import ArrowIcon from "./icons/arrow";

const flowCards = [
    {
        step: "1",
        title: "Get in touch to acquire a license",
        description:
            "Tell us about your chain and launch goals. We will align on scope, timelines, and the right Algebra setup.",
    },
    {
        step: "2",
        title: "Integrate Algebra DEX Model",
        description:
            "We orchestrate every layer, from smart contracts to the UI and indexing stack.",
    },
    {
        step: "3",
        title: "Go Live",
        description: "Roll out a production-ready DEX",
    },
];

const integrationChips = [
    "Contract Deployment",
    "Plugin Selection",
    "Frontend Customization",
    "Indexer Integration",
    "Quality and Assurance",
];

const IntegrationFlow = () => (
    <section className="py-16 lg:py-24">
        <Container className="px-4">
            <div className="text-center">
                <h1 className="text-h3 md:text-h1">Integration Flow</h1>
                <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-body-l">
                    The same liquidity surface serves different participants, <br className="hidden md:block" /> depending on
                    how they interact with it.
                </p>
            </div>
            <div className="mt-4 md:mt-8 grid grid-cols-1 gap-2 md:gap-6 lg:grid-cols-3">
                {flowCards.map((card) => (
                    <article
                        key={card.step}
                        className="flex min-h-[260px] flex-row md:flex-col gap-6 md:gap-0 items-center md:items-start rounded-[8px] bg-dex-card-bg px-4 py-6 md:p-8 text-left lg:min-h-[320px]"
                    >
                        <div className="inline-flex min-h-13 min-w-13 h-fit items-center justify-center rounded-[8px] bg-button-primary text-body">
                            {card.step}
                        </div>
                        <div>
                            <h4 className="md:mt-8 text-h5">{card.title}</h4>
                            <p className="mt-2 md:mt-4 text-body md:text-body-l">{card.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-8 mx-auto max-w-[700px] flex flex-wrap items-center justify-center gap-3">
                {integrationChips.map((chip) => (
                    <div
                        key={chip}
                        className="inline-flex items-center gap-2 rounded-[10px] bg-white px-4 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
                    >
                        <Image src="/icons/check.svg" alt="" width={14} height={14} aria-hidden />
                        <span className="text-small">{chip}</span>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <PrimaryButton href="/form" classes="!text-black">
                    Build DEX
                    <ArrowIcon size={20} />
                </PrimaryButton>
            </div>
        </Container>
    </section>
);

export default IntegrationFlow;
