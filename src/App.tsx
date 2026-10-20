import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { NeuralCanvas } from './components/NeuralCanvas';
import { BlogList } from './components/BlogList';
import { BlogPostView } from './components/BlogPostView';
import { ThemeToggle } from './components/ThemeToggle';
import { ConsultationModal } from './components/ConsultationModal';
import { BLOG_POSTS } from './data/blogPosts';
import { BlogPost } from './types/blog';
import { useTheme } from './hooks/useTheme';
import { 
  ArrowRight, 
  Search, 
  Workflow, 
  Cpu, 
  CheckCircle2, 
  Menu, 
  X, 
  Database,
  FileText,
  Clock,
  Send,
  Mail,
  User,
  Building2
} from 'lucide-react';

export default function App() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme();
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  // Inline contact form state for homepage
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactNotes, setContactNotes] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

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

  const handleInlineContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactCompany.trim()) return;
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070b14] dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Top Header - Responsive with Light/Dark/Auto Toggle */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6">
          
          {/* Brand Wordmark & Logo */}
          <div onClick={navigateToHome} className="cursor-pointer">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
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

          {/* Header Controls: Theme Toggle & Primary Consultation Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle
              themeMode={themeMode}
              resolvedTheme={resolvedTheme}
              onSelectMode={setThemeMode}
            />

            <button
              type="button"
              onClick={() => setIsConsultModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Right Controls: Compact Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle
              themeMode={themeMode}
              resolvedTheme={resolvedTheme}
              onSelectMode={setThemeMode}
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090e1c] px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => {
                scrollToSection('approach');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
            >
              Our Approach &amp; Process
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
                  setIsConsultModalOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold tracking-wide text-center cursor-pointer shadow-xs"
              >
                Schedule Consultation
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Main View Router */}
      <main className="flex-1">

        {/* VIEW 1: HOMEPAGE */}
        {currentView === 'home' && (
          <div>
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 py-20 sm:py-28 md:py-32">
              <NeuralCanvas />

              <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
                
                {/* Clean, Subtle Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6 backdrop-blur-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>Custom Pipeline Architecture &amp; Data Engineering Consulting</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance]">
                  We Investigate Your Workflows &amp; Engineer Custom Automation Pipelines
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Most organizations know they have bottlenecks, but don't know the exact data pipelines, integrations, or AI tooling required. We embed with your team, audit your manual processes, and build bespoke pipelines that eliminate the friction.
                </p>

                {/* Primary Calls to Action */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsConsultModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Schedule Process Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('approach')}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Explore Our Approach
                  </button>
                </div>

                {/* Bullet Proof Points */}
                <div className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">Discovery First</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">We observe real daily friction before writing a single line of pipeline code.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">Zero Vendor Lock-In</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Built on open standards and your existing cloud infrastructure; you own 100% of the code.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white">Hands-On Handover</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Complete observability, runbooks, and staff training so your team operates with confidence.</div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION 1: HOW WE WORK (OUR 3-STEP CONSULTING METHODOLOGY) */}
            <section id="approach" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="text-center space-y-3 mb-16">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                    CONSULTING METHODOLOGY
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
                    You Don't Need to Know What to Build. That's Our Job.
                  </h2>
                  <p className="max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Most companies buy off-the-shelf software and force their operations into awkward molds. We work in reverse: starting with the human reality of your operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Step 1 */}
                  <div className="relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                        01
                      </div>
                      <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      Deep Workflow Investigation
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      We shadow your key team members, trace paper trails, inspect manual spreadsheets, and identify invisible failure points where data gets lost or hand-keyed repeatedly.
                    </p>
                    <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      <li>· Staff workflow interviews</li>
                      <li>· Data provenance mapping</li>
                      <li>· Latency and error root-cause diagnosis</li>
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div className="relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                        02
                      </div>
                      <Workflow className="h-5 w-5 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      Architecture &amp; Bespoke Engineering
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      We architect and build tailored ETL, streaming, or AI parsing pipelines suited specifically to your schemas, APIs, and edge cases. No generic bloat.
                    </p>
                    <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      <li>· Resilient retry &amp; error isolation</li>
                      <li>· Custom schema validation rules</li>
                      <li>· AI enrichment &amp; multimodal extractors</li>
                    </ul>
                  </div>

                  {/* Step 3 */}
                  <div className="relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                        03
                      </div>
                      <Cpu className="h-5 w-5 text-slate-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      Deployment, Knowledge Transfer &amp; Handover
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      We deploy cleanly into your cloud environment, configure telemetry alerts, write comprehensive runbooks, and train your staff to operate it seamlessly.
                    </p>
                    <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      <li>· Infrastructure-as-code deployment</li>
                      <li>· Observability dashboards &amp; alerts</li>
                      <li>· Engineering documentation &amp; training</li>
                    </ul>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 2: WHY CUSTOM PIPELINES (THE CORE ADVANTAGE) */}
            <section className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/20">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  <div className="lg:col-span-5 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                      THE CUSTOM ADVANTAGE
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
                      SaaS Tools Force You to Change Your Process. Custom Pipelines Adapt to You.
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Pre-packaged integration platforms charge exorbitant per-task fees, lock your data into proprietary connectors, and break whenever an edge case hits. 
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      We design lean, bulletproof pipelines built on robust modern foundations (Postgres, Python, Node, DuckDB, modern LLMs) that run in your own VPC with zero licensing surprises.
                    </p>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setIsConsultModalOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                      >
                        <span>Discuss your company's operational bottlenecks</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Tailored to Messy Reality
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Handles malformed CSVs, non-standard ERP exports, scanned physical bills of lading, and inconsistent naming conventions without breaking downstream systems.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Complete Code Ownership
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        You retain full intellectual property and source code access. No subscription fees to keep your own operations running.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Measured in Reclaimed Hours
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        We don't optimize for vanity metrics. We measure success by how many hours of manual data entry and triage your staff never has to do again.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Transparent, Milestone-Based
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Because every company’s operational architecture is unique, we scope projects based on verified discovery milestones rather than guesswork.
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 3: PIPELINE ARCHITECTURES & TYPES */}
            <section id="capabilities" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="text-center space-y-3 mb-14">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                    PIPELINE ARCHITECTURES
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
                    Examples of Custom Pipelines We Architect
                  </h2>
                  <p className="max-w-2xl mx-auto text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Every engagement is bespoke, but these are typical operational architectures we design and implement for clients:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Category 1 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Document &amp; Unstructured Data Ingestion
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      For teams receiving hundreds of invoices, PDFs, compliance records, or contracts. Automatically parses unstructured documents into validated database entries.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Optical OCR and vision LLM layout extraction</li>
                      <li>· Automated cross-referencing with master purchase orders</li>
                      <li>· Discrepancy flagging before data enters the accounting ledger</li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Database className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Cross-System ERP, CRM &amp; Legacy Database Sync
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      For businesses stuck between old on-premises software and modern cloud apps. Bidirectional sync with transactional guarantees and conflict resolution.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Change-data-capture (CDC) listeners on legacy DBs</li>
                      <li>· Idempotent webhook delivery with automated replay</li>
                      <li>· Deduplication across fragmented customer profiles</li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4 shadow-xs">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Workflow className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      Human-in-the-Loop Review &amp; AI Decision Augmentation
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      For high-stakes workflows where 100% full automation is too risky. Pipelines automatically handle standard cases and route anomalies to an intuitive review queue.
                    </p>
                    <ul className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <li>· Confidence score threshold routing</li>
                      <li>· Lightweight one-click human approval UI</li>
                      <li>· Continuous feedback loop to train custom heuristics</li>
                    </ul>
                  </div>

                  {/* Category 4 */}
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

            {/* SECTION 4: CLEAN CONSULTATION & CONTACT FORM */}
            <section id="contact" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
              <div className="mx-auto max-w-3xl px-4 sm:px-6">
                
                <div className="text-center space-y-3 mb-10">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                    GET IN TOUCH
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
                    Ready to Uncover Where Your Team is Losing Time?
                  </h2>
                  <p className="max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    You don't need an RFP or a formal requirements document. Reach out with your current operational friction, and our engineering team will walk through your processes with you.
                  </p>
                </div>

                <div className="p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs">
                  {contactSubmitted ? (
                    <div className="py-8 text-center space-y-4 animate-in fade-in">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Consultation Request Received
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-slate-900 dark:text-white">{contactName}</span>. 
                        We've received your notes for <span className="font-semibold text-slate-900 dark:text-white">{contactCompany}</span>. 
                        One of our engineers will reply directly to <span className="font-semibold text-blue-600 dark:text-blue-400">{contactEmail}</span> within 1 business day.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setContactSubmitted(false);
                          setContactName('');
                          setContactEmail('');
                          setContactCompany('');
                          setContactNotes('');
                        }}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline pt-2 cursor-pointer font-medium"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleInlineContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                            <input
                              type="text"
                              required
                              value={contactName}
                              onChange={(e) => setContactName(e.target.value)}
                              placeholder="Alex Morgan"
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                            Work Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                            <input
                              type="email"
                              required
                              value={contactEmail}
                              onChange={(e) => setContactEmail(e.target.value)}
                              placeholder="alex@company.com"
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Company / Organization *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={contactCompany}
                            onChange={(e) => setContactCompany(e.target.value)}
                            placeholder="e.g. Acme Logistics or Pacific Distribution"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Current Bottleneck or Workflow (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={contactNotes}
                          onChange={(e) => setContactNotes(e.target.value)}
                          placeholder="Briefly describe what your staff spends excessive manual time on..."
                          className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 leading-relaxed"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          Direct conversation with an engineer. No sales deck.
                        </span>
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Request Consultation</span>
                          <Send className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </form>
                  )}
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
            onRequestAudit={() => setIsConsultModalOpen(true)}
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
            <button onClick={() => scrollToSection('capabilities')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Pipeline Types
            </button>
            <button onClick={navigateToBlog} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Engineering Insights
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span>&copy; {new Date().getFullYear()} Meck Systems Consulting LLC. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Clean, Non-Wizard Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />

    </div>
  );
}
