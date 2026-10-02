// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// removed unused: sassLogo
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// removed unused: angularLogo
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// removed unused: gsapLogo, materialuiLogo, bootstrapLogo, springbootLogo
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import nestjsLogo from "./assets/tech_logo/nestjs.svg";
import postgreLogo from "./assets/tech_logo/postgre.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
// removed unused: firebaseLogo
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
// removed unused: figmaLogo, netlifyLogo
import vercelLogo from "./assets/tech_logo/vercel.png";
// removed unused: postgreLogo, csharpLogo
import CodeChef from "./assets/tech_logo/codechef_white.svg";
import LeetCode from "./assets/tech_logo/leetcode_white.svg";
import Codeforces from "./assets/tech_logo/codeforces.svg";

// Experience Section Logo's
import huemanaiLogo from "./assets/company_logo/hueman-logo-dark.svg";

// Education Section Logo's
import ietLogo from "./assets/education_logo/IET_Logo.png";

// Project Section Logo's
import financeflowLogo from "./assets/work_logo/Finance_Flow.png";
import hostkindleLogo from "./assets/work_logo/HostKindle.png";
import chessGameLogo from "./assets/work_logo/Chess_Game.png";
import youtubeCloneLogo from "./assets/work_logo/Youtube_Clone.png";
import razorpayClone from "./assets/work_logo/Razorpay_Clone.png";
import virtualRLogo from "./assets/work_logo/VirtualR.png";
import notesAppLogo from "./assets/work_logo/Notes_app.png";
import visualProductLogo from "./assets/work_logo/Visual_Product.png";
import nextwatchLogo from "./assets/work_logo/NextWatch.png";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Nest JS", logo: nestjsLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: "Competitive Programming",
    skills: [
      { name: "CodeChef", logo: CodeChef },
      { name: "LeetCode", logo: LeetCode },
      { name: "Codeforces", logo: Codeforces },
    ],
  },
];

export const codingProfiles = [
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/priyamstar",
    logo: CodeChef,
    badge: "4 Star",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Priyam_Kesarwani/",
    logo: LeetCode,
    badge: "Knight Badge",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Priyam-Kesarwani",
    logo: Codeforces,
    badge: "400+ Problems Solved",
  },
];

export const dsaTopics = [
  "Array",
  "String",
  "Hash Table / Hashing",
  "Math & Number Theory",
  "Greedy",
  "Sorting",
  "Tree & Binary Tree",
  "Depth-First Search (DFS) & Breadth-First Search (BFS)",
  "Two Pointers",
  "Binary Search",
  "Dynamic Programming (DP)",
  "Matrix",
  "Stack & Monotonic Stack",
  "Linked List",
  "Implementation & Constructive Algorithms",
  "Brute Force & Simulation",
  "Bitmasks & Combinatorics",
  "Graphs, DSU / Union-Find, & Shortest Paths",
  "Trie",
  "Divide and Conquer",
  "Game Theory",
  "Data Stream",
];

export const experiences = [
  {
    id: 0,
    img: huemanaiLogo,
    role: "Software Engineer Intern",
    company: "HuemanAI",
    location: "Noida",
    date: "July 2025 – Present",
    desc: "Architected and built core backend modules for a multi-tenant Restaurant/Table Management SaaS (Next.js, NestJS, PostgreSQL), scaling to serve 2+ live hospitality clients across booking, floor management, and payments.",
    points: [
      "Architected and built core backend modules for a multi-tenant Restaurant/Table Management SaaS (Next.js, NestJS, PostgreSQL), scaling to serve 2+ live hospitality clients across booking, floor management, and payments.",
      "Designed a hierarchical multi-tenant data model (organization → venue → role) supporting 8+ heterogeneous venue types (restaurant, spa, sports court, membership, and more) under a single client, enabling scalable onboarding without schema rewrites.",
      "Developed role-based access control across the platform, scoping data visibility and action permissions by organization, venue, and user role to enforce isolation across 10+ tenant accounts / venues.",
      "Conducted a webhook and API security review covering idempotency, signature validation, and tenant isolation – including k6 load testing and chaos/break testing – flagging 5+ authorization gaps (including IDOR vectors) across payment and booking flows.",
    ],
    skills: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Multi-tenant SaaS",
      "RBAC",
      "k6 Testing",
      "REST APIs",
      "Security Auditing",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ietLogo,
    school: "Institute of Engineering and Technology, Lucknow",
    date: "Nov 2022 - June 2026",
    grade: "8.1 CGPA",
    desc: "Computer Science Engineering graduate from IET Lucknow with a robust foundation in software development, core computer science principles, and problem-solving. Skilled in building scalable web applications and proficient in Data Structures, Algorithms, OOP, DBMS, and modern software engineering stacks. Eager to leverage strong technical capabilities and competitive programming experience in a professional software engineering role.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
];

export const projects = [
  {
    id: 0,
    title: "HostKindle",
    description:
      "HostKindle is a full-stack property hosting platform built with Node.js, Express.js, MongoDB, and EJS. It enables users to list, manage, and book properties with dedicated Guest and Host roles, offering a seamless, AI-enhanced hosting experience.",
    image: hostkindleLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Priyam-Kesarwani/HostKindle",
    webapp: "https://hostkindle.onrender.com",
  },
  {
    id: 1,
    title: "Finance Flow",
    description:
      "Finance-Flow is an AI-powered expense tracking web application built using the MERN Stack. It helps users manage income and expenses, visualize financial data, and receive smart AI-driven financial insights.",
    image: financeflowLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Recharts",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Multer",
    ],
    github: "https://github.com/Priyam-Kesarwani/Finance-Flow",
    webapp: "https://finance-flow-by-star.vercel.app",
  },
  {
    id: 2,
    title: "NextWatch",
    description:
      "NextWatch is an AI-powered movie recommendation platform featuring 500+ movies across 20+ categories. It allows users to search, sort, filter, watch trailers, and manage personalized watchlists with smart recommendations.",
    image: nextwatchLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Golang",
      "Gin",
      "MongoDB",
      "Rapid API",
      "AI Integration",
    ],
    github: "https://github.com/Priyam-Kesarwani/NextWatch",
    webapp: "https://next-watch-ivory.vercel.app",
  },  
  {
    id: 3,
    title: "Visual Product Matcher",
    description:
      "An application that matches product images visually using feature extraction and similarity search, enabling quick discovery of similar products.",
    image: visualProductLogo,
    tags: [
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Priyam-Kesarwani/Visual-Product-Matcher",
    webapp: "https://visual-product-matcher-frontend-theta.vercel.app",
  },
  {
    id: 4,
    title: "VirtualR",
    description:
      "VirtualR is a responsive, modern front-end web application built with React and Tailwind CSS. It features smooth scrolling navigation, mobile-friendly menus, and clearly structured sections including Home, Features, Pricing, Contact, and Sign-In/Create Account flow.",
    image: virtualRLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "lucide-react",
      "React Scroll",
    ],
    github: "https://github.com/Priyam-Kesarwani/VirtualR",
    webapp: "https://virtual-r-frontend-project.vercel.app",
  },
  {
      id: 5,
    title: "Chess Game",
    description:
      "This is a full-stack Chess Game built with Node.js, Express, Socket.io, and styled using Tailwind CSS. It allows two players to play chess in real time via web sockets. The game includes essential features like Undo, Reset, and full chess logic validation using chess.js.",
    image: chessGameLogo,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express",
      "Socket.io",
      "Tailwind CSS",
      "Chess.js",
    ],
    github: "https://github.com/Priyam-Kesarwani/Chess_Game",
    webapp: "https://chess-game-41r5.onrender.com",
  },
  {
    id: 6,
    title: "Note Taking Application",
    description:
      "A full-stack notes application with authentication, CRUD notes, search, and responsive UI. Built to be fast, simple, and reliable for everyday note-taking.",
    image: notesAppLogo,
    tags: [
      "TypeScript",
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Priyam-Kesarwani/Note-Taking-Application",
    webapp: "https://note-taking-application-three.vercel.app",
  },
  {
    id: 7,
    title: "Youtube Clone",
    description:
      "A full-stack YouTube clone project build using React.js and Rapid API replicating core features of YouTube like video browsing, playback, and search. Built to explore modern web development tools and best practices.",
    image: youtubeCloneLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "Rapid API",
      "Axios",
      "React Icons",
      "React Router",
    ],
    github: "https://github.com/Priyam-Kesarwani/Youtube_Clone",
    webapp: "https://youtube-clone-by-star.vercel.app",
  },
  {
    id: 8,
    title: "Razorpay Clone",
    description:
      "A responsive frontend clone of Razorpay's landing page, built using Tailwind CSS v4. This project replicates the design and layout of Razorpay's official homepage, focusing on modern UI elements and responsive design.",
    image: razorpayClone,
    tags: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "Tailwind CSS",
      "React JS",
      "Feather",
      "React DOM",
      "React Hooks",
    ],
    github: "https://github.com/Priyam-Kesarwani/Razorpay_Clone",
    webapp: "https://razorpay-clone-by-star.vercel.app",
  },
];
