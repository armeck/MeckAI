import React from 'react';

interface BlogIllustrationProps {
  type: 'cooling' | 'vectors' | 'datacenter' | 'generator' | 'almanac' | 'privacy';
  className?: string;
}

export const BlogIllustration: React.FC<BlogIllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-blue-900/60 bg-gradient-to-b from-[#0e1d42] to-[#070e1e] flex items-center justify-center ${className}`}>
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      {type === 'cooling' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-blue-400">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <path d="M60 140 Q 120 70, 200 120 T 340 80" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M60 160 Q 130 110, 210 150 T 340 120" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* Deep aquifer pipe */}
          <line x1="200" y1="20" x2="200" y2="190" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="200" cy="120" r="14" fill="#0f224a" stroke="#dc2626" strokeWidth="2" />
          <text x="200" y="124" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">58°F</text>
          <text x="80" y="55" fill="#94a3b8" fontSize="10" fontFamily="monospace">PERMIAN AQUIFER LOOP [800 FT]</text>
          <text x="280" y="180" fill="#38bdf8" fontSize="10" fontFamily="monospace">THERMAL BASELINE: NOMINAL</text>
        </svg>
      )}

      {type === 'vectors' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-red-500">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          {/* Grid axes */}
          <line x1="60" y1="170" x2="340" y2="170" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="70" y1="40" x2="70" y2="180" stroke="#1e293b" strokeWidth="1.5" />
          {/* MeckAI direct path (Red, straight, fast) */}
          <line x1="70" y1="170" x2="310" y2="60" stroke="#dc2626" strokeWidth="3" />
          <circle cx="310" cy="60" r="5" fill="#dc2626" />
          <text x="230" y="50" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">MECKAI: DIRECT OUTPUT</text>
          
          {/* Silicon Valley Convoluted path (dashed grey, detour) */}
          <path d="M70 170 Q 120 190, 150 140 T 190 170 T 240 120 T 310 90" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          <text x="110" y="195" fill="#64748b" fontSize="9" fontFamily="monospace">BIG TECH: APOLOGY PREAMBLE TAX (+34% TOKENS)</text>
        </svg>
      )}

      {type === 'generator' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-amber-500">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          {/* Generator housing */}
          <rect x="70" y="60" width="160" height="100" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          {/* Turbine flywheel */}
          <circle cx="280" cy="110" r="45" fill="#0f172a" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="280" cy="110" r="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
          <line x1="280" y1="65" x2="280" y2="155" stroke="#64748b" strokeWidth="1.5" />
          <line x1="235" y1="110" x2="325" y2="110" stroke="#64748b" strokeWidth="1.5" />
          <text x="85" y="95" fill="#f8fafc" fontSize="11" fontFamily="monospace" fontWeight="bold">CAT 3516B TURBO</text>
          <text x="85" y="115" fill="#94a3b8" fontSize="9" fontFamily="monospace">FUEL: 30,000 GAL ON-SITE</text>
          <text x="85" y="135" fill="#ef4444" fontSize="9" fontFamily="monospace">SWITCHOVER: &lt; 6 SECONDS</text>
          <text x="280" y="175" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">ROTARY FLYWHEEL [ACTIVE]</text>
        </svg>
      )}

      {type === 'datacenter' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-blue-500">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          {/* Server Silo */}
          <rect x="70" y="50" width="70" height="120" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          <rect x="165" y="50" width="70" height="120" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          <rect x="260" y="50" width="70" height="120" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          {/* LED indicator stacks */}
          {[65, 85, 105, 125, 145].map((y) => (
            <g key={y}>
              <line x1="80" y1={y} x2="130" y2={y} stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="175" y1={y} x2="225" y2={y} stroke="#dc2626" strokeWidth="1.5" />
              <line x1="270" y1={y} x2="320" y2={y} stroke="#38bdf8" strokeWidth="1.5" />
            </g>
          ))}
          <text x="200" y="195" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            TEXAS &amp; MIDWEST BARE-METAL ENCLAVES [AIR-GAPPED]
          </text>
        </svg>
      )}

      {type === 'almanac' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-amber-400">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          {/* Classic Blueprint Patent Lines */}
          <rect x="60" y="45" width="130" height="125" fill="#0c1a38" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="125" cy="100" r="30" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <line x1="95" y1="100" x2="155" y2="100" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="125" y1="70" x2="125" y2="130" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="210" y="70" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">CORPUS ARCHIVE</text>
          <text x="210" y="90" fill="#94a3b8" fontSize="9" fontFamily="monospace">• US Patents (1890-1980)</text>
          <text x="210" y="110" fill="#94a3b8" fontSize="9" fontFamily="monospace">• Agronomy Extension Manuals</text>
          <text x="210" y="130" fill="#94a3b8" fontSize="9" fontFamily="monospace">• Metallurgical Tables</text>
          <text x="210" y="150" fill="#dc2626" fontSize="9" fontFamily="monospace">• Zero Social Media Scraping</text>
        </svg>
      )}

      {type === 'privacy' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-emerald-400">
          <rect x="30" y="20" width="340" height="180" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          {/* Hardware Lock Enclave */}
          <rect x="140" y="65" width="120" height="90" rx="8" fill="#0f1f42" stroke="#dc2626" strokeWidth="2" />
          <path d="M170 65 V 45 A 30 30 0 0 1 230 45 V 65" fill="none" stroke="#dc2626" strokeWidth="3" />
          <circle cx="200" cy="105" r="8" fill="#ef4444" />
          <line x1="200" y1="113" x2="200" y2="125" stroke="#ef4444" strokeWidth="3" />
          <text x="200" y="180" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle">
            AMD SEV-SNP HARDWARE ENCLAVE [ZERO RETENTION]
          </text>
        </svg>
      )}

    </div>
  );
};
