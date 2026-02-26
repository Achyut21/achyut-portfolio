// components/ui/command-palette.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Search,
  ArrowRight,
  Home,
  User,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/social";
import { navItems } from "@/data/navigation";

// Get icon for navigation items
const getNavIcon = (href: string) => {
  switch (href) {
    case "/":
      return <Home className="mr-2 h-4 w-4" />;
    case "/about":
      return <User className="mr-2 h-4 w-4" />;
    case "/experience":
      return <Briefcase className="mr-2 h-4 w-4" />;
    case "/projects":
      return <Code className="mr-2 h-4 w-4" />;
    case "/blog":
      return <BookOpen className="mr-2 h-4 w-4" />;
    case "/contact":
      return <Mail className="mr-2 h-4 w-4" />;
    default:
      return <ArrowRight className="mr-2 h-4 w-4" />;
  }
};

// Get icon for social links
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <Github className="mr-2 h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="mr-2 h-4 w-4" />;
    case "mail":
      return <Mail className="mr-2 h-4 w-4" />;
    case "phone":
      return <Phone className="mr-2 h-4 w-4" />;
    default:
      return <ArrowRight className="mr-2 h-4 w-4" />;
  }
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!mounted) return null;

  // Filter items based on search query
  const filteredNavItems = navItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSocialLinks = socialLinks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="hidden h-9 w-9 rounded-md md:flex"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md gap-0 p-0">
          {/* Add DialogTitle for accessibility */}
          <DialogTitle className="sr-only">Command Menu</DialogTitle>

          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Type a command or search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-[60vh] overflow-y-auto">
            {filteredNavItems.length === 0 && filteredSocialLinks.length === 0 ? (
              <p className="py-6 text-center text-sm">No results found.</p>
            ) : (
              <>
                {filteredNavItems.length > 0 && (
                  <div className="p-2">
                    <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                      Navigation
                    </p>
                    <div className="mt-2 space-y-1">
                      {filteredNavItems.map((item) => (
                        <div
                          key={item.href}
                          className={cn(
                            "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => {
                            router.push(item.href);
                            setOpen(false);
                          }}
                        >
                          {getNavIcon(item.href)}
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filteredSocialLinks.length > 0 && (
                  <div className="p-2">
                    <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">Social</p>
                    <div className="mt-2 space-y-1">
                      {filteredSocialLinks.map((social) => (
                        <div
                          key={social.id}
                          className={cn(
                            "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => {
                            window.open(social.url, "_blank");
                            setOpen(false);
                          }}
                        >
                          {getSocialIcon(social.icon)}
                          <span>{social.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
