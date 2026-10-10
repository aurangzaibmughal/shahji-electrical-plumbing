"use client";

import React, { useState } from "react";
import { MapPin, Search, Navigation, Phone, Mail, ExternalLink, RotateCcw, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_NAME, BUSINESS_EMAIL, GOOGLE_MAPS_URL, GOOGLE_MAPS_API_KEY, COMPANY_CONFIG } from "@/config/company";
import { formatPhoneLink } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface MapSectionProps {
  title?: string;
  subtitle?: string;
}

export const MapSection: React.FC<MapSectionProps> = ({
  title = "Find Shahji on Google Maps",
  subtitle = "Our verified Islamabad workshop & service dispatch location. Get direct turn-by-turn navigation below.",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState(BUSINESS_ADDRESS);
  const [isSearching, setIsSearching] = useState(false);

  // Default verified embed for Shahji Electrical & Plumber Services For Home in Islamabad
  const verifiedEmbedQuery =
    "Shahji Electrical & Plumber Services For Home, 130, Shop Number 11, 4 G-13, G-7/3, G-7, Islamabad, 44220, Pakistan";

  // Generate dynamic Google Maps Embed URL
  const getEmbedUrl = (query: string): string => {
    const targetQuery = query === BUSINESS_ADDRESS ? verifiedEmbedQuery : query;
    const encoded = encodeURIComponent(targetQuery);
    if (GOOGLE_MAPS_API_KEY) {
      return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encoded}`;
    }
    return `https://maps.google.com/maps?q=${encoded}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setActiveLocation(searchQuery.trim());
    setTimeout(() => {
      setIsSearching(false);
    }, 400);
  };

  const handleResetToBusinessLocation = () => {
    setSearchQuery("");
    setActiveLocation(BUSINESS_ADDRESS);
  };

  return (
    <section className="py-20 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <Badge variant="green" icon={<MapPin className="w-3.5 h-3.5" />}>
            Verified Islamabad Location
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-sm focus-within:border-brand-blue-500 transition-colors"
          >
            <div className="relative flex-1 w-full flex items-center pl-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any sector or landmark on map (e.g. G-7, G-13, F-6)..."
                className="w-full py-2.5 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                <Search className="w-4 h-4" />
                <span>Search Location</span>
              </button>

              {activeLocation !== BUSINESS_ADDRESS && (
                <button
                  type="button"
                  onClick={handleResetToBusinessLocation}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center transition-colors"
                  title="Reset to Islamabad Head Office"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Map Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Location Details & Prominent Get Directions CTA (4 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-card space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-green-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-green-400" />
                  Verified Business Location
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {BUSINESS_NAME}
                </h3>
              </div>

              {/* Exact Complete Business Address Card */}
              <div className="space-y-3 p-4 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-blue-400 uppercase flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Complete Business Address:
                  </span>
                  <span className="text-[10px] bg-brand-green-500/20 text-brand-green-300 font-semibold px-2 py-0.5 rounded">
                    Official
                  </span>
                </div>

                <p className="text-sm text-slate-100 font-semibold leading-relaxed">
                  {BUSINESS_ADDRESS}
                </p>

                <div className="pt-2 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-brand-green-400 font-bold">City:</span>
                  <span>Islamabad, 44220, Pakistan</span>
                </div>
              </div>

              {/* Email Address with Clickable mailto: link */}
              <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-blue-400" />
                  Official Email:
                </div>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-sm font-semibold text-brand-blue-300 hover:text-white transition-colors block break-all underline decoration-brand-blue-400 underline-offset-2"
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>

              {/* Direct Hotlines */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Direct Phone Lines:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[0].value)}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all text-xs font-semibold text-white flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-green-400 shrink-0" />
                    <span>{COMPANY_CONFIG.phones[0].display}</span>
                  </a>
                  <a
                    href={formatPhoneLink(COMPANY_CONFIG.phones[1].value)}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all text-xs font-semibold text-white flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-400 shrink-0" />
                    <span>{COMPANY_CONFIG.phones[1].display}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Clearly Visible "Get Directions" Button Linked to Verified Google Maps URL */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center font-extrabold text-base px-6 py-4 rounded-xl bg-gradient-to-r from-brand-green-500 to-brand-blue-500 hover:from-brand-green-600 hover:to-brand-blue-600 text-white shadow-lg shadow-brand-green-500/20 transition-all active:scale-[0.98] gap-2.5"
              >
                <Navigation className="w-5 h-5 animate-pulse" />
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-90" />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                Opens directly in Google Maps for turn-by-turn navigation
              </p>
            </div>
          </div>

          {/* Right: Embedded Interactive Google Map Showing Actual Verified Location (7 cols) */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-card min-h-[460px] relative">
            <iframe
              title={`Google Map - ${activeLocation}`}
              src={getEmbedUrl(activeLocation)}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[460px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-lg flex items-center gap-2 text-xs font-bold text-slate-900 max-w-sm truncate">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green-500 animate-ping shrink-0" />
              <span className="truncate">Islamabad: {activeLocation}</span>
            </div>

            {/* Floating Get Directions Pill on Map */}
            <div className="absolute bottom-4 right-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 transition-all active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
