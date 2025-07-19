// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
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
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import CodeChef from "./assets/tech_logo/codechef.png";
import LeetCode from "./assets/tech_logo/leetcode.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import ietLogo from "./assets/education_logo/IET_Logo.png";

// Project Section Logo's
import financeflowLogo from "./assets/work_logo/Finance_Flow.png";
import hostkindleLogo from "./assets/work_logo/HostKindle.png";
import chessGameLogo from "./assets/work_logo/Chess_Game.png";
import youtubeCloneLogo from "./assets/work_logo/Youtube_Clone.png";
import razorpayClone from "./assets/work_logo/Razorpay_Clone.png";
import machineLearningLogo from "./assets/work_logo/ML_Project.png";
import virtualRLogo from "./assets/work_logo/VirtualR.png";

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
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
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
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: ietLogo,
    school: "Institute of Engineering and Technology, Lucknow",
    date: "Oct 2022 - July 2026",
    grade: "8 CGPA",
    desc: "I have completed my Bachelor's degree (B.tech) in Computer Science from IET Lucknow. During my time at IET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at IET Lucknow has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Finance Flow",
    description:
      "Finance-Flow is a full-stack financial management web application built using React and Node.js. It enables users to track income and expenses, visualize financial trends, and gain insights into personal financial habits. User login and authorization features added for secure access.",
    image: financeflowLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
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
    id: 1,
    title: "HostKindle",
    description:
      "HostKindle is a full-stack web application that enables users to either host their property or book a stay as a guest. Built on the MVC architecture for clean and scalable design, it delivers a seamless experience for both parties.",
    image: hostkindleLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Priyam-Kesarwani/HostKindle",
    webapp: "https://hostkindle.onrender.com",
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Youtube Clone",
    description:
      "A full-stack YouTube clone project build using React.js and Rapid API replicating core features of YouTube like video browsing, playback, and search. Built to explore modern web development tools and best practices.",
    image: youtubeCloneLogo,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "React JS",
      "Rapid API",
      "Tailwind CSS",
      "Axios",
      "React Icons",
      "React Router",
    ],
    github: "https://github.com/Priyam-Kesarwani/Youtube_Clone",
    webapp: "https://youtube-clone-by-star.vercel.app",
  },
  {
    id: 5,
    title: "Razorpay Clone",
    description:
      "A responsive frontend clone of Razorpay's landing page, built using Tailwind CSS v4. This project replicates the design and layout of Razorpay's official homepage, focusing on modern UI elements and responsive design.",
    image: razorpayClone,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Priyam-Kesarwani/Razorpay_Clone",
    webapp: "https://razorpay-clone-by-star.vercel.app",
  },
];
