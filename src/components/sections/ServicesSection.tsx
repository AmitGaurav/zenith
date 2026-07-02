import Link from "next/link";
import { Home, Building2, Layers, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Layers,
  Settings,
};

const CARD_ACCENTS = [
  { bg: "bg-gold-500/8", border: "hover:border-gold-400", icon: "text-gold-500", badge: "bg-gold-100 text-gold-700" },
  { bg: "bg-navy-700/5", border: "hover:border-navy-500", icon: "text-navy-600", badge: "bg-navy-100 text-navy-700" },
  { bg: "bg-gold-500/8", border: "hover:border-gold-400", icon: "text-gold-500", badge: "bg-gold-100 text-gold-700" },
  { bg: "bg-navy-700/5", border: "hover:border-navy-500", icon: "text-navy-600", badge: "bg-navy-100 text-navy-700" },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From finding your dream home to managing your investment portfolio
            — we are your one-stop real estate partner in Pune &amp; PCMC.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Home;
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-2xl border border-gray-100 ${accent.border} hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${accent.bg} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300`}
                >
                  <Icon className={`w-7 h-7 ${accent.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${accent.icon} flex-shrink-0`} />
                      <span className="text-xs text-gray-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover bottom link */}
                <Link
                  href="/contact"
                  className="mt-6 flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-gold-500 transition-colors group/link"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
