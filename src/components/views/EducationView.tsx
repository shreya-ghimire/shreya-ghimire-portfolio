import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, GraduationCap, Award, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface EducationViewProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

export const EducationView: React.FC<EducationViewProps> = ({
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'license' | 'degree' | 'achievement'>('all');
  const { certificates, education } = PORTFOLIO_DATA;

  // Separate License vs Achievements cleanly
  const licenseItem = certificates.find((c) => c.category === 'Certification' || c.id === 'cert-nec');
  const achievementItems = certificates.filter((c) => c.id !== 'cert-nec');

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 font-bold block">
            Credentials & Qualifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Education and Achievement
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

      {/* Filter Tabs in requested order: All -> License -> Degree -> Achievement */}
      <div className="flex items-center gap-2 mb-3 shrink-0 overflow-x-auto pb-1 no-scrollbar touch-pan-x">
        {[
          { id: 'all', label: 'All Qualifications' },
          { id: 'license', label: 'License' },
          { id: 'degree', label: 'Degree' },
          { id: 'achievement', label: 'Achievement' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scrollable Content in requested sequence: 1. License -> 2. Degree -> 3. Achievement */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1 space-y-5">
        
        {/* 1. License Section */}
        {(activeTab === 'all' || activeTab === 'license') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-extrabold font-mono uppercase tracking-wider text-slate-800">
                License
              </h3>
            </div>

            {licenseItem ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-white border border-emerald-200 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold tracking-wider uppercase mb-1">
                      Professional Engineering License
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-slate-900">
                      {licenseItem.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-900 mt-0.5">
                      {licenseItem.issuer} · Computer Engineering Discipline
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{licenseItem.issueDate}</span>
                    </span>
                  </div>
                </div>

                {licenseItem.description && (
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    {licenseItem.description}
                  </p>
                )}

                <div className="mt-3 pt-2.5 border-t border-emerald-200/70 flex items-center justify-between text-xs text-emerald-900 font-mono">
                  <span>Authorized by Nepal Engineering Council (NEC)</span>
                  <span className="font-semibold text-emerald-800">Licensed Professional</span>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* 2. Degree Section (Academic Degrees) */}
        {(activeTab === 'all' || activeTab === 'degree') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-extrabold font-mono uppercase tracking-wider text-slate-800">
                Degree
              </h3>
            </div>

            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-amber-900 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-600">
                      <span className="font-mono font-semibold text-slate-800">{edu.period}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </div>
                  </div>

                  {edu.honors && (
                    <div className="mt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60 w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{edu.honors}</span>
                    </div>
                  )}

                  <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                    {edu.focus}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white text-slate-700 text-[11px] font-medium border border-slate-200 shadow-2xs"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Achievement Section (Distinct from License) */}
        {(activeTab === 'all' || activeTab === 'achievement') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#7D87D0]" />
              <h3 className="text-xs font-extrabold font-mono uppercase tracking-wider text-slate-800">
                Achievement
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {achievementItems.map((ach) => (
                <div
                  key={ach.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#7D87D0] transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                        {ach.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {ach.issueDate}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mt-2 leading-snug">
                      {ach.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-600 mt-0.5">
                      {ach.issuer}
                    </p>

                    {ach.description && (
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {ach.description}
                      </p>
                    )}
                  </div>

                  {(ach.credentialId || ach.link) && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      {ach.credentialId ? (
                        <span>ID: {ach.credentialId}</span>
                      ) : (
                        <span />
                      )}

                      {ach.link && (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7D87D0] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
