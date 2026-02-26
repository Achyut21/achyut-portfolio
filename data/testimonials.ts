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
