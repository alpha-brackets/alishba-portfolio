export type InquiryCategory =
  | 'social-growth'
  | 'brand-identity'
  | 'content-strategy'
  | 'consulting';

export interface InquiryOption {
  id: InquiryCategory;
  label: string;
  badge: string;
  description: string;
  defaultSubject: string;
}

export interface ProjectDeliverable {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: 'Marketing Strategy' | 'Brand & Launch' | 'UX & Product DNA';
  timeline: string;
  location: string;
  summary: string;
  overview: string;
  challenge: string;
  strategy: string[];
  deliverables: ProjectDeliverable[];
  results: {
    metric: string;
    label: string;
  }[];
  tags: string[];
  featured: boolean;
  isUxJourney?: boolean;
  testimonialOrQuote?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CertificationCourse {
  name: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  courseNumber?: number;
  certificateUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  status: 'In Progress' | 'Completed';
  description: string;
  courses?: CertificationCourse[];
  credentialLink?: string;
  skillsAcquired: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  bio: string;
  email: string;
  location: string;
  availability: string;
  socials: {
    linkedin: string;
    medium: string;
    emailMailto: string;
  };
  metrics: {
    value: string;
    label: string;
  }[];
}
