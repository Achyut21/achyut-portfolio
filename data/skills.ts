// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "ML/Data"
  | "Blockchain/Web3"
  | "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "Dart", category: "Languages", logoKey: "dart" },
    { name: "Kotlin", category: "Languages", logoKey: "kotlin" },
    { name: "Solidity", category: "Languages", logoKey: "solidity" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    { name: "Rust", category: "Languages", logoKey: "rust" },
    { name: "Go", category: "Languages", logoKey: "go" },
    { name: "Ruby", category: "Languages", logoKey: "ruby" },
    { name: "Swift", category: "Languages", logoKey: "swift" },
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "Next.js", category: "Frameworks/Libraries", logoKey: "nextjs" },
    { name: "Flask", category: "Frameworks/Libraries", logoKey: "flask" },
    { name: "Express.js", category: "Frameworks/Libraries", logoKey: "express" },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", logoKey: "tailwindcss" },
    { name: "Android SDK", category: "Frameworks/Libraries", logoKey: "android" },
    { name: "Three.js", category: "Frameworks/Libraries", logoKey: "threejs" },
    { name: "Vue.js", category: "Frameworks/Libraries", logoKey: "vuejs" },
    { name: "Angular", category: "Frameworks/Libraries", logoKey: "angularjs" },
    { name: "Svelte", category: "Frameworks/Libraries", logoKey: "svelte" },
    { name: "Django", category: "Frameworks/Libraries", logoKey: "django" },
    { name: "Spring Boot", category: "Frameworks/Libraries", logoKey: "spring" },
    { name: "Flutter", category: "Frameworks/Libraries", logoKey: "flutter" },
    { name: "React Native", category: "Frameworks/Libraries", logoKey: "react" },
  ],
  "ML/Data": [
    { name: "TensorFlow", category: "ML/Data", logoKey: "tensorflow" },
    { name: "PyTorch", category: "ML/Data", logoKey: "pytorch" },
    { name: "Supervised Learning", category: "ML/Data", logoKey: "python" },
    { name: "Deep Learning", category: "ML/Data", logoKey: "tensorflow" },
    { name: "Neural Networks", category: "ML/Data", logoKey: "python" },
    { name: "pandas", category: "ML/Data", logoKey: "pandas" },
    { name: "scikit-learn", category: "ML/Data", logoKey: "python" },
    { name: "Data Visualization", category: "ML/Data", logoKey: "jupyter" },
  ],
  "Blockchain/Web3": [
    { name: "Web3.js", category: "Blockchain/Web3", logoKey: "javascript" },
    { name: "Ethers.js", category: "Blockchain/Web3", logoKey: "ethereum" },
    { name: "IPFS", category: "Blockchain/Web3", logoKey: "ipfs" },
    { name: "Polygon", category: "Blockchain/Web3", logoKey: "polygon" },
    { name: "Ethereum", category: "Blockchain/Web3", logoKey: "ethereum" },
    { name: "Aptos", category: "Blockchain/Web3", logoKey: "aptos" },
    { name: "Move", category: "Blockchain/Web3", logoKey: "aptos" },
    { name: "Smart Contracts", category: "Blockchain/Web3", logoKey: "solidity" },
  ],
  "Cloud/DevOps": [
    { name: "AWS", category: "Cloud/DevOps", logoKey: "amazonwebservices" },
    { name: "GCP", category: "Cloud/DevOps", logoKey: "googlecloud" },
    { name: "Docker", category: "Cloud/DevOps", logoKey: "docker" },
    { name: "Kubernetes", category: "Cloud/DevOps", logoKey: "kubernetes" },
    { name: "Jenkins", category: "Cloud/DevOps", logoKey: "jenkins" },
    { name: "Firebase", category: "Cloud/DevOps", logoKey: "firebase" },
    { name: "MongoDB", category: "Cloud/DevOps", logoKey: "mongodb" },
    { name: "PostgreSQL", category: "Cloud/DevOps", logoKey: "postgresql" },
  ],
  Concepts: [
    { name: "System Design", category: "Concepts", logoKey: "github" },
    { name: "Data Structures & Algorithms", category: "Concepts", logoKey: "github" },
    { name: "Distributed Systems", category: "Concepts", logoKey: "github" },
    { name: "API Design", category: "Concepts", logoKey: "swagger" },
    { name: "Microservices", category: "Concepts", logoKey: "docker" },
    { name: "Security", category: "Concepts", logoKey: "github" },
  ],
};
