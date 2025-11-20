import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, HeartHandshake, Award, Users } from "lucide-react";

import aboutContentRaw from "@/content/pages/about.md?raw";
import heroBg from "@/assets/vadim-portrait.jpg";

export const AboutPage = () => {
  return (
    <PageTemplate markdownContent={aboutContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO --- */}
          <Section background="dark" className="relative py-20 lg:py-24">
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${heroBg})` }}
             />
             <div className="absolute inset-0 bg-gradient-overlay-dark" />
            
            <Container className="relative z-10">
              <div className="max-w-3xl space-y-6">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  About The Vadim Group
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Built on European craftsmanship and a strong sense of responsibility. Bringing hands-on expertise and quality to every project.
                </p>
              </div>
            </Container>
          </Section>

          {/* --- STORY & PHILOSOPHY --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-3xl text-brand-primary">Our Story</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Vadim Group was founded on a simple premise: doing things right. Vadim brings hands-on expertise and a commitment to quality to every project, whether it’s a home, boat, or RV.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Clients choose us because we arrive when promised, work efficiently, and deliver clean, precise results.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">Our Philosophy</h3>
                    <blockquote className="pl-4 border-l-4 border-brand-accent italic text-text-secondary">
                      "We believe repairs should be done correctly the first time. No shortcuts. No temporary patches that create new problems later."
                    </blockquote>
                  </div>
                </div>
                
                <div className="relative">
                   <div className="aspect-[4/3] bg-surface-subtle rounded-lg overflow-hidden shadow-xl border border-border-light">
                      <img src={heroBg} alt="Vadim at work" className="w-full h-full object-cover" />
                   </div>
                   {/* Decorative element */}
                   <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full -z-10" />
                   <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full -z-10" />
                </div>
              </div>
            </Container>
          </Section>

          {/* --- WHAT CLIENTS APPRECIATE --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <h2 className="font-heading font-bold text-3xl text-center text-brand-primary mb-12">
                What Clients Appreciate Most
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: "Reliability", desc: "Punctuality and consistent communication." },
                  { icon: Award, title: "Workmanship", desc: "Detailed, high-skill execution." },
                  { icon: HeartHandshake, title: "Trust", desc: "Thoughtful problem-solving and long-term relationships." }
                ].map((item, i) => (
                  <div key={i} className="bg-surface p-8 rounded-lg shadow-sm text-center border border-border-light hover:-translate-y-1 transition-transform duration-300">
                    <div className="mx-auto h-16 w-16 bg-brand-primary/5 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section spacing="lg" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-text-secondary mb-10">
                If you value precision, responsibility, and clear communication, Vadim Group is the right partner for your repair and restoration needs.
              </p>
              <Button asChild variant="accent" size="lg" className="text-lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
