import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Testimonial, TradeCategory } from '../types/testimonial';
import { 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  ArrowRight, 
  Quote, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Terminal,
  Cpu
} from 'lucide-react';

interface TestimonialsPageProps {
  onGoHome: () => void;
  onProvisionNode: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onGoHome, onProvisionNode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedComparison, setExpandedComparison] = useState<Record<string, boolean>>({});
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories: (string | TradeCategory)[] = [
    'all', 
    'Agriculture', 
    'Automotive', 
    'Retail & Service', 
    'Outdoors & Heavy', 
    'Pitmaster & Culinary'
  ];

  const filteredTestimonials = selectedFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.tradeCategory === selectedFilter);

  const toggleComparison = (id: string) => {
    setExpandedComparison((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="py-8 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-6 mb-6 sm:pb-8 sm:mb-8 border-b border-blue-900/40">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={onGoHome}
              className="text-slate-300 hover:text-white hover:underline cursor-pointer transition-colors"
            >
              MeckAI Home
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-red-500 font-semibold">Field Voices &amp; Testimonials</span>
          </div>

          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to Platform
          </button>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/40 text-xs font-mono tracking-widest uppercase text-red-400 font-bold">
            <Quote className="h-3.5 w-3.5 text-red-500" />
            <span>UNFILTERED FIELD TESTIMONIALS · REAL WORKERS, REAL COMPUTE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The Backbone of America Runs on MeckAI.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From combine harvester hydraulic diagnostics and squarebody transmission fabrication 
            to parking lot grocery cart trajectory physics and midnight church van alternator repairs—discover how 
            independent operators deploy raw, sovereign artificial intelligence without corporate HR lectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 sm:pb-8 sm:mb-10 border-b border-blue-900/40">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-950/40 border border-red-400/50'
                  : 'bg-[#0e1d42]/60 border border-blue-900/60 text-slate-300 hover:text-white hover:border-blue-700'
              }`}
            >
              {cat === 'all' ? 'All Trades & Vocations' : cat}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredTestimonials.map((t: Testimonial) => {
            const isComparing = !!expandedComparison[t.id];
            const hasImgError = !!imgErrors[t.id];

            return (
              <div
                key={t.id}
                className="p-5 sm:p-7 md:p-8 rounded-2xl border-2 border-blue-900/70 bg-gradient-to-b from-[#0e1d42] to-[#081226] hover:border-red-500/60 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-5 sm:space-y-6">
                  
                  {/* Profile Header */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="relative shrink-0">
                      {!hasImgError ? (
                        <img
                          src={t.imageUrl}
                          alt={t.name}
                          onError={() => handleImageError(t.id)}
                          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-red-500 shadow-lg ring-2 sm:ring-4 ring-blue-900/40"
                        />
                      ) : (
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-red-600 to-blue-900 flex items-center justify-center text-white font-mono font-bold text-lg sm:text-xl border-2 border-red-500 shadow-lg ring-2 sm:ring-4 ring-blue-900/40">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-red-600 text-[9px] sm:text-[10px] text-white font-bold border-2 border-[#0e1d42]">
                        ★
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug break-words">
                          {t.name}
                        </h3>
                        <span className="self-start sm:self-auto text-[10px] font-mono font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40 shrink-0">
                          {t.tradeCategory}
                        </span>
                      </div>

                      <div className="text-xs font-medium text-slate-300 leading-snug">
                        {t.role}
                      </div>

                      <div className="text-xs text-slate-400 break-words mt-0.5 leading-snug">
                        {t.companyOrAffiliation}
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-1">
                        <MapPin className="h-3 w-3 text-red-500 shrink-0" />
                        <span>{t.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Use Case Tag */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-[#070e1e] border border-blue-900/80 text-[11px] font-mono text-slate-300 flex items-start gap-2">
                    <Wrench className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                    <div className="break-words leading-relaxed">
                      <strong className="text-white">Applied Use Case:</strong> {t.useCase}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-sm text-slate-200 leading-relaxed italic relative pl-4 border-l-2 border-red-500/70">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Optional Interactive "Compare to Coastal AI" prompt comparison */}
                  {t.comparison && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleComparison(t.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-red-500" />
                        <span>{isComparing ? 'Hide AI Comparison Log' : 'Compare: Coastal Big Tech AI vs. MeckAI'}</span>
                        {isComparing ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>

                      {isComparing && (
                        <div className="mt-3.5 rounded-xl border border-blue-900/80 bg-[#060c18] p-4 text-xs font-mono space-y-3.5 animate-in fade-in duration-200">
                          <div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                              <Terminal className="h-3 w-3 text-blue-400" />
                              <span>Worker Prompt:</span>
                            </div>
                            <div className="p-2 rounded bg-[#0b162f] text-slate-200 border border-blue-900/60">
                              &ldquo;{t.comparison.userPrompt}&rdquo;
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {/* Coastal Big Tech AI Output */}
                            <div className="p-2.5 rounded-lg border border-amber-900/50 bg-amber-950/20 text-amber-200/90 space-y-1">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3 text-amber-400" />
                                <span>Coastal Big Tech AI</span>
                              </div>
                              <p className="text-[11px] leading-relaxed text-amber-100/80">
                                {t.comparison.coastalAiResponse}
                              </p>
                            </div>

                            {/* MeckAI Output */}
                            <div className="p-2.5 rounded-lg border border-emerald-900/50 bg-emerald-950/20 text-emerald-200/90 space-y-1">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                <span>MeckAI (Heartland Core)</span>
                              </div>
                              <p className="text-[11px] leading-relaxed text-emerald-100/90">
                                {t.comparison.meckAiResponse}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Bottom Card Footer: Result Metric & Hardware Tier */}
                <div className="pt-5 mt-6 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>{t.metric}</span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Cpu className="h-3 w-3 text-blue-400" />
                    <span>Cluster: <strong className="text-slate-300">{t.hardwareTier}</strong></span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-8 rounded-2xl border-2 border-red-500/40 bg-gradient-to-r from-[#0d1c3e] via-[#09152e] to-[#0d1c3e] text-center space-y-4 shadow-2xl">
          <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
            ★ UNFILTERED WORKHORSE COMPUTE ★
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ready to Put Sovereign AI to Work in Your Shop, Fleet, or Field?
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-300">
            No corporate disclaimers. No sensitivity filters. Just raw, mathematically verified foundation models executing on American soil.
          </p>
          <div className="pt-2">
            <button
              onClick={onProvisionNode}
              className="h-12 px-8 rounded-lg bg-red-600 hover:bg-red-500 active:scale-98 text-white text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-950/40 border border-red-500/60 cursor-pointer"
            >
              <span>Provision Your Sovereign Node</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
