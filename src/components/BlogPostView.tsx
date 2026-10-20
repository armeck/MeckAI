import React from 'react';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogIllustration } from './BlogIllustration';
import { ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onGoHome: () => void;
  onRequestAudit?: () => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  onBack,
  onSelectPost,
  onGoHome,
  onRequestAudit,
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
    <article className="py-8 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>All Engineering Insights</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{copied ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Post Metadata Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.18] [text-wrap:balance]">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <div>
              <span className="font-semibold text-slate-900 dark:text-white">{post.author.name}</span>
              <span className="mx-1.5">/</span>
              <span>{post.author.role}</span>
            </div>
          </div>
        </header>

        {/* Architectural Schematic Visual */}
        <div className="mb-10 h-64 sm:h-80 w-full shadow-xs">
          <BlogIllustration type={post.pipelineTheme} className="w-full h-full" />
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-base text-slate-700 dark:text-slate-200 leading-relaxed border-b border-slate-200 dark:border-slate-800 pb-12">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Consulting Takeaway Callout */}
        <div className="my-10 p-6 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-3">
          <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
            Operational Takeaway
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            Do not let off-the-shelf software dictate how your business operates. If your team is spending hours 
            manually bridging spreadsheets, legacy databases, or vendor PDFs, our engineering team can audit your process 
            and design a custom pipeline tailored to your exact workflow.
          </p>
          {onRequestAudit && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestAudit}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Request a Process Audit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Next Post Recommendation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to Meck Consulting
          </button>

          <div
            onClick={() => onSelectPost(nextPost)}
            className="text-right cursor-pointer group"
          >
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Next Insight &rarr;</div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {nextPost.title}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
};
