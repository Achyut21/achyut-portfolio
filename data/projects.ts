export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "MIT Bitcoin Expo 2026",
    description:
      "Official website for the 13th Annual MIT Bitcoin Expo — a two-day conference and 36-hour hackathon hosted at MIT.",
    longDescription:
      "Designed and built the official website for the longest-running university-hosted Bitcoin event in the world. The site features a 3D star-field background, countdown timer, speaker showcase, hackathon details, and team page. Built with Next.js 15, Tailwind CSS v4, Three.js, and deployed on Vercel with analytics. Co-developed with Shivam Kumar.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Vercel",
    ],
    achievements: [
      "Built the official site for the 13th Annual MIT Bitcoin Expo, the longest-running university Bitcoin event",
      "Implemented 3D star-field background and interactive animations with React Three Fiber and Framer Motion",
      "Delivered a fully responsive, SEO-optimized site with Vercel Analytics and sitemap generation",
      "Coordinated speakers, hackathon logistics, and sponsor pages as Co-Chair of Hackathon and Marketing",
    ],
    image: "/images/projects/mit-bitcoin-expo/mit-bitcoin-expo.webp",
    github: "https://github.com/Achyut21/MIT_BITCOIN_EXPO_2026",
    liveUrl: "https://mitbitcoinexpo.org",
    featured: true,
  },
  {
    id: "skillbridge-ai",
    title: "SkillBridge AI",
    description:
      "A voice-enabled AI professional development platform with real-time market insights, learning paths, and neural glassmorphism UI.",
    longDescription:
      "Built for the Dream AI Hackathon 2025, SkillBridge AI is a full-stack PWA that combines GPT-4-powered career coaching with ElevenLabs voice synthesis, real-time job market data, and a drag-and-drop learning path builder. Features 70+ React components, 14 API endpoints, Google OAuth, and a custom neural glassmorphism design system. WCAG 2.1 AA accessible.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "ElevenLabs",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth.js",
      "PWA",
      "Zustand",
    ],
    achievements: [
      "Built a production-ready PWA with 70+ components, 14 API endpoints, and 18,000+ lines of code",
      "Integrated ElevenLabs voice synthesis with 9 professional voices and real-time waveform visualization",
      "Developed a drag-and-drop learning path builder with AI-powered skill assessment and progress tracking",
      "Implemented real-time job market analytics and salary benchmarking via Uclone MCP integration",
    ],
    image: "/images/projects/skillbridge-ai/skillbridge-ai.webp",
    github: "https://github.com/Achyut21/SkillBridge-ai",
    featured: true,
  },
  {
    id: "optimum-hacknet",
    title: "Optimum Hacknet @ MIT",
    description:
      "P2P protocol stress testing and visualization — benchmarked OptimumP2P vs GossipSub across a 12-node global cluster.",
    longDescription:
      "Built stress-testing scripts and a Streamlit visualization dashboard to compare OptimumP2P against GossipSub during the Optimum Hacknet hackathon at MIT. Tested mesh degree, shard factor, and message rate parameters across a 12-node cluster spanning the US, Europe, Asia, and Australia. Discovered OptimumP2P maintains consistent ~161ms P95 latency while GossipSub degrades 140% at scale.",
    technologies: [
      "Python",
      "Bash",
      "Streamlit",
      "P2P Networking",
      "GossipSub",
      "RLNC",
      "Docker",
      "Distributed Systems",
    ],
    achievements: [
      "Won $500 hackathon prize for scaling and stress test analysis",
      "Proved OptimumP2P maintains ~161ms P95 latency across all message rates (1–20 msg/sec)",
      "Demonstrated GossipSub degrades 140% at 20 msg/sec compared to OptimumP2P's flat performance",
      "Built a Streamlit dashboard for real-time visualization of protocol comparison data",
    ],
    image: "/images/projects/optimum-hacknet/optimum-hacknet.webp",
    github: "https://github.com/Achyut21/Optimum",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "payguard-ai",
    title: "PayGuard AI",
    description:
      "AI shopping agents with smart blockchain-based authorization — built at the EasyA x Algorand Harvard Hackathon.",
    longDescription:
      "Built PayGuard AI at the EasyA x Algorand Harvard Hackathon — a platform where GPT-4-powered AI agents shop on your behalf within authorized spending limits. Auto-approves purchases under the limit, requires manual approval for larger ones, and settles payments on Algorand with 2.8-second finality. Features TEALScript smart contracts, Pera Wallet integration, and real-time SSE notifications.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "Algorand",
      "TEALScript",
      "Turso",
      "Pera Wallet",
      "Tailwind CSS",
      "shadcn/ui",
      "Blockchain",
    ],
    achievements: [
      "Built a fully functional AI shopping platform with blockchain payments in 36 hours",
      "Deployed TEALScript smart contract on Algorand TestNet with agent wallet management",
      "Implemented auto-approval logic for sub-limit purchases and SSE real-time notifications",
      "Integrated GPT-4 function calling for intelligent product search and budget-aware recommendations",
    ],
    image: "/images/projects/payguard-ai/payguard-ai.webp",
    github: "https://github.com/Achyut21/PayGuard-AI",
    featured: false,
  },
  {
    id: "skillswap",
    title: "SkillSwap",
    description:
      "A peer-to-peer skill exchange platform where students post what they can teach and what they want to learn.",
    longDescription:
      "Built SkillSwap for CS5610 Web Development at Northeastern. Students post skills they can offer, browse others' posts by category or keyword, and send inquiries to connect. Features full CRUD with JWT auth, search with debounced input, category filtering, and sorting. Database seeded with 1,000+ records across users, posts, and inquiries.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML5",
      "CSS",
      "JWT",
      "REST API",
      "Vercel",
    ],
    achievements: [
      "Built a full-stack CRUD platform with JWT authentication and role-based access",
      "Seeded database with 1,000+ records across three MongoDB collections",
      "Implemented debounced search, category filtering, and multi-sort for browsing posts",
      "Deployed on Vercel with complete Figma wireframes and design documentation",
    ],
    image: "/images/projects/skillswap/skillswap.webp",
    github: "https://github.com/Achyut21/SkillSwap",
    liveUrl: "https://skill-swap-nine-sable.vercel.app/",
    featured: false,
  },
  {
    id: "collaborative-docs",
    title: "Collaborative Docs SaaS",
    description:
      "A collaborative document editor with microservices architecture, Kubernetes orchestration, and CI/CD pipelines.",
    longDescription:
      "Architected a collaborative document editing platform using a microservices approach. The frontend uses Next.js with TipTap for rich-text editing, while the backend runs Spring Boot services for document management. Infrastructure is fully containerized with Docker, orchestrated via Kubernetes with Helm charts, and automated through GitHub Actions CI/CD pipelines.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "TipTap",
    ],
    achievements: [
      "Designed a microservices architecture with separate document, user, AI, and billing services",
      "Built a rich-text editor with TipTap integrated into a Next.js frontend with Tailwind CSS v4",
      "Containerized all services with Docker and deployed via Kubernetes Helm charts",
      "Automated build, test, and deploy pipelines with GitHub Actions CI/CD",
    ],
    image: "/images/projects/collaborative-docs/collaborative-docs.webp",
    featured: false,
  },
  {
    id: "zenith",
    title: "Zenith",
    description:
      "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    longDescription:
      "Developed a decentralized music platform for artists to mint and sell NFTs with Solidity and IPFS, enabling transactions and faster monetization via Polygon. Implemented role-based access and interactive features like community hubs, increasing session duration substantially.",
    technologies: [
      "Solidity",
      "Polygon",
      "Ethereum",
      "IPFS",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Smart Contracts",
      "Web3.js",
      "Blockchain",
    ],
    achievements: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
      "Implemented role-based access and interactive features like community hubs, increasing session duration by 65%",
      "Eliminated third-party dependencies and automated royalty payouts, reducing overhead and platform latency by 30%",
    ],
    image: "/images/projects/zenith/zenith.webp",
    github: "https://github.com/achyut21/zenith",
    liveUrl: "https://devfolio.co/projects/zenith-202e",
    featured: false,
  },
  {
    id: "pokearena",
    title: "PokeArena",
    description:
      "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    longDescription:
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs, enabling secure trading and battling with on-chain verified ownership and battle logic. Integrated Aptos wallet authentication for seamless trades with real-time feedback.",
    technologies: [
      "Move",
      "Aptos",
      "NFTs",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Three.js",
      "MongoDB",
      "Blockchain",
    ],
    achievements: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
      "Integrated Aptos wallet authentication to ease 120+ NFT trades with real-time feedback",
      "Crafted a pixel art-inspired UI/UX using TailwindCSS and Three.js, improving user engagement by 60%",
    ],
    image: "/images/projects/pokearena/pokearena.webp",
    github: "https://github.com/achyut21/pokearena",
    featured: false,
  },
  {
    id: "lightning-time",
    title: "Lightning Time",
    description:
      "A Bitcoin Lightning Network-powered time tracking web app that automatically pays workers in Satoshis.",
    longDescription:
      "Developed during the MIT Bitcoin Expo 2025 Hackathon, Lightning Time is a time tracking application that allows users to check in for work and automatically receive Satoshi payments for each hour worked. Features real-time tracking, automatic Bitcoin payments via the Lightning Network, detailed analytics, and a responsive design.",
    technologies: [
      "Bitcoin",
      "Lightning Network",
      "LNbits",
      "Soulbound Tokens",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Ethers.js",
      "Blockchain",
    ],
    achievements: [
      "Built a real-time time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
      "Developed detailed analytics for visualizing earnings, work patterns, and payment history",
      "Designed a future authentication system using Soulbound Tokens (SBTs) for secure admin access",
    ],
    image: "/images/projects/lightning-time/lightning-time.webp",
    github: "https://github.com/Achyut21/MIT-LIGHTING-APP",
    liveUrl: "https://devpost.com/software/lightning-time",
    featured: false,
  },
  {
    id: "infinitus",
    title: "Infinitus'24",
    description:
      "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations.",
    longDescription:
      "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations across 10 events, optimizing for crowd loading. Integrated payment gateway for Cultural and Technical events.",
    technologies: [
      "Next.js",
      "Three.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Redux",
      "Framer Motion",
    ],
    achievements: [
      "Attracted 20,000 students with 6,000 registrations across 10 events",
      "Emphasized crowd loading optimization for seamless user experience",
      "Integrated payment gateway for Cultural and Technical events",
    ],
    image: "/images/projects/infinitus/infinitus.webp",
    github: "https://github.com/achyut21/infinitus24",
    featured: false,
  },
  {
    id: "billrewards",
    title: "BillRewards",
    description:
      "A cashback reward system that incentivizes on-time bill payments with cryptocurrency rewards.",
    longDescription:
      "Built BillRewards, an innovative system that encourages timely bill payments by rewarding users with cryptocurrency tokens. The platform integrates with payment processors to track bill payments and automatically distributes rewards for on-time payments.",
    technologies: [
      "Ethereum",
      "Solidity",
      "Smart Contracts",
      "Web3.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tesseract.js",
      "OCR Technology",
      "Blockchain",
    ],
    achievements: [
      "Developed a smart contract-based reward system integrated with multiple payment processors",
      "Created a token distribution mechanism that automatically rewards on-time payments",
      "Implemented an analytics dashboard for tracking payment patterns and reward distributions",
      "Built a secure wallet integration system for claiming and managing reward tokens",
    ],
    image: "/images/projects/billrewards/billrewards.webp",
    github: "https://github.com/achyut21/billrewards",
    liveUrl: "https://devpost.com/software/billrewards",
    featured: false,
  },
  {
    id: "byteroot",
    title: "Byteroot",
    description:
      "A coding ecosystem enabling users to post AI-validated questions and collaborate on solutions.",
    longDescription:
      "Developed ByteRoot, a platform enabling users to post AI-validated coding questions and collaborate through group discussions. Integrated Piston API to fetch compiler outputs for in-browser code execution.",
    technologies: [
      "OpenAI",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Prisma",
      "Redis",
      "JWT",
    ],
    achievements: [
      "Created a platform for posting AI-validated coding questions",
      "Built an ecosystem for collaborative problem-solving and group discussions",
      "Integrated Piston API for compiler outputs, enhancing code execution by 40%",
    ],
    image: "/images/projects/byteroot/byteroot.webp",
    github: "https://github.com/achyut21/byteroot",
    featured: false,
  },
  {
    id: "cryptovault-ipfs",
    title: "CryptoVault IPFS",
    description:
      "A decentralized backup and recovery system leveraging IPFS to securely store encrypted files.",
    longDescription:
      "Developed a decentralized backup and recovery system that combines AES symmetric encryption with RSA digital signatures to ensure confidential and tamper-proof file storage on IPFS.",
    technologies: [
      "IPFS",
      "Helia",
      "AES-256-CBC",
      "RSA",
      "Cryptography",
      "Node.js",
      "Express",
      "React",
      "Vite",
      "Multer",
    ],
    achievements: [
      "Created a secure encryption system using AES-256-CBC for file encryption",
      "Implemented RSA digital signatures for metadata integrity verification",
      "Developed a user-friendly two-step recovery process for seamless file retrieval",
      "Built a decentralized storage solution with complete privacy control",
    ],
    image: "/images/projects/cryptovault-ipfs/cryptovault-ipfs.webp",
    github: "https://github.com/Achyut21/CVIPFS",
    featured: false,
  },
  {
    id: "neunotes",
    title: "NeuNotes",
    description:
      "A comprehensive academic notes sharing platform facilitating knowledge exchange among students and faculty.",
    longDescription:
      "Designed and developed NeuNotes, a collaborative platform for sharing academic content with role-based access control. Features course organization, notes upload/preview, search, ratings, comments, and analytics dashboards.",
    technologies: [
      "MySQL",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Zustand",
      "Axios",
      "Multer",
      "Bcrypt",
      "REST API",
    ],
    achievements: [
      "Built a comprehensive platform with role-based access for students, faculty, and admins",
      "Implemented a sophisticated database structure with 12 tables, stored procedures, and triggers",
      "Created a full-featured notes management system with ratings, comments, and favorites",
      "Developed an intuitive UI for browsing, uploading, and managing academic content",
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    github: "https://github.com/achyut21/neunotes",
    featured: false,
  },
  {
    id: "noteit",
    title: "NoteIT",
    description:
      "A mobile app for sharing and accessing study notes and resources with social features and gamification.",
    longDescription:
      "Developed NoteIT, an Android mobile application that allows students to share and access study notes. Features user authentication, PDF uploading/downloading, badge rewards for engagement, and an intuitive navigation system.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design", "XML"],
    achievements: [
      "Created 9 activities and 4 fragments for comprehensive app functionality",
      "Implemented secure user authentication and data storage with Firebase",
      "Designed an engaging user interface with gamification elements like badges",
      "Built a robust PDF upload and retrieval system for educational resources",
    ],
    image: "/images/projects/noteit/noteit.webp",
    github: "https://github.com/Achyut21/Note_IT-Note-sharing-APP-",
    featured: false,
  },
];
