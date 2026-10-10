"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Wrench,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Search,
  Sparkles,
  MapPin,
  ShieldCheck,
  Building2,
  Bath,
  RotateCw,
  Activity,
  AlertTriangle,
  BatteryCharging,
  Wind,
} from "lucide-react";
import {
  DETAILED_ELECTRICAL_CATEGORIES,
  DETAILED_PLUMBING_CATEGORIES,
  DETAILED_AC_CATEGORIES,
  ServiceSubcategoryGroup,
} from "@/data/servicesData";
import { COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";

interface ComprehensiveServicesProps {
  initialDivision?: "all" | "electrical" | "plumbing" | "ac";
  id?: string;
}

export const ComprehensiveServices: React.FC<ComprehensiveServicesProps> = ({
  initialDivision = "all",
  id = "all-services-catalog",
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "electrical" | "plumbing" | "ac">(initialDivision);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const expandAll = () => {
    const allIds: Record<string, boolean> = {};
    [...DETAILED_ELECTRICAL_CATEGORIES, ...DETAILED_PLUMBING_CATEGORIES, ...DETAILED_AC_CATEGORIES].forEach((cat) => {
      allIds[cat.id] = true;
    });
    setExpandedCategories(allIds);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  // Filter groups
  const allGroups = [
    ...(activeTab === "all" || activeTab === "electrical" ? DETAILED_ELECTRICAL_CATEGORIES : []),
    ...(activeTab === "all" || activeTab === "plumbing" ? DETAILED_PLUMBING_CATEGORIES : []),
    ...(activeTab === "all" || activeTab === "ac" ? DETAILED_AC_CATEGORIES : []),
  ];

  const filteredGroups = allGroups
    .map((group) => {
      if (!searchTerm.trim()) return group;
      const lower = searchTerm.toLowerCase();
      const matchingItems = group.items.filter(
        (item) =>
          item.name.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower) ||
          group.categoryName.toLowerCase().includes(lower)
      );
      return {
        ...group,
        items: matchingItems,
      };
    })
    .filter((group) => group.items.length > 0);

  // Icon resolver
  const getCategoryIcon = (iconName: string, division: "electrical" | "plumbing" | "ac") => {
    const iconClass = `w-5 h-5 ${
      division === "electrical"
        ? "text-brand-green-600"
        : division === "plumbing"
        ? "text-brand-blue-600"
        : "text-sky-600"
    }`;
    switch (iconName) {
      case "Wind":
        return <Wind className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      case "AlertTriangle":
        return <AlertTriangle className={iconClass} />;
      case "ShieldCheck":
        return <ShieldCheck className={iconClass} />;
      case "BatteryCharging":
        return <BatteryCharging className={iconClass} />;
      case "Wrench":
        return <Wrench className={iconClass} />;
      case "Bath":
        return <Bath className={iconClass} />;
      case "RotateCw":
        return <RotateCw className={iconClass} />;
      case "Activity":
        return <Activity className={iconClass} />;
      case "Building2":
        return <Building2 className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-brand-green-600" />
            <span>Islamabad, Pakistan • Residential & Commercial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-900 tracking-tight">
            Complete Electrical, Plumbing & AC Service Catalog
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Detailed, professional coverage of every common home, shop, and corporate maintenance job. Find your specific requirement and book an experienced technician directly.
          </p>
        </div>

        {/* Filter Bar: Tabs & Search Input */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Tab Buttons */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-xs flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-brand-dark-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("electrical")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "electrical"
                  ? "bg-brand-green-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-green-700"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Electrical</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("plumbing")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "plumbing"
                  ? "bg-brand-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-brand-blue-700"
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Plumbing</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ac")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === "ac"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-sky-700"
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>AC Services</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search service e.g. circuit breaker, tap repair, water pump..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Toggle Controls */}
          <div className="flex items-center gap-2 justify-end text-xs">
            <button
              type="button"
              onClick={expandAll}
              className="text-slate-600 hover:text-brand-dark-900 font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="text-slate-600 hover:text-brand-dark-900 font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="space-y-8">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No matching services found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Try searching for a different keyword or contact our dispatch team directly for custom jobs in Islamabad.
              </p>
              <div className="mt-5">
                <a
                  href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green-500 text-white font-bold text-xs shadow-sm hover:bg-brand-green-600"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Emergency Helpline</span>
                </a>
              </div>
            </div>
          ) : (
            filteredGroups.map((group) => {
              const isElectrical = group.division === "electrical";
              const isPlumbing = group.division === "plumbing";
              const isAC = group.division === "ac";

              const serviceQueryParam = isElectrical
                ? "Electrical"
                : isPlumbing
                ? "Plumbing"
                : "AC Services";

              const isExpanded =
                searchTerm.trim().length > 0 || expandedCategories[group.id] !== false; // default open, or toggleable
              const shownItems = isExpanded ? group.items : group.items.slice(0, 4);

              const cardBorderClass = isElectrical
                ? "border-brand-green-100 hover:border-brand-green-300"
                : isPlumbing
                ? "border-brand-blue-100 hover:border-brand-blue-300"
                : "border-sky-100 hover:border-sky-300";

              const headerBgClass = isElectrical
                ? "bg-brand-green-50/50"
                : isPlumbing
                ? "bg-brand-blue-50/50"
                : "bg-sky-50/50";

              const iconBoxClass = isElectrical
                ? "bg-white border-brand-green-200 text-brand-green-600"
                : isPlumbing
                ? "bg-white border-brand-blue-200 text-brand-blue-600"
                : "bg-white border-sky-200 text-sky-600";

              const badgeClass = isElectrical
                ? "bg-brand-green-100 text-brand-green-800"
                : isPlumbing
                ? "bg-brand-blue-100 text-brand-blue-800"
                : "bg-sky-100 text-sky-800";

              const bookCategoryBtnClass = isElectrical
                ? "bg-brand-green-600 hover:bg-brand-green-700"
                : isPlumbing
                ? "bg-brand-blue-600 hover:bg-brand-blue-700"
                : "bg-sky-600 hover:bg-sky-700";

              return (
                <div
                  key={group.id}
                  id={group.id}
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-soft ${cardBorderClass}`}
                >
                  {/* Category Header Bar */}
                  <div
                    className={`p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none ${headerBgClass}`}
                    onClick={() => toggleCategory(group.id)}
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl border shadow-sm ${iconBoxClass}`}>
                        {getCategoryIcon(group.iconName, group.division)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-black text-brand-dark-900 tracking-tight">
                            {group.categoryName}
                          </h3>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${badgeClass}`}
                          >
                            {group.items.length} Services
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{group.tagline}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <Link
                        href={`/contact?service=${encodeURIComponent(
                          serviceQueryParam
                        )}&note=${encodeURIComponent(group.categoryName)}`}
                        onClick={(e) => e.stopPropagation()}
                        className={`px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-sm transition-all ${bookCategoryBtnClass}`}
                      >
                        <span>Book Category</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-800"
                        aria-label="Toggle Category Accordion"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Service Items Grid */}
                  <div className="p-5 sm:p-6 pt-4 sm:pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {shownItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between group/card"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <h4 className="text-sm font-bold text-brand-dark-900 group-hover/card:text-brand-green-700 transition-colors">
                                {item.name}
                              </h4>
                              {item.isPopular && (
                                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded shrink-0">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-brand-green-600" />
                              <span>Islamabad</span>
                            </span>

                            <Link
                              href={`/contact?service=${encodeURIComponent(
                                serviceQueryParam
                              )}&note=${encodeURIComponent(item.name)}`}
                              className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                                isElectrical
                                  ? "text-brand-green-600 hover:text-brand-green-700"
                                  : isPlumbing
                                  ? "text-brand-blue-600 hover:text-brand-blue-700"
                                  : "text-sky-600 hover:text-sky-700"
                              }`}
                            >
                              <span>Book Service</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All / Collapse toggle button for this group */}
                    {!searchTerm.trim() && group.items.length > 4 && (
                      <div className="mt-5 text-center">
                        <button
                          type="button"
                          onClick={() => toggleCategory(group.id)}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg border transition-all ${
                            isExpanded
                              ? "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                              : isElectrical
                              ? "bg-brand-green-50 text-brand-green-700 border-brand-green-200 hover:bg-brand-green-100"
                              : isPlumbing
                              ? "bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200 hover:bg-brand-blue-100"
                              : "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100"
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              <span>Show Fewer Services</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>View All {group.items.length} {group.categoryName} Jobs</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
