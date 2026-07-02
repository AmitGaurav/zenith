"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Home, Building2, Layers, TrendingUp } from "lucide-react";

const propertyTypes = ["All Types", "Residential", "Commercial", "Plot"];
const locations = [
  "All Areas",
  "Pune",
  "PCMC",
  "Kharadi",
  "Baner",
  "Wakad",
  "Hinjewadi",
  "Pimple Saudagar",
  "Ravet",
  "Chinchwad",
  "Talegaon",
];

const TYPE_ICONS: Record<string, React.ReactNode> = {
  "All Types": <Home className="w-4 h-4" />,
  Residential: <Home className="w-4 h-4" />,
  Commercial: <Building2 className="w-4 h-4" />,
  Plot: <Layers className="w-4 h-4" />,
};

export default function HeroSection() {
  const [propertyType, setPropertyType] = useState("All Types");
  const [location, setLocation] = useState("All Areas");

  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700" />
        {/* Gold ambient orbs */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-gold-300/5 rounded-full blur-xl pointer-events-none" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/25 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">
              Pune&apos;s Trusted Real Estate Partner since 2014
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400">
              Dreams,
            </span>
            <br />
            Delivering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400">
              Trust
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-white/65 mb-10 max-w-2xl leading-relaxed">
            Your premier real estate partner in{" "}
            <span className="text-white/90 font-medium">Pune &amp; PCMC</span>.
            Over a decade of expertise helping families and businesses find
            their perfect property.
          </p>

          {/* Search widget */}
          <div className="bg-white rounded-2xl p-3 shadow-2xl max-w-2xl mb-10">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2 flex-1 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-navy-600">
                  {TYPE_ICONS[propertyType]}
                </span>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="flex-1 bg-transparent text-navy-800 text-sm font-medium cursor-pointer"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 flex-1 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100">
                <MapPin className="w-4 h-4 text-navy-600 flex-shrink-0" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 bg-transparent text-navy-800 text-sm font-medium cursor-pointer"
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
              <Link
                href="/properties"
                className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all hover:shadow-lg whitespace-nowrap text-sm"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </div>
          </div>

          {/* Quick action links */}
          <div className="flex flex-wrap gap-3">
            {["Residential", "Commercial", "Plots"].map((type) => (
              <Link
                key={type}
                href={`/properties?type=${type}`}
                className="text-sm text-white/70 hover:text-gold-300 border border-white/15 hover:border-gold-400/40 px-4 py-2 rounded-full transition-all"
              >
                Browse {type}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { value: "100+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "2", label: "Cities" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center min-w-[130px]"
            >
              <div className="text-3xl font-bold text-gold-400 mb-1">
                {item.value}
              </div>
              <div className="text-white/70 text-xs font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smooth wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
