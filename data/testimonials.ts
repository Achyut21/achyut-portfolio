export interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "hao-ng",
    name: "Hao Ng",
    position:
      "MIT Sloan Fellows | Strategy & Innovation | Fintech, Digital Assets, Capital Markets",
    relation: "Colleague",
    date: "April 28, 2026",
    quote:
      "I had the pleasure of working closely with Achyut as Co-Chairs of the MIT Bitcoin Hackathon, where we jointly led the end-to-end organisation of the event. Achyut took strong ownership across multiple workstreams, including operations, participant experience, and execution on the ground. What stood out most was his ability to remain calm and decisive under pressure. In several high-intensity moments, he stepped in to manage issues quickly and effectively, ensuring the event continued to run smoothly. He is reliable, proactive, and deeply committed to seeing things through. Achyut combines strong execution with leadership, and was a key driver behind the overall success of the hackathon.",
  },
  {
    id: "tom-pilla",
    name: "Tom Pilla",
    position: "Media Professional | Director of Operations at Milton Access TV | Bitcoin Pleb",
    relation: "Colleague",
    date: "April 15, 2026",
    quote:
      "I am very happy to recommend Achyut for his leadership and technical skills. While serving in a number of leadership roles for the 2026 MIT Bitcoin Expo, Ace juggled many responsibilities, and brought his various workstreams to successful outcomes. In my work with him on the Marketing subcommittee, Ace produced results in design at an extremely efficient rate with a very high level of quality standards. I relied on him more and more as it became obvious he was extremely dependable and creative. He is an excellent problem solver, a sound organizational thinker, and a talented designer with the technical skills to deliver results. Ace is a pleasure to work with, executes with a high level of professionalism, and holds himself to a very high standard.",
  },
  {
    id: "anil",
    name: "Anil Nigam",
    position: "Strategic professional with strong business acumen",
    relation: "Mentor",
    date: "July 1, 2024",
    quote:
      "Achyut has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure. As a student council member, Achyut played a pivotal role in organizing and executing various student events.",
  },
  {
    id: "revathi",
    name: "Revathi B",
    position: "Associate Director Student Affairs SRM AP",
    relation: "Manager",
    date: "May 23, 2024",
    quote:
      "I am pleased to recommend Achyut for his exceptional technical and leadership skills. As a Technical Executive, he oversaw technical operations using advanced methodologies to achieve project milestones and foster innovation.",
  },
];
