import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { NeuralCanvas } from './components/NeuralCanvas';
import { ArrowRight, Cpu, Layers, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

export default function App() {
  const [demoActivated, setDemoActivated] = useState(false);

  const handleInitialize = () => {
    setDemoActivated(true);
    setTimeout(() => setDemoActivated(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#091428] text-slate-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-blue-900/50 bg-[#091428]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Logo size="md" />

          {/* Autonomous Core Status with Pulsating Red Indicator */}
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-md border border-blue-900/60 bg-[#0e1d42]/60 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">Autonomous Core</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-grid-subtle">
          
          {/* Subtle Canvas Backdrop with White & Red Nodes */}
          <div className="absolute inset-0 opacity-45 pointer-events-none">
            <NeuralCanvas />
          </div>

          {/* Subtle Ambient Radial Glows */}
          <div 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-blue-600/10 blur-[130px] rounded-full"
            aria-hidden="true" 
          />
          <div 
            className="pointer-events-none absolute top-40 right-1/4 w-[350px] h-[250px] bg-red-600/8 blur-[100px] rounded-full"
            aria-hidden="true" 
          />

          <div className="relative mx-auto max-w-3xl px-6 text-center space-y-8 z-10">
            
            {/* Ambient Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="text-white font-semibold">MeckAI</span>
              <span aria-hidden="true" className="text-blue-800">·</span>
              <span className="text-red-400 font-medium">Autonomous Intelligence Architecture</span>
            </div>

            {/* Display Headline in Crisp White */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Next-Generation Cognitive Synthesis.
            </h1>

            {/* Corporate AI Jargon Value Proposition in Readable Light Slate */}
            <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Empowering multi-modal paradigm shifts through synergistic deep learning frameworks, 
              probabilistic agentic orchestration, and high-dimensional algorithmic resonance.
            </p>

            {/* Hero Call-To-Action Button in Bold Red */}
            <div className="pt-2 flex items-center justify-center max-w-sm mx-auto">
              <button
                type="button"
                onClick={handleInitialize}
                className="h-11 px-8 rounded-md bg-red-600 hover:bg-red-500 active:scale-98 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2.5 whitespace-nowrap transition-all shadow-lg shadow-red-950/40 border border-red-500/50 cursor-pointer"
              >
                <span>Initialize Platform</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Interactive Feedback Notification */}
            {demoActivated && (
              <div className="mx-auto max-w-sm p-3 rounded-lg border border-red-500/30 bg-[#0e1d42]/90 text-xs text-red-200 flex items-center justify-center gap-2 animate-in fade-in duration-150 shadow-md">
                <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0" />
                <span>Heuristic tensor pipeline online. System nominal.</span>
              </div>
            )}

          </div>
        </section>

        {/* 3 Boxes Filled With Random Corporate AI Jargon-Speak */}
        <section className="py-16 border-t border-blue-900/50 bg-[#071022]">
          <div className="mx-auto max-w-5xl px-6">
            
            <div className="text-center mb-10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                Core Paradigms
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Holistic Deep Learning Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Box 1: AI Jargon */}
              <div className="p-7 rounded-xl border border-blue-900/60 bg-[#0e1d42]/50 hover:bg-[#0e1d42]/80 hover:border-blue-700/60 transition-all space-y-3.5 group">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#091428] border border-blue-900/70 text-red-400 shadow-xs">
                    <Cpu className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-red-400">01</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Synergistic Neural Orchestration
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Leveraging decentralized agentic heuristics to facilitate real-time cross-functional knowledge vectorization across disparate distributed topologies.
                </p>
                <div className="pt-2 text-[11px] font-mono text-red-400/90 font-medium flex items-center gap-1.5 border-t border-blue-900/40">
                  <Terminal className="h-3 w-3 text-red-500" />
                  <span>Dynamic Vector Flux</span>
                </div>
              </div>

              {/* Box 2: AI Jargon */}
              <div className="p-7 rounded-xl border border-blue-900/60 bg-[#0e1d42]/50 hover:bg-[#0e1d42]/80 hover:border-blue-700/60 transition-all space-y-3.5 group">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#091428] border border-blue-900/70 text-red-400 shadow-xs">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-red-400">02</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Hyper-Dimensional Latent Synthetics
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Optimizing deterministic tensor matrix propagation with proactive recursive embedding protocols to maximize cognitive bandwidth and throughput.
                </p>
                <div className="pt-2 text-[11px] font-mono text-red-400/90 font-medium flex items-center gap-1.5 border-t border-blue-900/40">
                  <Terminal className="h-3 w-3 text-red-500" />
                  <span>Continuous Tensor Batching</span>
                </div>
              </div>

              {/* Box 3: AI Jargon */}
              <div className="p-7 rounded-xl border border-blue-900/60 bg-[#0e1d42]/50 hover:bg-[#0e1d42]/80 hover:border-blue-700/60 transition-all space-y-3.5 group">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#091428] border border-blue-900/70 text-red-400 shadow-xs">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-red-400">03</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Autonomous Algorithmic Convergence
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Harmonizing multi-modal feedback loops through self-healing generative paradigms and enterprise-grade entropy minimization frameworks.
                </p>
                <div className="pt-2 text-[11px] font-mono text-red-400/90 font-medium flex items-center gap-1.5 border-t border-blue-900/40">
                  <Terminal className="h-3 w-3 text-red-500" />
                  <span>Stochastic Invariant Loop</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Minimalist Footer */}
      <footer className="border-t border-blue-950 bg-[#070f20] py-8 text-xs text-slate-400">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-white font-bold">MeckAI<span className="text-red-500">.net</span></span>
          </div>

          <div className="text-center sm:text-right text-slate-400">
            &copy; {new Date().getFullYear()} MeckAI.net. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
