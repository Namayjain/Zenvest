import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Zenvest Wealth — Crafting Wealth for Generations",
  description:
    "Zenvest Wealth is an AMFI-registered mutual fund distributor helping Indian families and businesses build long-term wealth through mutual funds, fixed deposits, bonds, tax-saving instruments, PMS/AIF, and child future plans.",
  metadataBase: new URL("https://zenvestwealth.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png"
  },
  openGraph: {
    title: "Zenvest Wealth",
    description: "Crafting Wealth for Generations",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy-800 antialiased">
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
