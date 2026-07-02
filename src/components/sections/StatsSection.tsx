import { Users, Award, Briefcase, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  Award,
  Briefcase,
  MapPin,
};

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => {
            const Icon = ICON_MAP[stat.icon] ?? Users;
            return (
              <div
                key={stat.label}
                className="group text-center p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-800/5 group-hover:bg-gold-500/10 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy-700 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-navy-800 mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-navy-700 mb-1.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
