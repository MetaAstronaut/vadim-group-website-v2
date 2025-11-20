import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, Clock, CheckSquare, ArrowRight } from "lucide-react";

import commercialContentRaw from "@/content/pages/commercial.md?raw";
import heroBg from "@/assets/blog/choose-contractor.jpg";

export const CommercialPage = () => {
  return (
    <PageTemplate markdownContent={commercialContentRaw}>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-sm font-medium mb-2">
                  <Building2 className="h-4 w-4" /> Business Services
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Commercial Repair Services
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Supporting small businesses with quick, clean, and reliable repairs. Minimizing disruption while restoring function and appearance.
                </p>
                <Button asChild variant="accent" size="lg" className="text-lg">
                  <Link to="/contact">Request Commercial Quote</Link>
                </Button>
              </div>
            </Container>
          </Section>

          {/* --- WHAT WE REPAIR --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Interior */}
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-primary">Interior Repairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {["Wall & ceiling restoration", "Drywall repair & painting", "Trim & door repairs", "Minor structural fixes"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Functional */}
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-primary">Functional Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {["Door & hardware repair", "Light electrical (fixtures, outlets)", "Plumbing leak repairs", "Climate control vent repairs"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Spaces */}
                <Card variant="elevated" className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-brand-primary">Business Spaces</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {["Office repair & refresh", "Retail space repairs", "Small restaurant/café repairs", "Medical office improvements"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

              </div>
            </Container>
          </Section>

          {/* --- WHY CHOOSE US --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading font-bold text-3xl text-center text-brand-primary mb-12">
                  Why Businesses Choose Vadim Group
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: Clock, title: "Flexible Scheduling", desc: "We work around your operating hours to minimize disruption." },
                    { icon: Briefcase, title: "Clean Workspace", desc: "Organized job sites with respect for your business environment." },
                    { icon: CheckSquare, title: "Clear Communication", desc: "Transparent timelines and scope discussion." },
                    { icon: Building2, title: "Quality Focus", desc: "Repairs done correctly the first time to avoid repeated issues." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-primary text-lg">{item.title}</h3>
                        <p className="text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section spacing="lg" background="dark" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Ready to Fix Issues in Your Space?
              </h2>
              <p className="text-xl text-text-muted mb-10">
                Send us your repair details and we'll provide a clear plan and estimate. Licensed, professional service.
              </p>
              <Button asChild variant="accent" size="lg" className="text-lg">
                <Link to="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
