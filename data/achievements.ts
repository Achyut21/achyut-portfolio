export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "hacker-house",
    title: "Winner of Hacker House, Goa ($1500 Prize)",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "aptos",
    title: "Winner of Move it with Aptos Hackathon ($600 Prize)",
    icon: "medal",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "hacksrm",
    title: "Winner of HackSRM 5.0 ($500 Prize)",
    icon: "award",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    id: "appthon",
    title: "Winner of Appthon 1.0",
    icon: "trophy",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "add-convener",
    title: "Convener of ADD (App Design & Development Club)",
    icon: "book-open",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "ddos-research",
    title: "DDoS Attack Detection Researcher",
    icon: "cpu",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    id: "tech-convener",
    title: "Technical Convener of University Student Council",
    icon: "code",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "valorant",
    title: "3x Valorant Tournament Champion",
    icon: "gamepad",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "infinitus",
    title: "Technical Executive of Infinitus (National Level Fest)",
    icon: "zap",
    colorClass: "text-cyan-600 dark:text-cyan-400",
  },
];

export const achievementTags = ["Technical Leadership", "Hackathon Winner", "Research", "Gaming"];
