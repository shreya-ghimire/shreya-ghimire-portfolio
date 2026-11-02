/**
 * PORTFOLIO DATA ARCHITECTURE — ER. SHREYA GHIMIRE
 * 
 * Sourced directly from Shreya Ghimire's official Curriculum Vitae (CV).
 * Roles: Software Engineer | Backend Development
 * Registered General Engineer (Nepal Engineering Council)
 * Computer Science Engineer (Chitkara University)
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  coverImage: string;
  summary: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: string;
  year: string;
  doi?: string;
  abstract: string;
  tags: string[];
  link?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  badgeUrl?: string;
  category: 'Certification' | 'Achievement' | 'Honor';
  description?: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  focus: string;
  coursework: string[];
}

export const PORTFOLIO_DATA = {
  // Personal & Brand Information
  author: {
    prefix: "Im,",
    title: "Er. Shreya Ghimire",
    firstName: "Er. Shreya",
    lastName: "Ghimire",
    role: "Software Engineer | Backend Development",
    line2: "Computer Science Engineer, Chitkara University",
    line3: "Registered General Engineer, Nepal Engineering Council",
    email: "shreyaghimiree@gmail.com",
    phone: "+977 9814991751",
    location: "Kathmandu, Nepal",
    portrait: "/assets/images/image.png",
    cvUrl: "/assets/images/ShreyaGhimire_final_41217112.pdf",
    bio: "Backend-focused Software Engineer experienced in building scalable applications and RESTful APIs using Node.js, Express.js, and PostgreSQL. Skilled in database optimization, multi-tenant architecture, payment integrations, real-time systems, and third-party API integrations. Experienced in developing AI-powered features using OpenAI APIs, with additional expertise in React, Next.js, and TypeScript. Strong understanding of system design, application performance, and Agile development practices.",
    philosophy: "Engineering rigor is the synthesis of systematic architecture, reliable database design, and purposeful implementation.",
    stampText: "SOFTWARE DEVELOPMENT PORTFOLIO",
    stampYear: typeof window !== 'undefined' ? new Date().getFullYear().toString() : '2026',
  },

  // Numerical Highlights & Stats directly reflected from CV
  stats: {
    experienceYears: "4+",
    skillsCount: "35+",
    projectsCount: "Curating",
    publicationsCount: "3+",
    certificatesCount: "4",
  },

  // Primary Navigation Spine (Left Edge)
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'publications', label: 'Publication' },
    { id: 'education', label: 'Education & Achievement' },
    { id: 'contact', label: 'Contact' },
  ],

  // Featured Project / Interactive Showcase
  featuredShowcase: {
    id: 'pos-multi-tenant-platform',
    title: "Multi-Tenant Cloud POS & Real-Time Commerce Platform",
    category: "Distributed Systems & Backend Architecture",
    year: "2025 – 2026",
    thumbnail: "/assets/images/Pastel_Creative_Coding_Workspace_48779719.png",
    aspectRatio: "16:9",
    duration: "Production Architecture",
    description: "An end-to-end multi-tenant Point of Sale platform engineering scalable RESTful APIs in Node.js & Express.js with PostgreSQL, Stripe/Apple Pay integrations, automated webhooks, and Redis caching supporting high concurrency.",
    highlights: [
      "Multi-tenant PostgreSQL schema design with connection pooling and query optimization",
      "Stripe and Apple Pay multi-currency transaction processing with automated idempotent webhooks",
      "Redis caching layer for instant catalog lookups, session management, and API rate limiting",
      "High-speed modern frontend built using React, Next.js, TypeScript, Tailwind CSS v4, and shadcn/ui",
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "React", "Next.js", "TypeScript", "Redis", "Stripe API", "Apple Pay", "Tailwind CSS v4", "Docker"],
    metrics: [
      { label: "Target Latency", value: "< 25 ms" },
      { label: "Multi-Currency", value: "Stripe & Apple Pay" },
      { label: "Architecture", value: "Multi-Tenant" },
    ],
  },

  // Experiences List (All 5 roles extracted from CV)
  experiences: [
    {
      id: 'exp-resimator',
      role: "Software Engineer",
      company: "Resimator",
      period: "November 2025 — September 2026",
      location: "Kathmandu, Nepal",
      description: "Contributed to the development of a multi-tenant POS platform, designing scalable backend systems and responsive web applications.",
      highlights: [
        "Built and maintained RESTful APIs using Node.js and Express.js with PostgreSQL for multi-tenant architecture.",
        "Integrated Stripe and Apple Pay for multi-currency transactions, subscriptions, and automated webhook handling.",
        "Optimized database queries, indexing, and connection pooling in PostgreSQL to support high concurrent transactions.",
        "Implemented Redis caching for product catalogs, session management, and API rate limiting, reducing database load.",
        "Developed dynamic frontend interfaces using React, Next.js, and TypeScript with Tailwind CSS v4 and shadcn/ui.",
        "Utilized AI-assisted engineering tools including Claude, Claude Code, Cursor, and OpenCode to accelerate development, refactor code, and write unit tests.",
      ],
      technologies: ["Node.js", "Express.js", "PostgreSQL", "React", "Next.js", "TypeScript", "Tailwind CSS v4", "shadcn/ui", "Stripe API", "Apple Pay", "Redis", "Claude Code", "Cursor", "Docker"],
    },
    {
      id: 'exp-247-software',
      role: "Associate Software Engineer",
      company: "247 Software",
      period: "September 2024 — November 2025",
      location: "Pune, India",
      description: "Built and enhanced features for an enterprise incident management platform used by sports and entertainment facilities.",
      highlights: [
        "Designed RESTful APIs using Node.js and Express.js with PostgreSQL, optimizing complex database queries for incident reporting.",
        "Built an AI-powered conversational assistant using OpenAI APIs to query and extract incident information from the database.",
        "Integrated a custom Map Wrapper to visualize incidents geographically and track operational equipment in real time.",
        "Implemented real-time updates and notification workflows using Socket.IO for dispatch operations.",
        "Implemented secure authentication and authorization mechanisms using JWT and Role-Based Access Control (RBAC).",
        "Wrote unit and integration tests using Jest and Supertest, ensuring API reliability and test coverage.",
        "Monitored production application logs, identified performance bottlenecks, and assisted in troubleshooting using Sentry and Datadog.",
      ],
      technologies: ["Node.js", "Express.js", "PostgreSQL", "OpenAI API", "Socket.IO", "Map Wrapper", "JWT / RBAC", "Jest", "Supertest", "Sentry", "Datadog", "Agile / Scrum"],
    },
    {
      id: 'exp-gfg',
      role: "Freelance Technical Writer",
      company: "Geeks For Geeks",
      period: "March 2024 — August 2024",
      location: "Remote, India",
      description: "Authored comprehensive technical articles, architectural guides, and project-based tutorials on modern web development.",
      highlights: [
        "Authored 10+ project-based technical tutorials and guides on React.js, Node.js, Express.js, and MongoDB.",
        "Contributed 20+ improvements to existing technical documentation and coding references.",
        "Built and documented full-stack demo applications with MongoDB Atlas database schemas and REST APIs.",
        "Researched emerging web technologies, libraries, and architectural patterns to produce accurate developer content.",
        "Simplified complex engineering concepts like React routing architecture and machine learning integrations in frontend apps.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "RESTful APIs", "React Router", "Technical Writing", "API Documentation"],
    },
    {
      id: 'exp-tucious',
      role: "UI Designer and Human Resource Manager",
      company: "Tucious",
      period: "December 2021 — July 2022",
      location: "Chandigarh, India (Part-time)",
      description: "Led UI design workflows and coordinated talent acquisition and organizational operations.",
      highlights: [
        "Led the UI design team to create user-centered web and mobile interfaces using Figma.",
        "Designed wireframes, interactive prototypes, and design systems for client projects.",
        "Collaborated with business development to create compelling visual presentations for client acquisition.",
        "Managed recruitment processes, candidate screening, technical interviews, and onboarding.",
      ],
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Design Systems", "Prototyping", "Technical Recruitment", "HR Operations"],
    },
    {
      id: 'exp-fiverr',
      role: "Freelance Graphic Designer",
      company: "Fiverr",
      period: "August 2020 — December 2020",
      location: "Remote, Kathmandu",
      description: "Delivered custom promotional assets, branding collateral, and digital graphics for global clients.",
      highlights: [
        "Designed 20+ custom promotional banners, display advertisements, and web graphics for international clients.",
        "Created high-converting visual assets tailored to client specifications and platform guidelines.",
        "Maintained consistent 5-star client satisfaction through rapid turnaround and iterative design feedback.",
      ],
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Brand Identity", "Digital Graphic Design"],
    },
  ] as ExperienceItem[],

  // Categorized Skills (5 categories directly from CV)
  skillCategories: [
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Expert" },
        { name: "PostgreSQL", level: "Expert" },
        { name: "SQL", level: "Expert" },
        { name: "Redis", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "JWT & RBAC", level: "Expert" },
        { name: "Multi-tenant Architecture", level: "Advanced" },
        { name: "WebSockets & Socket.IO", level: "Advanced" },
        { name: "Webhooks & Stripe Integrations", level: "Advanced" },
        { name: "Docker & Containerization", level: "Intermediate" },
        { name: "Amazon EC2", level: "Intermediate" },
      ],
    },
    {
      category: "Backend Architecture & Performance",
      skills: [
        { name: "Microservices & Modular Arch", level: "Advanced" },
        { name: "Event-Driven Architecture", level: "Advanced" },
        { name: "Database Design & Indexing", level: "Expert" },
        { name: "Query Optimization", level: "Expert" },
        { name: "Caching Strategies", level: "Advanced" },
        { name: "Background Jobs & Queues", level: "Advanced" },
        { name: "API Security & Rate Limiting", level: "Expert" },
        { name: "Error Handling & Logging", level: "Expert" },
        { name: "Monitoring (Sentry, Datadog)", level: "Advanced" },
        { name: "System Design", level: "Advanced" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TanStack Start", level: "Intermediate" },
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "React Hooks & Lifecycle", level: "Expert" },
        { name: "React Router & Navigation", level: "Expert" },
        { name: "Tailwind CSS v4", level: "Expert" },
        { name: "shadcn/ui & Material UI", level: "Expert" },
        { name: "HTML5 / CSS3 / Responsive", level: "Expert" },
        { name: "Dynamic Theming", level: "Advanced" },
        { name: "State Management & REST Integration", level: "Expert" },
      ],
    },
    {
      category: "AI-Assisted Development",
      skills: [
        { name: "Claude & Claude Code", level: "Expert" },
        { name: "Cursor AI IDE", level: "Expert" },
        { name: "OpenCode", level: "Advanced" },
        { name: "OpenAI APIs Integration", level: "Advanced" },
        { name: "AI Code Generation & Refactoring", level: "Expert" },
        { name: "Automated Test Generation", level: "Advanced" },
        { name: "Prompt Engineering", level: "Advanced" },
        { name: "Codebase Exploration", level: "Expert" },
      ],
    },
    {
      category: "Git & Project Management",
      skills: [
        { name: "Git & Version Control", level: "Expert" },
        { name: "GitHub & Pull Requests", level: "Expert" },
        { name: "GitHub Actions & CI/CD", level: "Advanced" },
        { name: "Code Reviews & Linting", level: "Expert" },
        { name: "Jira Project Tracking", level: "Advanced" },
        { name: "Agile / Scrum Methodologies", level: "Advanced" },
        { name: "Sprint Planning & Retrospectives", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  // Projects Catalog (Currently empty as requested)
  projects: [] as ProjectItem[],

  // Publications & Technical Articles directly from CV
  publications: [
    {
      id: 'pub-substack',
      title: "The Illusion of Opting: Algorithmic Decision Architecture and the Erosion of Digital Autonomy",
      journal: "Substack Technical Essay",
      year: "2024",
      doi: "Substack Essay",
      abstract: "An analytical critique examining algorithmic decision architecture, behavioral manipulation, and systemic erosion of digital autonomy in modern consumer and software systems.",
      tags: ["Algorithmic Decision Architecture", "Digital Autonomy", "Software Ethics", "Tech Policy"],
      link: "https://shreyaghimiree.substack.com/p/the-illusion-of-opting-algorithmic",
    },
    {
      id: 'pub-gfg-router',
      title: "Explain MemoryRouter in Concept of React Router",
      journal: "GeeksforGeeks Official Technical Publication",
      year: "2024",
      doi: "GeeksforGeeks Guide",
      abstract: "Comprehensive architectural guide dissecting MemoryRouter's in-memory array history implementation, comparing it to BrowserRouter and HashRouter, with testing and hybrid app use cases.",
      tags: ["React Router", "React.js", "Frontend Architecture", "Software Testing"],
      link: "https://www.geeksforgeeks.org/reactjs/explain-memoryrouter-in-concept-of-react-router/",
    },
    {
      id: 'pub-gfg-ml',
      title: "Integrating Machine Learning Models into React Hooks Applications",
      journal: "GeeksforGeeks Official Technical Publication",
      year: "2024",
      doi: "GeeksforGeeks Guide",
      abstract: "Step-by-step engineering tutorial demonstrating how to integrate client-side machine learning inference within React hooks lifecycles with asynchronous state management.",
      tags: ["Machine Learning", "React Hooks", "Client-Side AI", "Web Development"],
      link: "https://www.geeksforgeeks.org/reactjs/integrating-machine-learning-models-into-react-hooks-applications/",
    },
    {
      id: 'pub-gfg-contributions',
      title: "GeeksforGeeks Official Contributor Profile (10+ Tutorials, 20+ Documentation Improvements)",
      journal: "GeeksforGeeks Developer Network",
      year: "2024",
      doi: "Contributor Profile",
      abstract: "Verified portfolio of published tutorials covering full-stack Node.js, Express, React, MongoDB schemas, and modern web application development.",
      tags: ["Full-Stack", "Node.js", "Express.js", "MongoDB", "Technical Writing"],
      link: "https://www.geeksforgeeks.org/user/ashreysfse5/contributions",
    },
  ] as PublicationItem[],

  // Certificates & Official Achievements directly from CV
  certificates: [
    {
      id: 'cert-nec',
      title: "Registered General Engineer",
      issuer: "Nepal Engineering Council (NEC)",
      issueDate: "Licensed Professional Engineer",
      credentialId: "Computer Engineering Discipline",
      category: "Certification",
      description: "Official professional engineering license issued by the Nepal Engineering Council recognizing certified practice in Computer Engineering.",
    },
    {
      id: 'cert-gfg-badge',
      title: "Contributor Badge Award",
      issuer: "GeeksforGeeks",
      issueDate: "2024",
      credentialId: "ashreysfse5",
      category: "Achievement",
      description: "Awarded Contributor Badge on GeeksforGeeks for consistent, high-quality technical content contributions, authoring 10+ project-based tutorials and 20+ improvements.",
      link: "https://www.geeksforgeeks.org/user/ashreysfse5/contributions",
    },
    {
      id: 'cert-octahacks',
      title: "Top 10 Recognition — Octahacks Hackathon",
      issuer: "Octahacks Innovation Initiative",
      issueDate: "Hackathon Recognition",
      category: "Achievement",
      description: "Secured Top 10 design recognition in Octahacks Hackathon for innovative product design, engineering architecture, and problem-solving execution.",
    },
    {
      id: 'cert-academic-distinction',
      title: "High Academic Distinction (CGPA: 9.42 / 10.0)",
      issuer: "Chitkara University",
      issueDate: "2020 – 2024",
      category: "Honor",
      description: "Graduated with exceptional academic record (9.42 CGPA) in Bachelor of Engineering (Computer Science and Engineering).",
    },
  ] as CertificateItem[],

  // Academic Education (Exact 3 items from CV)
  education: [
    {
      id: 'edu-chitkara',
      degree: "Bachelor of Engineering (Computer Science Engineering)",
      institution: "Chitkara University",
      period: "2020 — 2024",
      location: "Punjab, India",
      honors: "c.g.p.a: 9.42 (Academic Excellence)",
      focus: "Computer Science Engineering, Distributed Systems, Software Engineering, Database Systems, Computer Networks",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Object-Oriented Programming (OOP)",
        "System Design & Architecture",
        "Web Technologies",
      ],
    },
    {
      id: 'edu-higher-sec',
      degree: "Higher Secondary Level (10+2)",
      institution: "CBSE Board",
      period: "2018 — 2020",
      location: "Kathmandu, Nepal",
      honors: "Percentage: 91.2%",
      focus: "Science Stream (Physics, Chemistry, Mathematics, Computer Science)",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    },
    {
      id: 'edu-sec-see',
      degree: "Secondary Level (SEE)",
      institution: "CBSE Board",
      period: "Completed 2018",
      location: "Kathmandu, Nepal",
      honors: "Percentage: 83.2%",
      focus: "Secondary Education Curriculum",
      coursework: ["Mathematics", "Science", "Social Studies", "English", "Computer Applications"],
    },
  ] as EducationItem[],

  // Contact Information directly from CV
  contact: {
    email: "shreyaghimiree@gmail.com",
    phone: "+977 9814991751",
    location: "Kathmandu, Nepal · Open to Global Remote Opportunities",
    availability: "Available for Software Engineering, Backend Architecture & Full-Stack roles",
    socials: [
      { platform: "LinkedIn", handle: "shreya-ghimiree", url: "https://linkedin.com/in/shreya-ghimiree" },
      { platform: "GitHub", handle: "shreya-ghimire", url: "https://github.com/shreya-ghimire" },
      { platform: "Substack", handle: "shreyaghimiree", url: "https://shreyaghimiree.substack.com/p/the-illusion-of-opting-algorithmic" },
      { platform: "GeeksforGeeks", handle: "ashreysfse5", url: "https://www.geeksforgeeks.org/user/ashreysfse5/contributions" },
    ],
  },
};
