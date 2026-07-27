import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import Navbar from "@/components/Navbar";
import DevOpsBackground from "@/components/DevOpsBackground";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import SocialRail from "@/components/SocialRail";

export const metadata: Metadata = {
  title: "Ravindu Dilhan",
  description:
    "A professional portfolio showcasing DevOps, cloud engineering, automation, and full-stack projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground relative">
        <CustomCursor />
        <DevOpsBackground />
        <SocialRail />
        <Navbar />
        <PageTransition>
          <main className="portfolio-page flex-1 flex flex-col relative w-full pt-20">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
