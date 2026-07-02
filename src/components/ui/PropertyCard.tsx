import Link from "next/link";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Maximize2, Tag } from "lucide-react";
import type { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

const TYPE_COLORS: Record<string, string> = {
  Residential: "bg-emerald-100 text-emerald-700",
  Commercial: "bg-blue-100 text-blue-700",
  Plot: "bg-amber-100 text-amber-700",
};

const STATUS_COLORS: Record<string, string> = {
  "Ready to Move": "bg-emerald-500",
  "Under Construction": "bg-amber-500",
  Available: "bg-blue-500",
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
          <span
            className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[property.status]}`}
          />
          <span className="text-xs font-medium text-gray-700">
            {property.status}
          </span>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${TYPE_COLORS[property.type]}`}
          >
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-navy-800">
            {property.priceLabel}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
            {property.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-navy-800 mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
          <span>{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3 border-t border-gray-100 mt-auto">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <BedDouble className="w-4 h-4 text-navy-600" />
              <span>{property.bedrooms} BHK</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-600 text-sm">
              <Bath className="w-4 h-4 text-navy-600" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <Maximize2 className="w-4 h-4 text-navy-600" />
            <span>
              {property.area} {property.areaUnit}
            </span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/properties`}
          className="mt-4 flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          <Tag className="w-4 h-4" />
          View Details
        </Link>
      </div>
    </div>
  );
}
