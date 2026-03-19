import Image from "next/image";
import Link from "next/link";

interface ITeamCard {
    photo: string;
    name: string;
    role: string;
    linkedinHref?: string;
    githubHref?: string;
    initials?: string;
}

const TeamCard = ({ photo, name, initials, role, linkedinHref, githubHref }: ITeamCard) => <div className="py-8 px-6 bg-dex-card-bg rounded-[4px] min-h-[260px]">
    { photo && <Image src={photo} alt={`${name}-${role}`} width={96} height={96} className="rounded-full mb-5 w-24 h-24" /> }
    { initials && <div className="flex items-center justify-center bg-white text-body-l rounded-full w-24 h-24 mb-5 rounded-full">{initials}</div> }
    <div className="flex items-center gap-3 mb-2">
        <div className="text-body-l">{name}</div>
        { linkedinHref && <Link href={linkedinHref} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/socials/linkedin.svg" alt="LinkedIn" width={24} height={24} className="duration-75" />
        </Link> }
        { githubHref && <Link href={githubHref} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/socials/github.svg" alt="GitHub" width={24} height={24} className="duration-75" />
        </Link>  }
    </div>
    <p className="text-body-s opacity-40">{role}</p>
</div>;

export default TeamCard;