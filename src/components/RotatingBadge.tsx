import React from 'react';

interface RotatingBadgeProps {
  year?: string;
  text?: string;
  onClick?: () => void;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  year = typeof window !== 'undefined' ? new Date().getFullYear().toString() : '2026',
  text = "SOFTWARE DEVELOPMENT PORTFOLIO · ",
  onClick,
}) => {
  // Repeated text for circular path
  const circularText = `${text} ${year} · `;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Software Development Portfolio Seal ${year}`}
      className="group relative flex items-center justify-center w-[76px] h-[76px] rounded-full bg-[#18181B] text-white shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
    >
      {/* Center Year & Dot */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
        <span className="text-[11px] font-bold tracking-wider text-white leading-none font-mono">
          {year}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1"></span>
      </div>

      {/* Rotating SVG circular text */}
      <svg
        className="w-full h-full animate-spin-slow select-none p-0.5"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[7.2px] font-semibold uppercase tracking-[0.14em] fill-white">
          <textPath href="#circlePath" startOffset="0%">
            {circularText}
          </textPath>
        </text>
      </svg>
    </button>
  );
};
