const EcosystemGrid = ({ children }: Readonly<{ children: React.ReactNode }>) => <div className="grid grid-cols-1 gap-6 py-8 px-4 md:px-0 md:grid-cols-2 xl:grid-cols-4">
    {children}
</div>

export default EcosystemGrid;