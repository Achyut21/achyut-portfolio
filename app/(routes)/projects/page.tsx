"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects;

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my work across various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge
              variant={activeFilter === null ? "default" : "outline"}
              className="cursor-pointer px-3 py-2 text-sm"
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                className="cursor-pointer px-3 py-2 text-sm"
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found with the selected technology. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
