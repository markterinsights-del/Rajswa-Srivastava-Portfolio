import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ChevronDown, ChevronUp, Link, FileText, ArrowUpRight } from 'lucide-react';
import { LEARNING_IN_PUBLIC } from '../data';

export default function LearningSection() {
  const [filter, setFilter] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>('case-study-1'); // Pre-expand the first post for richness

  const filteredLogs = LEARNING_IN_PUBLIC.filter((log) => {
    if (filter === 'all') return true;
    return log.category === filter;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'case_study':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'ai_experiment':
        return 'bg-violet-50 text-violet-700 border-violet-100';
      case 'marketing':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'build_log':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default:
        return 'bg-stone-50 text-[#555] border-natural-border';
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section id="learning" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-natural-border pb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-warm-accent-500" />
              Build Publicly
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-natural-text-dark">
              Learning in Public
            </h2>
            <p className="text-sm sm:text-base text-stone-500 max-w-2xl">
              I believe skills are best proven in broad daylight. Here are case files, technical walk-throughs, and analytical tear-downs from real-time explorations.
            </p>
          </div>

          {/* Filtering Nodes */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-pointer transition-colors ${
                filter === 'all'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-50 text-[#555] border-natural-border hover:bg-stone-100'
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setFilter('case_study')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-pointer transition-colors ${
                filter === 'case_study'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-50 text-[#555] border-natural-border hover:bg-stone-100'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setFilter('ai_experiment')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-pointer transition-colors ${
                filter === 'ai_experiment'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-50 text-[#555] border-natural-border hover:bg-stone-100'
              }`}
            >
              AI Tech
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-pointer transition-colors ${
                filter === 'marketing'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-[#FAF9F6] text-[#555] border-natural-border hover:bg-stone-100'
              }`}
            >
              Marketing
            </button>
            <button
              onClick={() => setFilter('build_log')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border cursor-pointer transition-colors ${
                filter === 'build_log'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-[#FAF9F6] text-[#555] border-natural-border hover:bg-stone-100'
              }`}
            >
              Build Logs
            </button>
          </div>
        </div>

        {/* Dynamic Log List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredLogs.map((log) => {
            const isExpanded = expandedCardId === log.id;

            return (
              <div 
                key={log.id} 
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-white border-warm-accent-500 shadow-md ring-1 ring-warm-accent-500/10' 
                    : 'bg-[#FAF9F6] border-natural-border hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  {/* Category & Time Indicators */}
                  <div className="flex items-center justify-between gap-4 font-mono text-[11px] text-[#555]">
                    <span className={`px-2.5 py-0.5 rounded border font-semibold ${getCategoryTheme(log.category)}`}>
                      {log.categoryLabel}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        {log.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {log.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-sans tracking-tight text-natural-text-dark">
                      {log.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-stone-600">
                      {log.description}
                    </p>
                  </div>

                  {/* Bullet Takeaways when expanded */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-natural-border space-y-3">
                      <span className="block text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                        Core Takeaways & Learnings
                      </span>
                      <ul className="space-y-2">
                        {log.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
                            <span className="text-warm-accent-500 font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer with Expand / Action Toggle */}
                <div className="mt-8 pt-4 border-t border-natural-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {log.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono text-stone-400">
                        #{tag.toLowerCase().replace(' ', '')}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(log.id)}
                    className="flex items-center gap-1 text-xs font-mono font-semibold text-stone-900 hover:text-warm-accent-500 transition-colors uppercase cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Intel' : 'Expand Intel'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
