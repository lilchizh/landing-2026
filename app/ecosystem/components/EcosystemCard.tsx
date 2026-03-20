import Image from "next/image";

interface IEcosystemCard {
    logo: string;
    name: string;
    description: string;
    network?: string;
    networkName?: string;
    additionalNetworks?: number;
}

const EcosystemCard = ({ logo, name, network, networkName, additionalNetworks, description }: IEcosystemCard) => <div className="py-8 px-6 bg-dex-card-bg rounded-[4px] min-h-[280px]">
    <div className="w-16 h-16 relative mb-4">
        <Image src={logo} alt={`${name}-logo`} width={64} height={64} className="rounded-full" />
        {network && networkName && <div className="absolute flex items-center gap-2 -bottom-2 -right-3">
            <Image src={network} alt={`${networkName}-logo`} width={32} height={32} className="rounded-full border-2 border-white" /> 
        </div>}
        {additionalNetworks && <div className="absolute text-body-s opacity-40 -right-8 -bottom-1">+{additionalNetworks}</div>}
    </div>
    <div className="text-body mt-2">{name}</div>
    {networkName && <div className="text-body-s opacity-40">{networkName}</div>}
    <p className="text-body-s opacity-40 whitespace-pre-line mt-6">{description}</p>
</div>

export default EcosystemCard;