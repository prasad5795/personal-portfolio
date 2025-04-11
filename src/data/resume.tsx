import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prasad Kulkarni",
  initials: "PK",
  url: "",
  location: "Pune, Maharashtra",
  locationLink: "",
  description:
    "Results-driven Senior UI Developer with 9+ years of extensive experience crafting responsive, user-centric web applications across diverse industries. Specialized in modern JavaScript frameworks with a proven track record of delivering high-performance, scalable solutions that balance technical excellence with exceptional user experiences.",
  summary:
    "Senior UI Developer with 9+ years of experience in crafting responsive, user-centric web applications. Specialized in modern JavaScript frameworks and delivering high-performance, scalable solutions.",
  avatarUrl: "https://uploads.toptal.io/profile_photo/image/user/342096/default_39ad640899fec4ce3aef37dcad08da1f.jpg",
  skills: [
    // Frontend Technologies
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Shadcn UI",
    "Material UI",

    // Web3 & Blockchain
    "Ethers.js",
    "Web3.js",
    "Smart Contract Integration",
    "NFT Marketplaces",
    "Wallet Connectivity",

    // Backend & API
    "Node.js",
    "Nest.js",
    "RESTful APIs",
    "GraphQL",
    "WebSockets",

    // Databases & Storage
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "IPFS",
    "Pinecone Vector Database",

    // AI & Machine Learning
    "OpenAI API",
    "LangChain.js",
    "Vector Embeddings",
    "Prompt Engineering",
    "GitHub Copilot",
    "Cursor AI",
    "Cline (Code Generation)",

    // DevOps & Tools
    "Git",
    "Docker",
    "CI/CD Pipelines",
    "Vercel",
    "AWS",

    // Testing
    "Jest",
    "Playwright",
    "Cypress",
    "Test-Driven Development (TDD)",

    // Frameworks & Libraries
    "React Hook Form",
    "TanStack Query",
    "Framer Motion",
    "Recoil",
    "StoryBook",
    "TurboRepo",

    // Other Technologies
    "Edge Functions",
    "Kafka",
    "Hardhat",
    "WalletConnect",
    "MapboxGL"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kulkarniprasad57@gmail.com",
    tel: "+917875336615",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prasad5795",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prasad-kulkarni-674a3a121/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:?subject=''",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VDX.TV",
      href: "https://vdx.tv",
      badges: [],
      location: "Remote",
      title: "Senior UI Developer",
      logoUrl: "https://cdn.prod.website-files.com/62346762d4aa3516c44b3da1/62d7ef1c5f59451504326448_Logomark.svg",
      start: "OCT 2023",
      end: "Present",
      description:
        "Leading UI development for creative design platform",
    },
    {
      company: "Toptal",
      href: "https://www.toptal.com/",
      badges: ["Freelance"],
      location: "Remote",
      title: "Senior UI Developer",
      logoUrl: "https://images.icon-icons.com/2699/PNG/512/toptal_logo_icon_168482.png",
      start: "2021",
      end: "Present",
      description:
        "Elite freelance developer delivering cutting-edge web applications in AI and blockchain technologies for global clients.",
    },
    {
      company: "LogicMonitor",
      href: "https://logicmonitor.com",
      badges: [],
      location: "Pune, India",
      title: "UI Developer",
      logoUrl: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/nuevlz6vwufztvuhffhh",
      start: "Jan 2019",
      end: "OCT 2023",
      description:
        "Core UI contributor for enterprise monitoring solutions",
    },
    {
      company: "TomTom India",
      href: "https://tomtom.com",
      badges: [],
      location: "Pune, India",
      title: "UI Developer",
      logoUrl: "https://i.pinimg.com/736x/76/b0/3d/76b03df699508b7fd45894074535a4a3.jpg",
      start: "Jan 2019",
      end: "Oct 2018",
      description:
        "Frontend specialist for geospatial applications",
    },
    {
      company: "Persistent Systems",
      href: "https://persistent.com",
      badges: [],
      location: "Nagpur, India",
      title: "Full-stack Engineer",
      logoUrl: "https://companieslogo.com/img/orig/PERSISTENT.NS-d1e466d3.png?t=1720244493",
      start: "Sept 2016",
      end: "Oct 2018",
      description:
        "Full-stack engineer for healthcare technology",
    },
  ],
  education: [
    {
      school: "Shivaji University, Kolhapur",
      href: "",
      degree: "B.E. in Computer Science",
      logoUrl: "/shivaji.png",
      start: "2012",
      end: "2016",
    },
    {
      school: "Maharashtra Board",
      href: "",
      degree: "HSC",
      logoUrl: "/maharashtra.png",
      start: "2010",
      end: "2012",
    },
    {
      school: "Maharashtra Board",
      href: "",
      degree: "SSC",
      logoUrl: "/maharashtra.png",
      start: "2000",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "AI Content Studio",
      href: "",
      dates: "Jan 2024 - Present",
      active: true,
      description: "An AI-powered content creation platform enabling content creators to generate, optimize, and monetize multi-format digital content. The platform leverages advanced AI models to analyze content trends, optimize SEO performance, and provide actionable analytics.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "PostgreSQL",
        "Git",
        "WebSockets",
        "OpenAI API",
        "OpenRouter API",
        "Pinecone",
        "Supabase",
        "JWT",
        "Paddle",
        "Brevo API",
        "Sentry",
        "PostHog",
        "Edge Functions",
        "Vercel",
        "next-seo",
        "Node.js",
        "webhooks"
      ],
      links: [],
      image: "",
      video: ""
    },
    {
      title: "VDX Studio Turbo",
      href: "",
      dates: "Oct 2023 - Present",
      active: true,
      description: "An intuitive design tool similar to Figma, tailored for creative professionals to quickly create ad creatives and other marketing materials. The tool streamlines the process of turning requirements into fully customized and ready-to-publish creatives/ads.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "PostgreSQL",
        "Docker",
        "Kafka",
        "Git",
        "WebSockets",
        "React",
        "Recoil",
        "Material-ui",
        "StoryBook",
        "NestJS",
        "TurboRepo",
        "Playwright",
        "Jest",
        "Framer-Motion",
        "TipTap Editor"
      ],
      links: [],
      image: "",
      video: ""
    },
    {
      title: "NFT Marketplace (Decentralize)",
      href: "",
      dates: "Oct 2021 - Dec 2024",
      active: true,
      description: "A next-generation NFT marketplace enabling users to mint, buy, sell, and trade digital collectibles across multiple blockchains. The platform featured a responsive UI with real-time price updates, comprehensive wallet integration, and a personalized dashboard for tracking portfolio performance and transaction history.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "IPFS",
        "Git",
        "WebSockets",
        "Ethers.js",
        "Web3.js",
        "Next.js",
        "React",
        "Hardhat",
        "Framer Motion",
        "React Query",
        "Moralis SDK",
        "WalletConnect"
      ],
      links: [],
      image: "",
      video: ""
    },
    {
      title: "LogicMonitor",
      href: "",
      dates: "Jan 2019 - Oct 2023",
      active: false,
      description: "A cloud-based infrastructure monitoring and observability platform for enterprise IT and managed service providers. Worked on core features like alerts, tracing, alert grouping, and developed reusable UI components and charting libraries.",
      technologies: [
        "HTML5",
        "JavaScript",
        "CSS3",
        "React",
        "Redux",
        "Redux-Saga",
        "Highcharts",
        "Material-ui",
        "Storybook",
        "Styled Components"
      ],
      links: [],
      image: "",
      video: ""
    },
    {
      title: "Map Share Reporter",
      href: "",
      dates: "Feb 2019 - July 2019",
      active: false,
      description: "An online application for reporting changes to TomTom maps. Community users can log in to notify TomTom of map errors related to Address, Speed Limit, Point of Interest, etc. in 90 countries.",
      technologies: [
        "HTML5",
        "JavaScript",
        "CSS3",
        "Angular5",
        "Bootstrap",
        "MapboxGL"
      ],
      links: [],
      image: "",
      video: ""
    }
  ],
  hackathons: [
    {
      title: "LogicMonitor Mobile App Innovation Hackathon",
      dates: "2022",
      location: "LogicMonitor Headquarters",
      description: "Spearheaded a groundbreaking mobile application reimagining for LogicMonitor's flagship infrastructure monitoring platform. Developed a cutting-edge React Native mobile solution that revolutionized the user experience, bringing enterprise-grade monitoring capabilities to Android and iOS with a modern, intuitive interface. The project showcased innovative UI/UX design principles, delivering a seamless and responsive mobile experience for IT professionals.",
      win: "1st Place Winner",
      technologies: [
        "React Native",
        "Mobile App Development",
        "UI/UX Design",
        "Enterprise Monitoring"
      ],
      links: []
    },
    {
      title: "LogicMonitor AI Integration Hackathon",
      dates: "2023",
      location: "LogicMonitor Innovation Lab",
      description: "Led an ambitious AI-driven initiative to transform LogicMonitor's SaaS platform through intelligent automation and predictive analytics. Engineered advanced AI integrations to enhance operational efficiency, implementing machine learning algorithms to optimize infrastructure monitoring, predictive maintenance, and intelligent alert management. The project demonstrated the potential of AI to revolutionize enterprise IT observability.",
      technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "SaaS Integration",
        "Predictive Analytics",
        "Infrastructure Monitoring"
      ],
      links: []
    }
  ],
} as const;
