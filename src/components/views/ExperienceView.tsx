import React from 'react';
import { ArrowLeft, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ExperienceViewProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  onBack,
}) => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#EE8B9F] font-bold block">
            Real Industrial Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Work Experience
          </h2>
        </div>

        {/* Back button placed where 'Get in Touch' was */}
        <button
          onClick={onBack}
          className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1.5"
          aria-label="Back to Portfolio Home"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>
      </div>

      {/* Content - Scrollable timeline with circles mathematically centered on line */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1">
        <div className="space-y-4 relative before:absolute before:top-4 before:bottom-4 before:left-4 before:w-[2px] before:-translate-x-1/2 before:bg-slate-200">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-9 group">
              {/* Node indicator: centered horizontally on the vertical line with left-4 and -translate-x-1/2 */}
              <div 
                className="absolute left-4 top-6 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-[3px] border-[#EE8B9F] shadow-xs group-hover:scale-125 transition-transform z-10 ring-4 ring-white" 
                aria-hidden="true"
              />

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#EE8B9F] font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-600 mt-1 mb-2.5">
                  <span className="font-semibold text-slate-800">{exp.company}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {exp.description}
                </p>

                <div className="space-y-1.5 mb-3">
                  {exp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EE8B9F] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-medium bg-white text-slate-700 rounded-md border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
