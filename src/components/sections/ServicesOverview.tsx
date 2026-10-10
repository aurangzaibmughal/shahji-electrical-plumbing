import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, Zap, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, PhoneCall, Hammer, Wind, Snowflake, MapPin } from "lucide-react";
import { PLUMBING_SERVICES, ELECTRICAL_SERVICES, NEW_MAINTENANCE_SERVICES } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="services">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-brand-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-green-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="teal" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Core Engineering Divisions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            Specialized Plumbing & Electrical Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide separate, dedicated engineering units for hydraulic plumbing and electrical power networks, ensuring every project is handled by seasoned trade specialists.
          </p>
        </div>

        {/* The Two Large Distinct Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: PLUMBING DIVISION (Azure Blue Accent) */}
          <div className="bg-white rounded-3xl border-2 border-brand-blue-200/80 shadow-soft overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Image & Badge */}
              <div className="relative h-64 w-full overflow-hidden bg-brand-blue-900">
                <Image
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Plumbing Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-brand-blue-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    Plumbing Division
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Plumbing Engineering & Leak Solutions
                  </h3>
                  <p className="text-xs text-brand-blue-200">
                    High-pressure water conduits, leak diagnosis, sanitary & drainage mastery
                  </p>
                </div>
              </div>

              {/* Plumbing Service Highlights */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  From critical concealed slab leaks to luxury bathroom fixtures and booster pump systems, our master plumbers restore seamless water integrity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {PLUMBING_SERVICES.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 hover:border-brand-blue-300 transition-colors flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-brand-dark-900">{item.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{item.shortDescription}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <Button
                  href="/plumbing"
                  variant="primary-blue"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Plumbing Division
                </Button>
                <Link
                  href="/#services-catalog"
                  className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-brand-blue-700 bg-slate-100 hover:bg-brand-blue-50 px-3.5 py-2.5 rounded-lg border border-slate-200 transition-colors text-center"
                >
                  View All Services (28+)
                </Link>
              </div>

              <a
                href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                className="w-full sm:w-auto text-xs font-bold text-brand-blue-700 bg-brand-blue-50 hover:bg-brand-blue-100 px-4 py-2.5 rounded-lg border border-brand-blue-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call: {COMPANY_CONFIG.phones[0].display}</span>
              </a>
            </div>
          </div>

          {/* Card 2: ELECTRICAL DIVISION (Emerald Green Accent) */}
          <div className="bg-white rounded-3xl border-2 border-brand-green-200/80 shadow-soft overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Image & Badge */}
              <div className="relative h-64 w-full overflow-hidden bg-brand-green-950">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Electrical Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-brand-green-950/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-brand-green-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    Electrical Division
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Electrical Power & Wiring Infrastructure
                  </h3>
                  <p className="text-xs text-brand-green-200">
                    Safe conduit wiring, distribution boards, short-circuit diagnostics & architectural lighting
                  </p>
                </div>
              </div>

              {/* Electrical Service Highlights */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Protecting your property against short-circuits and power surges with certified 99.9% copper wiring, RCD shock prevention, and precision distribution board builds.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {ELECTRICAL_SERVICES.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-brand-green-50/50 border border-brand-green-100 hover:border-brand-green-300 transition-colors flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-xs text-brand-dark-900">{item.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{item.shortDescription}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <Button
                  href="/electrical"
                  variant="primary-green"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Electrical Division
                </Button>
                <Link
                  href="/#services-catalog"
                  className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-brand-green-700 bg-slate-100 hover:bg-brand-green-50 px-3.5 py-2.5 rounded-lg border border-slate-200 transition-colors text-center"
                >
                  View All Services (28+)
                </Link>
              </div>

              <a
                href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                className="w-full sm:w-auto text-xs font-bold text-brand-green-700 bg-brand-green-50 hover:bg-brand-green-100 px-4 py-2.5 rounded-lg border border-brand-green-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call: {COMPANY_CONFIG.phones[1].display}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Home & Office Maintenance Services Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <Badge variant="green" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Islamabad, Pakistan
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-900 tracking-tight">
              Home & Office Maintenance Services
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In addition to our flagship plumbing and electrical engineering, we deliver prompt, dependable maintenance solutions across Islamabad, Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEW_MAINTENANCE_SERVICES.map((service) => {
              // Icon mapping
              const IconComponent =
                service.iconName === "Hammer"
                  ? Hammer
                  : service.iconName === "Wind"
                  ? Wind
                  : service.iconName === "Snowflake"
                  ? Snowflake
                  : Sparkles;

              const badgeColorClasses =
                service.badgeColor === "amber"
                  ? "bg-amber-100 text-amber-800 border-amber-200"
                  : service.badgeColor === "blue"
                  ? "bg-blue-100 text-blue-800 border-blue-200"
                  : service.badgeColor === "teal"
                  ? "bg-teal-100 text-teal-800 border-teal-200"
                  : "bg-emerald-100 text-emerald-800 border-emerald-200";

              const iconBgClasses =
                service.badgeColor === "amber"
                  ? "bg-amber-500 text-white"
                  : service.badgeColor === "blue"
                  ? "bg-blue-500 text-white"
                  : service.badgeColor === "teal"
                  ? "bg-teal-500 text-white"
                  : "bg-emerald-500 text-white";

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Icon overlay badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <div className={`p-2 rounded-xl shadow-md ${iconBgClasses}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title & Tagline overlay */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h4 className="text-lg font-bold tracking-tight">{service.title}</h4>
                        <p className="text-[11px] text-slate-300 line-clamp-1">{service.tagline}</p>
                      </div>
                    </div>

                    {/* Content & Features */}
                    <div className="p-5 space-y-4">
                      {/* Location Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-green-700 bg-brand-green-50 px-2.5 py-1 rounded-full border border-brand-green-200 w-fit">
                        <MapPin className="w-3 h-3" />
                        <span>Islamabad, Pakistan</span>
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Feature Bullet List */}
                      <div className="space-y-2 pt-1 border-t border-slate-100">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="p-5 pt-0 space-y-2">
                    {service.serviceKey === "AC Services" ? (
                      <>
                        <Link
                          href="/contact?service=AC%20Services"
                          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
                        >
                          <span>Book AC Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/#all-services-catalog"
                          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors"
                        >
                          <span>View All 26+ AC Jobs</span>
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.serviceKey)}`}
                        className="w-full bg-slate-900 hover:bg-brand-green-600 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md group-hover:bg-brand-green-600"
                      >
                        <span>Book a Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
