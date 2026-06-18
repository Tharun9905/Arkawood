"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { blogsData } from "@/data/arkaData";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#120A07] text-[#F7F5F0]">
      {/* Page Header */}
      <section className="relative py-20 bg-stone-950 border-b border-stone-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120A07] to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-[#C89B5E] uppercase block">
            Design & Materials Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white">The Arka Design Blog</h1>
          <div className="w-16 h-1 bg-[#C89B5E] mx-auto mt-2" />
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Tips on lighting layers, space hacks, material grades, and modular wardrobe planning guidelines from our design directors.
          </p>
        </div>
      </section>

      {/* BLOG LIST & SEARCH */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 text-left">
        {/* Search Bar */}
        <div className="max-w-md mb-12 relative">
          <input
            type="text"
            placeholder="Search design articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-900 border border-stone-850 rounded-lg px-4 py-3.5 pl-10 text-white text-xs focus:border-[#C89B5E] focus:outline-none transition-colors"
          />
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3.5" />
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.slug}
                className="bg-stone-900 border border-stone-850 rounded-xl overflow-hidden shadow-lg group hover:border-[#C89B5E]/30 transition-colors flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#C89B5E] font-sans font-bold">
                      <span>{post.category}</span>
                      <div className="flex items-center space-x-2 text-stone-500 font-medium">
                        <span className="flex items-center space-x-0.5">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-0.5">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-white text-lg group-hover:text-[#C89B5E] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed line-clamp-3 font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-850/60">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[10px] uppercase font-sans font-bold text-[#C89B5E] tracking-widest inline-flex items-center space-x-1 hover:text-white"
                    >
                      <span>Read Full Post</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-stone-500 space-y-2">
            <p className="text-sm">No articles matched your query.</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#C89B5E] text-xs underline cursor-pointer"
            >
              Clear Search Query
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
