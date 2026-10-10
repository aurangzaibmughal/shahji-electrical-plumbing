import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Wrench, Zap, Shield, Droplets, RotateCw, Bath, Utensils, Activity, ShieldAlert, Sliders, ToggleRight, Lightbulb, Search, Building2 } from "lucide-react";
import { ServiceItem } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Zap,
  Shield,
  Droplets,
  RotateCw,
  Bath,
  Utensils,
  Activity,
  ShieldAlert,
  Sliders,
  ToggleRight,
  Lightbulb,
  Search,
  Building2,
};

interface ServiceCardProps {
  service: ServiceItem;
  variant?: "plumbing" | "electrical";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant }) => {
  const isPlumbing = variant ? variant === "plumbing" : service.category === "plumbing";
  const IconComponent = ICON_MAP[service.icon] || (isPlumbing ? Wrench : Zap);

  return (
    <Card
      accent={isPlumbing ? "blue" : "green"}
      className="flex flex-col h-full group bg-white border border-slate-200 hover:border-slate-300"
    >
      {/* Top Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={isPlumbing ? "blue" : "green"}>
            {isPlumbing ? "Plumbing Engineering" : "Electrical Engineering"}
          </Badge>
        </div>

        {/* Icon Floating Button */}
        <div
          className={`absolute bottom-3 right-3 p-2.5 rounded-xl shadow-md ${
            isPlumbing ? "bg-brand-blue-500 text-white" : "bg-brand-green-500 text-white"
          }`}
        >
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-brand-dark-900 group-hover:text-brand-dark-800 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Features List */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Scope of Service:
            </div>
            <ul className="space-y-1.5">
              {service.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle
                    className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                      isPlumbing ? "text-brand-blue-500" : "text-brand-green-500"
                    }`}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Link & CTA */}
        <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={isPlumbing ? `/plumbing#${service.id}` : `/electrical#${service.id}`}
            className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
              isPlumbing
                ? "text-brand-blue-600 hover:text-brand-blue-700"
                : "text-brand-green-600 hover:text-brand-green-700"
            }`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={`/contact?service=${encodeURIComponent(isPlumbing ? "Plumbing" : "Electrical")}`}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
              isPlumbing
                ? "border-brand-blue-200 text-brand-blue-700 hover:bg-brand-blue-50"
                : "border-brand-green-200 text-brand-green-700 hover:bg-brand-green-50"
            }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </Card>
  );
};
