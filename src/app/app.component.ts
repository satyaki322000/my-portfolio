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
      type: 'Backend Architecture',
      title: 'OMS Backend',
      stack: 'Spring Boot, Kafka, H2, JWT, Resilience4j',
      summary:
        'A two-service order and inventory management backend where authenticated order actions publish Kafka events and inventory updates stay idempotent.',
      highlights: [
        'Split responsibilities across OrderManagementSystem and InventoryManagementSystem.',
        'Used JWT auth, role-based APIs, optimistic locking, and resilient event publishing.',
        'Handled CREATE, UPDATE, and DELETE event flows with duplicate-event protection.'
      ]
    },
    {
      type: 'Full Stack Product',
      title: 'MYFOODAPP',
      stack: 'Angular, Node.js, Express, MongoDB, Leaflet',
      summary:
        'A food ordering application covering search, tag filtering, cart flows, login, register, checkout, loading states, maps, and order persistence.',
      highlights: [
        'Structured the frontend with reusable components for header, home, search, tags, food page, cart, auth, and checkout.',
        'Added backend APIs, JWT-based login, MongoDB Atlas connectivity, and order creation flows.',
        'Extended the experience with auth guards, interceptors, map integration, and user persistence.'
      ]
    }
  ];

  readonly experience = [
    {
      title: 'Frontend Developer',
      company: 'Docty Inc.',
      period: 'May 2025 - May 2026',
      location: 'India · Hybrid',
      summary:
        'Built healthcare application capabilities spanning pharmacy, labs, DICOM, marketplace flows, and real-time product experiences.',
      achievements: [
        'Worked across Angular-based patient, doctor, clinic, pharmacy, and monitor-facing interfaces.',
        'Contributed to healthcare workflows that demanded reliability, clarity, and production discipline.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Arka Information Systems',
      period: 'Apr 2025 - May 2026',
      location: 'New Delhi, India · Hybrid',
      summary:
        'Delivered frontend-heavy product work with DICOM and Tailwind CSS in the stack while supporting broader platform initiatives.',
      achievements: [
        'Shipped UI and workflow improvements for enterprise-facing systems.',
        'Worked with design, engineering, and product expectations in delivery-focused environments.'
      ]
    },
    {
      title: 'Full-stack Developer / Assistant System Engineer',
      company: 'Tata Consultancy Services',
      period: 'Dec 2021 - Apr 2025',
      location: 'Noida / New Delhi, India',
      summary:
        'Built web applications with Angular, Spring ecosystem tools, Java, and enterprise integration patterns.',
      achievements: [
        'Developed production features across frontend and backend layers.',
        'Built a strong foundation in enterprise SDLC, requirements handling, troubleshooting, and performance work.'
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
