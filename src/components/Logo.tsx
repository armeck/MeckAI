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
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Patriotic Navy & Red Emblem */}
      <div className={`relative flex items-center justify-center rounded-lg bg-[#0e1d42] border border-blue-500/30 shadow-[0_0_12px_rgba(30,58,138,0.3)] ${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-3/5 h-3/5 text-white stroke-current"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19V5l8 7 8-7v14" />
        </svg>
        {/* Subtle crimson star/accent pip */}
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 ring-2 ring-[#091428]"></span>
        </span>
      </div>

      <div className="flex items-baseline">
        <span className="font-extrabold text-white tracking-tight">MeckAI</span>
        <span className="font-mono text-xs font-bold text-red-500 ml-0.5">.net</span>
      </div>
    </div>
  );
};
