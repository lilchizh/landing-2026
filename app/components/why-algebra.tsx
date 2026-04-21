import Container from "./container";

const WhyAlgebra = () => (
  <section className="py-16 lg:py-24">
    <Container className="px-4 md:px-0 text-center">
      <h1 className="text-h3 md:text-h1">Why Algebra?</h1>
      <p className="mt-4 md:mt-8 text-body md:text-body-l">
        EVM&apos;s leading DEX infrastructure - delivering best-in-class <br className="hidden md:block"/>
        development, deep liquidity efficiency, and a modular <br className="hidden md:block"/> architecture built
        for secure, scalable innovation.
      </p>
      <div className="md:px-0 mt-4 md:mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">

        <article
          className="flex min-h-[300px] md:min-h-[340px] flex-col rounded-[4px] bg-cover bg-center p-6 md:p-8 text-left order-1"
          style={{ backgroundImage: "url('/images/why-algebra/mature.png')" }}
        >
          <h4 className="text-h5 md:text-h4">Mature &amp; Trusted Protocol</h4>
          <div className="flex flex-col gap-3 flex-1 items-center justify-end mt-8 md:mt-0">
            
                <div className="flex items-center p-3 bg-white rounded-xl">
                    <span className="text-h3 min-w-[100px]">#2</span>
                    <span className="text-small tracking-[6%]">most popular AMM protocol for DEXes</span>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl">
                    <span className="text-h3 min-w-[100px]">100+</span>
                    <span className="text-small tracking-[6%]">DEX launches on 50+ chains after 5 years of building</span>
                </div>

          </div>
        </article>

        <article className="flex min-h-[300px] md:min-h-[340px] flex-col rounded-[4px] bg-dex-card-bg p-6 md:p-8 text-left order-2">
          <h4 className="text-h5 md:text-h4">
            Comprehensive
            <br/>
            Feature Set
          </h4>
          <p className="mt-4 text-body md:text-body-l">
            Everything for a modern DEX, 
            <br className="hidden md:block"  />
            built-in:
          </p>

          <div className="flex flex-wrap gap-2 mt-8 md:mt-12">
            { ['Concentrated Liquidity', 'KYC', 'Adaptive Liquidity', 'AI agents', 'Incentive Modules', 've(3,3)', 'Dynamic Fee Mechanism'].map((el) => (
                <div key={el} className="flex items-center gap-1.5 py-1 px-2.5 bg-white text-small rounded-lg shadow-sm tracking-[6%]">
                    <span className="w-1.5 h-1.5 rounded-full bg-button-primary" />
                    <span>{el}</span>
                </div>
            )) }
          </div>
        </article>

        <article
          className="relative overflow-hidden flex min-h-[300px] md:min-h-[220px] flex-col rounded-[4px] bg-dex-card-bg p-6 pb-0 md:p-8 text-left md:row-span-2 lg:min-h-[456px] lg:bg-[url('/images/why-algebra/v4.png')] lg:bg-cover lg:bg-center order-4 md:order-3"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] bg-[linear-gradient(180deg,_#67B8F0_0%,_rgba(251,252,253,0)_30%)] md:hidden" />
          <h4 className="relative text-h5">
            Build any DEX you want with V4 pools - for any narrative
          </h4>
          <p className="relative mt-6 md:mt-3 text-body md:text-body-l">Use existing plugins or create your own</p>
          <div className="relative w-[calc(100%+3rem)] -mx-6 h-[240px] mt-6 bg-[url('/images/why-algebra/v4-mobile.png')] rounded-b-[4px] md:hidden bg-no-repeat" />
        </article>

        <article
          className="flex min-h-[300px] md:min-h-[340px] flex-col rounded-[4px] bg-dex-card-bg p-6 pb-0 md:p-8 text-left lg:col-span-2 md:bg-[url('/images/why-algebra/ecosystem.png')] lg:bg-cover lg:bg-center order-3 md:order-4"
        >
          <h4 className="text-h5 md:text-h4">Ecosystem</h4>
          <p className="mt-4 md:mt-8 max-w-xl text-body md:text-body-l">
            Supported by trading aggregators, <br className="hidden md:block" /> launchpads, bridges, yield protocols & <br className="hidden md:block" /> beyond — access to all DeFi protocols <br className="hidden md:block" />  through one DEX model
          </p>
          <div className="w-[calc(100%+3rem)] -mx-6 h-[240px] mt-6 bg-[url('/images/why-algebra/ecosystem-mobile.png')] rounded-b-[4px] md:hidden  bg-no-repeat" />
        </article>
      </div>
    </Container>
  </section>
);

export default WhyAlgebra;
