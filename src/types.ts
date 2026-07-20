export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  role: string;
  impact: string[];
  github?: string;
  demo?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  projectTitle?: string;
  details: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  category: 'stack' | 'tools' | 'fundamentals' | 'exploring';
  level: number; // 1 to 5 for visual indicators
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export interface Inquiry {
  id: string;
  senderName: string;
  senderEmail: string;
  company?: string;
  message: string;
  timestamp: string;
  type: 'hire' | 'collab' | 'general';
}
