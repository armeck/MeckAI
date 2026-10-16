import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sleek Sovereign Tech Shield / Chevron Emblem */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-[#0f224a] to-[#07132b] border border-blue-800/80 shadow-[0_0_12px_rgba(30,58,138,0.35)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 text-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Subtle shield chevron with central star */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" fill="rgba(30, 58, 138, 0.4)" />
          <polygon points="12 7 13.2 9.8 16 10.1 13.9 12 14.5 14.8 12 13.3 9.5 14.8 10.1 12 8 10.1 10.8 9.8 12 7" fill="#dc2626" stroke="#ffffff" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1">
          <span className="font-extrabold text-xl tracking-tight text-white">
            Meck<span className="text-red-500">AI</span>
          </span>
          <span className="font-mono text-xs font-semibold text-slate-400">
            .net
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
          Sovereign Intelligence
        </span>
      </div>
    </div>
  );
};
