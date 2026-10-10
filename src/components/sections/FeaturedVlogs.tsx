import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { VLOG_POSTS } from "@/data/vlogsData";
import { BlogCard } from "@/components/cards/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const FeaturedVlogs: React.FC = () => {
  const featuredPosts = VLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="blue" icon={<BookOpen className="w-3.5 h-3.5" />}>
              Maintenance Knowledge Hub
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-900 tracking-tight">
              Expert Maintenance Tips & Technical Guides
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Learn practical engineering insights, safety checklists, and preventative tips written by our senior technicians.
            </p>
          </div>

          <div>
            <Button
              href="/vlog"
              variant="outline-blue"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Vlogs & Guides
            </Button>
          </div>
        </div>

        {/* 3 Featured Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
