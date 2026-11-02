import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Sparkles, Check, Cpu, ExternalLink, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ShowcaseReelViewProps {
  onBack: () => void;
  onNavigateToProjects: () => void;
}

export const ShowcaseReelView: React.FC<ShowcaseReelViewProps> = ({
  onBack,
  onNavigateToProjects,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const showcase = PORTFOLIO_DATA.featuredShowcase;

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D87D0] font-bold block">
            Featured Interactive Showcase · {showcase.year}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            {showcase.title}
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

      {/* Content */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1 space-y-3.5">
        
        {/* Media Frame with Pastel Creative Coding Workspace Thumbnail */}
        <div className="relative aspect-video max-h-[260px] sm:max-h-[300px] w-full bg-slate-950 rounded-2xl overflow-hidden shadow-md group">
          <img
            src={showcase.thumbnail}
            alt={showcase.title}
            className="w-full h-full object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Centered Interactive Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause simulation' : 'Play interactive simulation'}
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/60 flex items-center justify-center text-slate-900 shadow-xl transition-transform hover:scale-110 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-slate-900" />
            ) : (
              <Play className="w-6 h-6 fill-slate-900 ml-0.5" />
            )}
          </button>

          {/* Badge overlays */}
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[11px] font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive Architecture Viewer</span>
          </div>
        </div>

        {/* Description & Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#7D87D0]" />
              <span>System Architectural Overview</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              {showcase.description}
            </p>

            <div className="mt-3 space-y-1.5">
              {showcase.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-3.5 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
              {showcase.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics Column */}
          <div className="space-y-2">
            {showcase.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {m.label}
                </span>
                <span className="text-xl font-black text-slate-900 tracking-tight mt-1">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
