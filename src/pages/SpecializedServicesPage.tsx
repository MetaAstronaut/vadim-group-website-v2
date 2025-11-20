import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Droplets, Ruler, Wrench } from "lucide-react";

import specializedServicesContentRaw from "@/content/pages/specialized-services.md?raw";
import heroBg from "@/assets/blog/foundation-problems.jpg";

export const SpecializedServicesPage = () => {
  return (
    <PageTemplate markdownContent={specializedServicesContentRaw}>
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
                  Specialized Repair Services
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Complex, skill-intensive projects requiring precision craftsmanship and deep technical knowledge beyond standard home repairs.
                </p>
                <Button asChild variant="accent" size="lg" className="text-lg">
                  <Link to="/contact">Request Specialized Quote</Link>
                </Button>
              </div>
            </Container>
          </Section>

          {/* --- SERVICES GRID --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Structural Repairs", desc: "Light to moderate structural corrections and reinforcement." },
                  { title: "Water Damage & Mold", desc: "Comprehensive diagnostics and moisture restoration." },
                  { title: "Insurance Claims", desc: "Documentation support and repair coordination." },
                  { title: "Emergency Detection", desc: "Rapid identification and repair of hidden leaks." },
                  { title: "Storm Damage", desc: "Post-storm structural and surface restoration." },
                  { title: "Crawl Space Repair", desc: "Foundation, moisture, and structural integrity work." },
                  { title: "Deck & Dock Repair", desc: "Marine-grade wood restoration and safety fixes." },
                  { title: "Custom Carpentry", desc: "Precision woodwork and bespoke built-ins." },
                  { title: "High-Skill Restoration", desc: "Historical or premium-material restoration projects." }
                ].map((service, i) => (
                  <Card key={i} variant="elevated" className="h-full hover:border-brand-accent/30 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading font-semibold text-brand-primary">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- WHY EXPERTISE MATTERS --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary">
                    Why These Services Require Expertise
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Specialized repairs aren't just about fixing what's broken—they're about understanding the complex systems behind the damage.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Ruler, text: "Accurate diagnostics to identify root causes" },
                      { icon: ShieldCheck, text: "Knowledge of building codes & engineering" },
                      { icon: Wrench, text: "Use of specialized materials & techniques" },
                      { icon: Droplets, text: "Ability to prevent recurring moisture issues" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-surface rounded-lg shadow-sm border border-border-light">
                        <item.icon className="h-6 w-6 text-brand-accent" />
                        <span className="font-medium text-text-primary">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] bg-brand-primary rounded-lg overflow-hidden">
                   <div 
                      className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
                      style={{ backgroundImage: `url(${heroBg})` }}
                   />
                   <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                     <h3 className="text-2xl font-bold text-white mb-2">European Precision</h3>
                     <p className="text-white/80">
                       Vadim Group brings European craftsmanship standards to every specialized project, ensuring longevity and safety.
                     </p>
                   </div>
                </div>
              </div>
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section spacing="lg" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl text-brand-primary mb-6">
                Ready to Discuss Your Complex Repair?
              </h2>
              <p className="text-xl text-text-secondary mb-10">
                If you have a repair that requires more than surface-level fixes, we can assess the situation and provide a clear plan.
              </p>
              <Button asChild variant="accent" size="lg" className="text-lg">
                <Link to="/contact">
                  Request Specialized Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
