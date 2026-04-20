export default function Main ({ children }: Readonly<{children: React.ReactNode}>) {

    return <main className="h-fit min-h-dvh mx-auto pt-main md:pt-main-desktop">{children}</main>
}