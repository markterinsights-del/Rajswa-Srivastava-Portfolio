import { Cpu, TrendingUp, BarChart3, Users, Search, Layers, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CURRENT_FOCUSES } from '../data';

// Helper to map icon name to Lucide components safely
const getIconComponent = (name: string) => {
  switch (name) {
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-warm-accent-500" />;
    case 'Workflow':
      return <Layers className="w-5 h-5 text-warm-accent-500" />;
    case 'SearchCircle':
    case 'Search':
      return <Search className="w-5 h-5 text-warm-accent-500" />;
    case 'BarChart3':
      return <BarChart3 className="w-5 h-5 text-warm-accent-500" />;
    case 'Users':
      return <Users className="w-5 h-5 text-warm-accent-500" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-warm-accent-500" />;
    default:
      return <Sparkles className="w-5 h-5 text-warm-accent-500" />;
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-natural-bg border-t border-natural-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* About Text - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-[#444] text-xs font-semibold uppercase tracking-wider rounded-full">
              <span className="w-1.5 h-1.5 bg-warm-accent-500 rounded-full animate-ping"></span>
              The Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-natural-text-dark">
              Learning Through Selection & Execution
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed font-sans text-[15px] sm:text-base">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Core Philosophy Card - Right Column */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border border-natural-border p-8 rounded-2xl shadow-sm text-stone-900 space-y-6">
              <div className="absolute top-0 right-10 translate-y-[-50%] bg-warm-accent-500 text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded">
                Philosophy
              </div>
              <div className="space-y-4 pt-2">
                <span className="text-4xl font-serif text-warm-accent-500 select-none">“</span>
                <p className="text-stone-700 italic text-[15px] leading-relaxed">
                  "Most people build products because they love code. I build solutions because I am obsessed with finding bottlenecks. Validability is my guardrail."
                </p>
                <div className="border-t border-natural-border pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warm-accent-50 font-bold text-warm-accent-700 flex items-center justify-center text-xs font-mono">
                    RS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans tracking-wider text-natural-text-dark uppercase">
                      Rajswa Srivastava
                    </h4>
                    <p className="text-[11px] text-stone-500 font-mono">
                      BBA Student & AI Operations Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Current Focus Cards Grid */}
        <div className="mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-natural-text-dark font-sans tracking-tight">
              My Core Focal Areas
            </h3>
            <p className="text-sm sm:text-base text-stone-500">
              The skill disciplines I actively combine to study, diagnose, and streamline digital growth metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRENT_FOCUSES.map((focus) => (
              <div
                key={focus.id}
                id={`focus-${focus.id}`}
                className="group relative bg-white border border-natural-border p-6 rounded-2xl hover:border-warm-accent-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-warm-accent-50 flex items-center justify-center group-hover:bg-warm-accent-100 transition-colors">
                    {getIconComponent(focus.iconName)}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-semibold text-natural-text-dark font-sans tracking-tight">
                      {focus.title}
                    </h4>
                    <p className="text-[13px] text-stone-500 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
                {/* Metric footer inside card */}
                {focus.metric && (
                  <div className="mt-6 pt-3 border-t border-stone-50 flex justify-between items-center text-[11px] font-mono text-stone-400 group-hover:text-stone-600 transition-colors">
                    <span>Approach</span>
                    <span className="font-semibold text-warm-accent-500">{focus.metric}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
