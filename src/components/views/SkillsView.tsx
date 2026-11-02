import React from 'react';
import { ArrowLeft, Server, Cpu, Layout, Sparkles, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface SkillsViewProps {
  onBack: () => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onBack }) => {
  const { skillCategories, stats } = PORTFOLIO_DATA;

  // Custom cohesive color configuration per skill domain (one section, one color)
  const categoryStyles: Record<string, {
    headerColor: string;
    icon: React.ReactNode;
    badgeClass: string;
    containerClass: string;
  }> = {
    "Backend Development": {
      headerColor: "text-emerald-800",
      icon: <Server className="w-4 h-4 text-emerald-700" />,
      badgeClass: "bg-emerald-50 text-emerald-900 border-emerald-200/90 hover:bg-emerald-100 hover:border-emerald-300",
      containerClass: "bg-emerald-50/30 border-emerald-100",
    },
    "Backend Architecture & Performance": {
      headerColor: "text-teal-800",
      icon: <Cpu className="w-4 h-4 text-teal-700" />,
      badgeClass: "bg-teal-50 text-teal-900 border-teal-200/90 hover:bg-teal-100 hover:border-teal-300",
      containerClass: "bg-teal-50/30 border-teal-100",
    },
    "Frontend Development": {
      headerColor: "text-indigo-800",
      icon: <Layout className="w-4 h-4 text-indigo-700" />,
      badgeClass: "bg-indigo-50 text-indigo-900 border-indigo-200/90 hover:bg-indigo-100 hover:border-indigo-300",
      containerClass: "bg-indigo-50/30 border-indigo-100",
    },
    "AI-Assisted Development": {
      headerColor: "text-purple-800",
      icon: <Sparkles className="w-4 h-4 text-purple-700" />,
      badgeClass: "bg-purple-50 text-purple-900 border-purple-200/90 hover:bg-purple-100 hover:border-purple-300",
      containerClass: "bg-purple-50/30 border-purple-100",
    },
    "Git & Project Management": {
      headerColor: "text-amber-800",
      icon: <GitBranch className="w-4 h-4 text-amber-700" />,
      badgeClass: "bg-amber-50 text-amber-900 border-amber-200/90 hover:bg-amber-100 hover:border-amber-300",
      containerClass: "bg-amber-50/30 border-amber-100",
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
            {stats.skillsCount} Core Technologies & Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Skills
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

      {/* Content - Skills in a flex line (not 2 columns), badge components fitting text width, one section one color */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1 space-y-4">
        {skillCategories.map((group) => {
          const style = categoryStyles[group.category] || {
            headerColor: "text-slate-800",
            icon: <Server className="w-4 h-4 text-slate-700" />,
            badgeClass: "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200",
            containerClass: "bg-slate-50 border-slate-200",
          };

          return (
            <div 
              key={group.category} 
              className={`p-4 rounded-2xl border ${style.containerClass} transition-all`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                {style.icon}
                <h3 className={`text-xs font-extrabold tracking-wide uppercase ${style.headerColor}`}>
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 font-semibold ml-auto">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Flex row of badges that hug the width of the text */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-default shadow-2xs ${style.badgeClass}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
