import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/header";
import Main from "./components/main";
import { cn } from "@/lib/utils";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Algebra Labs",
  description: "Algebra Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", poppins.variable, "light")} suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        enableColorScheme={false}
      >
          <Header />
          <Main>
            {children}
          </Main>
          <Footer/>
          {/* <div className="hidden md:block fixed left-4 bottom-4">
            <ThemeSwitcher />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
