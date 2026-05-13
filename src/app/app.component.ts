// app.component.ts
import { Component, OnInit, signal, Inject, PLATFORM_ID, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly mobileMenuOpen = signal(false);
  readonly ripples = signal<{ id: number; x: number; y: number }[]>([]);
  
  // Mouse pointer background highlight
  readonly mouseX = signal(50);
  readonly mouseY = signal(50);
  readonly isMouseMoving = signal(false);
  
  @ViewChild('heroCard') heroCard!: ElementRef<HTMLElement>;
  
  private rippleId = 0;
  private scrollHandler: (() => void) | null = null;
  private mouseMoveTimeout: any;
  private isBrowser: boolean;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  ngOnInit() {
    // Scroll logic will be handled in ngAfterViewInit
  }
  
  ngAfterViewInit() {
    if (this.isBrowser) {
      // Scroll-based sliding for the hero card
      if (this.heroCard) {
        this.scrollHandler = () => {
          const scrollY = window.scrollY;
          const maxOffset = 180;
          const translateY = Math.min(scrollY * 0.45, maxOffset);
          this.heroCard.nativeElement.style.transform = `translateY(${translateY}px)`;
        };
        window.addEventListener('scroll', this.scrollHandler, { passive: true });
      }
      
      // Mouse move highlight effect
      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      
      // Click ripple effect
      document.addEventListener('click', this.addRipple.bind(this));
    }
  }
  
  handleMouseMove(e: MouseEvent) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    this.mouseX.set(x);
    this.mouseY.set(y);
    this.isMouseMoving.set(true);
    
    // Clear previous timeout
    if (this.mouseMoveTimeout) clearTimeout(this.mouseMoveTimeout);
    // After mouse stops moving, slowly fade out the effect
    this.mouseMoveTimeout = setTimeout(() => {
      this.isMouseMoving.set(false);
    }, 150);
  }
  
  addRipple(event: MouseEvent) {
    const id = this.rippleId++;
    const x = event.clientX;
    const y = event.clientY;
    
    this.ripples.update(ripples => [...ripples, { id, x, y }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      this.ripples.update(ripples => ripples.filter(r => r.id !== id));
    }, 600);
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
    if (this.isBrowser) {
      if (!this.mobileMenuOpen()) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
  
  ngOnDestroy() {
    if (this.isBrowser) {
      if (this.scrollHandler) {
        window.removeEventListener('scroll', this.scrollHandler);
      }
      window.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      document.removeEventListener('click', this.addRipple.bind(this));
    }
  }
  
  // Your existing data
  readonly quickFacts = [
    { value: '4.5+ years', label: 'software engineering experience' },
    { value: '5k+ users', label: 'served on healthcare platforms' },
    { value: 'Angular v9-v19', label: 'frontend delivery range' },
    { value: 'AWS + Azure', label: 'cloud platforms shipped on' },
    { value: 'Zero-downtime', label: 'releases for govt & healthcare' }
  ];
  
  readonly openToWork = [
    { label: 'Job titles', value: 'Staff Full Stack Engineer, Technical Lead, Frontend Architect' },
    { label: 'Work modes', value: 'On-site, Hybrid, Remote' },
    { label: 'Preferred cities', value: 'Bengaluru, Pune, Hyderabad' },
    { label: 'Availability', value: 'Immediate' }
  ];
  
  readonly impactHighlights = [
    { value: '25%', title: 'Infrastructure cost reduced', detail: 'Helped migrate monolith-style delivery toward cloud-native architecture on AWS & Azure.' },
    { value: '60%', title: 'Deployment time improved', detail: 'Focused on SDLC quality, collaboration, and release confidence through CI/CD automation.' },
    { value: '4', title: 'Airports shipped live', detail: 'Led full-stack airport management system across 4 Indian airports with zero security audit failures.' },
    { value: '3-4 teams', title: 'Technical leadership', detail: 'Architected frontend & backend delivery for healthcare and GovTech at national scale.' }
  ];
  
  readonly featuredProjects = [
    {
      type: 'Backend Architecture · GitHub Project',
      title: 'OMS Backend',
      stack: ['Java 21', 'Spring Boot', 'Spring Security', 'Kafka', 'H2', 'JWT', 'Resilience4j'],
      summary: 'Two-service backend — OrderManagementSystem and InventoryManagementSystem — working together via Kafka for event-driven order and stock management.',
      outcome: 'Shows backend architecture depth: auth, messaging, reliability, and service boundaries.',
      sourceUrl: 'https://github.com/satyaki322000',
      highlights: [
        'JWT auth + role-based access: USER can read orders, ADMIN can create/update/delete.',
        'Order events (CREATE, UPDATE, DELETE) published to Kafka; inventory service consumes and adjusts stock with duplicate-event protection via stored eventId.',
        'Optimistic locking on orders, Resilience4j for fault-tolerant Kafka publishing.'
      ]
    },
    {
      type: 'Full Stack Product · GitHub Project',
      title: 'MYFOODAPP',
      stack: ['Angular', 'Node.js', 'Express', 'TypeScript', 'MongoDB Atlas', 'Leaflet', 'JWT'],
      summary: 'End-to-end food ordering app covering search, tag filtering, cart, checkout with map, JWT login/register, and order persistence in MongoDB.',
      outcome: 'Shows full product thinking: frontend flows, API design, auth, checkout, and persistence.',
      sourceUrl: 'https://github.com/satyaki322000',
      highlights: [
        'Angular frontend with reusable components: header, home, search, tags, food page, cart, checkout, and auth flows.',
        'Node.js + Express backend with JWT auth, bcrypt, MongoDB Atlas connectivity, and order creation APIs.',
        'Checkout page with Leaflet map for address selection, auth guards, HTTP interceptors, and loading states.'
      ]
    }
  ];
  
  readonly experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Quick Care Life',
      period: 'January 2026 – April 2026',
      location: 'New Delhi, India · Remote',
      project: 'Quick Care Life — Healthcare Software Infrastructure',
      achievements: [
        'Contributed to frontend development for healthcare product workflows with a focus on responsive Angular UI, maintainable feature delivery, and production-ready implementation.',
        'Handled payment gateway workflows including Razorpay integration for secure checkout and transaction experiences.',
        'Worked across software infrastructure and frontend modules to improve user-facing reliability, layout consistency, and delivery quality for remote healthcare operations.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Arka Information Systems / Docty Inc.',
      period: 'April 2025 – February 2026',
      location: 'New Delhi, India · Hybrid',
      project: 'Docty — Multi-Tenant Healthcare Platform (built from scratch)',
      achievements: [
        'Led 3 developers to architect Angular v17+ frontend from ground up for Patient, Doctor, Pharmacy, Clinic & Monitor portals (5,000+ users); NgRX state & auth management across all modules; strict SDLC with QA team throughout.',
        'Integrated DICOM viewer for surgical .dcm files; built Razorpay payment gateway & POS billing; HIPAA-compliant Agora RTC/RTM video (35% latency reduction); Socket.IO chat at 99.5% delivery reliability.',
        'Deployed on AWS (S3, EC2) with Docker; achieved 98% Lighthouse score with Angular Material responsive UI.'
      ]
    },
    {
      title: 'System Engineer — Full Stack Developer (Angular / Java)',
      company: 'Tata Consultancy Services',
      period: 'July 2024 – April 2025',
      location: 'New Delhi, India',
      project: 'EBR-CBIC — Airport Management System | Live at Varanasi, Pune & 2 other airports',
      achievements: [
        'Led 4 developers to build Airport Management System — live at 4 Indian airports — deployed on JBoss EAP cluster on Azure; Covered baggage handling & charges, crew & pet management, item taxation, Jasper Reports, and POS payment flow.',
        'Architected NgRX across 50+ features; page load 4.2s → 1.8s; zero security audit failures; Owned SDLC with QA — code reviews, regression & UAT cycles; 20% fewer production bugs.'
      ]
    },
    {
      title: 'Assistant System Engineer — Full Stack Developer (Angular / Java)',
      company: 'Tata Consultancy Services',
      period: 'November 2022 – June 2024',
      location: 'Noida, India',
      project: 'RMS — Legacy Migration: Export, Import & CMS (Postal) Microservices, CBIC | Live across Indian seaports, airports & post offices',
      achievements: [
        "Migrated legacy Struts/JSP monolith to Spring Boot 2 + Angular 13 microservices for India's Customs — covering Export, Import, and CMS (Postal) domains; system now live at virtually all Indian seaports, airports, and post offices.",
        'Developed 12+ microservices & 40+ RESTful APIs handling 5,000+ daily requests at 99.9% uptime; 40% performance gain and 60% faster DB queries post-migration.'
      ]
    },
    {
      title: 'Assistant System Engineer Trainee — Full Stack Developer',
      company: 'Tata Consultancy Services',
      period: 'December 2021 – October 2022',
      location: 'New Delhi, India',
      project: 'ITBA — Income Tax Business Application',
      achievements: [
        'Built Spring Boot + Angular v13 app with RBAC for 5 user roles; 30+ components, JUnit-tested APIs, 20% faster initialisation.'
      ]
    }
  ];
  
  readonly skillGroups = [
    { name: 'Frontend', skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'Angular Material', 'HTML', 'SCSS'] },
    { name: 'Backend', skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security'] },
    { name: 'Cloud & Delivery', skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Blue-Green Deployments', 'Micro-frontends', 'JBoss EAP', 'HIPAA'] },
    { name: 'Domain & Tools', skills: ['DICOM', 'Kafka', 'MongoDB', 'H2', 'Socket.io', 'Razorpay', 'SDLC'] }
  ];
  
  readonly certifications = [
    { title: 'Microsoft Certified: Azure Administrator Associate', issuer: 'Microsoft', meta: 'Issued Mar 2023 · Expires Mar 2026' },
    { title: 'Cyber Security', issuer: 'LinkedIn', meta: 'Issued Nov 2024' }
  ];
}