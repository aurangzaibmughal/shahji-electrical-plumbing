import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Clock, ThumbsUp, Building2, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const BENEFITS = [
  {
    icon: Award,
    title: "Experienced Master Technicians",
    description: "Every electrical and plumbing engineer is rigorously vetted, factory-trained, and background-certified.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Safety & Quality",
    description: "We use only genuine 99.9% pure copper cables, branded circuit breakers, and industrial-grade pressure pipes.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Rapid Emergency Response",
    description: "Equipped mobile response teams ready to dispatch for sudden pipe bursts, main line failures, and electrical faults.",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Residential & Commercial Scope",
    description: "Versatile capabilities ranging from single luxury villas and apartments to multi-story commercial corporate plazas.",
    color: "dark",
  },
  {
    icon: ThumbsUp,
    title: "Transparent & Honest Estimates",
    description: "Clear itemized diagnostic reports and upfront pricing with zero hidden surcharges or surprise billing.",
    color: "green",
  },
  {
    icon: Wrench,
    title: "Dual Engineering Synergies",
    description: "One reliable incorporated partner for both your hydraulic water lines and electrical power infrastructure.",
    color: "blue",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Benefits List (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <Badge variant="green">Why Choose Shahji</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
                Setting the Standard in Technical Maintenance & Safety
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine structured engineering methods with responsive local service. Here is why homeowners, building managers, and developers rely on Shahji:
              </p>
            </div>

            {/* 6 Benefit Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BENEFITS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-soft flex flex-col justify-between group"
                  >
                    <div className="space-y-2.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          b.color === "green"
                            ? "bg-brand-green-100 text-brand-green-600"
                            : b.color === "blue"
                            ? "bg-brand-blue-100 text-brand-blue-600"
                            : b.color === "teal"
                            ? "bg-brand-teal-100 text-brand-teal-600"
                            : "bg-slate-800 text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-brand-dark-900 group-hover:text-brand-dark-800">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button href="/why-choose-us" variant="dark" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Read More About Our Quality Standards
              </Button>
            </div>
          </div>

          {/* Right Visual Image & Trust Stack (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 h-[480px] group">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
                alt="Shahji Quality Construction & Maintenance Work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-brand-green-600 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Corporate Governance</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  Fully incorporated single-member private limited company ensuring accountability and commercial compliance.
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                  <span>Electrical • Plumbing • Maintenance</span>
                  <span className="font-bold text-brand-blue-600">Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
