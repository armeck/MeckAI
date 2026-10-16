import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 text-sm',
    md: 'h-8 w-8 text-lg',
    lg: 'h-11 w-11 text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-white select-none ${className}`}>
      {/* Generic Sleek Geometric Emblem: Modern Hexagonal / M-Apex geometry */}
      <div className={`relative flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-700/80 shadow-[0_0_12px_rgba(56,189,248,0.15)] ${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-3/5 h-3/5 text-sky-400 stroke-current"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Minimalist abstract geometric M shape */}
          <path d="M4 19V5l8 7 8-7v14" />
        </svg>
      </div>

      <div className="flex items-baseline">
        <span className="font-extrabold text-zinc-100 tracking-tight">MeckAI</span>
        <span className="font-mono text-xs font-semibold text-sky-400 ml-0.5">.net</span>
      </div>
    </div>
  );
};
