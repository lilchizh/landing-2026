import Container from "../components/container";
import PageHeader from "../components/page-header";
import EcosystemNavigation from "./components/EcosystemNavigation";

const EcosystemLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => <section>
    <Container className="lg:max-w-[1376px]!">
        <PageHeader title="Algebra Ecosystem" description="Exceptional projects deploying our codebase & building with us on top of the Algebra DEX model" />
        <EcosystemNavigation />
        {children}
    </Container>
</section>

export default EcosystemLayout;