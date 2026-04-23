import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Partners() {

    return <section className="py-16 lg:py-24">
        <Container className="px-4 md:px-0 text-center">
            <div className="text-caption tracking-[12%] mb-6">Official Partners</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-fit mx-auto">
                <Link href="https://www.arbitrum.io" target={"_blank"} className="flex items-center justify-center max-w-60 px-5 h-[110px] rounded-lg hover:bg-dex-card-bg">
                    <Image src="/images/partners/arbitrum.svg" alt="Arbitrum Partner" width={200} height={50} />
                </Link>
                <Link href="https://www.avax.network/" target={"_blank"}  className="flex items-center justify-center max-w-60 px-5 h-[110px] rounded-lg hover:bg-dex-card-bg">
                    <Image src="/images/partners/avalanche.svg" alt="Avalanche Partner" width={200} height={36} />
                </Link>
                <Link href="https://polygon.technology/" target={"_blank"}  className="flex items-center justify-center max-w-60 px-5 h-[110px] rounded-lg hover:bg-dex-card-bg">
                    <Image src="/images/partners/polygon.svg" alt="Polygon Partner" width={170} height={40} />
                </Link>
            </div>
        </Container>
    </section>
}