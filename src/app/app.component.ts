import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly quickFacts = [
    { value: '4.5+ years', label: 'software engineering experience' },
    { value: '5k+ users', label: 'served on healthcare platforms' },
    { value: 'Angular v9-v19', label: 'frontend delivery range' },
    { value: 'AWS + Azure', label: 'cloud platforms shipped on' },
    { value: 'Zero-downtime', label: 'releases for govt & healthcare' }
  ];

  readonly openToWork = [
    {
      label: 'Job titles',
      value: 'Staff Full Stack Engineer, Technical Lead, Frontend Architect',
    },
    { label: 'Work modes', value: 'On-site, Hybrid, Remote' },
    { label: 'Preferred cities', value: 'Bengaluru, Pune, Hyderabad' },
    { label: 'Availability', value: 'Immediate' },
  ];

  readonly impactHighlights = [
    {
      value: '99.9%',
      title: 'Healthcare uptime',
      detail:
        'Built HIPAA-compliant systems and DICOM workflows serving thousands of users.',
    },
    {
      value: '25%',
      title: 'Infrastructure cost reduced',
      detail:
        'Helped migrate monolith-style delivery toward cloud-native architecture.',
    },
    {
      value: '60%',
      title: 'Deployment time improved',
      detail: 'Focused on SDLC quality, collaboration, and release confidence.',
    },
    {
      value: '3-4 teams',
      title: 'Technical Leadership',
      detail:
        'Architected cross-functional delivery for airport and healthcare systems. Set technical direction and code standards.',
    },
  ];

  readonly featuredProjects = [
    {
      type: 'Backend Architecture · GitHub Project',
      title: 'OMS Backend',
      stack:
        'Java 21, Spring Boot, Spring Security, Kafka, H2, JWT, Resilience4j',
      summary:
        'Two-service backend — OrderManagementSystem and InventoryManagementSystem — working together via Kafka for event-driven order and stock management.',
      highlights: [
        'JWT auth + role-based access: USER can read orders, ADMIN can create/update/delete.',
        'Order events (CREATE, UPDATE, DELETE) published to Kafka; inventory service consumes and adjusts stock with duplicate-event protection via stored eventId.',
        'Optimistic locking on orders, Resilience4j for fault-tolerant Kafka publishing.',
      ],
    },
    {
      type: 'Full Stack Product · GitHub Project',
      title: 'MYFOODAPP',
      stack:
        'Angular, Node.js, Express, TypeScript, MongoDB Atlas, Leaflet, JWT',
      summary:
        'End-to-end food ordering app covering search, tag filtering, cart, checkout with map, JWT login/register, and order persistence in MongoDB.',
      highlights: [
        'Angular frontend with reusable components: header, home, search, tags, food page, cart, checkout, and auth flows.',
        'Node.js + Express backend with JWT auth, bcrypt, MongoDB Atlas connectivity, and order creation APIs.',
        'Checkout page with Leaflet map for address selection, auth guards, HTTP interceptors, and loading states.',
      ],
    },
  ];

  readonly experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Arka Informations System / Docty Inc.',
      period: 'April 2025 – May 2026',
      location: 'New Delhi, India · Hybrid',
      project: 'Docty — Multi-Tenant Healthcare Platform (built from scratch)',
      achievements: [
        'Led 3 developers to architect Angular v17+ frontend from ground up for Patient, Doctor, Pharmacy, Clinic & Monitor portals (5,000+ users); NgRX state & auth management across all modules; strict SDLC with QA team throughout.',
        'Integrated DICOM viewer for surgical .dcm files; built Razorpay payment gateway & POS billing; HIPAA-compliant Agora RTC/RTM video (35% latency reduction); Socket.IO chat at 99.5% delivery reliability.',
        'Deployed on AWS (S3, EC2) with Docker; achieved 98% Lighthouse score with Angular Material responsive UI.',
      ],
    },
    {
      title: 'System Engineer — Full Stack Developer (Angular / Java)',
      company: 'Tata Consultancy Services',
      period: 'July 2024 – April 2025',
      location: 'New Delhi, India',
      project:
        'EBR-CBIC — Airport Management System | Live at Varanasi, Pune & 2 other airports',
      achievements: [
        'Led 4 developers to build Airport Management System — live at 4 Indian airports — deployed on JBoss EAP cluster on Azure; Covered baggage handling & charges, crew & pet management, item taxation, Jasper Reports, and POS payment flow.',
        'Architected NgRX across 50+ features; page load 4.2s → 1.8s; zero security audit failures; Owned SDLC with QA — code reviews, regression & UAT cycles; 20% fewer production bugs.',
      ],
    },
    {
      title:
        'Assistant System Engineer — Full Stack Developer (Angular / Java)',
      company: 'Tata Consultancy Services',
      period: 'November 2022 – June 2024',
      location: 'Noida, India',
      project:
        'RMS — Legacy Migration: Export, Import & CMS (Postal) Microservices, CBIC | Live across Indian seaports, airports & post offices',
      achievements: [
        "Migrated legacy Struts/JSP monolith to Spring Boot 2 + Angular 13 microservices for India's Customs — covering Export, Import, and CMS (Postal) domains; system now live at virtually all Indian seaports, airports, and post offices.",
        'Developed 12+ microservices & 40+ RESTful APIs handling 5,000+ daily requests at 99.9% uptime; 40% performance gain and 60% faster DB queries post-migration.',
      ],
    },
    {
      title: 'Assistant System Engineer Trainee — Full Stack Developer',
      company: 'Tata Consultancy Services',
      period: 'December 2021 – October 2022',
      location: 'New Delhi, India',
      project: 'ITBA — Income Tax Business Application',
      achievements: [
        'Built Spring Boot + Angular v13 app with RBAC for 5 user roles; 30+ components, JUnit-tested APIs, 20% faster initialisation.',
      ],
    },
  ];

  readonly skillGroups = [
    {
      name: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'Angular Material',
        'HTML',
        'SCSS',
      ],
    },
    {
      name: 'Backend',
      skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security'],
    },
    {
      name: 'Cloud & Delivery',
      skills: [
        'AWS',
        'Azure',
        'Docker',
        'CI/CD',
        'Blue-Green Deployments',
        'Micro-frontends',
        'JBoss EAP',
        'HIPAA'
      ],
    },
    {
      name: 'Domain & Tools',
      skills: ['DICOM', 'Kafka', 'MongoDB', 'H2', 'Socket.io', 'Razorpay','SDLC'],
    },
  ];

  readonly certifications = [
    {
      title: 'Microsoft Certified: Azure Administrator Associate',
      issuer: 'Microsoft',
      meta: 'Issued Mar 2023 · Expires Mar 2026',
    },
    {
      title: 'Cyber Security',
      issuer: 'LinkedIn',
      meta: 'Issued Nov 2024',
    },
  ];
}
