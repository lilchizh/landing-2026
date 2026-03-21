import Container from "../components/container";
import PageHeader from "../components/page-header";
import TeamCard from "./components/TeamCard";

export const metadata = {
    title: "Algebra Labs | Team",
    description: "Algebra Labs team page",
};

const team = [
    { name: 'Vladimir T.', photo: '/images/team/vladimir.jpg', role: 'Co-Founder', linkedinHref: 'https://www.linkedin.com/in/vtikhomirov' },
    { name: 'Alexandra K.', photo: '/images/team/alexandra.jpg', role: 'Co-Founder', linkedinHref: 'https://www.linkedin.com/in/alexandrakorneva' },
    { name: 'Adam A.', photo: '/images/team/adam.jpg', role: 'COO / CBDO', linkedinHref: 'https://www.linkedin.com/in/adam-adamov-449b0321b' },
    { name: 'George E.', photo: '', initials: 'GE', role: 'CTO' },
    { name: 'Nik F.', photo: '', initials: 'NF', role: 'CPO' },
    { name: 'Ilya A.', photo: '/images/team/ilyaa.png', role: 'Senior Solidity Developer',  githubHref: 'https://github.com/IliaAzhel' },
    { name: 'Ilya C.', photo: '/images/team/ilya.jpg', role: 'Lead Frontend Developer', linkedinHref: 'https://www.linkedin.com/in/lilchizh/', githubHref: 'https://github.com/lilchizh' },
    { name: 'Roo G.', photo: '/images/team/ruslan.jpg', role: 'Marketing', linkedinHref: 'https://www.linkedin.com/in/ruslan-g-7aa408244' },
    { name: 'Kirill S.', photo: '/images/team/kirill.png', role: 'Frontend Developer', githubHref: 'https://github.com/damnnou' },
    { name: 'Nik P.', photo: '/images/team/nikita.jpg', role: 'Lead QA' },
    { name: 'Alex B.', photo: '', initials: 'AB', role: 'Lead Designer' },
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
