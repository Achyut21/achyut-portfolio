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
    id: "maven-realty",
    title: "Software Engineer Co-op",
    company: "Maven Realty",
    location: "Cambridge, Massachusetts, USA",
    startDate: "June 2026",
    endDate: "December 2026",
    description:
      "Working across three codebases at a Boston-area brokerage: the Aptava agent platform, its Express API, and the public rentals site at mavenrealty.com.",
    achievements: [
      "Owned the lease and DocuSign pipeline, the listing PDF export, and the showing scheduler in Aptava",
      "Built the public rentals site at mavenrealty.com in Vue 3 and Vite",
      "Debugged production incidents across Nginx, Elastic Beanstalk, and the AWS SDK, and upgraded the agent app 9 Angular major versions",
      "Split large branches into stacked pull requests to keep each diff reviewable",
    ],
    type: "work",
  },
  {
    id: "mit-bitcoin-expo",
    title: "Co-Chair, Hackathon & Marketing",
    company: "MIT Bitcoin Expo",
    location: "Cambridge, Massachusetts, USA",
    startDate: "January 2026",
    // CONFIRM: spec proposes "April 2026" here. Left as "Present" pending your answer — has the role ended, or does it run past the April 2026 conference?
    endDate: "Present",
    description:
      "Co-chaired the hackathon and marketing for the 13th Annual MIT Bitcoin Expo, the longest-running university-hosted Bitcoin event.",
    achievements: [
      "Moderated the Infrastructure Panel with Austin Federa and Muriel Médard",
      "Designed the challenge tracks and prize structure for a 36-hour hackathon, 47 teams and 150 participants against a $20K pool, on a community-first model that shares 70% among qualifying participants",
      "Judged alongside VCs, angel investors, and senior engineers",
      "Ran speaker coordination and sponsor outreach for the April 2026 conference",
      "Built the official event site at mitbitcoinexpo.org with Next.js, Three.js, and Vercel",
    ],
    type: "leadership",
  },
  {
    id: "ta-cs2000",
    title: "Teaching Assistant — CS2000",
    company: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    startDate: "September 2025",
    endDate: "April 2026",
    description:
      "Teaching assistant for CS2000, Logic and Computation, across two consecutive semesters.",
    achievements: [
      "Selected across Fall 2025 and Spring 2026 for a 500+ student introductory course",
      "Held 4 hours of weekly office hours and graded 500+ assignments and exams",
      "Wrote model-solution writeups on recursion, higher-order functions, and tree abstractions in Python and Pyret",
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
      "Built a web portal for faculty-student collaboration on UROP and Capstone projects.",
    achievements: [
      "Built a full-stack portal in React, Node, and MongoDB serving 3000+ UROP and Capstone students",
      "Added task tracking, document sharing, and access control so faculty and students worked in one place",
      // VERIFY: page load time reduced by 60%
      // VERIFY: 75% grading accuracy improvement
      // VERIFY: 50% evaluation efficiency boost
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
      "Ran technical operations for university events, from event sites through payment and registration flows.",
    achievements: [
      "Handled technical operations for 30+ university events",
      // VERIFY: 25% increase in event participation
      "Built and deployed event websites with payment gateways integrated",
      "Built dashboards and automated coordination flows for event teams",
      // VERIFY: 75% increase in user satisfaction
      // VERIFY: 60% cut in coordination time
      // VERIFY: 95% client satisfaction
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
      "Built anomaly detection algorithms that reached 82% accuracy on threat detection",
      "Applied deep learning models to network traffic to flag suspicious patterns in real time",
      "Implemented countermeasures against detected attacks",
      // VERIFY: 40% reduction in security breaches
      "Built a monitoring system for high-volume cloud traffic that kept false positives low",
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
      "Built a model predicting student acceptance into Master's programs with 78% accuracy",
      "Trained it on exam scores and suggested colleges by proximity to a student's IELTS, GRE, and TOEFL results",
      "Ran data acquisition and cleaning for the training set",
      // VERIFY: 95% dataset accuracy rate
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
      "Technical operations for university events and initiatives as part of the Student Council.",
    achievements: [
      "Built and maintained event websites for cultural festivals",
      "Ran audiovisual equipment and event software on the day, and handled failures live",
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
    description: "Led the Student Council technical team across two years of university events.",
    achievements: [
      "Led the technical team through two years of cultural and technical events",
      "Ran the team's planning sessions for new event sites and reviewed work in progress",
      // VERIFY: 40% increase in student engagement
      "Turned event requirements from non-technical organizers into something buildable",
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
      "Council member at SRM University - AP, on events and the technical side of student programs.",
    achievements: [
      "Organized and ran student events alongside peers and faculty",
      "Worked on the council's website and the technical side of student programs",
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
    description: "First-year affiliate member of the student council.",
    achievements: [
      "Supported event organization and logistics as a first-year council member",
      "Worked with the technical team on the council website and digital content",
    ],
    type: "leadership",
  },
];
