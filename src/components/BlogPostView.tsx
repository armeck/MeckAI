import React from 'react';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogIllustration } from './BlogIllustration';
import { ArrowLeft, Clock, User, Share2, ShieldCheck } from 'lucide-react';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onGoHome: () => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  onBack,
  onSelectPost,
  onGoHome,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  return (
    <article className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-blue-900/40">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-red-500" />
            <span>All Dispatches</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border border-blue-900/60 bg-[#0e1d42]/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Post Metadata Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-red-500 font-bold uppercase tracking-wider">{post.category}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{post.date}</span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
            {post.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-3 pt-3 border-t border-blue-900/50 text-xs text-slate-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20 border border-red-500/40 text-red-400">
              <User className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-white">{post.author.name}</div>
              <div className="text-[11px] font-mono text-slate-400">{post.author.role}</div>
            </div>
          </div>
        </header>

        {/* Hero Illustration */}
        <div className="mb-10 h-72 sm:h-96 w-full shadow-xl">
          <BlogIllustration type={post.imageType} className="w-full h-full" />
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-base text-slate-200 leading-relaxed font-normal border-b border-blue-900/40 pb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-red-500 first-letter:float-left first-letter:mr-1.5 first-letter:leading-none">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Sovereign Invariant Callout */}
        <div className="my-10 p-6 rounded-xl border border-blue-800/80 bg-gradient-to-r from-[#0d1c3e] to-[#0a152e] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>Sovereign Takeaway</span>
          </div>
          <p className="text-sm text-slate-200">
            MeckAI builds for organizations that refuse to outsource their critical decision modeling 
            to centralized monopolies. What happens inside your bare-metal enclave stays in your possession.
          </p>
        </div>

        {/* Next Post Recommendation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to MeckAI Platform
          </button>

          <div
            onClick={() => onSelectPost(nextPost)}
            className="text-right cursor-pointer group"
          >
            <div className="text-[11px] font-mono text-slate-400">Next Dispatch &rarr;</div>
            <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
              {nextPost.title}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
