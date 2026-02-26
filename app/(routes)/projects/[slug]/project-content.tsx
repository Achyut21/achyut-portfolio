"use client";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/data/projects";
import { StarHeader } from "@/components/shared/star-header";

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      <StarHeader>
        <div className="container px-4 pt-12 md:px-6 md:pt-24">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </StarHeader>

      <div className="container px-4 pb-12 md:px-6 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.image && (
                <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              )}

              <p className="mb-8 text-xl text-muted-foreground">{project.description}</p>

              <div className="prose max-w-none">
                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                <p className="mb-6">{project.longDescription || project.description}</p>

                <h2 className="mb-4 text-2xl font-bold">Achievements</h2>
                <ul className="mb-6 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24 rounded-lg bg-muted p-6"
            >
              <h2 className="mb-4 text-xl font-bold">Project Details</h2>
              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Links</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
