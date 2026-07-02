import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-gold-400 text-gold-400" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by 100+ Happy Families
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto">
            Real experiences from our valued clients across Pune &amp; PCMC —
            every story is a journey we&apos;re proud to have been part of.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                i === 0 || i === 3
                  ? "bg-gold-500/10 border-gold-500/20 hover:border-gold-500/40"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold-500/40 mb-4" />

              {/* Stars */}
              <StarRating count={testimonial.rating} />

              {/* Quote text */}
              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-6 line-clamp-5">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-xs font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-white/45 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
