import React from 'react';

interface BlogIllustrationProps {
  type: 'cooling' | 'vectors' | 'datacenter' | 'generator' | 'almanac' | 'privacy';
  className?: string;
}

export const BlogIllustration: React.FC<BlogIllustrationProps> = ({ type, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-blue-900/60 bg-gradient-to-b from-[#0e1d42] to-[#070e1e] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      {type === 'cooling' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-blue-400">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <path d="M50 140 Q 120 60, 200 120 T 350 70" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 3" />
          <path d="M50 165 Q 130 100, 210 150 T 350 110" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <line x1="200" y1="15" x2="200" y2="195" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="200" cy="120" r="16" fill="#0f224a" stroke="#dc2626" strokeWidth="2" />
          <text x="200" y="124" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">58°F</text>
          <text x="50" y="45" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold">PERMIAN BASIN WELL #2 [800 FT BOREHOLE]</text>
          <text x="50" y="65" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">BUC-EE'S ADJACENCY: 0.4 MILES · CALICHE MINERAL DENSITY: OPTIMAL</text>
          <rect x="235" y="160" width="130" height="30" rx="4" fill="#0f1f42" stroke="#38bdf8" strokeWidth="1" />
          <text x="300" y="179" fill="#38bdf8" fontSize="8.5" fontFamily="monospace" textAnchor="middle">ZERO COASTAL PERMITTING</text>
        </svg>
      )}

      {type === 'vectors' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-red-500">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <line x1="50" y1="165" x2="350" y2="165" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="60" y1="35" x2="60" y2="175" stroke="#1e293b" strokeWidth="1.5" />
          {/* MeckAI direct path */}
          <line x1="60" y1="165" x2="340" y2="55" stroke="#dc2626" strokeWidth="3" />
          <circle cx="340" cy="55" r="5" fill="#dc2626" />
          <text x="190" y="45" fill="#ef4444" fontSize="9.5" fontFamily="monospace" fontWeight="bold">MECKAI: DIRECT OUTPUT (NO PREAMBLE)</text>
          {/* Big Tech wavy wandering path */}
          <path d="M60 165 Q 110 185, 140 135 T 190 175 T 250 115 T 340 85" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="340" cy="85" r="4" fill="#64748b" />
          <text x="80" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">BIG TECH: APOLOGY PREAMBLE TAX (34% TOKENS WASTED ON GUILT)</text>
        </svg>
      )}

      {type === 'generator' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-amber-500">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <rect x="50" y="50" width="170" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="295" cy="105" r="45" fill="#0f172a" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="295" cy="105" r="22" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
          <line x1="295" y1="60" x2="295" y2="150" stroke="#64748b" strokeWidth="1.5" />
          <line x1="250" y1="105" x2="340" y2="105" stroke="#64748b" strokeWidth="1.5" />
          <text x="65" y="80" fill="#f8fafc" fontSize="10.5" fontFamily="monospace" fontWeight="bold">CAT 3516B V16 DIESEL</text>
          <text x="65" y="100" fill="#f59e0b" fontSize="8.5" fontFamily="monospace">FUEL: 30,000 GAL OFF-ROAD RED</text>
          <text x="65" y="120" fill="#ef4444" fontSize="8.5" fontFamily="monospace">SWITCHOVER: &lt; 5.4 SECONDS</text>
          <text x="65" y="140" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">WEATHER SENSITIVITY: 0%</text>
          <text x="295" y="172" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">FLYWHEEL: 1,800 RPM</text>
        </svg>
      )}

      {type === 'datacenter' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-blue-500">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <rect x="55" y="45" width="75" height="125" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          <rect x="160" y="45" width="75" height="125" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          <rect x="265" y="45" width="75" height="125" rx="4" fill="#0f172a" stroke="#2563eb" strokeWidth="2" />
          {[60, 80, 100, 120, 140].map((y) => (
            <g key={y}>
              <line x1="65" y1={y} x2="120" y2={y} stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="170" y1={y} x2="225" y2={y} stroke="#dc2626" strokeWidth="1.5" />
              <line x1="275" y1={y} x2="330" y2={y} stroke="#38bdf8" strokeWidth="1.5" />
            </g>
          ))}
          <text x="200" y="193" fill="#ef4444" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            COASTAL JURISDICTION: REJECTED AT STATE LINE
          </text>
        </svg>
      )}

      {type === 'almanac' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-amber-400">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <rect x="45" y="40" width="130" height="130" fill="#0c1a38" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="110" cy="105" r="32" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <line x1="80" y1="105" x2="140" y2="105" stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="110" y1="75" x2="110" y2="135" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="195" y="65" fill="#ffffff" fontSize="10.5" fontFamily="monospace" fontWeight="bold">100-YEAR HERITAGE CORPUS</text>
          <text x="195" y="85" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">• 1968 Sears Craftsman Catalog</text>
          <text x="195" y="105" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">• John Deere Tech Bulletins (1948-96)</text>
          <text x="195" y="125" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">• Youngstown Metallurgy Tables</text>
          <text x="195" y="145" fill="#ef4444" fontSize="8.5" fontFamily="monospace">• REDDIT / TIKTOK SCRAPING: 0.00%</text>
        </svg>
      )}

      {type === 'privacy' && (
        <svg viewBox="0 0 400 220" className="w-full h-full max-h-56 p-4 text-emerald-400">
          <rect x="25" y="15" width="350" height="190" rx="10" fill="#091428" stroke="#1e3a8a" strokeWidth="1.5" />
          <rect x="135" y="60" width="130" height="95" rx="8" fill="#0f1f42" stroke="#dc2626" strokeWidth="2" />
          <path d="M165 60 V 40 A 35 35 0 0 1 235 40 V 60" fill="none" stroke="#dc2626" strokeWidth="3" />
          <circle cx="200" cy="105" r="9" fill="#ef4444" />
          <line x1="200" y1="114" x2="200" y2="128" stroke="#ef4444" strokeWidth="3" />
          <text x="200" y="175" fill="#38bdf8" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            SILICON-LAYER ZEROIZATION
          </text>
          <text x="200" y="195" fill="#94a3b8" fontSize="8.5" fontFamily="monospace" textAnchor="middle">
            KOMBUCHA-SIPPING CONTRACTOR ACCESS: DENIED
          </text>
        </svg>
      )}
    </div>
  );
};
