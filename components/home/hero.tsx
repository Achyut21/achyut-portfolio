// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";
import { StarHeader } from "@/components/shared/star-header";

const displayedSkills = [
  "Software Engineer",
  "Full Stack Developer",
  "Blockchain Builder",
  "Systems Thinker",
];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Parallax effect setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StarHeader>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div className="flex flex-col justify-center space-y-4" style={{ y: y1 }}>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m Achyut Katiyar
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-12"
                >
                  <div className="relative flex h-full items-center overflow-hidden">
                    {displayedSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`absolute transform transition-all duration-500 ${
                          index === currentSkillIndex
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{skill}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  Software engineer building full-stack applications and decentralized systems. MS
                  Computer Science at Northeastern University. Co-Chair of MIT Bitcoin Expo.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/resume.pdf"
                    download="Achyut_Katiyar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links - Added here from navbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-3 pt-2"
              >
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.id}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full bg-muted/50 hover:bg-primary/10"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {getIconComponent(social.icon)}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full">
                <Image
                  src="/images/profile.webp"
                  alt="Achyut Katiyar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
