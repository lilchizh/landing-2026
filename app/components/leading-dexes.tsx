import Container from "./container";
import Image from "next/image";
import { SecondaryHollowButton } from "./buttons";

interface DexItem {
    name: string;
    logoSrc: string;
}

const dexes: DexItem[] = [
    { name: "blackhole", logoSrc: "/logos/blackhole.jpg" },
    { name: "supernova", logoSrc: "/logos/supernova.jpg" },
    { name: "camelot", logoSrc: "/logos/camelot.svg" },
    { name: "hydrex", logoSrc: "/logos/hydrex.jpg" },
    { name: "thena", logoSrc: "/logos/thena.svg" },
    { name: "quickswap", logoSrc: "/logos/quickswap.svg" },
    { name: "nest", logoSrc: "/logos/nest.jpg" },
    { name: "rooster", logoSrc: "/logos/rooster.jpg" },
    { name: "molten", logoSrc: "/logos/molten.jpg" },
    { name: "cypher", logoSrc: "/logos/cypher.jpg" },
    { name: "stellaswap", logoSrc: "/logos/stellaswap.svg" },
    { name: "swapx", logoSrc: "/logos/swapx.jpg" },
    { name: "sparkdex", logoSrc: "/logos/spark.jpg" },
    { name: "kittenswap", logoSrc: "/logos/kittenswap.jpg" },
    { name: "main", logoSrc: "/logos/main.png" },
    { name: "yaka", logoSrc: "/logos/yaka.png" },
];

const LeadingDexes = () => (
    <section className="py-16 lg:py-24">
        <Container className="px-5 md:px-0">
            <div className="text-center">
                <h1 className="text-h3 md:text-h1">Leading DEXes</h1>
                <p className="mt-4 md:mt-8 text-body md:text-body-l">
                    Powering the next generation of decentralized <br/> exchanges across chains
                </p>
            </div>
            <div className="relative mt-4 md:mt-8">
                <div className="grid grid-cols-3 gap-1 lg:grid-cols-8 lg:gap-4">
                    {dexes.map((dex) => (
                        <article
                            key={dex.name}
                            className="flex w-full flex-col gap-3 rounded-[4px] bg-dex-card-bg p-4 last:hidden last:md:flex"
                        >
                            <Image
                                src={dex.logoSrc}
                                alt={`${dex.name} logo`}
                                width={48}
                                height={48}
                                className="h-[42px] w-[42px] rounded-full object-contain lg:h-[48px] lg:w-[48px]"
                            />
                            <p className="text-small">{dex.name}</p>
                        </article>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-b from-transparent to-background lg:hidden" />
            </div>
      <div className="relative -mt-9 md:mt-8 flex justify-center">
        <SecondaryHollowButton href="/ecosystem/dexes" classes="!px-2 !py-1 bg-white">
          View all 100+ DEXes →
        </SecondaryHollowButton>
      </div>
    </Container>
  </section>
);

export default LeadingDexes;
