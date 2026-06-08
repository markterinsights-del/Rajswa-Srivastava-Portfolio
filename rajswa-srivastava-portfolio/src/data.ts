import { FocusCard, SkillCategory, LearningCard, ProblemScoringItem, TimelineStep } from './types';

export const PERSONAL_INFO = {
  name: 'Rajswa Srivastava',
  nickname: 'Rajswa',
  title: 'AI Product & Growth',
  headline: 'Building AI Products, Growth Systems, and Real-World Solutions',
  subheadline: 'BBA Student | AI Builder | Product Thinker | Marketing & Growth Enthusiast',
  avatarInitials: 'RS',
  email: 'rajswa.sri25@gmail.com', // Professional email
  linkedIn: 'https://www.linkedin.com/in/rajswa-srivastava-marketing/', // Correct LinkedIn link
  github: 'https://github.com/rajswasrivastava', // Github profile
  adleakApp: 'https://adleak-ai-965959390710.asia-southeast1.run.app/', // Live AdLeak AI web app
  aboutParagraphs: [
    "I am a business and marketing student (BBA) who believes that the best way to understand technology is by building with it. Instead of collecting credentials or certificates, I choose to build live, working systems that solve real business bottlenecks.",
    "My focus sits at the intersection of Product Management, AI Engineering, and Growth Strategy. I design workflows, validate customer paint points, and structure technical operations. By using tools like n8n, Supabase, and Gemini APIs, I build bridges between complex code bases and real business metrics.",
    "Whether analyzing digital marketing leakages, modeling user behaviors, or validating 100+ separate business problems, I approach every project with systems thinking, clear validation criteria, and a bias towards rapid execution."
  ]
};

export const CURRENT_FOCUSES: FocusCard[] = [
  {
    id: 'ai-prod-dev',
    title: 'AI Product Development',
    description: 'Translating business problems into functional, API-driven agents and system workflows.',
    metric: 'Zero to MVP',
    iconName: 'Cpu'
  },
  {
    id: 'workflow-auto',
    title: 'Workflow Automation',
    description: 'Connecting API nodes, databases, and LLM logical blocks to build touchless workflows.',
    metric: 'n8n & Webhooks',
    iconName: 'Workflow'
  },
  {
    id: 'product-disc',
    title: 'Product Discovery',
    description: 'Iterative discovery frameworks, user interviews, and objective value scoring models.',
    metric: 'Validation-First',
    iconName: 'SearchCircle'
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Analytics',
    description: 'Diagnosing operational leaks, tracking attribution, and modeling customer acquisition costs.',
    metric: 'Performance Mapping',
    iconName: 'BarChart3'
  },
  {
    id: 'user-research',
    title: 'User Research',
    description: 'Structuring qualitative problem interviews and turning feedback loops into product requirements.',
    metric: 'User-Centric',
    iconName: 'Users'
  },
  {
    id: 'growth-strategy',
    title: 'Growth Strategy',
    description: 'Mapping customer acquisition channels and engineering low-cost growth loops.',
    metric: 'LTV/CAC Optimization',
    iconName: 'TrendingUp'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'product',
    title: 'Product',
    skills: ['Product Discovery', 'User Research', 'MVP Design', 'Product Thinking', 'User Journey Mapping', 'A/B Testing Frameworks']
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    skills: ['Gemini API', 'AI Workflows', 'Prompt Optimization', 'Automation Logic', 'Agentic Workflows', 'Retrieval-Augmented Generation']
  },
  {
    id: 'technical',
    title: 'Technical Stack',
    skills: ['n8n', 'Supabase & PostgreSQL', 'GitHub', 'REST APIs & Webhooks', 'TypeScript/JavaScript', 'Tailwind CSS']
  },
  {
    id: 'business',
    title: 'Business & Growth',
    skills: ['Performance Marketing', 'SEO Audit & Architecture', 'Growth Strategy', 'Business Analysis', 'Cost Modeling', 'Cohort Retention Tracking']
  }
];

export const FEATURED_PROJECT = {
  name: 'AdLeak AI',
  tagline: 'Precision analysis of wasted digital advertising spend using automated agent checks.',
  problem: {
    title: 'The Invisible Drain on Marketing Budgets',
    description: 'Marketers and agency founders struggle to identify wasted advertising spend in real-time. Tracking setups break, non-performing campaigns bleed cash for days, and pixel discrepancies misattribute conversions. Performance managers often spend 10+ hours a week digging through spreadsheets just to notice leaking budget.'
  },
  approach: {
    title: 'Problem Discovery & Systematic Scoring',
    description: 'Instead of starting with a solution, the project kicked off with high-velocity problem exploration, listing over 100 real-world business bottlenecks. A structured validation framework scored each problem based on critical criteria (market size, problem urgency, execution feasibility, and suitability for AI systems). Wasted ad spend emerged as the highest-scoring opportunity.'
  },
  architectureSteps: [
    {
      node: 'Meta Ads API',
      description: 'Pulls campaign performance, pixel mismatch errors, and CPA trends in real-time.'
    },
    {
      node: 'n8n Workflow Node',
      description: 'Orchestrates the scheduled cron fetch, formats payloads, and streams data batches.'
    },
    {
      node: 'Supabase Database',
      description: 'Stores historic baselines, threshold limits, and records anomaly detections.'
    },
    {
      node: 'AI Analysis Engine',
      description: 'Processes data through contextual prompts to spot attribution anomalies and generate immediate resolution strategies.'
    }
  ],
  status: {
    label: 'Validation + Automation Stage',
    details: 'Currently validating anomalous pattern detection logic. Building active n8n webhooks and conducting initial user testing with digital agency founders to refine output reports.'
  }
};

export const PROBLEM_SCORES: ProblemScoringItem[] = [
  {
    problemName: 'Pixel Attribution & Budget Leakage',
    marketSize: 9,
    urgency: 9,
    feasibility: 8,
    aiSuitability: 9,
    totalScore: 35,
    isSelected: true,
    why: 'High financial pain point. Digital agencies burn thousands due to silent tracking failures. Perfect use case for AI-driven anomaly diagnosis.'
  },
  {
    problemName: 'Manual Invoice Reconciliation',
    marketSize: 6,
    urgency: 8,
    feasibility: 7,
    aiSuitability: 6,
    totalScore: 27,
    isSelected: false,
    why: 'Highly urgent but moderate market size. Often custom-tailored to specific legacy ERP configurations, reducing direct SaaS scalability.'
  },
  {
    problemName: 'Influencer Coupon Misattribution',
    marketSize: 7,
    urgency: 6,
    feasibility: 8,
    aiSuitability: 5,
    totalScore: 26,
    isSelected: false,
    why: 'Good scope, but solving tracking does not necessarily require AI—can be handled with simple deterministic lookup queries.'
  },
  {
    problemName: 'Multi-channel Cold Content Scheduling',
    marketSize: 8,
    urgency: 5,
    feasibility: 8,
    aiSuitability: 7,
    totalScore: 28,
    isSelected: false,
    why: 'Large market size, but low immediate urgency. High saturation of existing social media scheduling players with deep feature sets.'
  }
];

export const PROJECT_TIMELINE: TimelineStep[] = [
  {
    id: 'step-1',
    phase: 'Phase 01',
    title: '100 Problems Identified',
    description: 'Documented 100 friction points across marketing, operations, and logistics from real conversations.',
    status: 'completed',
    detail: 'Avoided confirmation bias by actively seeking operational blockers in forums, comments, and interview notes.'
  },
  {
    id: 'step-2',
    phase: 'Phase 02',
    title: 'Validation Framework Design',
    description: 'Defined strict hurdles: Is the problem recurring? Is budget already being spent to solve it?',
    status: 'completed',
    detail: 'Filtered out standard minor inconveniences to isolate actual high-value, systemic enterprise pain points.'
  },
  {
    id: 'step-3',
    phase: 'Phase 03',
    title: 'Scoring Model Execution',
    description: 'Ran potential candidates through a numerical model assessing urgency, AI capabilities, and MVP complexity.',
    status: 'completed',
    detail: 'Quantitatively compared different business ideas, leaving personal biases aside to choose the absolute strongest.'
  },
  {
    id: 'step-4',
    phase: 'Phase 04',
    title: 'Problem Selection: Ad Leakage',
    description: 'Identified that pixel mismatches and bad budget pacing score highest in commercial friction.',
    status: 'completed',
    detail: 'Focused and committed entirely to the ad-spend optimization niche where ROI is immediate.'
  },
  {
    id: 'step-5',
    phase: 'Phase 05',
    title: 'AdLeak AI MVP Creation',
    description: 'Engineered the basic backend structure, setting up data storage and structuring alert conditions.',
    status: 'completed',
    detail: 'Built an analytical system focusing solely on identifying high CPC and conversion delays.'
  },
  {
    id: 'step-6',
    phase: 'Phase 06',
    title: 'Automation Workflows',
    description: 'Built operational flows utilizing n8n webhooks to fetch real-time simulated client datasets.',
    status: 'ongoing',
    detail: 'Created auto-trigger loops designed to trigger instantly when performance flags deviate by 20%.'
  },
  {
    id: 'step-7',
    phase: 'Phase 07',
    title: 'User Validation Phase',
    description: 'Demoing current automation receipts with digital marketers to refine analysis models.',
    status: 'upcoming',
    detail: 'Gathering active feedback to tweak alert channels (Slack vs WhatsApp vs Email digest).'
  }
];

export const LEARNING_IN_PUBLIC: LearningCard[] = [
  {
    id: 'case-study-1',
    category: 'case_study',
    categoryLabel: 'Product Case Study',
    title: 'Deconstructing the 100 Problems Challenge',
    readTime: '6 min read',
    description: 'A deep dive into how I generated, systematized, and filtered 100 practical business problems to find the single most profitable product idea.',
    date: 'May 2026',
    bullets: [
      'Finding real-world problems: How I avoided the "solution searching for a problem" trap.',
      'Constructing scoring axes: Urgency vs. Value capture vs. AI feasibility.',
      'Behind the scores: Why 92 ideas failed the commercial test within the first hour.'
    ],
    tags: ['Product Discovery', 'Problem Validation', 'Market Sizing']
  },
  {
    id: 'ai-exp-1',
    category: 'ai_experiment',
    categoryLabel: 'AI Orchestration',
    title: 'Low-Code vs Custom Scripts in AI Operations',
    readTime: '8 min read',
    description: 'Analyzing performance metrics, speed, and overall system maintainability when nesting Gemini AI structured models within n8n workflows.',
    date: 'April 2026',
    bullets: [
      'Benchmarking n8n performance against local Node.js microservices for rapid API processing.',
      'Schema Enforcement: Forcing JSON structures out of LLMs for predictable database entries.',
      'Secrets isolation and secure API key management in autonomous server models.'
    ],
    tags: ['Gemini API', 'n8n automation', 'Supabase Schema']
  },
  {
    id: 'marketing-ins-1',
    category: 'marketing',
    categoryLabel: 'Marketing Insight',
    title: 'Attribution Leakage: The Silent Margin Killer',
    readTime: '5 min read',
    description: 'Why cookie decay, iOS sandbox constraints, and broken tracking pixels waste billions, and how automated status checks can save agencies 15% immediately.',
    date: 'March 2026',
    bullets: [
      'The anatomy of a tracking pixel break: Why standard dashboard monitors take 48h to notice.',
      'Bridging technical analytics with marketing outcomes: Speaking the clients ROI language.',
      'Creating early-warning alert loops via light-weight client webhook feeds.'
    ],
    tags: ['Performance Marketing', 'Ad Attribution', 'ROI Mapping']
  },
  {
    id: 'build-log-1',
    category: 'build_log',
    categoryLabel: 'Build Log',
    title: 'The Blueprint of AdLeak AI Integration',
    readTime: '7 min read',
    description: 'Technical document explaining the step-by-step setup of n8n webhook nodes, Supabase databases, and prompt configurations to monitor ad spend anomalies automatically.',
    date: 'June 2026',
    bullets: [
      'Drafting database tables: Optimizing keys to keep read/write transactions fast and cheap.',
      'Nesting prompts: Tuning system behavior to deliver crisp bulleted insights instead of conversational word-salad.',
      'Validating fail-safe loops: Gracefully catching timeout errors without halting the core pipeline.'
    ],
    tags: ['System Architecture', 'DB Design', 'Prompt Engineering']
  }
];
