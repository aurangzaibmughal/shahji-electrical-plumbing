import React from "react";
import { PhoneCall, FileText, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Call our 24/7 hotline or submit an online booking request with your location and preferred schedule.",
    icon: PhoneCall,
    color: "blue",
  },
  {
    step: "02",
    title: "Tell Us Your Problem",
    description: "Describe the electrical fault, pipe leak, or maintenance requirements to our dispatch supervisor.",
    icon: FileText,
    color: "teal",
  },
  {
    step: "03",
    title: "Technician Arrives",
    description: "A certified master technician arrives on-site equipped with precision diagnostic instruments and replacement parts.",
    icon: UserCheck,
    color: "green",
  },
  {
    step: "04",
    title: "Problem Solved",
    description: "The issue is rectified safely according to standard engineering codes, thoroughly tested, and backed by warranty.",
    icon: CheckCircle2,
    color: "blue",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <Badge variant="green">Simple 4-Step Process</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Shahji Resolves Your Maintenance Issues
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From your first phone call to final testing, our streamlined process guarantees prompt resolution with zero hassle.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-green-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                {/* Step Number Top Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-600 group-hover:text-brand-green-400 transition-colors">
                    {p.step}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      p.color === "green"
                        ? "bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/30"
                        : p.color === "blue"
                        ? "bg-brand-blue-500/20 text-brand-blue-400 border border-brand-blue-500/30"
                        : "bg-brand-teal-500/20 text-brand-teal-400 border border-brand-teal-500/30"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-100">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="text-brand-green-400 font-semibold">Swift Action</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <Button
            href="/contact"
            variant="primary-green"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your Request Now
          </Button>
        </div>
      </div>
    </section>
  );
};
