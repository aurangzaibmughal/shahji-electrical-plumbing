import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Phone, ArrowRight, Building, Wrench, Zap, HeartHandshake } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Corporate Engineering Philosophy",
  description:
    "Learn about SHAHJI HOME MAINTENANCE & CONSTRUCTION (SMC-PRIVATE) LIMITED, our corporate mission, vision, certified technical team, and commitment to quality.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Engineering Integrity",
    description: "Zero compromises on cable gauges, pipe pressure ratings, or structural safety codes. We build to last decades.",
    color: "green",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Accountability",
    description: "Transparent quotes, courteous licensed technicians, clean job sites, and full post-completion warranty support.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Continuous Technical Mastery",
    description: "Regular training on thermal diagnostic cameras, modern PPRC fusion, and smart automation systems.",
    color: "teal",
  },
  {
    icon: Building,
    title: "Commercial & Civil Scale",
    description: "Structured workflows capable of managing multi-story high-rises and single residential luxury residences alike.",
    color: "dark",
  },
];

const TIMELINE = [
  {
    period: "Foundation & Trade Mastery",
    title: "Establishing Technical Standards",
    description: "Started as a dedicated team of master electrical contractors and sanitary plumbers tackling complex building MEP challenges.",
  },
  {
    period: "Incorporation & Expansion",
    title: "SMC-Private Limited Registration",
    description: "Incorporated formally as SHAHJI HOME MAINTENANCE & CONSTRUCTION (SMC-PRIVATE) LIMITED, establishing organized corporate dispatch and multi-vehicle tooling units.",
  },
  {
    period: "Modern Engineering Era",
    title: "Advanced Diagnostics & Smart Integration",
    description: "Pioneering non-destructive electronic leak detection, FLIR thermal electrical audits, and smart energy-saving automation for residential and commercial clients.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-dark-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <Badge variant="green" icon={<Building className="w-3.5 h-3.5" />}>
            Corporate Profile & History
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 to-brand-blue-400">{COMPANY_CONFIG.legalName}</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering gold-standard electrical engineering, hydraulic plumbing systems, and comprehensive home maintenance solutions with unmatched professionalism.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[460px] group">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Shahji Engineering Team on Site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Corporate Quality Commitment
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Licensed single-member private limited company ensuring safety, liability coverage, and technical excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text Description (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <Badge variant="blue">Our Philosophy</Badge>
                <h2 className="text-3xl font-extrabold text-brand-dark-900 tracking-tight">
                  Bridging Technical Precision with Honest Client Service
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <span className="font-bold text-slate-900">{COMPANY_CONFIG.legalName}</span> was founded to solve a pervasive problem in the property maintenance industry: the lack of standardized technical expertise and accountability.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether diagnosing an intermittent short circuit that causes recurring breaker trips, pinpointing sub-surface bathroom tile leaks without ripping up whole floors, or installing complex 3-phase distribution boards, our team approaches every task through the lens of engineering best practices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-brand-green-50 border border-brand-green-200 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-brand-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark-900">Electrical Specialization</h4>
                    <p className="text-xs text-slate-600 mt-1">Pure copper wiring, load audits, breaker selectivity, and smart switchgears.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-blue-50 border border-brand-blue-200 flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-brand-dark-900">Plumbing Specialization</h4>
                    <p className="text-xs text-slate-600 mt-1">High-pressure hydro-jetting, PPRC pipe fusion, booster pumps & sanitary fixes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Box */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-brand-green-100 text-brand-green-600 flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver uncompromisingly safe, durable, and cost-efficient electrical, plumbing, and structural maintenance services that protect properties, enhance human safety, and grant homeowners and commercial operators total peace of mind.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-green-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Code-Compliant Engineering</span>
              </div>
            </div>

            {/* Vision Box */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To stand as Pakistan’s most respected and technologically progressive home maintenance and construction enterprise — recognized for prompt on-call dispatch, flawless technical execution, and exceptional customer satisfaction.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-blue-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Modern Standards & Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <Badge variant="teal">Core Principles</Badge>
            <h2 className="text-3xl font-extrabold text-brand-dark-900">
              Values That Drive Every Service Call
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-card space-y-3"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      val.color === "green"
                        ? "bg-brand-green-100 text-brand-green-600"
                        : val.color === "blue"
                        ? "bg-brand-blue-100 text-brand-blue-600"
                        : val.color === "teal"
                        ? "bg-brand-teal-100 text-brand-teal-600"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-brand-dark-900">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <Badge variant="green">Milestones</Badge>
            <h2 className="text-3xl font-extrabold text-white">
              Our Journey of Technical Growth
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-800 hidden sm:block">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-brand-green-500 flex items-center justify-center shrink-0 z-10 text-brand-green-400 font-bold text-sm">
                  0{idx + 1}
                </div>
                <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex-1 hover:border-brand-blue-500/50 transition-colors">
                  <span className="text-xs font-bold text-brand-blue-400 uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view of timeline */}
          <div className="sm:hidden space-y-4">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                <span className="text-xs font-bold text-brand-green-400 uppercase">{item.period}</span>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for a Trusted Maintenance Partner?"
        subtitle="Contact Shahji's corporate engineering desk to schedule an inspection or ongoing facility management."
      />
    </div>
  );
}
