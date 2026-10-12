import { CertificationItem } from '@/types';

export const certifications: CertificationItem[] = [
  {
    id: 'uiuc-digital-marketing',
    title: 'Digital Marketing Specialization',
    issuer: 'University of Illinois Urbana-Champaign',
    period: 'Completed',
    status: 'Completed',
    description:
      'Rigorous 7-course academic specialization analyzing consumer behavior, digital platforms, omnichannel customer engagement, and AI-driven personalized marketing strategies.',
    courses: [
      {
        courseNumber: 1,
        name: 'The Digital Marketing Revolution',
        status: 'Completed',
      },
      {
        courseNumber: 2,
        name: 'Marketing in a Digital World',
        status: 'Completed',
      },
      {
        courseNumber: 3,
        name: 'Digital Marketing: Customer Engagement Strategy',
        status: 'Completed',
      },
      {
        courseNumber: 4,
        name: 'Digital Marketing: Platforms, Data, and Technologies',
        status: 'Completed',
      },
      {
        courseNumber: 5,
        name: 'Digital Marketing Strategy: Navigating Emerging Media and AI',
        status: 'Completed',
      },
      {
        courseNumber: 6,
        name: 'Digital Marketing Implementation: Executing Strategies in a Connected, Data-Driven World',
        status: 'Completed',
      },
      {
        courseNumber: 7,
        name: 'Digital Marketing Capstone',
        status: 'Completed',
      },
    ],
    skillsAcquired: [
      'Consumer Behavior Analysis',
      'AI-Personalized Marketing',
      'Omnichannel Strategy',
      'Marketing Analytics & Data',
      'Customer Journey Mapping',
    ],
  },
  {
    id: 'google-ux-design',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    period: 'Completed',
    status: 'Completed',
    description:
      'Foundational certification covering user-centered design principles, wireframing, high-fidelity prototyping, usability research, and accessibility standards.',
    skillsAcquired: [
      'User Research & Empathy Mapping',
      'Usability Testing',
      'Figma & High-Fidelity Prototyping',
      'Information Architecture',
    ],
  },
  {
    id: 'ucsd-interaction-design',
    title: 'Interaction Design Specialization Certificate',
    issuer: 'University of California San Diego (UC San Diego)',
    period: 'Completed',
    status: 'Completed',
    description:
      'Specialized program covering interaction mechanics, user engagement loops, feedback systems, and human-computer interface design.',
    skillsAcquired: [
      'Interaction Architecture',
      'Design Heuristics',
      'Cognitive Psychology in UX',
      'Rapid Prototyping',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Science (BS CS)',
  institution: 'Virtual University of Pakistan',
  timeline: 'Sep 2023 – Present (In Progress)',
  focus: 'Software engineering principles, data structures, algorithms, and web technologies.',
};
