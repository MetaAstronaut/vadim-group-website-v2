import * as React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import blogContentRaw from "@/content/pages/blog.md?raw";
import heroBg from "@/assets/blog/repair-vs-replace.jpg";

export const BlogPage = () => {
  return (
    <PageTemplate markdownContent={blogContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          <Section background="dark" className="relative py-16">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-overlay-dark" />
            <Container className="relative z-10">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                The Craftsmanship Blog
              </h1>
              <p className="text-xl text-text-muted max-w-2xl">
                Tips, insights, and stories about home repair, maintenance, and restoration.
              </p>
            </Container>
          </Section>

          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder Blog Posts */}
                {[
                  { title: "Seasonal Home Maintenance Checklist", date: "Coming Soon", desc: "Essential tasks to keep your home in top shape year-round." },
                  { title: "When to Repair vs. Replace", date: "Coming Soon", desc: "A guide to making cost-effective decisions for your home fixtures." },
                  { title: "Understanding Marine Gelcoat Repair", date: "Coming Soon", desc: "Why specialized materials matter for boat longevity." }
                ].map((post, i) => (
                  <Card key={i} variant="default" className="flex flex-col">
                    <div className="aspect-video bg-surface-subtle w-full rounded-t-md" />
                    <CardHeader>
                      <div className="text-xs font-medium text-brand-accent uppercase tracking-wider mb-2">{post.date}</div>
                      <CardTitle className="text-xl hover:text-brand-accent transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base">
                        {post.desc}
                      </CardDescription>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button variant="link" className="px-0 text-brand-primary">Read More</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        </div>
      )}
    </PageTemplate>
  );
};
