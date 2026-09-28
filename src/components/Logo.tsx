import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  onClick,
}) => {
  // RS Monogram Icon Mark
  const markDimensions = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      aria-label="Md. Robiul Sardar - Digital Marketing Specialist"
    >
      {/* Mark */}
      <div
        className={`${markDimensions} relative shrink-0 rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 p-px shadow-lg shadow-sky-500/10 flex items-center justify-center`}
      >
        <div className="w-full h-full bg-slate-950/85 backdrop-blur-sm rounded-[11px] flex items-center justify-center font-display font-extrabold tracking-tight text-white border border-white/10">
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
            RS
          </span>
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-sky-400 ring-2 ring-slate-950" />
      </div>

      {/* Typography */}
      {variant !== 'minimal' && (
        <div className="flex flex-col text-left leading-tight">
          <span className="font-display font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors">
            {size === 'lg' ? 'Md. Robiul Sardar' : 'Robiul Sardar'}
          </span>
          {variant === 'full' && (
            <span className="text-[11px] font-medium text-slate-400 tracking-wide">
              Digital Marketing Specialist
            </span>
          )}
        </div>
      )}
    </div>
  );
};
