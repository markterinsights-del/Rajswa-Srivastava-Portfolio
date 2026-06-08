import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Database, 
  Cpu, 
  Layers, 
  ArrowDown, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Info,
  Check,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, PROBLEM_SCORES, PROJECT_TIMELINE } from '../data';
import { ProblemScoringItem } from '../types';

export default function ProjectSection() {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<number>(0);
  const [timelineDetailIndex, setTimelineDetailIndex] = useState<number | null>(5); // Default expand ongoing automation step

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-warm-accent-500 pl-6">
          <div className="space-y-2 max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-warm-accent-500">
              FLAGSHIP EXPERIMENT
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-natural-text-dark">
              AdLeak AI
            </h2>
            <p className="text-base sm:text-lg text-stone-500">
              Building autonomous optimization pipelines to find and patch high-impact ad budget leaks before they scale.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href={PERSONAL_INFO.adleakApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-stone-900 hover:bg-warm-accent-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all duration-300"
              id="live-app-badge"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Context & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: The Problem */}
          <div className="bg-natural-bg border border-natural-border p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded">
                <AlertTriangle className="w-3.5 h-3.5" />
                THE FRICTION
              </div>
              <h3 className="text-xl font-bold text-natural-text-dark font-sans">
                Meta attribution data is systematically siloed.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-stone-600 leading-relaxed">
                Founders and growth marketers are constantly spending blindly because metrics in dashboard reports don't align with store receipts, causing massive operational leaks.
              </p>
            </div>
            
            <div className="border-t border-natural-border pt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-500">
              <div>
                <span className="block text-stone-400">Waste Rate</span>
                <span className="font-bold text-red-600">15% – 30% of spend</span>
              </div>
              <div>
                <span className="block text-stone-400">Manual Effort</span>
                <span className="font-bold text-natural-text-dark">10+ hours / week</span>
              </div>
            </div>
          </div>

          {/* Card 2: The Approach */}
          <div className="bg-natural-bg border border-natural-border p-8 rounded-3xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-warm-accent-700 bg-warm-accent-50 px-2.5 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5" />
                THE RATIONALE
              </div>
              <h3 className="text-xl font-bold text-natural-text-dark font-sans">
                Build simple autonomous audit workflows.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-stone-600 leading-relaxed">
                Rather than jumping on credentials, I designed an evaluation list of 100 potential business bottlenecks. A structured matrix led to building AdLeak AI—prioritizing measurable outcomes.
              </p>
            </div>

            <div className="border-t border-natural-border pt-4 grid grid-cols-2 gap-4 text-xs font-mono text-stone-500">
              <div>
                <span className="block text-stone-400">Scoring Pool</span>
                <span className="font-bold text-warm-accent-500">100 Problems Analyzed</span>
              </div>
              <div>
                <span className="block text-stone-400">Priority Filter</span>
                <span className="font-bold text-natural-text-dark">Quantitative RICE Matrix</span>
              </div>
            </div>
          </div>

        </div>

        {/* INTERACTIVE WIDGET: Problem Scoring Framework */}
        <div className="bg-natural-bg border border-natural-border rounded-3xl p-6 sm:p-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
              <Activity className="w-3.5 h-3.5 text-warm-accent-500 animate-pulse" />
              Decisions over Guesswork
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-natural-text-dark font-sans tracking-tight">
              Interactive Selection Matrix: Narrowing the List
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-2xl">
              I plotted multiple ideas to find the optimal scope. Tap each candidate below to see how they scored across 4 critical lenses (from 1 to 10 scale).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* List Selection Left Column */}
            <div className="lg:col-span-5 space-y-3.5">
              {PROBLEM_SCORES.map((prob, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProblemIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    selectedProblemIndex === idx 
                      ? 'bg-white border-warm-accent-500 shadow-sm ring-1 ring-warm-accent-500/20' 
                      : 'bg-transparent border-natural-border hover:bg-white/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-stone-200/60 text-stone-600 rounded">
                        #{idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-natural-text-dark font-sans leading-tight">
                        {prob.problemName}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-3">
                    <span className="text-xs font-mono font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                      Score: {prob.totalScore}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-stone-400 transition-transform ${selectedProblemIndex === idx ? 'transform translate-x-1 text-warm-accent-500' : ''}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Matrix Breakdown Right Column */}
            <div className="lg:col-span-7 bg-white border border-natural-border rounded-2xl p-6 space-y-6">
              
              {/* Selected Heading */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F0F0EE] pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#888]">
                    Selected Scoring Candidate
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-natural-text-dark font-sans">
                    {PROBLEM_SCORES[selectedProblemIndex].problemName}
                  </h4>
                </div>
                {PROBLEM_SCORES[selectedProblemIndex].isSelected ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full font-mono font-bold text-xs">
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    Target Selected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-500 rounded-full font-mono text-xs">
                    Parked Idea
                  </span>
                )}
              </div>

              {/* Dynamic Score Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>Market Size / Scalability Limit</span>
                    <span>{PROBLEM_SCORES[selectedProblemIndex].marketSize} / 10</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${PROBLEM_SCORES[selectedProblemIndex].isSelected ? 'bg-warm-accent-500' : 'bg-stone-400'}`}
                      style={{ width: `${PROBLEM_SCORES[selectedProblemIndex].marketSize * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>Problem Urgency / Commercial Leak Rate</span>
                    <span>{PROBLEM_SCORES[selectedProblemIndex].urgency} / 10</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${PROBLEM_SCORES[selectedProblemIndex].isSelected ? 'bg-warm-accent-500' : 'bg-stone-400'}`}
                      style={{ width: `${PROBLEM_SCORES[selectedProblemIndex].urgency * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>Execution Feasibility (Solo MVP Scope)</span>
                    <span>{PROBLEM_SCORES[selectedProblemIndex].feasibility} / 10</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${PROBLEM_SCORES[selectedProblemIndex].isSelected ? 'bg-warm-accent-500' : 'bg-stone-400'}`}
                      style={{ width: `${PROBLEM_SCORES[selectedProblemIndex].feasibility * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>AI Suitability (Leveraging LLM Analysis)</span>
                    <span>{PROBLEM_SCORES[selectedProblemIndex].aiSuitability} / 10</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${PROBLEM_SCORES[selectedProblemIndex].isSelected ? 'bg-warm-accent-500' : 'bg-stone-400'}`}
                      style={{ width: `${PROBLEM_SCORES[selectedProblemIndex].aiSuitability * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Discovery Notes */}
              <div className="bg-natural-bg border border-natural-border rounded-xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-warm-accent-550 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-natural-text-dark font-sans">
                    Product Thinking Retrospective
                  </h5>
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                    {PROBLEM_SCORES[selectedProblemIndex].why}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Current Architecture Diagram */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-warm-accent-500">TECHNICAL PIPELINE</span>
            <h3 className="text-2xl font-bold text-natural-text-dark font-sans tracking-tight">
              AdLeak AI Active System Architecture
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
              How performance data transitions from meta attribution pools to human-friendly insights.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {[
              { node: 'Inbound Webhook API', description: 'n8n integration catches real-time ad performance and store conversions.' },
              { node: 'Normalization Hub', description: 'Discrepancy validation resolves metrics conflicts on structured layers.' },
              { node: 'Alerting Router', description: 'Triggers instant warnings to budget guardians upon breach rate detection.' },
              { node: 'Insight Canvas', description: 'Summarizes critical leaks visually for recruiters and product mentors.' }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="relative bg-natural-bg border border-natural-border rounded-2xl p-6 flex flex-col justify-between group hover:border-warm-accent-500 transition-colors"
                id={`arch-step-${idx}`}
              >
                <div className="space-y-4">
                  {/* Step Code Header */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-stone-400">
                      NODE 0{idx + 1}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-warm-accent-50 flex items-center justify-center">
                      {idx === 0 && <Layers className="w-3.5 h-3.5 text-warm-accent-500" />}
                      {idx === 1 && <Cpu className="w-3.5 h-3.5 text-warm-accent-500" />}
                      {idx === 2 && <Database className="w-3.5 h-3.5 text-warm-accent-500" />}
                      {idx === 3 && <Activity className="w-3.5 h-3.5 text-warm-accent-500" />}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-natural-text-dark font-sans">
                      {step.node}
                    </h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connectors in desktop sizes */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-[50%] right-[-14px] translate-y-[-50%] bg-[#FAF9F6] border border-natural-border text-stone-400 rounded-full p-0.5 z-10 shadow-sm">
                    <ArrowRight className="w-3 h-3 text-stone-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Current Status Box */}
          <div className="bg-warm-accent-50 border border-warm-accent-100 rounded-2xl p-6 flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 bg-warm-accent-100 text-[#444] px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                Current Status
              </span>
              <h5 className="text-sm font-bold text-natural-text-dark font-sans">
                Active live testing with partner brands
              </h5>
              <p className="text-xs sm:text-sm text-stone-600 max-w-3xl">
                I am deploying the initial webhook receivers onto growth partner pipelines, refining the data reconciliation rate to consistently flag leaks exceeding 15% budget discrepancy limits.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION: Timeline Journey */}
        <div className="space-y-8 pt-10 border-t border-natural-border">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-warm-accent-500">CHRONOLOGY</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-natural-text-dark font-sans tracking-tight">
              Project Journey Timeline
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto">
              Behind the scenes of problem discovery, qualitative selection metrics, and active validation benchmarks.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Main connecting wire */}
            <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 translate-x-[-50%]"></div>

            {/* List steps */}
            <div className="space-y-12">
              {PROJECT_TIMELINE.map((step, idx) => {
                const isEven = idx % 2 === 0;
                const isExpanded = timelineDetailIndex === idx;

                return (
                  <div 
                    key={step.id} 
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* Circle Node Trigger */}
                    <button 
                      onClick={() => setTimelineDetailIndex(isExpanded ? null : idx)}
                      className="absolute left-[20px] sm:left-1/2 top-1 w-10 h-10 rounded-full border bg-white flex items-center justify-center translate-x-[-50%] shadow-sm hover:border-warm-accent-500 hover:ring-2 hover:ring-warm-accent-100 transition-all duration-300 z-10 cursor-pointer"
                    >
                      {step.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : step.status === 'ongoing' ? (
                        <span className="w-2.5 h-2.5 bg-warm-accent-500 rounded-full animate-pulse"></span>
                      ) : (
                        <Clock className="w-4 h-4 text-stone-300" />
                      )}
                    </button>

                    {/* Timeline Card */}
                    <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
                      <div 
                        onClick={() => setTimelineDetailIndex(isExpanded ? null : idx)}
                        className={`bg-natural-bg hover:bg-[#FAF9F6]/80 p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                          isExpanded ? 'border-warm-accent-200 bg-white ring-1 ring-warm-accent-500/10' : 'border-natural-border'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono font-bold text-warm-accent-700 px-2 py-0.5 bg-warm-accent-50 rounded">
                            {step.phase}
                          </span>
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                            step.status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                            step.status === 'ongoing' ? 'bg-warm-accent-100 text-warm-accent-800 animate-pulse' :
                            'bg-stone-100 text-stone-400'
                          }`}>
                            {step.status}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-natural-text-dark font-sans tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Interactive toggle notes */}
                        {isExpanded && (
                          <div className="mt-4 pt-3 border-t border-natural-border text-xs text-stone-600 bg-stone-100/35 p-2.5 rounded-lg font-mono">
                            <span className="font-bold text-[10px] text-stone-400 block mb-1 uppercase tracking-wider">
                              TAKEAWAY AT THIS STEP
                            </span>
                            {step.detail}
                          </div>
                        )}
                        
                        {/* Prompt hint */}
                        {!isExpanded && (
                          <div className="mt-3 text-[10px] font-mono text-stone-400 flex items-center justify-end gap-1">
                            <span>Read takeaways</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="hidden sm:block w-[10%]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
