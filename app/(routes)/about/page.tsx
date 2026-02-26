// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { StarHeader } from "@/components/shared/star-header";

export default function AboutPage() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I&apos;m Achyut Katiyar, a Full Stack Developer with a passion for creating
                  innovative web applications and exploring blockchain technologies. I&apos;m
                  currently pursuing a Master&apos;s in Computer Science at Northeastern University,
                  where I continue to expand my knowledge and skills.
                </p>
                <p>
                  With expertise in Next.js, React, and various blockchain technologies, I enjoy
                  building scalable and user-friendly applications that solve real-world problems.
                  My background in computer science has given me a strong foundation in algorithms,
                  data structures, and system design, which I apply to create efficient and
                  maintainable code.
                </p>
                <p>
                  I&apos;m particularly interested in the intersection of web development and
                  blockchain technology, where I&apos;ve developed several projects that leverage
                  the power of decentralized systems to create secure and transparent applications.
                </p>
              </div>

              <h2 className="mt-8 mb-4 text-2xl font-bold">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardHeader className="p-4">
                      <CardTitle>
                        <div>
                          <h3 className="text-lg font-bold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {edu.startDate} - {edu.endDate}
                        </span>
                        <span className="text-muted-foreground">{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <Badge variant="outline" className="mt-2">
                          CGPA: {edu.gpa}
                        </Badge>
                      )}
                      {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Skills</h2>

              {Object.keys(skills).map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills[category as SkillCategory].map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}

              <h2 className="mt-8 mb-4 text-2xl font-bold">Achievements</h2>
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>
                        Led University&apos;s Technical Team as Convener, increasing student
                        engagement by 40% through committee formation and industry-aligned website
                        redesigns.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>
                        Served as a Board Member of the APP Design and Development Club, mentoring
                        newcomers and improving skills by 60%.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>Won $1500 Nillion Track Prize at Hacker House Goa 2024.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>Awarded $600 at Move it with Aptos event.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>Received $500 Marbelism Track Prize at HACKSRM 2.0 2024.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-primary">•</span>
                      <span>Won $100 at APPATHON 2022.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
