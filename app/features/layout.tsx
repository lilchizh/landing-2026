import FeaturesNavigation from "./components/features-navigation";

const FeaturesLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => <section className="relative min-h-screen flex flex-col">
    <FeaturesNavigation />
    <div className="flex flex-1 pt-16 md:pt-0 -mt-8">
        {children}
    </div>
</section>

export default FeaturesLayout;