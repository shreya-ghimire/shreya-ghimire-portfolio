import React from 'react';
import { ArrowLeft, BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface PublicationsViewProps {
  onBack: () => void;
}

export const PublicationsView: React.FC<PublicationsViewProps> = ({ onBack }) => {
  const { publications, stats } = PORTFOLIO_DATA;

  const handleOpenPublication = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F7EC8] font-bold block">
            {stats.publicationsCount} Published Works & Technical Articles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Publications & Technical Articles
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

      {/* Content - Clickable Publications list opening directly in a new page */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1 space-y-3.5">
        {publications.map((pub) => {
          const hasLink = Boolean(pub.link);

          return (
            <a
              key={pub.id}
              href={pub.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (pub.link) {
                  // Direct fallback to ensure new window/tab opens reliably
                  e.preventDefault();
                  handleOpenPublication(pub.link);
                }
              }}
              className="block p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#8F7EC8] hover:bg-purple-50/20 transition-all group cursor-pointer shadow-2xs"
              title={pub.link ? `Open ${pub.title} in new tab` : pub.title}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-1.5">
                <span className="font-semibold text-slate-700">{pub.journal} · {pub.year}</span>
                {pub.doi && (
                  <span className="text-[#8F7EC8] font-bold bg-purple-100/70 px-2 py-0.5 rounded text-[10px]">
                    {pub.doi}
                  </span>
                )}
              </div>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#8F7EC8] transition-colors leading-snug">
                  {pub.title}
                </h3>
                <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 group-hover:text-[#8F7EC8] group-hover:border-[#8F7EC8] group-hover:bg-purple-50 shrink-0 transition-all">
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-200/80">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-white rounded-md border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {hasLink && (
                  <span className="text-xs font-bold text-[#8F7EC8] group-hover:underline inline-flex items-center gap-1 shrink-0">
                    <span>Read on {pub.journal.includes('Substack') ? 'Substack' : 'GeeksforGeeks'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
