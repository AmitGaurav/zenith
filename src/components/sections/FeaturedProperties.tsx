import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import { PROPERTIES } from "@/lib/data";

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Featured Listings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">
              Handpicked Properties for You
            </h2>
            <p className="text-gray-500 mt-2 max-w-lg">
              Curated selection of the finest residential, commercial, and plot
              properties across Pune &amp; PCMC.
            </p>
          </div>
          <Link
            href="/properties"
            className="flex items-center gap-2 text-navy-700 hover:text-gold-500 font-semibold text-sm transition-colors group flex-shrink-0"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Properties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore All {PROPERTIES.length} Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
