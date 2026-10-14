import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.medium,
    ],
    knowsAbout: [
      'Digital Marketing',
      'Marketing Strategy',
      'Content Strategy',
      'Social Media Marketing',
      'Brand Positioning',
      'Consumer Behavior Analysis',
      'Market Research',
      'UI/UX Design',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Virtual University of Pakistan',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Digital Marketing Specialization',
        credentialCategory: 'degree',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'University of Illinois Urbana-Champaign',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google UX Design Professional Certificate',
        credentialCategory: 'certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
