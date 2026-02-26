// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  // ── Current Roles ──────────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "Co-Chair, Hackathon & Marketing",
    company: "MIT Bitcoin Expo",
    location: "Cambridge, Massachusetts, USA",
    startDate: "January 2026",
    endDate: "Present",
    description:
      "Co-chairing the hackathon and marketing efforts for the 13th Annual MIT Bitcoin Expo, the longest-running university-hosted Bitcoin event.",
    achievements: [
      "Co-chair of the 36-hour hackathon with a community-first prize model (70% shared among qualifying participants)",
      "Designed and built the official event website (mitbitcoinexpo.org) with Next.js, Three.js, and Vercel",
      "Coordinated speaker lineup, sponsor outreach, and marketing campaigns for the April 2026 conference",
      "Managing cross-functional collaboration across engineering, design, and operations teams",
    ],
    type: "leadership",
  },
  {
    id: "ta-cs2000",
    title: "Teaching Assistant — CS2000",
    company: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    startDate: "September 2025",
    endDate: "Present",
    description:
      "Serving as a Teaching Assistant for CS2000, supporting students across two consecutive semesters.",
    achievements: [
      "Supporting students through office hours, grading, and one-on-one mentoring across Fall 2025 and Spring 2026",
      "Assisting the instructor with course logistics, assignment feedback, and classroom support",
      "Providing guidance to students on coursework and academic development",
    ],
    type: "work",
  },

  // ── Previous Work Experience ───────────────────────────────────────
  {
    id: "full-stack-dev",
    title: "Full Stack Web Developer",
    company: "SRM University - AP",
    location: "Vijayawada, India",
    startDate: "January 2024",
    endDate: "June 2024",
    description:
      "Designed and implemented a web portal for faculty-student collaboration in UROP and Capstone projects.",
    achievements: [
      "Developed a full-stack web portal using React.js, Node.js, and MongoDB for 3000+ UROP/Capstone students",
      "Enabled task tracking, document sharing, and access control to streamline collaboration",
      "Optimized and enhanced UI/UX, reducing page load time by 60% and improving responsiveness across devices",
      "Achieved 75% grading accuracy improvement and 50% evaluation efficiency boost through workflow automation",
    ],
    type: "work",
  },
  {
    id: "tech-intern",
    title: "Technical Intern",
    company: "SRM University - AP",
    location: "Vijayawada, India",
    startDate: "October 2023",
    endDate: "June 2024",
    description:
      "Directed technical operations for university events, encompassing website development and promotional materials.",
    achievements: [
      "Orchestrated technical operations for 30+ university events, designing and deploying websites with integrated payment gateways",
      "Increased event participation by 25% through effective technical solutions",
      "Engineered dashboards and automated flows, increasing user satisfaction by 75% and cutting coordination time by 60%",
      "Ensured smooth execution through cross-functional collaboration, achieving 95% client satisfaction",
    ],
    type: "work",
  },

  // ── Research ───────────────────────────────────────────────────────
  {
    id: "ddos-detection",
    title: "DDoS Attack Detection using Deep Learning",
    company: "SRM University - AP",
    location: "Vijayawada, India",
    startDate: "March 2023",
    endDate: "May 2023",
    description:
      "Research under Dr. Sambit Kumar Mishra on detecting DDoS attacks in cloud environments using deep learning techniques.",
    achievements: [
      "Developed advanced anomaly detection algorithms, achieving an impressive 82% accuracy in threat detection",
      "Swiftly implemented countermeasures to thwart potential attacks, resulting in a 40% reduction in security breaches",
      "Applied deep learning models to identify patterns in network traffic for real-time detection of suspicious activities",
      "Created a scalable monitoring system to handle large volumes of cloud traffic with minimal false positives",
    ],
    type: "research",
  },
  {
    id: "education-prediction",
    title: "Higher Education Prediction Algorithm",
    company: "SRM University - AP",
    location: "Vijayawada, India",
    startDate: "June 2022",
    endDate: "October 2022",
    description:
      "Research under Prof. T. Ragunathan on predicting student acceptance into Master's programs based on academic performance metrics.",
    achievements: [
      "Developed an AI ML model predicting student acceptance into Masters PG College with 78% accuracy",
      "Trained the model on diverse exam scores to suggest colleges based on proximity to students' IELTS, GRE, and TOEFL scores",
      "Led data acquisition and cleansing, ensuring dataset integrity with a 95% accuracy rate",
      "Optimized the algorithm for efficiency and reliability in making personalized education recommendations",
    ],
    type: "research",
  },

  // ── Leadership ─────────────────────────────────────────────────────
  {
    id: "technical-executive",
    title: "Technical Executive",
    company: "Student Council SRM University - AP",
    location: "Vijayawada, India",
    startDate: "August 2023",
    endDate: "May 2024",
    description:
      "Oversaw technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Oversaw technical operations, utilizing advanced methodologies to achieve project milestones",
      "Engineered and enhanced event websites for cultural festivals, ensuring top-tier performance with creative designs",
      "Managed audiovisual equipment, software applications, and ensured seamless online and offline interactions",
      "Resolved technical issues promptly, minimizing disruptions and maintaining high standards of execution",
    ],
    type: "leadership",
  },
  {
    id: "technical-convener",
    title: "Technical Team Convener",
    company: "Student Council SRM University - AP",
    location: "Vijayawada, India",
    startDate: "May 2022",
    endDate: "May 2024",
    description:
      "Led the university's technical team, organizing and executing technical aspects of student events.",
    achievements: [
      "Led multidisciplinary technical team, achieving seamless collaboration and innovative solutions",
      "Organized brainstorming sessions with team members to generate website ideas and review progress",
      "Increased student engagement by 40% through committee formation and industry-aligned website redesigns",
      "Bridged the gap between technical requirements and student initiatives",
    ],
    type: "leadership",
  },
  {
    id: "student-council-member",
    title: "Member",
    company: "Student Council SRM University - AP",
    location: "Andhra Pradesh, India",
    startDate: "May 2021",
    endDate: "May 2022",
    description:
      "Served as an active member of the university's student council, contributing to student initiatives.",
    achievements: [
      "Played a pivotal role in organizing and executing various student events and initiatives",
      "Collaborated effectively with peers and faculty ensuring the smooth execution of events",
      "Enhanced the overall student experience through meticulous planning and coordination",
      "Contributed to website development and technical aspects of student programs",
    ],
    type: "leadership",
  },
  {
    id: "student-council-affiliate",
    title: "Affiliate",
    company: "Student Council SRM University - AP",
    location: "Vijayawada, India",
    startDate: "November 2020",
    endDate: "May 2021",
    description:
      "Started as an affiliate member in the student council, supporting various initiatives.",
    achievements: [
      "Assisted in the organization and execution of student events",
      "Supported the technical team with website and digital content",
      "Contributed to planning and logistics for university programs",
      "Participated in student engagement activities and feedback collection",
    ],
    type: "leadership",
  },
];
