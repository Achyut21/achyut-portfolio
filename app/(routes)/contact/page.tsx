"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/shared/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";

export default function ContactPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
                <CardDescription>
                  You can also reach out to me directly through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col space-y-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md border p-4 transition-colors hover:bg-muted"
                  >
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      {getIconComponent(social.icon)}
                    </div>
                    <div>
                      <h3 className="font-medium">{social.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {social.url.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                      </p>
                    </div>
                  </motion.a>
                ))}

                <div className="mt-auto pt-6">
                  <h3 className="mb-2 font-medium">Current Location</h3>
                  <p className="text-sm text-muted-foreground">Boston, Massachusetts, USA</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
