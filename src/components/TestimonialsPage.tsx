import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Testimonial } from '../types/testimonial';
import { ChevronRight, ArrowRight, Quote } from 'lucide-react';

interface TestimonialsPageProps {
  onGoHome: () => void;
  onRequestAudit: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onGoHome,
  onRequestAudit,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = [
    'all',
    'Logistics & Transportation',
    'Commercial Real Estate',
    'Advanced Manufacturing',
    'Healthcare Administration',
    'Wholesale Distribution',
  ];

  const filtered = selectedIndustry === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.industry === selectedIndustry);

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
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Client Results</span>
          </div>

          <button
            onClick={onGoHome}
            className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            &larr; Back to Services
          </button>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold">
            CLIENT ENDORSEMENTS &amp; OUTCOMES
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Trusted by Teams With Complex Operational Workflows
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Here is what happens when you skip generic SaaS subscriptions and hire an engineering team to 
            shadow your staff, map the friction, and engineer a custom data pipeline tailored to your company.
          </p>
        </div>

        {/* Industry Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setSelectedIndustry(ind)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedIndustry === ind
                  ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {ind === 'all' ? 'All Industries' : ind}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filtered.map((item: Testimonial) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Metric Strip */}
                <div className="flex items-baseline justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                      {item.outcomeMetric}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      {item.metricContext}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </blockquote>

                {/* Pipeline Delivered */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Custom Pipeline Built:
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {item.pipelineBuilt}
                  </div>
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} · <span className="font-medium text-slate-700 dark:text-slate-300">{item.company}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 text-right">
                  {item.industry}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-center space-y-4 max-w-2xl mx-auto shadow-xs">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Have a Messy Workflow That Needs Investigating?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
            You don't need to know the technical solution yet. We start every engagement with a discovery conversation to learn your processes.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onRequestAudit}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
