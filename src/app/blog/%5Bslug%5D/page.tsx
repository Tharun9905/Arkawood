import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogsData } from "@/data/arkaData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogsData.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#120A07] text-[#F7F5F0] min-h-screen py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-left">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-sans font-bold text-[#C89B5E] uppercase tracking-wider hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-stone-500 text-xs font-sans">
            <span className="inline-flex items-center space-x-1 bg-[#C89B5E]/10 text-[#C89B5E] border border-[#C89B5E]/20 px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed italic border-l-2 border-[#C89B5E] pl-4">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="h-[350px] md:h-[450px] overflow-hidden rounded-xl border border-stone-850 mb-10 shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-stone-300 text-xs md:text-sm leading-relaxed space-y-6 font-sans">
          {post.content.split("\n\n").map((para, pidx) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h4 key={pidx} className="text-lg font-serif font-bold text-white pt-2">
                  {para.replace(/\*\*/g, "")}
                </h4>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("- ")) {
              return (
                <ul key={pidx} className="list-disc pl-5 space-y-1 text-stone-300">
                  {para.split("\n").map((li, lidx) => (
                    <li key={lidx}>{li.replace(/^(\d+\.\s+|-)/, "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={pidx} className="whitespace-pre-line">
                {para}
              </p>
            );
          })}
        </article>

        {/* Author Callout footer */}
        <div className="bg-stone-950 border border-stone-900 p-6 rounded-xl mt-12 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h4 className="font-serif font-bold text-white text-base">Planning Your Own Modular Interior?</h4>
            <p className="text-stone-400 text-[11px] leading-relaxed max-w-lg">
              Our Design Directors are available for space layout planning sessions. Get detailed wood substrate assessments and custom budget calculations.
            </p>
          </div>
          <a
            href={`https://wa.me/918217331984?text=${encodeURIComponent(
              `Hi Arka WoodTech, I just read your article "${post.title}". I would like to consult on my home design plans.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C89B5E] hover:bg-[#B3874B] text-[#1E120D] text-xs font-sans font-bold uppercase tracking-widest px-5 py-3 rounded transition-all flex-shrink-0 cursor-pointer text-center"
          >
            Consult Our Experts
          </a>
        </div>
      </div>
    </div>
  );
}

// Generate static parameters for routing build efficiency
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}
