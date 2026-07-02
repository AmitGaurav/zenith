import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zenith Dwellings and Properties Pvt. Ltd. | Pune & PCMC",
    template: "%s | Zenith Dwellings",
  },
  description:
    "Pune's trusted real estate company — Zenith Dwellings and Properties Pvt. Ltd. Find residential, commercial properties and plots in Pune & PCMC. 10+ years experience, 100+ satisfied customers.",
  keywords: [
    "real estate Pune",
    "properties in Pune",
    "PCMC properties",
    "flats in Pune",
    "commercial property Pune",
    "Zenith Dwellings",
    "Aniket Kumar Jha",
    "property management Pune",
  ],
  openGraph: {
    title: "Zenith Dwellings and Properties Pvt. Ltd.",
    description:
      "Building Dreams, Delivering Trust — Your premier real estate partner in Pune & PCMC.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
