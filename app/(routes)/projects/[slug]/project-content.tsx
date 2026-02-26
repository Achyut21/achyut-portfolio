"use client";

import { ArrowLeft, Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type Project } from "@/data/projects";
import { StarHeader } from "@/components/shared/star-header";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      {/* Header with star background */}
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <Button variant="ghost" className="mb-6 self-start" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <h1 className="mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
              {project.description}
            </p>
          </motion.div>
        </div>
      </StarHeader>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-12 md:px-6 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          {/* Left column */}
          <div>
            {/* Project image */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative mb-8 aspect-video overflow-hidden rounded-xl border"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </motion.div>
            )}

            {/* Overview */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </motion.div>
            )}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Key Achievements</h2>
              <div className="space-y-3">
                {project.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border bg-card p-4"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="sticky top-24">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {(project.github || project.liveUrl) && (
                    <>
                      <Separator />
                      <div>
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Links
                        </h3>
                        <div className="flex flex-col gap-2">
                          {project.github && (
                            <Button
                              variant="outline"
                              className="w-full justify-start"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub Repository
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              variant="outline"
                              className="w-full justify-start"
                              asChild
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
