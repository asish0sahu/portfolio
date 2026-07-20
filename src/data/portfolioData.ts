import { Project, Experience, Skill, Education } from '../types';

export const PERSONAL_INFO = {
  name: 'Asish Kumar Sahu',
  title: 'Full Stack Developer',
  tagline: 'Specializing in MERN stack and scalable cloud architectures.',
  email: 'asish0sahu84@gmail.com',
  phone: '+91-9348696095',
  location: 'Hyderabad, India',
  github: 'https://github.com/asish0sahu84', // Standardized based on CV
  linkedin: 'https://linkedin.com/in/asish-kumar-sahu',
  about: 'I am a highly skilled and results-driven Full Stack Developer with extensive experience building scalable web applications, robust RESTful APIs, and responsive, interactive user interfaces. Proficient across the MERN stack, TypeScript, and multiple SQL/NoSQL databases, I specialize in engineering high-performance systems with clear role-based access, rapid response times, and intuitive designs.',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Deevyashakti India Pvt. Ltd',
    location: 'Hyderabad, India',
    period: '01/2026 – Present',
    isCurrent: true,
    projectTitle: 'Divos.in Logistics Portal',
    details: [
      'Built a high-performance Logistics portal as a primary multimodal web application under the Deevyashakti Group, optimizing supply chain visual flows.',
      'Developed responsive frontend systems utilizing React.js, TypeScript, and JavaScript to manage complex multimodal shipments and routing schedules.',
      'Engineered backend microservices in Node.js/Express.js, providing robust middleware processing and scalable API endpoints.',
      'Designed and optimized database schemas in MySQL and MongoDB, ensuring millisecond-level retrieval of shipment tracking and carrier status logs.'
    ],
    techStack: ['React.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB']
  },
  {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'Zenius IT Services Pvt. Ltd.',
    location: 'Hyderabad, India',
    period: '05/2025 – 12/2025',
    isCurrent: false,
    projectTitle: 'Trudose Healthcare Management System',
    details: [
      'Built a secure, role-based healthcare platform featuring dedicated portals for Admin, Hospital Admin, and Clinic Admin using React (TypeScript) and Node.js/Express.js.',
      'Developed a seamless multi-step patient registration flow featuring digital e-signatures and secure QR-code onboarding to facilitate faster patient check-ins.',
      'Designed patient sub-modules (health summary, medical history, emergency contacts, prescribed treatments, and uploaded medical documents) using reusable React components with clean state integration.',
      'Created and tested scalable RESTful API endpoints using Express.js, documented via Swagger UI and thoroughly validated with Postman.',
      'Enhanced system performance and responsive layouts using React hooks, TypeScript, and Tailwind CSS, maintaining accessibility standards.'
    ],
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Swagger', 'Postman', 'Tailwind CSS']
  },
  {
    id: 'exp-3',
    role: 'React.js Developer (React.js+Node.js)',
    company: 'Ratna Global Tech',
    location: 'Hyderabad, India',
    period: '10/2023 – 04/2025',
    isCurrent: false,
    projectTitle: 'E-bay (E-Commerce Dashboard)',
    details: [
      'Engineered an e-commerce dashboard using the MERN stack, resulting in a 30% reduction in server response times and improved retention.',
      'Created robust backend REST APIs in Node.js & Express.js supporting JSON Web Token (JWT) authentication and Role-Based Access Control (RBAC).',
      'Designed and optimized complex MongoDB schemas and queries, leading to a 30% increase in database search performance.',
      'Integrated Redux Toolkit for consistent, predictable global state management across core dashboard profiles and transactional tables.',
      'Boosted frontend performance by 15% using native React Hooks, efficient code-splitting, and optimized lazy-loading routes.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Tailwind CSS']
  },
  {
    id: 'exp-4',
    role: 'Full Stack Developer',
    company: "Let's Intern",
    location: 'Bengaluru, India',
    period: '02/2023 – 10/2023',
    isCurrent: false,
    projectTitle: 'User Profile Dashboard',
    details: [
      'Developed an interactive User Profile Dashboard using React.js, Material UI (MUI), and Node.js supporting real-time dynamic profile updates.',
      'Implemented robust client-side and server-side form validations and error handling, maximizing user data accuracy.',
      'Optimized backend response times by 20% by restructuring async/await database promises and implementing lightweight payload serializers.',
      'Created secure user authentication microservices using JWT and industry-standard salted password encryption via bcrypt.js.',
      'Collaborated within an Agile scrum team, actively participating in sprint grooming, planning, reviews, and daily stand-ups.'
    ],
    techStack: ['React.js', 'MaterialUI', 'Node.js', 'Express.js', 'JWT', 'bcrypt.js']
  },
  {
    id: 'exp-5',
    role: 'Junior React Developer',
    company: 'NxtWave Disruptive Technologies Private Limited',
    location: 'Hyderabad, India',
    period: '02/2022 – 12/2022',
    isCurrent: false,
    details: [
      'Developed reusable, modular UI components utilizing React.js, ES6 JavaScript, and responsive CSS grids/flexbox layout styling.',
      'Integrated external JSON REST APIs and implemented client-side state management using standard React hooks like useState and useEffect.'
    ],
    techStack: ['React.js', 'JavaScript', 'CSS', 'REST APIs']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Divos.in Logistics Portal',
    company: 'Deevyashakti India Pvt. Ltd',
    description: 'A large-scale multimodal shipping and tracking portal for visual supply chains.',
    fullDescription: 'Divos.in is an enterprise-grade multimodal logistics and supply chain tracking portal built for the Deevyashakti Group. It features interactive shipment timelines, route optimization metrics, inventory visualization dashboards, and cross-carrier status telemetry. Both air, land, and sea transit logs are compiled into a unified logistics grid.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Tailwind CSS'],
    role: 'Lead Full Stack Engineer',
    impact: [
      'Designed a unified dashboard representing multimodal container routes in real-time.',
      'Developed REST APIs supporting massive payloads with compressed JSON structures to accommodate high-frequency telemetry.',
      'Engineered advanced search indexes spanning MySQL and MongoDB records for shipment visual search.'
    ],
    category: 'fullstack'
  },
  {
    id: 'proj-2',
    title: 'Trudose Healthcare Management System',
    company: 'Zenius IT Services Pvt. Ltd.',
    description: 'A secure role-based clinic management and patient registration platform.',
    fullDescription: 'Trudose is a comprehensive clinical administration and electronic health records (EHR) database management platform. It splits access into three bespoke portals: Admin (global settings, hospital networks), Hospital Admin (staff schedules, wing occupancy), and Clinic Admin (appointment queues, doctor checklists). It introduces friction-free onboarding with digital e-signatures and QR codes.',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Swagger', 'Postman', 'Tailwind CSS'],
    role: 'Full Stack Engineer',
    impact: [
      'Built custom role-based routers on the frontend protecting private views based on JWT claims.',
      'Engineered an e-signature capture component that flattens vectors to Base64 before cloud archiving.',
      'Drastically accelerated clinic reception queues by onboarding patients via high-density QR scanning.'
    ],
    category: 'fullstack'
  },
  {
    id: 'proj-3',
    title: 'E-bay E-Commerce Dashboard',
    company: 'Ratna Global Tech',
    description: 'A high-performance seller portal featuring real-time sales metrics and MongoDB query tuning.',
    fullDescription: 'A comprehensive vendor dashboard simulating active seller analytics, inventory thresholds, and customer orders. Under the hood, we addressed heavy aggregations in MongoDB, building optimal index keys and compound pipelines to optimize telemetry loading times for complex sales reports.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT', 'Tailwind CSS'],
    role: 'MERN Developer',
    impact: [
      'Reduced server response latency by 30% via lazy caching of static categories and compound database indexing.',
      'Implemented Role-Based Access Control (RBAC) allowing restricted vendor operations.',
      'Achieved a 15% reduction in initial load speed by code-splitting heavy dashboard analytical graphs.'
    ],
    category: 'fullstack'
  },
  {
    id: 'proj-4',
    title: 'Interactive Recruiter Console & Profile Manager',
    company: "Let's Intern",
    description: 'A secure, high-fidelity profile and document dashboard with async optimization.',
    fullDescription: 'This project is a streamlined profile dashboard enabling dynamic profile edits, avatar resizing, and password encryption. Developed strictly under Agile guidelines, it prioritizes reliable form validation, error boundaries, and minimized payload transfer times over slow mobile networks.',
    techStack: ['React.js', 'MaterialUI', 'Node.js', 'Express.js', 'JWT', 'bcrypt.js'],
    role: 'Frontend & Auth Engineer',
    impact: [
      'Reduced overall API response times by 20% by resolving database promises concurrently using Promise.all.',
      'Implemented stateful forms with MaterialUI and custom regex rules to block malformed contact details.',
      'Secured credential exchanges with modern password salting using bcrypt.js and token expiry refresh flows.'
    ],
    category: 'fullstack'
  }
];

export const SKILLS: Skill[] = [
  // Stack (MERN & Databases)
  { name: 'React.js', category: 'stack', level: 5 },
  { name: 'Node.js', category: 'stack', level: 5 },
  { name: 'Express.js', category: 'stack', level: 5 },
  { name: 'MongoDB', category: 'stack', level: 5 },
  { name: 'TypeScript', category: 'stack', level: 5 },
  { name: 'JavaScript', category: 'stack', level: 5 },
  { name: 'MySQL', category: 'stack', level: 4 },
  { name: 'PostgreSQL', category: 'stack', level: 4 },
  { name: 'Redux Toolkit', category: 'stack', level: 5 },
  { name: 'HTML5/CSS3', category: 'stack', level: 5 },

  // Tools
  { name: 'Git & GitHub', category: 'tools', level: 5 },
  { name: 'Postman', category: 'tools', level: 5 },
  { name: 'Tailwind CSS', category: 'tools', level: 5 },
  { name: 'Docker', category: 'tools', level: 4 },
  { name: 'AWS (S3/EC2)', category: 'tools', level: 4 },
  { name: 'Linux CLI', category: 'tools', level: 4 },
  { name: 'MaterialUI', category: 'tools', level: 4 },
  { name: 'Bootstrap', category: 'tools', level: 4 },

  // Fundamentals
  { name: 'REST APIs', category: 'fundamentals', level: 5 },
  { name: 'JWT Auth & RBAC', category: 'fundamentals', level: 5 },
  { name: 'High-Level Design (HLD)', category: 'fundamentals', level: 4 },
  { name: 'Low-Level Design (LLD)', category: 'fundamentals', level: 4 },
  { name: 'Agile & Scrum', category: 'fundamentals', level: 5 },
  { name: 'CI/CD Pipelines', category: 'fundamentals', level: 4 },
  { name: 'Microservices', category: 'fundamentals', level: 4 },
  { name: 'Unit Testing (Jest)', category: 'fundamentals', level: 4 },

  // Exploring
  { name: 'Next.js & NextAuth', category: 'exploring', level: 4 },
  { name: 'OAuth 2.0', category: 'exploring', level: 4 },
  { name: 'GraphQL', category: 'exploring', level: 3 },
  { name: 'Kubernetes', category: 'exploring', level: 3 },
  { name: 'Google Cloud Platform (GCP)', category: 'exploring', level: 3 }
];

export const EDUCATION: Education[] = [
  {
    degree: 'BTech in Mechanical Engineering',
    institution: 'Centurion University of Technology and Management',
    location: 'Bhubaneswar, Odisha',
    period: '2018 - 2022', // Standard 4 year path corresponding to graduation in 2022
    grade: 'CGPA: 8.37'
  }
];
