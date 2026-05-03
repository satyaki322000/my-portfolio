import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly quickFacts = [
    { value: '4.5+ years', label: 'software engineering experience' },
    { value: '5k+ users', label: 'served on healthcare platforms' },
    { value: 'Angular v9-v19', label: 'frontend delivery range' },
    { value: 'AWS + Azure', label: 'cloud platforms shipped on' }
  ];

  readonly openToWork = [
    { label: 'Job titles', value: 'Full Stack Engineer, Frontend Developer' },
    { label: 'Work modes', value: 'On-site, Hybrid, Remote' },
    { label: 'Preferred cities', value: 'Hyderabad, Bengaluru, Pune, New Delhi' },
    { label: 'Availability', value: 'Immediate' }
  ];

  readonly impactHighlights = [
    {
      value: '99.9%',
      title: 'Healthcare uptime',
      detail: 'Built HIPAA-compliant systems and DICOM workflows serving thousands of users.'
    },
    {
      value: '25%',
      title: 'Infrastructure cost reduced',
      detail: 'Helped migrate monolith-style delivery toward cloud-native architecture.'
    },
    {
      value: '60%',
      title: 'Deployment time improved',
      detail: 'Focused on SDLC quality, collaboration, and release confidence.'
    },
    {
      value: '3-4 teams',
      title: 'Leadership exposure',
      detail: 'Worked across cross-functional delivery for airport and healthcare systems.'
    }
  ];

  readonly featuredProjects = [
    {
      type: 'Healthcare Platform',
      title: 'Docty Healthcare Platform',
      stack: 'Angular 17, Tailwind CSS, DICOM, REST APIs',
      summary:
        'HIPAA-compliant telemedicine platform serving 5,000+ daily users across India, connecting patients, doctors, labs, pharmacies, and hospitals.',
      highlights: [
        'Delivered patient, doctor, clinic, pharmacy, and monitoring interfaces with 99.9% uptime.',
        'Integrated DICOM viewer for radiology images and real-time communication workflows.',
        'Built marketplace flows, prescription management, and lab report delivery features.'
      ]
    },
    {
      type: 'Airport Management System',
      title: 'EBR-CBIC Airport Management',
      stack: 'Angular 9, Spring Boot, Java, REST APIs',
      summary:
        'Live at 4 major Indian airports (Delhi, Mumbai, Bengaluru, Hyderabad), handling air traffic billing and revenue systems.',
      highlights: [
        'Built modules for aircraft billing, flight schedule management, and automated invoicing.',
        'Reduced page load time from 4.2s to 1.8s for critical operator workflows.',
        'Processed 5,000+ daily requests with 99.9% uptime across all airport deployments.'
      ]
    },
    {
      type: 'Legacy Migration',
      title: 'RMS - Port & Airport Cargo',
      stack: 'Angular 12, Spring Boot, Oracle, Kafka',
      summary:
        'Migrated legacy port cargo systems serving all Indian seaports to modern microservices architecture.',
      highlights: [
        'Spearheaded migration of 15+ year old systems to cloud-native architecture.',
        'Improved database query performance by 60% with optimized indexing.',
        'Built 40+ RESTful APIs supporting 12+ microservices across the cargo workflow.'
      ]
    }
  ];

  readonly experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Arka Information Systems / Docty Inc.',
      period: 'Apr 2025 - Present',
      location: 'New Delhi, India · Hybrid',
      summary:
        'Building healthcare platform capabilities spanning pharmacy, labs, DICOM, marketplace flows, and real-time product experiences.',
      achievements: [
        'Developed Angular-based interfaces for patients, doctors, clinics, pharmacies across 5,000+ daily users.',
        'Integrated DICOM viewer for radiology images and real-time communication in HIPAA-compliant environment.',
        'Delivered marketplace flows, prescription management, and lab report delivery features.'
      ]
    },
    {
      title: 'Assistant Consultant',
      company: 'Tata Consultancy Services',
      period: 'Dec 2021 - Apr 2025',
      location: 'Noida / New Delhi, India',
      summary:
        'Built enterprise web applications for airports, ports, and government systems using Angular, Spring ecosystem, and Java.',
      achievements: [
        'EBR-CBIC Airport Management System: Live at 4 major Indian airports handling air traffic billing.',
        'RMS Legacy Migration: Migrated port cargo systems serving all Indian seaports to microservices.',
        'ITBA Taxpayer Portal: Developed taxpayer-facing portal for Income Tax Department.',
        'Built 12+ microservices with 40+ RESTful APIs serving 5,000+ daily requests at 99.9% uptime.',
        'Improved page load performance from 4.2s to 1.8s; reduced deployment time by 60%.'
      ]
    }
  ];

  readonly skillGroups = [
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'Angular Material', 'HTML', 'SCSS']
    },
    {
      name: 'Backend',
      skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Node.js', 'Express.js']
    },
    {
      name: 'Cloud & Delivery',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Blue-Green Deployments', 'Micro-frontends']
    },
    {
      name: 'Domain & Tools',
      skills: ['DICOM', 'Kafka', 'MongoDB', 'H2', 'Socket.io', 'Razorpay']
    }
  ];

  readonly certifications = [
    {
      title: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      meta: 'Issued Mar 2023 · Expires Mar 2026'
    },
    {
      title: 'Cyber Security',
      issuer: 'LinkedIn',
      meta: 'Issued Nov 2024'
    },
    {
      title: 'Data Structures in Java',
      issuer: 'Coding Ninjas',
      meta: 'Issued Oct 2024'
    },
    {
      title: 'Introduction to Programming Using Java',
      issuer: 'Coding Ninjas',
      meta: 'Issued Jun 2024'
    }
  ];
}
