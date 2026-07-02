import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Shield,
  Lightbulb,
  Target,
  Heart,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zenith Dwellings and Properties — 10+ years of real estate expertise in Pune & PCMC under Chairman Aniket Kumar Jha.",
};

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Every transaction is handled with complete transparency and honesty — no hidden charges, no surprises.",
  },
  {
    icon: Users,
    title: "Client First",
    description:
      "Your needs are our north star. We listen, understand, and deliver solutions tailored to your goals.",
  },
  {
    icon: Lightbulb,
    title: "Market Intelligence",
    description:
      "Deep local knowledge of Pune & PCMC markets ensures you always get the best value for your investment.",
  },
  {
    icon: Heart,
    title: "Long-term Relationships",
    description:
      "We don't just close deals — we build lasting partnerships with our clients, guiding them at every stage.",
  },
];

const JOURNEY = [
  { year: "2014", title: "Company Founded", desc: "Zenith Dwellings established in Pune with a vision to simplify real estate." },
  { year: "2016", title: "Expanded to PCMC", desc: "Extended operations to Pimpri-Chinchwad, serving the growing IT corridor." },
  { year: "2019", title: "50+ Clients Milestone", desc: "Crossed 50 satisfied families — a testament to our client-first approach." },
  { year: "2022", title: "Commercial Portfolio", desc: "Launched dedicated commercial property division for offices and retail spaces." },
  { year: "2024", title: "100+ Happy Families", desc: "Proud to have helped over 100 families and businesses find their ideal space." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <div className="max-w-2xl">
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About Zenith Dwellings
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Founded in 2014 with a simple mission — make real estate transparent, accessible, and trustworthy for every family and investor in Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6 leading-tight">
                Pune&apos;s Most Trusted Real Estate Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-800">Zenith Dwellings and Properties Pvt. Ltd.</strong> is a Pune-based real estate company dedicated to helping individuals, families, and businesses find their ideal property across Pune and PCMC.
                </p>
                <p>
                  Founded by <strong className="text-navy-800">Aniket Kumar Jha</strong>, a seasoned real estate professional with over 10 years of industry experience, Zenith Dwellings has built a reputation for integrity, market expertise, and outstanding client service.
                </p>
                <p>
                  From the bustling IT corridors of Hinjewadi and Wakad to the premium residential enclaves of Baner and Kharadi — our deep local knowledge ensures every client makes an informed, confident decision.
                </p>
              </div>

              {/* Key points */}
              <div className="mt-8 space-y-3">
                {[
                  "RERA Compliant Operations",
                  "Zero Hidden Charges Policy",
                  "End-to-End Documentation Support",
                  "Post-Purchase Support",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy-800 rounded-2xl p-8 text-center hover:bg-navy-700 transition-colors"
                >
                  <div className="text-5xl font-bold text-gold-400 mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-white/50 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Profile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left accent panel */}
                <div className="md:col-span-2 bg-gradient-to-br from-navy-800 to-navy-700 p-10 flex flex-col items-center justify-center text-center">
                  {/* Photo */}
                  <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5 shadow-xl ring-4 ring-white/20 mx-auto">
                    <Image
                      src="/chairman.jpg"
                      alt="Aniket Kumar Jha — Chairman, Zenith Dwellings"
                      fill
                      className="object-cover object-top"
                      sizes="144px"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {COMPANY.chairman}
                  </h3>
                  <p className="text-gold-400 font-semibold text-sm mb-3">
                    Chairman &amp; Founder
                  </p>
                  <p className="text-white/60 text-xs mb-5">
                    Zenith Dwellings and Properties Pvt. Ltd.
                  </p>
                  <div className="w-12 h-0.5 bg-gold-500/40 mx-auto mb-5" />
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    <span>Pune, Maharashtra</span>
                  </div>
                  <a
                    href="tel:+919518310067"
                    className="mt-3 flex items-center gap-2 text-white/70 hover:text-gold-300 text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    +91 95183 10067
                  </a>
                </div>

                {/* Right content */}
                <div className="md:col-span-3 p-10">
                  <span className="inline-block text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">
                    Leadership
                  </span>
                  <h2 className="text-2xl font-bold text-navy-800 mb-4">
                    Meet Our Chairman
                  </h2>
                  <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-6">
                    <p>
                      With <strong className="text-navy-800">10+ years of dedicated experience</strong> in the real estate industry, Aniket Kumar Jha has been the driving force behind Zenith Dwellings&apos; growth and reputation.
                    </p>
                    <p>
                      His in-depth understanding of the Pune and PCMC property markets, combined with his commitment to ethical business practices, has made Zenith Dwellings the go-to real estate partner for hundreds of clients.
                    </p>
                    <p>
                      Aniket&apos;s philosophy is simple — <em className="text-navy-700">&ldquo;Every client deserves honest advice, complete transparency, and a property that truly fits their life.&rdquo;</em>
                    </p>
                  </div>

                  {/* Key highlights */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Award, label: "10+ Years", sublabel: "Industry Experience" },
                      { icon: Target, label: "100+ Clients", sublabel: "Successfully Served" },
                      { icon: MapPin, label: "2 Cities", sublabel: "Pune & PCMC" },
                      { icon: Shield, label: "RERA Compliant", sublabel: "All Transactions" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                        <item.icon className="w-5 h-5 text-gold-500 flex-shrink-0" />
                        <div>
                          <div className="text-navy-800 font-semibold text-sm">{item.label}</div>
                          <div className="text-gray-500 text-xs">{item.sublabel}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
              Values That Drive Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`p-7 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 duration-300 ${
                  i % 2 === 0 ? "border-gold-200 bg-gold-100/30" : "border-gray-100 bg-white"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              A Decade of Building Trust
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block" />

            <div className="space-y-8">
              {JOURNEY.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  {/* Year bubble */}
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold text-center leading-tight">
                      {item.year}
                    </span>
                    {i < JOURNEY.length - 1 && (
                      <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gold-500/30 sm:hidden" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-gold-500/30 transition-colors">
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-navy-800 mb-3">
            Ready to Work With Us?
          </h3>
          <p className="text-gray-500 mb-8">
            Let our experienced team guide you to the right property decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-lg"
            >
              Browse Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gold-400 text-gold-600 hover:bg-gold-500 hover:text-white font-semibold px-7 py-4 rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
