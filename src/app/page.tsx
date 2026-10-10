import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ComprehensiveServices } from "@/components/sections/ComprehensiveServices";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedVlogs } from "@/components/sections/FeaturedVlogs";
import { MapSection } from "@/components/sections/MapSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Shahji Electrical & Plumbing Services | Home Maintenance & Construction",
  description:
    "Official website of SHAHJI HOME MAINTENANCE & CONSTRUCTION (SMC-PRIVATE) LIMITED. Premier certified plumbing and electrical engineering solutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <ComprehensiveServices initialDivision="all" id="services-catalog" />
      <WhyChooseUsSection />
      <ProcessSection />
      <FeaturedVlogs />
      <MapSection />
      <CTASection />
    </>
  );
}
