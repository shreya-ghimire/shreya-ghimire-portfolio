import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, Copy, Check, MapPin, Sparkles, FileDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { downloadResume } from '../../utils/downloadCV';

interface ContactViewProps {
  onBack: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBack }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const { author, contact } = PORTFOLIO_DATA;

  const mailtoHref = `mailto:${author.email}?subject=${encodeURIComponent(
    'Software Engineering & Collaboration Inquiry'
  )}`;

  const copyEmail = () => {
    navigator.clipboard?.writeText(author.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard?.writeText(author.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col justify-between lg:h-full lg:min-h-0 animate-in fade-in duration-200">
      {/* View Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 shrink-0">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D87D0] font-bold block">
            Opportunities & Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Contact
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-700 hidden sm:inline">
              Available for Software Roles
            </span>
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
      </div>

      {/* Direct contact links */}
      <div className="flex-1 lg:min-h-0 lg:overflow-y-auto pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          
          {/* Quick Info & Email/Phone (2 Cols) */}
          <div className="sm:col-span-2 space-y-3.5 flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#7D87D0]/10 via-[#ECECEE]/40 to-slate-50 border border-slate-200 space-y-3">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Direct Email
                </span>
                <p className="text-sm font-bold text-slate-900 break-all mt-0.5">
                  {author.email}
                </p>
                
                <button
                  type="button"
                  onClick={copyEmail}
                  className="mt-2 w-full py-1.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Direct Phone / Mobile
                </span>
                <a 
                  href={`tel:${author.phone.replace(/\s+/g, '')}`} 
                  className="text-sm font-bold text-slate-900 hover:text-[#7D87D0] block mt-0.5"
                >
                  {author.phone}
                </a>

                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  <a
                    href={`tel:${author.phone.replace(/\s+/g, '')}`}
                    className="py-1.5 px-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center justify-center gap-1 transition-colors text-center"
                  >
                    <Phone className="w-3 h-3 text-slate-500" />
                    <span>Call</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="py-1.5 px-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center justify-center gap-1 transition-colors text-center cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Download CV quick button in contact */}
              <div className="pt-2 border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={() => downloadResume()}
                  className="w-full py-2 px-3 rounded-xl bg-[#7D87D0] hover:bg-[#6e78be] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full CV (514 KB PDF)</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{author.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7D87D0] shrink-0" />
                <span>Open for backend & full-stack software roles</span>
              </div>
            </div>

            {/* Social / Professional Presence */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Professional Links
              </span>
              <div className="flex flex-wrap gap-1.5">
                {contact.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-[#7D87D0] hover:text-white hover:border-[#7D87D0] transition-colors"
                  >
                    {soc.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mailto CTA (3 Cols) */}
          <div className="sm:col-span-3 bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl flex flex-col justify-center items-center text-center gap-4 min-h-[220px]">
            <div className="w-12 h-12 rounded-full bg-[#7D87D0]/15 flex items-center justify-center text-[#7D87D0]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Send an email</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Opens your mail client with a message ready for {author.email}.
              </p>
            </div>
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs active:scale-98"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email {author.email}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
