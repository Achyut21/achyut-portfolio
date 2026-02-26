"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Microscope, Briefcase, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experience";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter experiences based on active tab
  const filteredExperiences =
    activeTab === "all" ? experiences : experiences.filter((exp) => exp.type === activeTab);

  // Function to get icon based on experience type
  const getExperienceIcon = (type: string | undefined) => {
    switch (type) {
      case "research":
        return <Microscope className="h-5 w-5" />;
      case "work":
        return <Briefcase className="h-5 w-5" />;
      case "leadership":
        return <Users className="h-5 w-5" />;
      case "education":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

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
            Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My professional journey in development and research
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="work" onClick={() => setActiveTab("work")}>
                Work
              </TabsTrigger>
              <TabsTrigger value="leadership" onClick={() => setActiveTab("leadership")}>
                Leadership
              </TabsTrigger>
              <TabsTrigger value="research" onClick={() => setActiveTab("research")}>
                Research
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-border" />

            {/* Timeline Items */}
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 flex flex-col md:flex-row"
              >
                {/* Simple timeline dot */}
                <div className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />

                {/* Desktop Icon - shown only on desktop and positioned correctly */}
                <div
                  className={`absolute hidden -translate-y-6 md:block ${
                    index % 2 === 0
                      ? "right-[calc(50%+12px)]" // Right of timeline if card is on left
                      : "left-[calc(50%+12px)]" // Left of timeline if card is on right
                  } text-primary`}
                >
                  {getExperienceIcon(experience.type)}
                </div>

                {/* Mobile Icon - shown only on mobile */}
                <div
                  className={`absolute -translate-y-6 md:hidden ${
                    index % 2 === 0
                      ? "left-[calc(50%+12px)]" // Right of timeline
                      : "right-[calc(50%+12px)]" // Left of timeline
                  } text-primary`}
                >
                  {getExperienceIcon(experience.type)}
                </div>

                {/* Content Card */}
                <div className={`mx-5 md:w-1/2 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <Card className="overflow-hidden border border-border transition-colors hover:border-primary/50">
                    <CardHeader className="bg-muted/50 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle>
                            <h3 className="text-xl font-bold">{experience.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {experience.company}
                            </p>
                          </CardTitle>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="mb-4 text-sm">{experience.description}</p>
                      <Separator className="my-4" />
                      <h4 className="mb-2 text-sm font-medium">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
