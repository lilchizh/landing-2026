import Container from "../components/container";
import PageHeader from "../components/page-header";
import TeamCard from "./components/TeamCard";

export const metadata = {
    title: "Algebra Labs | Team",
    description: "Algebra Labs team page",
};

const team = [
    { name: 'Vladimir T.', photo: '/images/team/vladimir.png', role: 'Co-Founder', linkedinHref: 'https://www.linkedin.com/in/vtikhomirov' },
    { name: 'Alexandra K.', photo: '/images/team/alexandra.png', role: 'Co-Founder', linkedinHref: 'https://www.linkedin.com/in/alexandrakorneva' },
    { name: 'Nik F.', photo: '/images/team/nik.png', role: 'CEO' },
    { name: 'Adam A.', photo: '/images/team/adam.png', role: 'CBDO', linkedinHref: 'https://www.linkedin.com/in/adam-adamov-449b0321b' },
    { name: 'George E.', photo: '/images/team/george.png', role: 'CTO' },
    { name: 'Roo G.', photo: '/images/team/roo.png', role: 'CMO', linkedinHref: 'https://www.linkedin.com/in/roo-gainulla228/' },
    { name: 'Ivan L.', photo: '/images/team/ivan.png', role: 'Researcher' },
    { name: 'Ilya A.', photo: '/images/team/ilyaa.png', role: 'Senior Solidity Developer',  githubHref: 'https://github.com/IliaAzhel' },
    { name: 'Ilya C.', photo: '/images/team/ilya.png', role: 'Lead Frontend Developer', linkedinHref: 'https://www.linkedin.com/in/lilchizh/', githubHref: 'https://github.com/lilchizh' },
    { name: 'Nik P.', photo: '/images/team/nikp.png', role: 'Integrations Lead' },
    { name: 'Kirill S.', photo: '/images/team/kirill.png', role: 'Frontend Developer', githubHref: 'https://github.com/damnnou' },
    { name: 'Alex B.', photo: '/images/team/alexb.png', role: 'Designer' },
]


const TeamPage = () => <section>
    <Container className="lg:max-w-[1376px]!">
    <PageHeader title="Team" description="Here’s the team behind Algebra, delivering the top-notch product for DEXes! With the knowledge & expertise we have, we aim at creating the most innovative AMM solutions & providing DeFi community with the high-quality services." />
    <div className="grid grid-cols-1 gap-8 px-8 md:px-0 md:grid-cols-4">
        {
            team.map((member, idx) => <TeamCard key={`team-member-${idx}`} {...member} />)
        }
    </div>
    </Container>
</section>;

export default TeamPage;
