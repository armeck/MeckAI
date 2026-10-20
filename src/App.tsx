import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { NeuralCanvas } from './components/NeuralCanvas';
import { BlogList } from './components/BlogList';
import { BlogPostView } from './components/BlogPostView';
import { TestimonialsPage } from './components/TestimonialsPage';
import { ThemeToggle } from './components/ThemeToggle';
import { ProcessAuditModal } from './components/ProcessAuditModal';
import { InteractiveDiagnostic } from './components/InteractiveDiagnostic';
import { BLOG_POSTS } from './data/blogPosts';
import { CASE_STUDIES } from './data/caseStudies';
import { TESTIMONIALS } from './data/testimonials';
import { BlogPost } from './types/blog';
import { useTheme } from './hooks/useTheme';
import { 
  ArrowRight, 
  Search, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Menu, 
  X, 
  ChevronRight,
  Database,
  FileText,
  Clock,
  ShieldCheck,
  Quote
} from 'lucide-react';

export default function App() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme();
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'post' | 'testimonials'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Sync hash routing
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
      if (hash === '#/testimonials' || hash === '#/case-results') {
        setCurrentView('testimonials');
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

  const navigateToTestimonials = () => {
    window.location.hash = '#/testimonials';
    setCurrentView('testimonials');
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

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      navigateToHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070b14] dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Header - Strict 3-zone contract, no status indicator */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6">
          
          {/* Zone 1: Brand wordmark */}
          <div onClick={navigateToHome} className="cursor-pointer">
            <Logo size="md" />
          </div>

          {/* Zone 2: 4 clean, single-line navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <button
              onClick={() => scrollToSection('approach')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Our Approach
            </button>

            <button
              onClick={() => scrollToSection('capabilities')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Pipeline Types
            </button>

            <button
              onClick={navigateToTestimonials}
              className={`transition-colors cursor-pointer whitespace-nowrap ${
                currentView === 'testimonials'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Case Results
            </button>

            <button
              onClick={navigateToBlog}
              className={`transition-colors cursor-pointer whitespace-nowrap ${
                currentView === 'blog' || currentView === 'post'
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Engineering Insights
            </button>
          </nav>

          {/* Zone 3: Theme Toggle + 1 Primary Action Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle
              themeMode={themeMode}
              resolvedTheme={resolvedTheme}
              onSelectMode={setThemeMode}
            />

            <button
              type="button"
              onClick={() => setIsAuditModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              Request Process Audit
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle
              themeMode={themeMode}
              resolvedTheme={resolvedTheme}
              onSelectMode={setThemeMode}
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090e1a] px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => {
                navigateToHome();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Home &amp; Overview
            </button>

            <button
              onClick={() => {
                scrollToSection('approach');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Our Approach &amp; Methodology
            </button>

            <button
              onClick={() => {
                scrollToSection('capabilities');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Custom Pipeline Types
            </button>

            <button
              onClick={() => {
                navigateToTestimonials();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Client Results &amp; Endorsements
            </button>

            <button
              onClick={() => {
                navigateToBlog();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Engineering Insights (Blog)
            </button>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuditModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold tracking-wide text-center cursor-pointer shadow-xs"
              >
                Request Process Audit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main View Router */}
      <main className="flex-1 flex flex-col justify-center">
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            
            {/* Hero Section */}
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
              
              {/* Subtle Animated Node/Pipeline Canvas Background */}
              <div className="absolute inset-0 opacity-40 dark:opacity-30 pointer-events-none">
                <NeuralCanvas />
              </div>

              {/* Ambient Radial Accent */}
              <div 
                className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] rounded-full"
                aria-hidden="true" 
              />

              <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6 z-10">
                
                {/* Quiet Kicker (Zero-Pill, Unboxed Text) */}
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">MECK PIPELINE CONSULTING</span>
                  <span aria-hidden="true">·</span>
                  <span>DISCOVERY FIRST, CODE SECOND</span>
                </div>

                {/* Display Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance]">
                  Custom Data &amp; AI Pipelines Built Around How Your Business Actually Works.
                </h1>

                {/* Value Proposition */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  You know your operational workflows need modernization, but off-the-shelf software doesn't fit your business. 
                  We embed with your team, shadow your processes, uncover where time is lost, and engineer custom, production-grade pipelines to solve it.
                </p>

                {/* Primary Hero Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={() => setIsAuditModalOpen(true)}
                    className="w-full sm:w-auto h-12 px-7 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Request a Process Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('approach')}
                    className="w-full sm:w-auto h-12 px-6 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    How We Investigate
                  </button>
                </div>

                {/* Trust Signifiers - Clean Unboxed Text */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>Zero Off-the-Shelf Compromises</span>
                  <span aria-hidden="true">·</span>
                  <span>Direct Integration with Your Existing Tools</span>
                  <span aria-hidden="true">·</span>
                  <span>Your Team Owns the Code</span>
                </div>

              </div>
            </section>

            {/* Metric & Proof Strip */}
            <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 py-8">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                      100%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Custom-Engineered Architecture
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                      20+ hrs
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Avg. Weekly Operator Time Saved
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                      30 Days
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      From Audit to Production Pilot
                    </div>
                  </div>
                  <div className="pt-3 md:pt-0">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                      0 Seats
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      No Recurring SaaS License Fees
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: OUR 4-STEP METHODOLOGY */}
            <section id="approach" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="max-w-2xl mb-14 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    CONSULTING FRAMEWORK
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    You Don’t Need to Know What to Build. That’s Our Job.
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Most companies know they have friction, but don’t have the time or specialized data engineers 
                    to diagnose the root causes. Here is how our team investigates and builds your solution:
                  </p>
                </div>

                {/* 4 Methodology Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Step 1 */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                          <Search className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">01</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Investigate &amp; Shadow
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        We sit with your daily operators, observe how tasks actually get executed, and map every manual spreadsheet handoff, PDF extraction, and system bottleneck.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      Deliverable: Friction &amp; Workflow Map
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                          <Workflow className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">02</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Map &amp; Blueprint
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        We translate fuzzy operational pain into an exact pipeline architecture: data schemas, ingestion queues, automated validation logic, and destination sinks.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      Deliverable: Pipeline Technical Spec
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                          <Cpu className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">03</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Custom Engineering
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        We write clean, robust code for your custom pipeline—handling messy real-world edge cases, unstructured files, rate limits, and fallback verification queues.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      Deliverable: Tested Production Pipeline
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-4 shadow-xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">04</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Deploy &amp; Handover
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        We deploy into your infrastructure, run a parallel shadow test with live staff, train your team, and provide full documentation. You own all IP.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      Deliverable: Zero-Lock-In Handover
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 3: INTERACTIVE DIAGNOSTIC */}
            <section className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070e1e]/40">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <InteractiveDiagnostic onOpenAuditModal={() => setIsAuditModalOpen(true)} />
              </div>
            </section>

            {/* SECTION 4: CAPABILITIES / PIPELINE TYPES */}
            <section id="capabilities" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="max-w-2xl mb-12 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    PIPELINE ARCHITECTURES
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Pipelines Tailored to Your Specific Data Types
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Every company has a different data reality. We engineer pipelines around your existing files, systems, and hardware.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Pipeline Type 1 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Unstructured Document &amp; Invoicing Pipelines
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Custom document parsers that extract line items, PO numbers, dates, and contracts from messy multi-page PDFs, emails, and scans with 95%+ touchless accuracy.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Variable vendor invoice reconciliation</li>
                      <li>· Commercial lease and contract abstraction</li>
                      <li>· Medical chart and prior-authorization extraction</li>
                    </ul>
                  </div>

                  {/* Pipeline Type 2 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Database className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Disparate System &amp; Spreadsheet Harmonization
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Eliminate fragile daily spreadsheet routines. We build robust ETL pipelines that continuously ingest, clean, and sync data between incompatible software tools.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Multi-branch inventory &amp; order syncing</li>
                      <li>· Legacy SQL database to modern cloud views</li>
                      <li>· Automated daily accounting ledger reconciliation</li>
                    </ul>
                  </div>

                  {/* Pipeline Type 3 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Real-Time Event &amp; Operational Telemetry Pipelines
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      For logistics fleets, manufacturing plants, and service teams that need instant triage. Ingests streaming device logs, GPS data, and live orders.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Real-time freight dispatch and driver assignment</li>
                      <li>· Machine shop spindle downtime alerts</li>
                      <li>· Field technician work order queue optimization</li>
                    </ul>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 5: CASE STUDIES IN-DEPTH */}
            <section className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#070d1a]/50">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
                  <div className="max-w-xl space-y-2">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      INVESTIGATION &amp; RESULTS
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                      Real-World Case Studies
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      See how our process discovery translated into production pipelines across different sectors.
                    </p>
                  </div>

                  <button
                    onClick={navigateToTestimonials}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all client endorsements</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CASE_STUDIES.slice(0, 2).map((cs) => (
                    <div
                      key={cs.id}
                      className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xs flex flex-col justify-between space-y-6"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{cs.clientIndustry}</span>
                          <span className="font-mono">{cs.companyName}</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                          {cs.headline}
                        </h3>

                        <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">The Problem:</span> {cs.initialProblem}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">What We Discovered:</span> {cs.investigationDiscovery}
                          </div>
                          <div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">The Pipeline:</span> {cs.pipelineSolution}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                            {cs.keyMetric}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {cs.metricLabel}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px]">
                          {cs.architectureTags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* SECTION 6: CLIENT QUOTE SPOTLIGHT */}
            <section className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto opacity-70" />
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "{TESTIMONIALS[0].quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {TESTIMONIALS[0].name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {TESTIMONIALS[0].role} · {TESTIMONIALS[0].company}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: FINAL CALL TO ACTION */}
            <section className="py-16 md:py-24 bg-slate-900 text-white dark:bg-[#060a14] border-t border-slate-800">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                  NEXT STEPS
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
                  Ready to Uncover Where Your Team is Losing Time?
                </h2>
                <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  You don't need a formal RFP or a finished requirements document. 
                  Reach out with your current operational friction, and our engineering team will walk through your processes with you.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsAuditModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Schedule a Process Investigation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={navigateToBlog}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-all cursor-pointer"
                  >
                    Read Engineering Insights
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
            onRequestAudit={() => setIsAuditModalOpen(true)}
          />
        )}

        {/* VIEW 4: TESTIMONIALS / CASE RESULTS */}
        {currentView === 'testimonials' && (
          <TestimonialsPage
            onGoHome={navigateToHome}
            onRequestAudit={() => setIsAuditModalOpen(true)}
          />
        )}

      </main>

      {/* Modern, Clean Minimalist Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050811] py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span onClick={navigateToHome} className="text-slate-900 dark:text-white font-bold tracking-tight cursor-pointer">
              Meck Pipeline Consulting
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">Custom Data &amp; AI Engineering</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <button onClick={navigateToHome} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Overview
            </button>
            <button onClick={() => scrollToSection('approach')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Methodology
            </button>
            <button onClick={navigateToTestimonials} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Case Results
            </button>
            <button onClick={navigateToBlog} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Engineering Insights
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span>&copy; {new Date().getFullYear()} Meck Systems Consulting LLC. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Interactive Process Audit Modal */}
      <ProcessAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
}
