import React, { useState } from 'react';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogIllustration } from './BlogIllustration';
import { ArrowRight, Clock, User, ChevronRight, Newspaper } from 'lucide-react';

interface BlogListProps {
  onSelectPost: (post: BlogPost) => void;
  onGoHome: () => void;
}

export const BlogList: React.FC<BlogListProps> = ({ onSelectPost, onGoHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Sovereign Infrastructure', 'Machine Learning Architecture', 'Energy & Resilience', 'Data Privacy'];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category.toLowerCase().includes(selectedCategory.toLowerCase()) || post.category === selectedCategory);

  const featuredPost = BLOG_POSTS[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost.id || selectedCategory !== 'all');

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-blue-900/40">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={onGoHome}
              className="text-slate-300 hover:text-white hover:underline cursor-pointer transition-colors"
            >
              MeckAI Home
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-red-500 font-semibold">The Sovereign Dispatch</span>
          </div>

          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to Platform
          </button>
        </div>

        {/* Blog Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-red-500 font-bold">
            <Newspaper className="h-4 w-4" />
            <span>THE SOVEREIGN DISPATCH · MECKAI.NET</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Engineering Truth from the American Heartland.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Technical dispatches, infrastructure field notes, and perspectives on computational autonomy 
            free from big tech censorship and coastal regulatory mandates.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 mb-10 border-b border-blue-900/40">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white font-bold shadow-sm'
                  : 'bg-[#0e1d42]/60 border border-blue-900/60 text-slate-300 hover:text-white hover:border-blue-700'
              }`}
            >
              {cat === 'all' ? 'All Dispatches' : cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && (
          <div
            onClick={() => onSelectPost(featuredPost)}
            className="mb-14 p-6 sm:p-8 rounded-2xl border-2 border-blue-900/80 bg-gradient-to-br from-[#0c1938] via-[#09142c] to-[#060e20] hover:border-red-500/60 transition-all cursor-pointer group shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="text-red-500 font-bold uppercase tracking-wider">{featuredPost.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{featuredPost.date}</span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-blue-900/50">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User className="h-3.5 w-3.5 text-red-500" />
                    <span>{featuredPost.author.name} · {featuredPost.author.role}</span>
                  </div>

                  <span className="text-xs font-mono font-bold text-red-400 group-hover:text-red-300 flex items-center gap-1">
                    Read Dispatch <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-64 sm:h-72 w-full">
                <BlogIllustration type={featuredPost.imageType} className="w-full h-full" />
              </div>

            </div>
          </div>
        )}

        {/* Grid of Remaining Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="p-6 rounded-xl border border-blue-900/60 bg-[#0c1836]/40 hover:bg-[#0e1d42]/70 hover:border-blue-700/80 transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                <div className="h-44 w-full">
                  <BlogIllustration type={post.imageType} className="w-full h-full" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400 font-semibold">{post.category}</span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-blue-900/50 flex items-center justify-between text-xs">
                <span className="text-slate-400 truncate max-w-[180px]">{post.author.name}</span>
                <span className="font-mono text-red-400 group-hover:text-red-300 flex items-center gap-1 shrink-0">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
