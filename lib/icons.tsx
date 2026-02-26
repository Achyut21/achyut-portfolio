import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function getIconComponent(iconName: string, className = "h-5 w-5") {
  switch (iconName) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "mail":
      return <Mail className={className} />;
    case "phone":
      return <Phone className={className} />;
    default:
      return null;
  }
}
