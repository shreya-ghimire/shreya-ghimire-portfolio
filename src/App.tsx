/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Code2, 
  Briefcase, 
  BookOpen, 
  GraduationCap,
  FolderGit2, 
  FileDown,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { RotatingBadge } from './components/RotatingBadge';
import { CornerArrow } from './components/CornerArrow';
import { downloadResume } from './utils/downloadCV';

// Dynamic Inline Views (Replaces Modals - Content renders inside right pane)
import { ExperienceView } from './components/views/ExperienceView';
import { ProjectsView } from './components/views/ProjectsView';
import { SkillsView } from './components/views/SkillsView';
import { PublicationsView } from './components/views/PublicationsView';
import { EducationView } from './components/views/EducationView';
import { ContactView } from './components/views/ContactView';
import { ShowcaseReelView } from './components/views/ShowcaseReelView';

export type ActiveSection = 
  | 'home' 
  | 'experience' 
  | 'projects' 
  | 'skills' 
  | 'publications' 
  | 'education' 
  | 'contact' 
  | 'reel';

export default function App() {
  // Navigation & Active Section State (Default: 'home' with Bento grid)
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [cvDownloaded, setCvDownloaded] = useState<boolean>(false);

  // Separated Data from portfolioData.ts
  const { author, stats, featuredShowcase, navigation } = PORTFOLIO_DATA;

  const navigateTo = (sectionId: ActiveSection) => {
    setActiveSection(sectionId);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (navId: string) => {
    if (navId === 'home') navigateTo('home');
    else if (navId === 'experience') navigateTo('experience');
    else if (navId === 'projects') navigateTo('projects');
    else if (navId === 'skills') navigateTo('skills');
    else if (navId === 'publications') navigateTo('publications');
    else if (navId === 'education') navigateTo('education');
    else if (navId === 'contact') navigateTo('contact');
    else navigateTo('home');
  };

  const handleDownloadCV = async () => {
    try {
      await downloadResume();
      setCvDownloaded(true);
      setTimeout(() => setCvDownloaded(false), 4500);
    } catch (e) {
      console.error(e);
      window.open('/assets/images/ShreyaGhimire_final_41217112.pdf', '_blank');
    }
  };

  return (
    <main className="min-h-screen lg:h-screen lg:h-[100dvh] w-full bg-graph-paper flex flex-col justify-start lg:justify-center items-center p-3 sm:p-5 lg:p-8 font-sans selection:bg-[#7D87D0] selection:text-white overflow-x-hidden lg:overflow-hidden">
      {/* Outer Enclosure Frame - Responsive scrolling on mobile/tablet, fits 100vh on desktop */}
      <div className="relative w-full max-w-[1360px] bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-200/80 p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between lg:h-full lg:max-h-[96dvh] lg:min-h-0 overflow-visible lg:overflow-hidden my-1 sm:my-3 lg:my-auto">
        
        {/* Tablet & Mobile Horizontal Navigation Strip with generous gap between items */}
        <nav aria-label="Mobile Navigation" className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2.5 mb-2.5 border-b border-slate-100 shrink-0 no-scrollbar touch-pan-x">
          {navigation.map((item) => {
            const isActive = activeSection === item.id || (item.id === 'home' && activeSection === 'home');
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          {/* Download CV Mobile Button */}
          <button
            onClick={handleDownloadCV}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer text-slate-700 bg-slate-100 hover:bg-[#7D87D0] hover:text-white flex items-center gap-1.5 ml-auto shrink-0 shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5 text-[#7D87D0]" />
            <span>Download CV</span>
          </button>
        </nav>

        {/* Main Flex Layout: Stacks on mobile/tablet with scrolling, fits 100vh on desktop */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch lg:min-h-0">
          
          {/* 1. Permanent Left Hero Column: Image, Name, Credentials, Spine Nav, Download CV (Stays fixed) */}
          <div className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-4 w-full lg:w-[410px] xl:w-[440px] shrink-0 lg:h-full lg:min-h-0">
            
            {/* Desktop Left Edge Vertical Navigation Spine — Starts upward, fits perfectly without scrolling */}
            <aside 
              aria-label="Primary Spine Navigation"
              className="hidden lg:flex flex-col justify-between pt-0.5 pb-1.5 select-none border-r border-slate-100/90 pr-2.5 xl:pr-3 shrink-0 h-full overflow-hidden"
            >
              {/* Nav Items Container: Starts directly at the top with a subtle, comfortable gap that fits without scrolling */}
              <div className="flex flex-col items-center justify-start gap-2.5 xl:gap-3 pt-0.5 flex-1 overflow-hidden">
                {navigation.map((item) => {
                  const isActive = activeSection === item.id || (item.id === 'home' && activeSection === 'home');
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`group py-0.5 px-0.5 text-[11px] xl:text-[11.5px] tracking-wide transition-all duration-200 cursor-pointer [writing-mode:vertical-rl] rotate-180 text-left shrink-0 ${
                        isActive
                          ? 'text-slate-900 font-bold scale-105'
                          : 'text-slate-400 hover:text-slate-700 font-medium'
                      }`}
                    >
                      <span className="relative">
                        {item.label}
                        {isActive && (
                          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7D87D0]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Download CV icon at bottom of the left rail */}
              <div className="pt-2 border-t border-slate-100 flex justify-center shrink-0">
                <button
                  onClick={handleDownloadCV}
                  title="Download Curriculum Vitae (CV) - 514 KB PDF"
                  aria-label="Download CV"
                  className="group p-2 rounded-xl bg-slate-50 hover:bg-[#7D87D0] text-slate-600 hover:text-white transition-all cursor-pointer flex flex-col items-center gap-0.5 shadow-xs active:scale-95"
                >
                  <FileDown className="w-3.5 h-3.5 text-slate-700 group-hover:text-white transition-colors" />
                  <span className="text-[9px] font-bold tracking-wider">CV</span>
                </button>
              </div>
            </aside>

            {/* Hero Column (Portfolio Tab + Download CV + Big Lavender Card) */}
            <div className="flex-1 flex flex-col lg:h-full lg:min-h-0">
              
              {/* "Portfolio" Tab Button (Leads to Home Page) + "Download CV" Button */}
              <div className="flex items-center justify-between pb-2 px-1 shrink-0">
                <button
                  onClick={() => navigateTo('home')}
                  className="group flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold tracking-tight hover:text-[#7D87D0] transition-colors cursor-pointer"
                  aria-label="Portfolio Home"
                >
                  {/* Four-petal clover icon matching reference branding */}
                  <div className="w-4 h-4 relative flex items-center justify-center text-slate-800 group-hover:text-[#7D87D0] transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      className="w-4 h-4"
                    >
                      <circle cx="8" cy="8" r="3" />
                      <circle cx="16" cy="8" r="3" />
                      <circle cx="8" cy="16" r="3" />
                      <circle cx="16" cy="16" r="3" />
                    </svg>
                  </div>
                  <span>Portfolio</span>
                </button>

                {/* Download CV Icon Button on left of the card */}
                <button
                  onClick={handleDownloadCV}
                  className="group flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#7D87D0] px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-xs active:scale-95"
                  title="Download Curriculum Vitae (CV)"
                  aria-label="Download CV"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#7D87D0] group-hover:text-white transition-colors" />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Big Periwinkle / Lavender Hero Card - Permanently anchored */}
              <div className="relative flex-1 lg:min-h-0 bg-[#7D87D0] rounded-[24px] sm:rounded-[30px] lg:rounded-[34px] p-4 sm:p-5 lg:p-6 text-white flex flex-col justify-between overflow-hidden shadow-sm">
                
                {/* Top Section: Photo covering at least 50% of the card height */}
                <div className="h-44 sm:h-52 lg:h-[48%] lg:min-h-[48%] flex items-center justify-center pt-1 pb-1 shrink-0">
                  <div 
                    className="h-full aspect-square max-h-48 sm:max-h-56 lg:max-h-full relative group cursor-pointer flex items-center justify-center" 
                    onClick={() => navigateTo('home')}
                    title="Click to view Portfolio Home"
                  >
                    {/* Outer soft lilac halo ring */}
                    <div className="w-full h-full rounded-full p-2 sm:p-2.5 bg-[#9FA8DF]/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-102 shadow-sm">
                      {/* Inner crisp white ring */}
                      <div className="w-full h-full rounded-full p-1.5 sm:p-2 bg-white flex items-center justify-center shadow-md">
                        {/* Solid lilac disk holding portrait */}
                        <div className="w-full h-full rounded-full bg-[#E2A6F3] overflow-hidden relative flex items-center justify-center">
                          <img
                            src={author.portrait}
                            alt={`${author.firstName} ${author.lastName}`}
                            className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Section: "Im, Er. Shreya Ghimire" + Dynamic Credentials */}
                <div className="my-auto py-2.5 sm:py-3 select-none">
                  <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold tracking-tight text-white leading-[1.05]">
                    <span className="block font-medium text-white/95 text-base sm:text-lg lg:text-xl leading-snug">{author.prefix}</span>
                    <span className="block">{author.title || "Er. Shreya Ghimire"}</span>
                  </h1>

                  {/* Registered Engineering Credentials from portfolioData.ts */}
                  <div className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5 text-white/95 text-xs sm:text-[13px] font-medium leading-snug border-l-2 border-white/40 pl-3">
                    <p className="block">
                      {author.line2 || "Computer Science Engineer, Chitkara University"}
                    </p>
                    <p className="block text-white/90">
                      {author.line3 || "Registered General Engineer, Computer Engineer, Nepal Engineering Council"}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Email with Dotted Line + Rotating Stamp Badge */}
                <div className="flex items-end justify-between gap-2 pt-2.5 sm:pt-3 border-t border-white/20 shrink-0">
                  {/* Email with mail icon and dotted underline -> leads to Contact view */}
                  <div className="flex-1 pb-1 truncate">
                    <button
                      onClick={() => navigateTo('contact')}
                      className="group inline-flex items-center gap-1.5 text-white hover:text-white/90 transition-colors text-xs sm:text-[13px] font-medium tracking-tight cursor-pointer"
                      title="Contact Er. Shreya Ghimire"
                    >
                      <span className="border-b border-dotted border-white/60 pb-0.5 group-hover:border-white truncate">
                        {author.email}
                      </span>
                      <Mail className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </button>
                  </div>

                  {/* Rotating Circular Seal Badge */}
                  <div className="shrink-0">
                    <RotatingBadge
                      year={author.stampYear}
                      text={author.stampText}
                      onClick={() => navigateTo('home')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Dynamic Right Pane: Holds the Content (Bento Grid on 'home', or matching inline view) */}
          <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0">
            
            {activeSection === 'home' && (
              <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
                {/* Title: "Software Engineer" with Square Corner Arrow */}
                <div className="flex items-center justify-between mb-3 shrink-0">
                  <button
                    onClick={() => navigateTo('projects')}
                    className="group flex items-baseline gap-2.5 cursor-pointer text-left"
                    aria-label="View all software engineering works"
                  >
                    <h2 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-slate-900 tracking-tight leading-none">
                      Software Engineer
                    </h2>
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>

                {/* Bento Grid Layout - Responsive 100vh on desktop, clean scroll on mobile/tablet */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 flex-1 lg:min-h-0">
                  
                  {/* Item 1: Wide Featured Workspace Card (Image Placeholder) */}
                  <div 
                    className="relative sm:col-span-2 bg-slate-900 rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-sm flex items-center justify-center min-h-[220px] lg:min-h-0 select-none group"
                  >
                    {/* Pastel Creative Coding Workspace Thumbnail */}
                    <img
                      src={featuredShowcase.thumbnail}
                      alt={featuredShowcase.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle soft gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Item 2: Top-Right Vertical Stack (Experience in Pink + Skills in Mint below it) */}
                  <div className="flex flex-col gap-3 sm:gap-4 lg:min-h-0">
                    
                    {/* 2A: Rose Pink Card -> "Work Experience" / "Real Industrial Experience" */}
                    <div
                      onClick={() => navigateTo('experience')}
                      className="group relative flex-1 bg-[#EE8B9F] rounded-[22px] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-[#e47d92] min-h-[140px] lg:min-h-0"
                      role="button"
                      tabIndex={0}
                      aria-label="View work experience and industrial background"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('experience');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center text-slate-900 shadow-xs">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <CornerArrow className="text-slate-900" />
                      </div>
                      <div>
                        <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                          Work Experience
                        </span>
                        <span className="block text-xs sm:text-[13px] font-semibold text-slate-900/85 mt-1">
                          Real Industrial Experience
                        </span>
                      </div>
                    </div>

                    {/* 2B: Mint Green Card -> "Skills" below Experience */}
                    <div
                      onClick={() => navigateTo('skills')}
                      className="group relative flex-1 bg-[#BCE7DC] rounded-[22px] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-[#b0e3d6] min-h-[140px] lg:min-h-0"
                      role="button"
                      tabIndex={0}
                      aria-label="View technical skills"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('skills');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 rounded-xl bg-white/60 flex items-center justify-center text-emerald-900 shadow-xs">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <CornerArrow className="text-slate-900" />
                      </div>
                      <div>
                        <span className="block text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                          Skills
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-slate-800 mt-1">
                          {stats.skillsCount} Core Technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item 3: Purple Card in Experience's Old Place -> "Publications" / "Technical Articles" */}
                  <div
                    onClick={() => navigateTo('publications')}
                    className="group relative bg-[#8F7EC8] rounded-[22px] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-[#8573c0] min-h-[150px] lg:min-h-0"
                    role="button"
                    tabIndex={0}
                    aria-label="View technical articles and publications"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigateTo('publications');
                      }
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-xs">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <CornerArrow className="text-white" />
                    </div>
                    <div>
                      <span className="block text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        Publications
                      </span>
                      <span className="block text-xs sm:text-sm font-medium text-white/95 mt-1">
                        Technical Articles
                      </span>
                    </div>
                  </div>

                  {/* Item 4: Two-Tone Split Card -> (Education and Achievement + Projects in Yellow) */}
                  <div className="group relative sm:col-span-2 rounded-[22px] overflow-hidden flex flex-col sm:flex-row shadow-sm transition-all duration-300 hover:shadow-md min-h-[150px] lg:min-h-0">
                    
                    {/* Left Half: Pure Black -> "Education and Achievement" */}
                    <div 
                      onClick={() => navigateTo('education')}
                      className="sm:w-[48%] bg-black hover:bg-neutral-900 p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-colors relative min-h-[130px] sm:min-h-0"
                      role="button"
                      tabIndex={0}
                      aria-label="View education and achievement"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('education');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <CornerArrow className="text-white/70" />
                      </div>

                      <div>
                        <span className="block text-lg sm:text-xl xl:text-2xl font-bold text-white tracking-tight leading-tight">
                          Education and Achievement
                        </span>
                        <span className="block text-[11px] sm:text-xs text-slate-400 mt-1">
                          License, Degrees & Honors
                        </span>
                      </div>
                    </div>

                    {/* Right Half: Warm Golden Yellow -> Projects */}
                    <div 
                      onClick={() => navigateTo('projects')}
                      className="flex-1 bg-[#F6BF65] hover:bg-[#efb553] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-colors min-h-[130px] sm:min-h-0"
                      role="button"
                      tabIndex={0}
                      aria-label="View engineering projects"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('projects');
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center text-slate-900">
                          <FolderGit2 className="w-5 h-5" />
                        </div>
                        <CornerArrow className="text-slate-900" />
                      </div>

                      <div>
                        <span className="block text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                          Projects
                        </span>
                        <span className="block text-xs sm:text-sm font-medium text-slate-900 mt-1 leading-snug">
                          Curating Soon
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* Dynamic Views rendered directly in place of modals */}
            {activeSection === 'experience' && (
              <ExperienceView
                onBack={() => navigateTo('home')}
                onNavigateToContact={() => navigateTo('contact')}
              />
            )}

            {activeSection === 'projects' && (
              <ProjectsView
                onBack={() => navigateTo('home')}
              />
            )}

            {activeSection === 'skills' && (
              <SkillsView
                onBack={() => navigateTo('home')}
              />
            )}

            {activeSection === 'publications' && (
              <PublicationsView
                onBack={() => navigateTo('home')}
              />
            )}

            {activeSection === 'education' && (
              <EducationView
                onBack={() => navigateTo('home')}
                onNavigateToContact={() => navigateTo('contact')}
              />
            )}

            {activeSection === 'contact' && (
              <ContactView
                onBack={() => navigateTo('home')}
              />
            )}

            {activeSection === 'reel' && (
              <ShowcaseReelView
                onBack={() => navigateTo('home')}
                onNavigateToProjects={() => navigateTo('projects')}
              />
            )}

          </div>

        </div>

        {/* CV Download Confirmation Notification Toast */}
        {cvDownloaded && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700/80 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-white">Shreya Ghimire CV (514 KB)</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">Downloaded</span>
            </div>
            <a
              href="/assets/images/ShreyaGhimire_final_41217112.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            >
              Open PDF
            </a>
          </div>
        )}

      </div>
    </main>
  );
}
