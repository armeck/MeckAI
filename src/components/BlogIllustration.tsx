import React from 'react';

interface BlogIllustrationProps {
  type: 'discovery' | 'architecture' | 'engineering' | 'integration' | 'governance';
  className?: string;
}

export const BlogIllustration: React.FC<BlogIllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 flex flex-col justify-between ${className}`}>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none bg-grid-subtle-light dark:bg-grid-subtle-dark" />

      {/* SVG Pipeline Visualization */}
      <div className="relative z-10 w-full h-40 flex items-center justify-center">
        {type === 'discovery' && (
          <svg viewBox="0 0 400 160" className="w-full h-full text-slate-800 dark:text-slate-200">
            {/* Step 1: Manual Input */}
            <rect x="20" y="50" width="80" height="60" rx="8" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="60" y="78" textAnchor="middle" className="text-[11px] font-sans fill-slate-700 dark:fill-slate-300 font-semibold">Operator Work</text>
            <text x="60" y="94" textAnchor="middle" className="text-[9px] font-mono fill-slate-500 dark:fill-slate-400">Interviews</text>

            {/* Arrow 1 */}
            <path d="M100 80h40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
            <polygon points="140,80 134,76 134,84" fill="currentColor" />

            {/* Step 2: Investigation & Audit */}
            <rect x="150" y="35" width="100" height="90" rx="8" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-500" strokeWidth="1.5" />
            <text x="200" y="65" textAnchor="middle" className="text-[11px] font-sans fill-blue-600 dark:fill-blue-400 font-bold">Process Audit</text>
            <text x="200" y="82" textAnchor="middle" className="text-[9px] font-mono fill-slate-600 dark:fill-slate-300">Bottleneck Map</text>
            <text x="200" y="100" textAnchor="middle" className="text-[8px] font-mono fill-blue-500">Friction Quantified</text>

            {/* Arrow 2 */}
            <path d="M250 80h40" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="290,80 284,76 284,84" fill="currentColor" />

            {/* Step 3: Custom Architecture */}
            <rect x="300" y="50" width="80" height="60" rx="8" className="fill-white dark:fill-slate-800 stroke-emerald-500" strokeWidth="1.5" />
            <text x="340" y="78" textAnchor="middle" className="text-[11px] font-sans fill-emerald-600 dark:fill-emerald-400 font-semibold">Pipeline Spec</text>
            <text x="340" y="94" textAnchor="middle" className="text-[9px] font-mono fill-slate-500 dark:fill-slate-400">Zero Shelfware</text>
          </svg>
        )}

        {type === 'architecture' && (
          <svg viewBox="0 0 400 160" className="w-full h-full text-slate-800 dark:text-slate-200">
            {/* Multi Source Ingestion */}
            <rect x="25" y="25" width="75" height="32" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="62" y="45" textAnchor="middle" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300">Spreadsheets</text>

            <rect x="25" y="65" width="75" height="32" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="62" y="85" textAnchor="middle" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300">Vendor PDFs</text>

            <rect x="25" y="105" width="75" height="32" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="62" y="125" textAnchor="middle" className="text-[10px] font-sans fill-slate-600 dark:fill-slate-300">Legacy ERP</text>

            {/* Convergence to Queue */}
            <path d="M100 41h40v30h30" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M100 81h70" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M100 121h40v-30h30" fill="none" stroke="currentColor" strokeWidth="1.5" />

            {/* Central Normalization Engine */}
            <rect x="180" y="45" width="110" height="70" rx="8" className="fill-blue-50 dark:fill-blue-950/40 stroke-blue-600" strokeWidth="1.5" />
            <text x="235" y="75" textAnchor="middle" className="text-[11px] font-sans fill-blue-600 dark:fill-blue-400 font-bold">Normalization</text>
            <text x="235" y="93" textAnchor="middle" className="text-[9px] font-mono fill-slate-600 dark:fill-slate-300">Schema Validation</text>

            {/* Output */}
            <path d="M290 80h40" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="330,80 324,76 324,84" fill="currentColor" />

            <rect x="335" y="55" width="55" height="50" rx="6" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="362" y="84" textAnchor="middle" className="text-[10px] font-sans fill-slate-700 dark:fill-slate-300 font-semibold">Clean DB</text>
          </svg>
        )}

        {type === 'engineering' && (
          <svg viewBox="0 0 400 160" className="w-full h-full text-slate-800 dark:text-slate-200">
            {/* Input stream */}
            <rect x="30" y="50" width="75" height="60" rx="8" className="fill-white dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" strokeWidth="1.5" />
            <text x="67" y="78" textAnchor="middle" className="text-[10px] font-sans fill-slate-700 dark:fill-slate-300 font-semibold">Raw Documents</text>
            <text x="67" y="94" textAnchor="middle" className="text-[8px] font-mono fill-slate-500">Unstructured</text>

            <path d="M105 80h35" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="140,80 134,76 134,84" fill="currentColor" />

            {/* Parsing & Heuristic Router */}
            <rect x="145" y="35" width="110" height="90" rx="8" className="fill-slate-100 dark:fill-slate-800/80 stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.5" />
            <text x="200" y="65" textAnchor="middle" className="text-[11px] font-sans fill-slate-900 dark:fill-white font-bold">Extraction Core</text>
            <text x="200" y="82" textAnchor="middle" className="text-[9px] font-mono fill-blue-600 dark:fill-blue-400">Deterministic + NLP</text>
            <text x="200" y="100" textAnchor="middle" className="text-[8px] font-mono fill-slate-500">Confidence Scoring</text>

            {/* Fork to Auto vs Review */}
            <path d="M255 65h40v-20h25" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <path d="M255 95h40v20h25" fill="none" stroke="#f59e0b" strokeWidth="1.5" />

            <rect x="325" y="30" width="65" height="32" rx="6" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500" strokeWidth="1.5" />
            <text x="357" y="50" textAnchor="middle" className="text-[9px] font-sans fill-emerald-700 dark:fill-emerald-300 font-bold">&gt;98% Direct Pass</text>

            <rect x="325" y="98" width="65" height="32" rx="6" className="fill-amber-50 dark:fill-amber-950/40 stroke-amber-500" strokeWidth="1.5" />
            <text x="357" y="118" textAnchor="middle" className="text-[9px] font-sans fill-amber-700 dark:fill-amber-300 font-bold">10s Review</text>
          </svg>
        )}

        {(type === 'integration' || type === 'governance') && (
          <svg viewBox="0 0 400 160" className="w-full h-full text-slate-800 dark:text-slate-200">
            {/* 4 Stage Roadmap */}
            <circle cx="60" cy="80" r="24" className="fill-white dark:fill-slate-800 stroke-blue-500" strokeWidth="2" />
            <text x="60" y="84" textAnchor="middle" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">W1</text>
            <text x="60" y="122" textAnchor="middle" className="text-[9px] font-sans fill-slate-600 dark:fill-slate-400">Shadow</text>

            <line x1="84" y1="80" x2="136" y2="80" stroke="currentColor" strokeWidth="1.5" />

            <circle cx="160" cy="80" r="24" className="fill-white dark:fill-slate-800 stroke-blue-500" strokeWidth="2" />
            <text x="160" y="84" textAnchor="middle" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">W2</text>
            <text x="160" y="122" textAnchor="middle" className="text-[9px] font-sans fill-slate-600 dark:fill-slate-400">Blueprint</text>

            <line x1="184" y1="80" x2="236" y2="80" stroke="currentColor" strokeWidth="1.5" />

            <circle cx="260" cy="80" r="24" className="fill-white dark:fill-slate-800 stroke-blue-500" strokeWidth="2" />
            <text x="260" y="84" textAnchor="middle" className="text-xs font-mono font-bold fill-blue-600 dark:fill-blue-400">W3</text>
            <text x="260" y="122" textAnchor="middle" className="text-[9px] font-sans fill-slate-600 dark:fill-slate-400">Build</text>

            <line x1="284" y1="80" x2="336" y2="80" stroke="currentColor" strokeWidth="1.5" />

            <circle cx="350" cy="80" r="24" className="fill-emerald-50 dark:fill-emerald-950/40 stroke-emerald-500" strokeWidth="2" />
            <text x="350" y="84" textAnchor="middle" className="text-xs font-mono font-bold fill-emerald-600 dark:fill-emerald-400">W4</text>
            <text x="350" y="122" textAnchor="middle" className="text-[9px] font-sans fill-emerald-600 dark:fill-emerald-400 font-semibold">Deploy</text>
          </svg>
        )}
      </div>

      <div className="relative z-10 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span className="font-mono">ENGINEERING ARCHITECTURE</span>
        <span className="font-mono text-blue-600 dark:text-blue-400">Meck Systems Lab</span>
      </div>
    </div>
  );
};
