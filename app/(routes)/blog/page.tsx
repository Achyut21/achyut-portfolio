"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { StarHeader } from "@/components/shared/star-header";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up email subscription service
    void email;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-primary/10 p-2">
              <CalendarDays className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Blog Coming Soon
            </h1>

            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              I&apos;m working on some interesting articles about web development, blockchain
              technology, and machine learning. Stay tuned for insightful content!
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <div className="container mx-auto px-4 pb-12 md:px-6 md:pb-24">
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="flex h-48 animate-pulse items-center justify-center rounded-md bg-muted/70">
                      <Clock className="h-8 w-8 text-muted-foreground/40" />
                    </div>

                    <div className="h-6 w-2/3 animate-pulse rounded-md bg-muted/70"></div>

                    <div className="space-y-2">
                      <div className="h-4 animate-pulse rounded-md bg-muted/70"></div>
                      <div className="h-4 animate-pulse rounded-md bg-muted/70"></div>
                      <div className="h-4 w-4/5 animate-pulse rounded-md bg-muted/70"></div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 animate-pulse rounded-full bg-muted/70"></div>
                      <div className="h-4 w-24 animate-pulse rounded-md bg-muted/70"></div>
                    </div>
                    <div className="h-4 w-16 animate-pulse rounded-md bg-muted/70"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-16 max-w-md text-center"
        >
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <BellRing className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Get Notified</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Subscribe to get notified when new blog posts are available.
              </p>

              {submitted ? (
                <div className="rounded-lg bg-primary/10 p-4 text-sm">
                  Thanks for subscribing! I&apos;ll notify you when new content is available.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit">Notify Me</Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <Separator className="my-16" />

        <div className="text-center text-muted-foreground">
          <p>Check back soon for articles on:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              Web Development
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              Blockchain
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              Next.js
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">React</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
