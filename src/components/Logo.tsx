import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern Pipeline Architecture Mark */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 dark:bg-blue-600 text-white shadow-xs">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Continuous pipeline flow with branching nodes */}
          <path d="M4 17h6a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h6" />
          <circle cx="4" cy="17" r="2" fill="currentColor" />
          <circle cx="20" cy="7" r="2" fill="currentColor" />
          <path d="M12 15l2 2 4-4" strokeWidth="2" />
        </svg>
      </div>

      <div className="flex items-baseline gap-1.5 leading-none">
        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
          Meck
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          Pipelines
        </span>
      </div>
    </div>
  );
};
