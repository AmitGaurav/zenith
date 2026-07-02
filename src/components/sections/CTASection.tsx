import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-100/40 to-cream/60 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-navy-800/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-gold-600 text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Begin?
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 mb-5 leading-tight">
          Find Your Dream Property
          <br />
          <span className="text-gold-500">in Pune &amp; PCMC Today</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Talk to our experts, schedule a site visit, or browse our curated
          listings — we&apos;re here to guide every step of your property journey.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            Browse Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919518310067"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-navy-700 hover:text-gold-500 font-semibold px-8 py-4 rounded-xl border border-navy-200 hover:border-gold-400 transition-all text-sm"
          >
            Schedule a Visit
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          {[
            "✓ No Hidden Charges",
            "✓ RERA Compliant",
            "✓ 100+ Happy Clients",
            "✓ 10+ Years Expertise",
          ].map((item) => (
            <span key={item} className="font-medium text-navy-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
