export interface FocusCard {
  id: string;
  title: string;
  description: string;
  metric?: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface LearningCard {
  id: string;
  title: string;
  category: 'case_study' | 'ai_experiment' | 'marketing' | 'build_log';
  categoryLabel: string;
  readTime: string;
  description: string;
  date: string;
  bullets: string[];
  tags: string[];
}

export interface ProblemScoringItem {
  problemName: string;
  marketSize: number; // 1-10
  urgency: number; // 1-10
  feasibility: number; // 1-10
  aiSuitability: number; // 1-10
  totalScore: number;
  isSelected?: boolean;
  why: string;
}

export interface TimelineStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  detail: string;
}
