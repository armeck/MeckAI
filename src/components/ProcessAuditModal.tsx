import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building2, Mail, User, Layers, ArrowLeft } from 'lucide-react';

interface ProcessAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProcessAuditModal: React.FC<ProcessAuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [industry, setIndustry] = useState<string>('Logistics & Supply Chain');
  const [primaryFriction, setPrimaryFriction] = useState<string>('Disjointed Spreadsheets & Manual Copy-Paste');
  const [dataSources, setDataSources] = useState<string[]>(['Spreadsheets (Excel/Sheets)', 'PDFs & Scanned Docs']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const industries = [
    'Logistics & Supply Chain',
    'Commercial Real Estate & Property',
    'Manufacturing & Industrial',
    'Healthcare & Clinical Admin',
    'Wholesale Distribution',
    'Financial & Professional Services',
    'Other / Mixed Operations',
  ];

  const frictionOptions = [
    'Disjointed Spreadsheets & Manual Copy-Paste',
    'Unstructured Invoices, Contracts & PDFs',
    'Disconnected Software Tools & APIs',
    'Repetitive Daily Dispatch or Scheduling Triage',
    'Slow Customer / Partner Onboarding Handoffs',
    'We know we have bottlenecks but need help mapping them',
  ];

  const dataSourceOptions = [
    'Spreadsheets (Excel/Sheets)',
    'PDFs & Scanned Docs',
    'Legacy ERP / Internal DB',
    'Cloud SaaS APIs',
    'Email Threads & Attachments',
    'Physical / Paper Logs',
  ];

  const toggleSource = (source: string) => {
    if (dataSources.includes(source)) {
      setDataSources(dataSources.filter((s) => s !== source));
    } else {
      setDataSources([...dataSources, source]);
    }
  };

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (!company.trim()) {
      setErrorMsg('Please enter your company name.');
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            <h2 id="audit-modal-title" className="text-sm font-semibold text-slate-900 dark:text-white">
              {submitted ? 'Audit Request Confirmed' : 'Request a Process Investigation & Pipeline Audit'}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetForm}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                We've Received Your Operational Intake
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. 
                Our engineering team will review your workflow context for <span className="font-semibold text-slate-900 dark:text-white">{company}</span>. 
                We will email you at <span className="font-semibold text-blue-600 dark:text-blue-400">{email}</span> within 24 hours to schedule an introductory 30-minute discovery conversation.
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-left text-xs space-y-2 mt-4">
                <div className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">
                  Intake Summary
                </div>
                <div><span className="font-medium text-slate-700 dark:text-slate-300">Industry:</span> {industry}</div>
                <div><span className="font-medium text-slate-700 dark:text-slate-300">Target Bottleneck:</span> {primaryFriction}</div>
                <div><span className="font-medium text-slate-700 dark:text-slate-300">Active Formats:</span> {dataSources.join(', ')}</div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Step {step} of 3
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {step === 1 && 'Operational Context'}
                  {step === 2 && 'Data Formats & Systems'}
                  {step === 3 && 'Contact & Scheduling'}
                </span>
              </div>

              {step === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      1. Select Your Company's Primary Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      2. Where Does Your Team Lose the Most Repetitive Hours?
                    </label>
                    <div className="space-y-2">
                      {frictionOptions.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            primaryFriction === opt
                              ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-slate-900 dark:text-white font-medium'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="friction"
                            value={opt}
                            checked={primaryFriction === opt}
                            onChange={() => setPrimaryFriction(opt)}
                            className="mt-0.5 text-blue-600 focus:ring-blue-500"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      3. Where Does Your Operational Data Currently Live?
                    </label>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                      Select all formats and tools that your operators touch regularly.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dataSourceOptions.map((src) => {
                        const checked = dataSources.includes(src);
                        return (
                          <button
                            key={src}
                            type="button"
                            onClick={() => toggleSource(src)}
                            className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                              checked
                                ? 'border-blue-600 dark:border-blue-500 bg-blue-50/40 dark:bg-blue-950/30 text-slate-900 dark:text-white'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300'
                            }`}
                          >
                            <span>{src}</span>
                            <span className={`h-4 w-4 rounded flex items-center justify-center text-[10px] border ${checked ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 dark:border-slate-600'}`}>
                              {checked && '✓'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-950 bg-blue-50/30 dark:bg-blue-950/20 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <div className="font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Our Investigation Approach</span>
                    </div>
                    <p className="leading-relaxed">
                      You do not need clean APIs or organized documentation. We shadow your team to understand the messy reality and build a pipeline that meets your systems where they are.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer flex items-center gap-1"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-600 dark:text-red-400">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Foster"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-slate-400" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rachel@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-slate-400" />
                      <span>Company Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Solutions"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-slate-400" />
                      <span>Briefly describe your process or bottleneck (Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Every day our clerks spend 3 hours keying vendor PDFs into our accounting tool..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer flex items-center gap-1"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Request Discovery Session</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
