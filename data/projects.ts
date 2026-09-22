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
    id: "payphone",
    title: "PayPhone",
    description: "An AI agent that bills video calls by the second and settles on-chain at hangup.",
    longDescription:
      "Built at EasyA Consensus Miami 2026. The agent signs one Permit2 witness capped at $5, and the chain settles $0.01 per active second when the call ends. Settlement runs through a hand-rolled x402 verify-to-settle handshake rather than CDP's paymentMiddleware, so nothing settles until the hangup webhook fires. AWS infrastructure is provisioned as a single Terraform apply.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AWS",
      "Terraform",
      "Coinbase CDP",
      "x402",
      "Permit2",
      "Anthropic API",
      "Cognito",
      "DynamoDB",
      "Base",
    ],
    achievements: [
      "6 settlements ran on-chain, 2 of them on Base mainnet",
      "Hand-rolled the x402 verify-to-settle handshake so settlement defers to the hangup webhook",
      "Provisioned Cognito, DynamoDB, and scoped IAM through one Terraform apply",
    ],
    image: "/images/projects/payphone/payphone.webp",
    github: "https://github.com/Achyut21/payphone",
    liveUrl: "https://main.d3vbs5akc8zis2.amplifyapp.com/",
    featured: true,
  },
  {
    id: "aptava",
    title: "Aptava",
    description:
      "The property management platform behind a Boston-area brokerage. An Angular agent app and an Express API covering leases, listings, showings, and photos.",
    longDescription:
      "Aptava is the internal side of the brokerage's operation. Agents run deals, assemble lease packets, schedule showings, and manage listing media from one Angular 18 app backed by an Express 5 and MongoDB API on AWS. The lease pipeline is the hardest part of it: 18 document types assembled into DocuSign envelopes with per-recipient signature, initial, and text tabs, and a signing order that has to hold across tenants, guarantors, landlords, and agents.",
    technologies: [
      "Angular 18",
      "TypeScript",
      "Angular Material",
      "RxJS",
      "Express 5",
      "Node 22",
      "MongoDB",
      "Mongoose",
      "DocuSign eSignature API",
      "Google Calendar & Meet APIs",
      "OAuth2",
      "Puppeteer",
      "EJS",
      "AWS S3",
      "Elastic Beanstalk",
      "Nginx",
      "Mocha",
    ],
    achievements: [
      "Automated lease execution across 18 DocuSign document types, with signing order enforced for tenants, guarantors, landlords, and agents and tabs filled from application data",
      "Traced intermittent production 504s to an S3 existence check that called GetObject and never read the body, so every lease PDF draft leaked a socket until the 50-connection keep-alive pool died",
      "Upgraded the app 9 Angular major versions to 18.2 and Node 16 to 24, then rewrote every Material component the post-v14 rewrite broke",
      "Rebuilt listing PDF export on Puppeteer and an EJS template, then fixed a production-only 500 caused by headless Chrome installed on Amazon Linux 2023 without its shared libraries",
      "Built a multi-party showing scheduler on Google Calendar and Meet over OAuth2 refresh tokens, with a cron worker that archives Meet recordings from per-agent Drive folders",
      "Fixed iPhone photos landing rotated 90 degrees by recording EXIF orientation at ingest, after the resize step had been stripping the tag",
      "Split a 1,746-line feature branch into 6 stacked pull requests and verified the split lossless with an empty diff against the original",
    ],
    image: "/images/projects/aptava/aptava.webp",
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
      "Built a voice coaching PWA on GPT-4 and ElevenLabs across 70+ components, 14 API endpoints, and 18,000+ lines",
      "Cached GPT-4 completions in Redis to cut voice-chat latency, with Prisma Accelerate pooling Postgres connections",
      "Meets WCAG 2.1 AA at a 95+ Lighthouse score",
      "Built a drag-and-drop learning path builder with AI skill assessment",
    ],
    image: "/images/projects/skillbridge-ai/skillbridge-ai.webp",
    github: "https://github.com/Achyut21/SkillBridge-ai",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "MIT Bitcoin Expo 2026",
    description:
      "Official website for the 13th Annual MIT Bitcoin Expo, a two-day conference and 36-hour hackathon hosted at MIT.",
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
      "Drew 100k+ visitors to the site for the 13th Annual MIT Bitcoin Expo, a 500-attendee conference",
      "Lazy-loaded the React Three Fiber star field behind SSR-safe hydration boundaries to keep the 3D scene out of the initial bundle",
      "Added JSON-LD structured data, per-speaker landing pages, and sitemap generation",
      "Co-developed with Shivam Kumar",
    ],
    image: "/images/projects/mit-bitcoin-expo/mit-bitcoin-expo.webp",
    github: "https://github.com/Achyut21/MIT_BITCOIN_EXPO_2026",
    liveUrl: "https://mitbitcoinexpo.org",
    featured: false,
  },
  {
    id: "distributed-kanban",
    title: "Distributed Kanban Board",
    description:
      "A real-time collaborative Kanban with C++ primary-backup replication and vector-clock conflict resolution.",
    longDescription:
      "Final project for CS6650 Building Scalable Distributed Systems at Northeastern. A C++ backend holds board state with primary-backup replication over a custom TCP binary protocol. The hot standby promotes on a 5-second heartbeat, and a rejoining master receives a full state transfer. Express and Socket.io sit in front as the gateway to a React client.",
    technologies: [
      "C++11",
      "TCP",
      "Vector Clocks",
      "Primary-Backup Replication",
      "Express",
      "Socket.io",
      "React",
      "Distributed Systems",
    ],
    achievements: [
      "Hot standby promotes on a 5-second heartbeat, and a full state transfer restores the rejoining master",
      "Vector clocks with last-write-wins resolve concurrent edits across clients",
      "p90 held under 200ms and p99 under 500ms at 50 concurrent tasks",
    ],
    image: "/images/projects/distributed-kanban/distributed-kanban.webp",
    github: "https://github.com/Achyut21/CS6650_Final_Project",
    featured: false,
  },
  {
    id: "optimum-hacknet",
    title: "Optimum Hacknet @ MIT",
    description:
      "P2P protocol stress testing and visualization. Benchmarked OptimumP2P against GossipSub across a 12-node global cluster.",
    longDescription:
      "Built stress-testing scripts and a Streamlit dashboard to compare OptimumP2P against GossipSub during the Optimum Hacknet hackathon at MIT. Tested mesh degree, shard factor, and message rate across a 12-node cluster spanning the US, Europe, Asia, and Australia. OptimumP2P held a flat 161ms P95 while GossipSub degraded 140% at the top of the range.",
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
      "Won $500 for the scaling and stress-test analysis",
      "Proved OptimumP2P holds a flat 161ms P95 from 1 to 20 msg/sec while GossipSub degrades 140% at the top of that range",
      "Ran the comparison across a 12-node cluster spanning the US, Europe, Asia, and Australia",
      "Built a Streamlit dashboard for the protocol comparison data",
    ],
    image: "/images/projects/optimum-hacknet/optimum-hacknet.webp",
    github: "https://github.com/Achyut21/Optimum",
    featured: false,
  },
  {
    id: "mavenrealty",
    title: "mavenrealty.com",
    description: "The public rentals site for a Boston-area brokerage, built in Vue 3 and Vite.",
    longDescription:
      "Built at Maven Realty. Renters browse listings, filter them, and share a selection through a compact URL token. The link format is the one the internal CRM already emits and old links exist in the wild, so the codec is a pure module with tests pinning both behaviors: a failing test means the format drifted. Also covers a mobile-first responsive pass, map clustering, and a build-time canonical origin check that fails the deploy rather than shipping wrong URLs.",
    technologies: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ant-design-vue",
      "Vitest",
      "dayjs",
      "CloudFront",
    ],
    achievements: [
      "Wrote the line-up URL codec as a pure module with tests pinning the existing CRM link format so links already shared don't 404",
      "Ran a mobile-first responsive pass covering navigation, horizontal overflow, map scroll on touch, and two-finger pan",
      "Moved every hardcoded hex and rgba value into one theme-token block",
      "Enforced the canonical origin at build time so a misconfigured deploy fails loudly",
    ],
    image: "/images/projects/mavenrealty/mavenrealty.webp",
    liveUrl: "https://mavenrealty.com",
    featured: false,
  },
  {
    id: "go-build-something", // matches the deployed URL slug; leave as is
    title: "Acing Your First Hackathon: Advice I'd Give My Younger Self",
    description:
      "A 45-minute talk for 600 first-year students on the night of their first hackathon, built as a website instead of a slide file.",
    longDescription:
      "Every slide fills the viewport and has its own URL, so reloading mid-talk lands on the same slide and you can send someone a link to slide 17. All 29 slides live in one typed file, rendered by a discriminated union of ten layout types, so a one-line statement and a nine-row table are different compositions rather than one template with the text swapped out. Driven from a keyboard while presenting, but it also had to hold up when a student opened it on their phone the next morning. The overview grid, fullscreen toggle and shortcut dialog stay invisible until you reach for them.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Static Export"],
    achievements: [
      "Presented to 600 first-year students on the night of their first hackathon",
      "Slide state lives in the URL through useSyncExternalStore instead of React state, which makes deep links and mid-talk reloads free",
      "Navigation works from arrow keys, a presentation clicker, a tap on either half of the screen, or a swipe",
      "The animated background composites on the GPU and has a kill switch, since constant motion softens text over a Zoom screenshare",
    ],
    image: "/images/projects/go-build-something/go-build-something.webp",
    liveUrl: "https://go-build-something.vercel.app/?s=1",
    featured: false,
  },
  {
    id: "payguard-ai",
    title: "PayGuard AI",
    description:
      "AI shopping agents with blockchain-based spending authorization, built at the EasyA x Algorand Harvard Hackathon.",
    longDescription:
      "Built at the EasyA x Algorand Harvard Hackathon. GPT-4 agents shop on your behalf within an authorized spending limit, auto-approving purchases under it and holding larger ones for manual approval. Payments settle on Algorand with 2.8-second finality through a TEALScript contract, with Pera Wallet for signing and SSE for live notifications.",
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
      "Built the agent, the contract, and the payment flow in 36 hours",
      "Deployed a TEALScript contract on Algorand TestNet with per-agent wallet management",
      "Auto-approved purchases under the spending limit and pushed the rest to manual approval over SSE",
      "Used GPT-4 function calling for product search and budget-aware recommendations",
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
      "Built for CS5610 Web Development at Northeastern. Students post skills they can offer, browse others' posts by category or keyword, and send inquiries to connect. Full CRUD behind JWT auth, with debounced search, category filtering, and sorting. The database is seeded with 1,000+ records across users, posts, and inquiries.",
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
      "Built full CRUD with JWT authentication and role-based access",
      "Seeded the database with 1,000+ records across three MongoDB collections",
      "Added debounced search, category filtering, and multi-sort for browsing posts",
      "Deployed on Vercel, with Figma wireframes and design docs behind it",
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
      "A collaborative document editing platform split into microservices. The frontend is Next.js with TipTap for rich-text editing; the backend runs Spring Boot services for document management. Everything is containerized with Docker, deployed to Kubernetes through Helm charts, and built and shipped by GitHub Actions.",
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
      "Split the backend into separate document, user, AI, and billing services",
      "Built the rich-text editor on TipTap inside a Next.js frontend with Tailwind CSS v4",
      "Containerized every service with Docker and deployed them through Kubernetes Helm charts",
      "Automated build, test, and deploy with GitHub Actions",
    ],
    image: "/images/projects/collaborative-docs/collaborative-docs.webp",
    featured: false,
  },
  {
    id: "zenith",
    title: "Zenith",
    description:
      "A decentralized music application where artists mint and sell their music as NFTs.",
    longDescription:
      "A decentralized music platform where artists mint and sell their music as NFTs. Solidity contracts and IPFS storage back the catalog, and Polygon handles settlement. Role-based access and community hubs sit on top, and royalty payouts run automatically with no third party in the path.",
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
      "Settled 300+ transactions on Polygon",
      // VERIFY: 30% faster monetization
      "Added role-based access and community hubs",
      // VERIFY: 65% increase in session duration
      "Automated royalty payouts and took third-party dependencies out of the path",
      // VERIFY: 30% reduction in platform latency
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
      "A blockchain platform that turns Pokémon cards into NFTs you can trade and battle with.",
    longDescription:
      "A blockchain platform holding 300+ Pokémon cards as NFTs. Ownership and battle logic are verified on-chain, and Aptos wallet authentication handles trades with real-time feedback. The UI is pixel art, built with TailwindCSS and Three.js.",
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
      "Digitized 300+ Pokémon cards as NFTs",
      "Verified ownership and battle logic on-chain in Move",
      "Integrated Aptos wallet authentication behind 120+ NFT trades with real-time feedback",
      "Built a pixel art UI with TailwindCSS and Three.js",
      // VERIFY: 60% improvement in user engagement
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
      "Built at the MIT Bitcoin Expo 2025 Hackathon. Workers check in, and each hour worked pays out in Satoshis over the Lightning Network through LNbits. An admin dashboard tracks hours and payments, and the analytics views break down earnings and work patterns over time.",
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
      "Paid out per hour worked in Satoshis over the Lightning Network through LNbits",
      "Built an admin dashboard for work time and payment statistics",
      "Charted earnings, work patterns, and payment history",
      "Designed a Soulbound Token scheme for admin access, not yet built",
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
      "The Infinitus Fest website, which reached 20,000 students and took 6,000 registrations.",
    longDescription:
      "Led development of the site for Infinitus, a national-level university fest. It reached 20,000 students and took 6,000 registrations across 10 events, with Razorpay handling payments for the cultural and technical tracks. The load work targeted registration-day traffic spikes.",
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
      "Reached 20,000 students and took 6,000 registrations across 10 events",
      "Tuned page loading for registration-day traffic spikes",
      "Integrated Razorpay for cultural and technical event payments",
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
      "A system that pays users in cryptocurrency tokens for paying their bills on time. It hooks into payment processors to track when a bill is settled, reads receipts with Tesseract.js OCR, and distributes rewards from an Ethereum smart contract.",
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
      "Built the reward system as a Solidity contract wired to multiple payment processors",
      "Distributed tokens automatically once a payment cleared on time",
      "Built a dashboard for payment patterns and reward distributions",
      "Added wallet integration for claiming and holding reward tokens",
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
      "A coding platform where users post AI-validated questions and work through solutions together.",
    longDescription:
      "A platform where users post coding questions that an OpenAI pass validates before they go live, then work through them in group discussions. The Piston API returns compiler output so code runs in the browser.",
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
      "Validated posted coding questions through OpenAI before they went live",
      "Built group discussions for working through problems together",
      "Integrated the Piston API for compiler output on in-browser runs",
      // VERIFY: 40% enhancement in code execution
    ],
    image: "/images/projects/byteroot/byteroot.webp",
    github: "https://github.com/achyut21/byteroot",
    featured: false,
  },
  {
    id: "cryptovault-ipfs",
    title: "CryptoVault IPFS",
    description: "A decentralized backup and recovery system that stores encrypted files on IPFS.",
    longDescription:
      "A backup and recovery system that encrypts files with AES-256-CBC and signs their metadata with RSA before storing them on IPFS through Helia. Recovery runs in two steps and keeps the file private to whoever holds the key.",
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
      "Encrypted files with AES-256-CBC before they left the client",
      "Signed metadata with RSA so tampering shows up on retrieval",
      "Built a two-step recovery flow for getting a file back",
      "Stored everything on IPFS through Helia, with the keys staying with the user",
    ],
    image: "/images/projects/cryptovault-ipfs/cryptovault-ipfs.webp",
    github: "https://github.com/Achyut21/CVIPFS",
    featured: false,
  },
  {
    id: "neunotes",
    title: "NeuNotes",
    description:
      "An academic notes sharing platform for students and faculty, organized by course.",
    longDescription:
      "A platform for sharing academic notes with role-based access for students, faculty, and admins. Notes are organized by course, with upload and preview, search, ratings, comments, favorites, and analytics dashboards. The MySQL schema runs to 12 tables with stored procedures and triggers.",
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
      "Built role-based access for students, faculty, and admins",
      "Designed a MySQL schema of 12 tables with stored procedures and triggers",
      "Added ratings, comments, and favorites on top of notes management",
      "Built the browse, upload, and manage flows in React with Zustand for state",
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    github: "https://github.com/achyut21/neunotes",
    featured: false,
  },
  {
    id: "noteit",
    title: "NoteIT",
    description:
      "An Android app for sharing study notes, with badges that reward students for contributing.",
    longDescription:
      "An Android app where students upload and download study notes as PDFs. Firebase handles authentication and storage, and badges reward students who contribute. The app spans 9 activities and 4 fragments.",
    technologies: ["Android Studio", "Java", "Firebase", "Material Design", "XML"],
    achievements: [
      "Built 9 activities and 4 fragments across the app",
      "Handled authentication and data storage with Firebase",
      "Added badges to reward students for contributing notes",
      "Built PDF upload and retrieval on Firebase storage",
    ],
    image: "/images/projects/noteit/noteit.webp",
    github: "https://github.com/Achyut21/Note_IT-Note-sharing-APP-",
    featured: false,
  },
];
