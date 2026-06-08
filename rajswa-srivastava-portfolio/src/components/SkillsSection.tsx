import React, { useState } from 'react';
import { Award, Code, Sparkles, BookOpen, Layers, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="skills" className="py-20 bg-natural-bg border-t border-b border-natural-border">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F0EE] text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full">
            <Award className="w-3.5 h-3.5 text-warm-accent-500" />
            Capabilities
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-sans tracking-tight text-natural-text-dark">
            Competency Matrix & Strategy Stack
          </h2>
          <p className="text-sm sm:text-base text-stone-500">
            A precise mapping of my cross-functional skill sets. Built for rapid learning is validated through real practical artifacts.
          </p>
        </div>

        {/* Categories Tab Selector (Dynamic highlight) */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-tight transition-all duration-200 border cursor-pointer ${
              activeTab === 'all'
                ? 'bg-warm-accent-500 text-white border-warm-accent-500 shadow-sm'
                : 'bg-white text-stone-600 border-natural-border hover:bg-stone-100/65'
            }`}
          >
            All Segments
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-tight transition-all duration-200 border cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-warm-accent-500 text-white border-warm-accent-500 shadow-sm'
                  : 'bg-white text-stone-600 border-natural-border hover:bg-stone-100/65'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {SKILL_CATEGORIES.filter(cat => activeTab === 'all' || activeTab === cat.id).map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white border border-natural-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 border-b border-[#F0F0EE] pb-4">
                <div className="w-9 h-9 rounded-lg bg-warm-accent-50 flex items-center justify-center">
                  {cat.id === 'product' && <Layers className="w-5 h-5 text-warm-accent-500" />}
                  {cat.id === 'ai' && <Sparkles className="w-5 h-5 text-warm-accent-500" />}
                  {cat.id === 'technical' && <Code className="w-5 h-5 text-warm-accent-500" />}
                  {cat.id === 'business' && <BookOpen className="w-5 h-5 text-warm-accent-500" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-natural-text-dark">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                    Verification Standard: Execution
                  </span>
                </div>
              </div>

              {/* Skills grid within category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cat.skills.map((skill, keyIdx) => (
                  <div 
                    key={keyIdx} 
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF9F6] border border-natural-border hover:bg-neutral-50 hover:border-warm-accent-500/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-xs sm:text-xs font-semibold text-stone-700 font-sans tracking-tight leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro quote/stat indicator */}
        <div className="bg-[#FAF9F6] border border-natural-border border-dashed rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            "We can teach anyone an API. What matters is the ability to construct a feedback loop and the discipline to validate assumptions with cold metrics."
          </p>
          <span className="text-[10px] font-mono text-stone-400 block uppercase tracking-widest">
            AdLeak AI Problem Evaluation Framework
          </span>
        </div>

      </div>
    </section>
  );
}
