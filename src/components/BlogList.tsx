import React, { useState } from 'react';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogIllustration } from './BlogIllustration';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

interface BlogListProps {
  onSelectPost: (post: BlogPost) => void;
  onGoHome: () => void;
}

export const BlogList: React.FC<BlogListProps> = ({ onSelectPost, onGoHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Process Discovery', 'Architecture', 'Pipeline Engineering', 'Strategy & Economics', 'Engagement Framework'];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category.toLowerCase() === selectedCategory.toLowerCase());

  const featuredPost = BLOG_POSTS[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost.id || selectedCategory !== 'all');

  return (
    <div className="py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <button
              onClick={onGoHome}
              className="hover:text-slate-900 dark:hover:text-white hover:underline cursor-pointer transition-colors"
            >
              Meck Pipelines
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Engineering Insights</span>
          </div>

          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to Services
          </button>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold">
            FIELD NOTES &amp; ARCHITECTURAL ESSAYS
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Engineering Custom Pipelines in the Real World
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Practical perspectives on operational process discovery, unstructured data ingestion, 
            and why custom-tailored automation outperforms off-the-shelf software packages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Insights' : cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && (
          <div
            onClick={() => onSelectPost(featuredPost)}
            className="mb-12 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all cursor-pointer group shadow-sm hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{featuredPost.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{featuredPost.author.name}</span>
                    <span className="mx-1.5">/</span>
                    <span>{featuredPost.author.role}</span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-60 sm:h-64 w-full">
                <BlogIllustration type={featuredPost.pipelineTheme} className="w-full h-full" />
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
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="h-40 w-full">
                  <BlogIllustration type={post.pipelineTheme} className="w-full h-full" />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 truncate max-w-[170px]">{post.author.name}</span>
                <span className="font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
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
