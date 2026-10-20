import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { ThemeMode, ResolvedTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  themeMode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onSelectMode: (mode: ThemeMode) => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themeMode,
  resolvedTheme,
  onSelectMode,
  className = '',
}) => {
  return (
    <div
      role="group"
      aria-label="Color theme selection"
      className={`inline-flex items-center p-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 transition-colors ${className}`}
    >
      <button
        type="button"
        onClick={() => onSelectMode('light')}
        title="Light theme"
        aria-pressed={themeMode === 'light'}
        className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
          themeMode === 'light'
            ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Light</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectMode('dark')}
        title="Dark theme"
        aria-pressed={themeMode === 'dark'}
        className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
          themeMode === 'dark'
            ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Dark</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectMode('system')}
        title={`Auto (System preference: ${resolvedTheme})`}
        aria-pressed={themeMode === 'system'}
        className={`px-2 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
          themeMode === 'system'
            ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs font-semibold'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        <Monitor className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Auto</span>
      </button>
    </div>
  );
};
