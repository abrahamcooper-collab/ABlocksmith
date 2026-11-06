import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/config/business";
import { business } from "@/data/siteData";
import { businessSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Locksmith in Twin Falls, ID`,
    template: `%s | ${business.name}`,
  },
  description:
    "A & B Locksmiths LLC is a local locksmith in Twin Falls, ID offering car lockouts, house lockouts, rekeying and lock changes across the Magic Valley.",
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* LocalBusiness (Locksmith) structured data */}
        <JsonLd data={businessSchema()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
