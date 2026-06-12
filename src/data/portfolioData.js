export const personalInfo = {
  profileImage: '/gpt.jpg',
  name: 'Alekhya Ratnala',
  title: 'Aspiring Software Engineer & Salesforce Developer',
  tagline: 'Building intelligent CRM solutions and scalable software',
  email: 'alekhyaratnala123@gmail.com',
  phone: '+91 8332863185',
  location: 'Banglore ,India',
  linkedin: 'https://www.linkedin.com/in/ratnala05/' ,
  github: 'https://github.com/Alekhya5804',
  resumePath: '/resume.pdf',
  openToWork: true,
  typingRoles: [
    'Salesforce Developer',
    'Software Engineer',
    'Apex Developer',
    'CRM Specialist',
  ],
};

export const about = {
  summary: `I am a B.Tech graduate in Electronics and Communication Engineering (ECE) with a strong passion for software development and Salesforce CRM. I combine analytical engineering thinking with hands-on coding skills to build business-driven solutions.`,
  highlights: [
  'ECE graduate transitioning into Software Development & Salesforce CRM',
    'Built end-to-end Salesforce applications with Apex, SOQL, Flows & Validation Rules',
    'Strong foundation in Java, SQL, HTML, CSS, and JavaScript',
    'DRDO internship experience in research and technical problem-solving',
    'Focused on clean code, automation, and recruiter-ready deliverables',
  ],
};

export const skillCategories = [
  {
    id: 'salesforce',
    title: 'Salesforce',
    icon: 'SiSalesforce',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Salesforce CRM', level: 85 },
      { name: 'Apex', level: 80 },
      { name: 'SOQL', level: 82 },
      { name: 'Flows', level: 75 },
      { name: 'Validation Rules', level: 88 },
      { name: 'Reports & Dashboards', level: 78 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'FaCode',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Java', level: 60 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 70 },
      { name: 'C#', level: 40 },
      { name: 'JavaScript', level: 78 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'FaDatabase',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'DBMS', level: 75 },
      { name: 'SQL', level: 82 },
      { name: 'SOQL', level: 82 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'FaTools',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 88 },
      { name: 'Salesforce CLI', level: 75 },
    ],
  },
];

export const experiences = [
  {
    id: 'drdo',
    role: 'Research Intern',
    company: 'DRDO (Defence Research and Development Organisation)',
    period: '2024',
    type: 'Internship',
    description:
      'Gained hands-on exposure to defence research environments, technical documentation, and engineering problem-solving methodologies.',
    responsibilities: [
      'Supported research activities in electronics and communication engineering domains',
      'Analyzed technical data and contributed to engineering documentation',
      'Collaborated with senior researchers on problem-solving and project deliverables',
      'Developed analytical thinking and attention to detail in a high-stakes R&D environment',
    ],
    skills: ['Research', 'Technical Analysis', 'Documentation', 'Problem Solving'],
  },
  {
    id: 'salesforce-intern',
    role: 'Salesforce Virtual Intern',
    company: 'SmartBridge',
    period: 'July 2024 – August 2024',
    type: 'Virtual Internship',
    description:
      'Completed structured training in Salesforce CRM fundamentals, declarative automation, and introductory Apex development.',
    responsibilities: [
      'Learned Salesforce data model, security model, and Lightning Experience',
      'Practiced building Flows, Validation Rules, and custom objects',
      'Explored Apex triggers, SOQL queries, and test class fundamentals',
      'Applied learnings to build the Smart Inventory Management System project',
    ],
    skills: ['Salesforce CRM', 'Flows', 'Apex', 'SOQL'],
  },
];

export const projects = [
  {
    id: 'smart-inventory',
    title: 'Smart Inventory Management System',
    subtitle: 'Salesforce CRM Application',
    description:
      'A production-ready Salesforce application for managing products, suppliers, inventory, purchase orders, and automated low-stock alerts. Features bulkified Apex triggers, validation rules, permission sets, and 85%+ test coverage.',
    features: [
      '6 Custom Objects with Lookup & Master-Detail relationships',
      'Apex Triggers with Handler pattern & Service layer',
      'Automated stock updates & low-stock email alerts',
      'Purchase Order workflow: Draft → Approved → Received',
      'Permission Sets, Reports & Dashboard documentation',
    ],
    technologies: [
      'Salesforce CRM',
      'Apex',
      'SOQL',
      'Flows',
      'Validation Rules',
      'Triggers',
      'Permission Sets',
    ],
    github: 'https://github.com/Alekhya5804/smart-inventory-management',
    featured: true,
    color: 'from-brand-600 to-accent-500',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    subtitle: 'React Web Application',
    description:
      'A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to impress recruiters with smooth animations, dark mode, and ATS-friendly structure.',
    features: [
      'React.js component architecture',
      'Tailwind CSS responsive design',
      'Framer Motion scroll animations',
      'Dark/Light mode toggle',
      'SEO optimized & fast loading',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'JavaScript'],
    github: 'https://github.com/Alekhya5804/alekhya-portfolio',
    featured: false,
    color: 'from-violet-600 to-pink-500',
  },
];

export const certifications = [
  {
    id: 'sf-trailhead',
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    description: 'Multiple Superbadges and modules in Admin, Apex, and Flow fundamentals.',
    badge: 'SF',
  },
  {
    id: 'sf-intern',
    title: 'Salesforce Virtual Internship Certificate',
    issuer: 'SmartBridge',
    year: '2024',
    description: 'Completed virtual internship program covering CRM, automation, and development.',
    badge: 'VI',
  },
  {
    id: 'drdo-cert',
    title: 'DRDO Internship Certificate',
    issuer: 'DRDO',
    year: '2024',
    description: 'Recognition for research internship in electronics and communication engineering.',
    badge: 'DR',
  },
  {
    id: 'java',
    title: 'Java Programming',
    issuer: 'Great Learning',
    description: 'OOP concepts.',
    badge: 'JV',
  },

  {
    id: 'Python',
    title: 'Python Programming',
    issuer: 'Great Learning',
    description: 'Core Python, data structures, and problem-solving fundamentals.',
    badge: 'PY',
  },
];

export const education = {
  degree: 'B.Tech in Electronics and Communication Engineering',
  institution: 'Aditya Institute of Technology and Managment, Tekkali',
  period: '2021 – 2025',
  achievements: [
    'Strong academic foundation in electronics, signals, and communication systems',
    'Developed analytical and problem-solving skills applicable to software engineering',
    'Active participation in technical projects and self-driven Salesforce learning',
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
