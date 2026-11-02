import React from 'react';

interface CornerArrowProps {
  className?: string;
}

export const CornerArrow: React.FC<CornerArrowProps> = ({ className = 'text-slate-900' }) => {
  return (
    <svg
      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${className} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 5 19 5 19 15" />
    </svg>
  );
};
