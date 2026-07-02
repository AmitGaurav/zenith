"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SlidersHorizontal, Search, MapPin, X } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import { PROPERTIES } from "@/lib/data";
import type { Property } from "@/lib/types";

const TYPES = ["All", "Residential", "Commercial", "Plot"];
const LOCATIONS = ["All Areas", "Pune", "PCMC", "Kharadi", "Baner", "Wakad", "Hinjewadi", "Pimple Saudagar", "Ravet", "Chinchwad", "Talegaon"];
const STATUSES = ["All Status", "Ready to Move", "Under Construction", "Available"];

export default function PropertiesPage() {
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All Areas");
  const [status, setStatus] = useState("All Status");
  const [search, setSearch] = useState("");

  const filtered = useMemo<Property[]>(() => {
    return PROPERTIES.filter((p) => {
      const matchType = type === "All" || p.type === type;
      const matchLocation = location === "All Areas" || p.location.toLowerCase().includes(location.toLowerCase());
      const matchStatus = status === "All Status" || p.status === status;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
      return matchType && matchLocation && matchStatus && matchSearch;
    });
  }, [type, location, status, search]);

  const resetFilters = () => {
    setType("All");
    setLocation("All Areas");
    setStatus("All Status");
    setSearch("");
  };

  const hasFilters = type !== "All" || location !== "All Areas" || status !== "All Status" || search !== "";

  return (
    <>
      {/* Page header */}
      <section className="bg-navy-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-700 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Properties</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Our Properties
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Explore our curated listings across Pune &amp; PCMC — from starter apartments to luxury villas and commercial spaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white sticky top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="flex items-center gap-2 flex-1 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-gold-400 transition-colors">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-navy-800 text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Type filter */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-transparent text-navy-800 text-sm cursor-pointer"
              >
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Location filter */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200">
              <MapPin className="w-4 h-4 text-gray-400" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-navy-800 text-sm cursor-pointer"
              >
                {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>

            {/* Status filter */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-transparent text-navy-800 text-sm cursor-pointer"
              >
                {STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Reset */}
            {hasFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors px-3 py-2.5"
              >
                <X className="w-4 h-4" />
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600 text-sm">
              Showing <span className="font-semibold text-navy-800">{filtered.length}</span> of {PROPERTIES.length} properties
            </p>
            {hasFilters && (
              <span className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full font-medium">
                Filters applied
              </span>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2">No properties found</h3>
              <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search term.</p>
              <button
                onClick={resetFilters}
                className="bg-navy-800 hover:bg-navy-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-3">
            Didn&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-gray-500 mb-6">
            Our team has access to unlisted properties. Share your requirements and we&apos;ll find the perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg"
          >
            Share Your Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
