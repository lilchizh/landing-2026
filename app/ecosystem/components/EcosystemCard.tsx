import Image from "next/image";

interface IEcosystemCard {
    logo: string;
    name: string;
    description: string;
}

const EcosystemCard = ({ logo, name, description }: IEcosystemCard) => <div className="py-8 px-6 bg-dex-card-bg rounded-[4px] min-h-[280px]">
    <Image src={logo} alt={`${name}-logo`} width={64} height={64} className="mb-4 rounded-full" />
    <div className="text-body mb-2">{name}</div>
    <p className="text-body-s opacity-40 whitespace-pre-line">{description}</p>
</div>

export default EcosystemCard;