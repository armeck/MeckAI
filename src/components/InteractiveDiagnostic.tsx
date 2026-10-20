import React, { useState } from 'react';
import { ArrowRight, Layers, Workflow, Check, Sparkles } from 'lucide-react';

interface DiagnosticResult {
  title: string;
  discoveryInsight: string;
  pipelineArchitecture: string[];
  operationalImpact: string;
}

const DIAGNOSTIC_MAP: Record<string, DiagnosticResult> = {
  'documents': {
    title: 'Automated Document Extraction & ERP Reconciliation Pipeline',
    discoveryInsight: 'Your team is likely spending 65% of their manual time cross-referencing variable PDF layouts, checking line-item codes against purchase orders, and flagging billing mismatches.',
    pipelineArchitecture: [
      'Document OCR & Layout Analysis Engine',
      'Deterministic Entity & Table Normalizer',
      'Contextual Discrepancy & Confidence Scorer',
      'Direct ERP Ingestion Queue with Human Exception Review',
    ],
    operationalImpact: 'Eliminates 85%+ of manual invoice or contract keying; flags pricing variances immediately.',
  },
  'dispatch': {
    title: 'Event-Driven Dispatch & Telematics Routing Pipeline',
    discoveryInsight: 'Dispatchers are constantly juggling telematics portals, driver status messages, and customer email updates. The bottleneck is fragmented real-time status data.',
    pipelineArchitecture: [
      'Multi-Carrier Telematics & GPS Stream Ingestion',
      'Load Board & Rate Confirmation Normalizer',
      'Automated Driver Availability & Hours-of-Service Calculator',
      'Unified Dispatch Triage Dashboard & Webhook Alerts',
    ],
    operationalImpact: 'Saves 3 to 4 hours per dispatcher daily; guarantees real-time ETA accuracy across customer channels.',
  },
  'spreadsheets': {
    title: 'Centralized ETL & Data Harmonization Pipeline',
    discoveryInsight: 'Spreadsheets have become your default database because your core software platforms don’t communicate. One person likely owns the fragile spreadsheet macros.',
    pipelineArchitecture: [
      'Automated Daily Ingestion from Internal APIs & Flat Files',
      'Schema Validation & De-Duplication Engine',
      'Automated Reconciliation & Business Logic Layer',
      'Synchronized Relational Database & Real-Time Reporting Views',
    ],
    operationalImpact: 'Removes the morning 90-minute spreadsheet triage ritual; ensures zero corrupted records.',
  },
  'iot': {
    title: 'Shop-Floor Machine & Field Asset Telemetry Pipeline',
    discoveryInsight: 'Equipment is generating valuable sensor data or cycle logs, but it sits trapped on local controllers. Machine idle time is only noticed at shift changes.',
    pipelineArchitecture: [
      'Non-Intrusive Edge Controller Log Collectors',
      'Real-Time Telemetry Stream & Noise Filtering',
      'Spindle/Engine Anomaly & Idle Detection Algorithms',
      'Live Supervisor Alerts & Shift Performance Telemetry',
    ],
    operationalImpact: 'Recovers 15% to 25% of unmonitored equipment downtime; replaces manual paper shift logs.',
  },
};

interface InteractiveDiagnosticProps {
  onOpenAuditModal: () => void;
}

export const InteractiveDiagnostic: React.FC<InteractiveDiagnosticProps> = ({ onOpenAuditModal }) => {
  const [selectedBottleneck, setSelectedBottleneck] = useState<'documents' | 'dispatch' | 'spreadsheets' | 'iot'>('documents');

  const currentResult = DIAGNOSTIC_MAP[selectedBottleneck];

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-10 shadow-xs">
      <div className="max-w-2xl mb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive Diagnostic</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Where Is Your Operational Friction?
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Select the challenge closest to your company’s daily reality to see how we investigate and engineer a solution.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          { id: 'documents', label: 'Unstructured PDFs & Invoices', sub: 'Manual data entry from files' },
          { id: 'dispatch', label: 'Dispatch & Fleet Routing', sub: 'Multiple portals & driver updates' },
          { id: 'spreadsheets', label: 'Spreadsheet Macro Spaghetti', sub: 'Manual copy-paste between apps' },
          { id: 'iot', label: 'Equipment & Shop Floor Logs', sub: 'Trapped machine telematics' },
        ].map((tab) => {
          const active = selectedBottleneck === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedBottleneck(tab.id as any)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                active
                  ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-slate-900 dark:text-white shadow-xs'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="text-xs font-bold leading-snug">{tab.label}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{tab.sub}</div>
            </button>
          );
        })}
      </div>

      {/* Result Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/90 space-y-6">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-1">
            Recommended Pipeline Blueprint
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            {currentResult.title}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>What We Uncover During Discovery</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentResult.discoveryInsight}
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Workflow className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Tailored Pipeline Architecture</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {currentResult.pipelineArchitecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-200">Expected Impact:</span> {currentResult.operationalImpact}
          </div>

          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Request Investigation for this Pipeline</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
