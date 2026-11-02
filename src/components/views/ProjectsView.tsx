import React from 'react';
import { ArrowLeft, FolderGit2, Github, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ProjectsViewProps {
  onBack: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onBack }) => {
  const { author } = PORTFOLIO_DATA;

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 font-bold block">
            Software Engineering Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Projects
          </h2>
        </div>

        {/* Back button on right */}
        <button
          onClick={onBack}
          className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5"
          aria-label="Back to Portfolio Home"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div>

      {/* Empty State as requested */}
      <div className="flex-1 lg:min-h-0 flex flex-col items-center justify-center p-6 py-12 lg:py-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4 shadow-sm">
          <FolderGit2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-black text-slate-900 tracking-tight">
          Projects Under Curation
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 max-w-sm mt-2 leading-relaxed">
          Production case studies and software repositories are currently being curated and will be updated here shortly.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/shreya-ghimire"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>Explore on GitHub</span>
          </a>

          <button
            onClick={onBack}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};
