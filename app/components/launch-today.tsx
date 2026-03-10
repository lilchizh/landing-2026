import Container from "./container";
import { SecondaryButton } from "./buttons";
import ArrowIcon from "./icons/arrow";

const LaunchToday = () => (
  <section className="px-4 md:px-0 py-16 lg:py-24">
    <Container className="relative min-h-[540px] overflow-hidden bg-dex-card-bg px-8 sm:px-8 lg:px-12 rounded-lg">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-8%,rgba(103,184,240,0.5)_0%,rgba(103,184,240,0)_72%),radial-gradient(42%_52%_at_0%_0%,rgba(252,75,228,0.42)_0%,rgba(252,75,228,0)_72%),radial-gradient(42%_52%_at_100%_0%,rgba(252,75,228,0.42)_0%,rgba(252,75,228,0)_72%)]" />
      </div>
      <div className="relative flex min-h-[540px] flex-col items-center justify-center text-center">
        <h1 className="text-h3 md:text-h1">
          Launch your DEX with <br /> Algebra today
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-body-l">
          Join 100+ protocols that chose Algebra as their concentrated <br className="block md:hidden" /> liquidity
          backbone. Start with a free integration consultation.
        </p>
        <div className="mt-8 flex justify-center">
          <SecondaryButton href="/form">
            Build a DEX easily
            <ArrowIcon />
          </SecondaryButton>
        </div>
      </div>
    </Container>
  </section>
);

export default LaunchToday;
