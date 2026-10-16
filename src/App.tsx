import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { NeuralCanvas } from './components/NeuralCanvas';
import { BlogList } from './components/BlogList';
import { BlogPostView } from './components/BlogPostView';
import { BLOG_POSTS } from './data/blogPosts';
import { BlogPost } from './types/blog';
import { ArrowRight, ShieldCheck, Cpu, Database, CheckCircle2, Server, Lock, Newspaper, BookOpen } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [demoActivated, setDemoActivated] = useState(false);

  // Sync hash routing (e.g. #/blog or #/blog/:slug)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/blog/')) {
        const slug = hash.replace('#/blog/', '');
        const found = BLOG_POSTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedPost(found);
          setCurrentView('post');
          window.scrollTo(0, 0);
          return;
        }
      }
      if (hash === '#/blog') {
        setCurrentView('blog');
        setSelectedPost(null);
        window.scrollTo(0, 0);
        return;
      }
      setCurrentView('home');
      setSelectedPost(null);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToBlog = () => {
    window.location.hash = '#/blog';
    setCurrentView('blog');
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const navigateToPost = (post: BlogPost) => {
    window.location.hash = `#/blog/${post.slug}`;
    setSelectedPost(post);
    setCurrentView('post');
    window.scrollTo(0, 0);
  };

  const handleInitialize = () => {
    setDemoActivated(true);
    setTimeout(() => setDemoActivated(false), 4500);
  };

  return (
    <div className="min-h-screen bg-[#070e1e] text-slate-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-blue-900/40 bg-[#070e1e]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div onClick={navigateToHome} className="cursor-pointer">
            <Logo size="md" />
          </div>

          <div className="flex items-center gap-4">
            {/* Navigation links */}
            <nav className="flex items-center gap-4 text-xs font-mono">
              <button
                onClick={navigateToHome}
                className={`py-1 transition-colors cursor-pointer ${
                  currentView === 'home' ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Platform
              </button>

              <button
                onClick={navigateToBlog}
                className={`py-1 flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView !== 'home' ? 'text-red-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Newspaper className="h-3.5 w-3.5 text-red-500" />
                <span>Dispatches</span>
              </button>
            </nav>

            {/* Grid & Cluster Status Indicator */}
            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1 rounded-md border border-blue-900/60 bg-[#0e1d42]/60 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Heartland Grid: <span className="text-emerald-400">Nominal</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main View Router */}
      <main className="flex-1 flex flex-col justify-center">
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-grid-subtle">
              
              {/* Red, White & Blue Particle Canvas Backdrop */}
              <div className="absolute inset-0 opacity-45 pointer-events-none">
                <NeuralCanvas />
              </div>

              {/* Subtle Ambient Radial Glows */}
              <div 
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/12 blur-[140px] rounded-full"
                aria-hidden="true" 
              />
              <div 
                className="pointer-events-none absolute top-48 right-1/4 w-[350px] h-[250px] bg-red-600/8 blur-[120px] rounded-full"
                aria-hidden="true" 
              />

              <div className="relative mx-auto max-w-4xl px-6 text-center space-y-7 z-10">
                
                {/* Plausible High-Tech Kicker */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-800/80 bg-[#0d1c3e]/80 text-xs font-mono tracking-wider text-slate-300 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  <span className="text-white font-semibold">American Computational Sovereignty</span>
                  <span aria-hidden="true" className="text-blue-700">·</span>
                  <span className="text-slate-400">Domestically Hosted Runtimes</span>
                </div>

                {/* Display Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
                  Sovereign Artificial Intelligence. Built on American Soil.
                </h1>

                {/* Plausible Value Proposition */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
                  MeckAI provides enterprise-grade neural computing free from centralized ideological guardrails and coastal censorship. 
                  Engineered for American enterprises, researchers, and builders who demand raw, objective computational horsepower.
                </p>

                {/* Primary Hero Call-To-Action Button */}
                <div className="pt-2 flex flex-col items-center justify-center space-y-3 max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={handleInitialize}
                    className="h-12 px-8 rounded-lg bg-red-600 hover:bg-red-500 active:scale-98 text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2.5 whitespace-nowrap transition-all shadow-lg shadow-red-950/40 border border-red-500/60 cursor-pointer"
                  >
                    <span>Provision Sovereign Node</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
                    <span>100% Domestic Hardware</span>
                    <span className="text-blue-800">·</span>
                    <span>Zero Corporate Pre-Prompting</span>
                    <span className="text-blue-800">·</span>
                    <span>Air-Gapped Ready</span>
                  </div>
                </div>

                {/* Interactive Feedback Confirmation Banner */}
                {demoActivated && (
                  <div className="mx-auto max-w-lg p-3.5 rounded-lg border border-red-500/40 bg-[#0e1d42]/90 text-xs sm:text-sm text-slate-200 flex items-center justify-center gap-3 animate-in fade-in duration-150 shadow-xl">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                    <div className="text-left font-mono">
                      <span className="font-semibold text-white">Sovereign Cluster Allocation Queued</span>
                      <div className="text-slate-400 text-xs mt-0.5">
                        Provisional Texas Hill Country node assigned. Zero external telemetry active.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </section>

            {/* 4-Column Plausible Metric & Trust Strip */}
            <section className="border-y border-blue-900/50 bg-[#060c18] py-8">
              <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-900/40">
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl font-bold text-white font-mono">100% US-Soil</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                      Heartland Bare-Metal
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl font-bold text-red-500 font-mono">Zero Bias</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                      Uncensored Foundations
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl font-bold text-white font-mono">Private VPC</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                      Cryptographic Isolation
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl font-bold text-white font-mono">99.99%</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                      Multi-Region Redundancy
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 Plausible Sovereign AI Pillars */}
            <section className="py-16 md:py-24 border-b border-blue-900/60 bg-[#070e1e]">
              <div className="mx-auto max-w-6xl px-6">
                
                <div className="text-center mb-12 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
                    Architectural Invariants
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Built for Independent American Enterprise
                  </h2>
                  <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-400">
                    Engineered for organizations that refuse to sacrifice computational autonomy to big tech monopolies.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Box 1 */}
                  <div className="p-8 rounded-xl border border-blue-900/60 bg-[#0d1b38]/50 hover:bg-[#0d1b38]/80 hover:border-blue-700/60 transition-all space-y-4 shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#070e1e] border border-blue-900/80 text-red-400 shadow-xs">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-red-500">
                        PILLAR 01
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        Ideologically Neutral Inference
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        Unfiltered Foundation Models
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Standard hyperscalers constrain model outputs with shifting corporate guidelines. 
                      MeckAI delivers objective, mathematically rigorous token generation without ideological pre-prompting or patronizing safety disclaimers.
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 border-t border-blue-900/40">
                      <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                      <span>Raw Model Output Integrity</span>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="p-8 rounded-xl border border-blue-900/60 bg-[#0d1b38]/50 hover:bg-[#0d1b38]/80 hover:border-blue-700/60 transition-all space-y-4 shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#070e1e] border border-blue-900/80 text-red-400 shadow-xs">
                        <Server className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-red-500">
                        PILLAR 02
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        Domestic Heartland Infrastructure
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        US-Soil Bare Metal Clusters
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Hosted in secure, independent facilities across Texas and the American Midwest. 
                      Your data never traverses foreign undersea cables or regions subject to extraterritorial regulatory creep.
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 border-t border-blue-900/40">
                      <Database className="h-3.5 w-3.5 text-red-500" />
                      <span>Multi-Zone Heartland Redundancy</span>
                    </div>
                  </div>

                  {/* Box 3 */}
                  <div className="p-8 rounded-xl border border-blue-900/60 bg-[#0d1b38]/50 hover:bg-[#0d1b38]/80 hover:border-blue-700/60 transition-all space-y-4 shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#070e1e] border border-blue-900/80 text-red-400 shadow-xs">
                        <Lock className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-red-500">
                        PILLAR 03
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        Sovereign Cryptographic Privacy
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        Hardware Root-Of-Trust
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Defend your proprietary algorithms and intellectual property with zero-data-retention hardware enclaves. 
                      Your queries belong to your enterprise—never monetized or reviewed by Big Tech monopolies.
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 border-t border-blue-900/40">
                      <ShieldCheck className="h-3.5 w-3.5 text-red-500" />
                      <span>Zero Secondary Data Monopolization</span>
                    </div>
                  </div>

                </div>

                {/* Callout Link to Blog / Dispatches */}
                <div className="mt-14 p-6 rounded-xl border border-blue-900/70 bg-[#0c1836]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/20 border border-red-500/40 text-red-400">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">The Sovereign Dispatch</div>
                      <div className="text-xs text-slate-400">Read field notes on West Texas cooling, diesel redundancy, and de-sanitizing vector spaces.</div>
                    </div>
                  </div>

                  <button
                    onClick={navigateToBlog}
                    className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer"
                  >
                    <span>Read All 6 Dispatches</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: BLOG LIST */}
        {currentView === 'blog' && (
          <BlogList
            onSelectPost={navigateToPost}
            onGoHome={navigateToHome}
          />
        )}

        {/* VIEW 3: SINGLE BLOG POST */}
        {currentView === 'post' && selectedPost && (
          <BlogPostView
            post={selectedPost}
            onBack={navigateToBlog}
            onSelectPost={navigateToPost}
            onGoHome={navigateToHome}
          />
        )}

      </main>

      {/* Minimalist Plausible Footer */}
      <footer className="border-t border-blue-950 bg-[#050b18] py-8 text-xs text-slate-400">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono">
            <span onClick={navigateToHome} className="text-white font-bold tracking-tight cursor-pointer">
              Meck<span className="text-red-500">AI</span><span className="text-slate-400">.net</span>
            </span>
            <span className="text-blue-900">|</span>
            <span className="text-slate-400 text-[11px]">AMERICAN COMPUTATIONAL SOVEREIGNTY</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <button onClick={navigateToHome} className="hover:text-white transition-colors cursor-pointer">
              Platform
            </button>
            <button onClick={navigateToBlog} className="text-red-400 hover:text-white transition-colors cursor-pointer">
              The Sovereign Dispatch (Blog)
            </button>
            <span className="text-slate-600">·</span>
            <span>&copy; {new Date().getFullYear()} MeckAI.net</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
