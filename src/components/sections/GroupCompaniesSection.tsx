import Image from "next/image";
import { CheckCircle2, Home, Building2, TreePine } from "lucide-react";

const SPECIALIZATIONS = [
  { icon: Home, label: "Completed Apartments" },
  { icon: Building2, label: "Under Construction Projects" },
  { icon: TreePine, label: "Independent Villas" },
  { icon: Home, label: "Housing Projects" },
];

export default function GroupCompaniesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Group
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Sister Companies
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Zenith Dwellings is part of a growing real estate group, with
            complementary companies serving diverse segments of the market.
          </p>
        </div>

        {/* 18th Realty Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-5">
              {/* Logo panel */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#1a1a5e] via-[#1e1e6e] to-[#2a2a7e] p-10 flex flex-col items-center justify-center text-center min-h-[260px]">
                <div className="relative w-44 h-44 mb-4">
                  <Image
                    src="/18th-realty-logo.jpg"
                    alt="18th Realty Logo"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Sister Company
                </span>
              </div>

              {/* Content panel */}
              <div className="md:col-span-3 p-8 lg:p-10">
                <span className="inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
                  Group Company
                </span>
                <h3 className="text-2xl font-bold text-navy-800 mb-3">
                  18<sup className="text-base">th</sup> Realty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  18th Realty is a focused real estate company operating under
                  the same umbrella, specialising in premium completed and
                  under-construction residential developments — including
                  apartments, independent villas, and large-scale housing
                  projects across Pune &amp; PCMC.
                </p>

                {/* Specializations */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {SPECIALIZATIONS.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Differentiators */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ready Possession",
                    "RERA Compliant",
                    "Pune & PCMC",
                    "Premium Segment",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-navy-800/5 text-navy-700 border border-navy-200 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
