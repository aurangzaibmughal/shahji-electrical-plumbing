import React from "react";
import { ShieldCheck, Users, Zap, Clock, Award, CheckCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

const STATS_DATA = [
  {
    icon: Clock,
    value: "< 45 Mins",
    label: "Fast Response Dispatch",
    description: "Rapid on-site arrival for residential & commercial emergency requests.",
    color: "green",
  },
  {
    icon: Users,
    value: "100%",
    label: "Certified Technicians",
    description: "Background-verified, licensed master electricians & sanitary plumbers.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    value: "Guaranteed",
    label: "Workmanship Warranty",
    description: "Comprehensive quality commitment and follow-up service testing.",
    color: "teal",
  },
  {
    icon: Award,
    value: "Incorporated",
    label: "SMC-Private Limited",
    description: "Registered corporate entity operating under professional standards.",
    color: "dark",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-all hover:shadow-soft group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      item.color === "green"
                        ? "bg-brand-green-100 text-brand-green-600"
                        : item.color === "blue"
                        ? "bg-brand-blue-100 text-brand-blue-600"
                        : item.color === "teal"
                        ? "bg-brand-teal-100 text-brand-teal-600"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-brand-dark-900 tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
