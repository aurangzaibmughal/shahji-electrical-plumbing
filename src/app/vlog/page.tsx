"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Search, Filter, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { VLOG_POSTS } from "@/data/vlogsData";
import { BlogCard } from "@/components/cards/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

const CATEGORIES = [
  "All Articles",
  "Plumbing Tips",
  "Electrical Safety",
  "Home Maintenance",
  "Construction",
  "Maintenance Guides",
];

export default function VlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = VLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-dark-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a859_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <Badge variant="teal" icon={<BookOpen className="w-3.5 h-3.5" />}>
            Shahji Knowledge Desk
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto">
            Technical Vlogs, Guides & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 via-brand-teal-300 to-brand-blue-400">
              Preventative Maintenance Insights
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay informed with expert practical advice on plumbing diagnostics, circuit protection, leak abatement, and building maintenance from our master engineers.
          </p>
        </div>
      </section>

      {/* Main Filter & Blog Feed */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Controls: Search and Category Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-dark-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-300 transition-all bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Featured Top Post */}
          {filteredPosts.length > 0 && selectedCategory === "All Articles" && !searchQuery && (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Featured Editorial:
              </div>
              <BlogCard post={filteredPosts[0]} featured />
            </div>
          )}

          {/* Posts Grid */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredPosts.length} Guide{filteredPosts.length !== 1 ? "s" : ""}:
            </div>

            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                <p className="text-slate-500 text-sm">No articles found matching your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Articles");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold text-brand-blue-600 hover:underline"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === "All Articles" && !searchQuery
                  ? filteredPosts.slice(1)
                  : filteredPosts
                ).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Complex Maintenance Challenge?"
        subtitle="Our technical authors and master engineers are just a phone call away for on-site diagnostic inspections."
      />
    </div>
  );
}
