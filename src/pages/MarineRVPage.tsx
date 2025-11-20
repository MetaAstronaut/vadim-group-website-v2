import * as React from "react";
import { Link } from "react-router-dom";
import { Anchor, ArrowRight, Truck, Gauge, Droplets, AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import marineRvContentRaw from "@/content/pages/marine-rv.md?raw";
import heroBg from "@/assets/blog/seasonal-maintenance.jpg";

export const MarineRVPage = () => {
  return (
    <PageTemplate markdownContent={marineRvContentRaw}>
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
                  <Anchor className="h-4 w-4" /> Marine & RV Specialists
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Marine & RV Repair Services
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Specialized handling for specialized vehicles. Careful, detail-oriented repair and restoration for boat and RV owners.
                </p>
                <Button asChild variant="accent" size="lg" className="text-lg">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </Container>
          </Section>

          {/* --- SERVICES SPLIT --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                
                {/* Marine Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full bg-brand-primary/5 flex items-center justify-center">
                      <Anchor className="h-7 w-7 text-brand-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-3xl text-brand-primary">Marine Repairs</h2>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    We handle light to moderate marine repairs focused on structure, surfaces, and comfort. We use materials suitable for moisture-heavy environments.
                  </p>
                  
                  <div className="grid gap-4">
                    {[
                      "Gelcoat repair and surface touch-ups",
                      "Hardware replacement and adjustments",
                      "Light electrical troubleshooting",
                      "Deck surface restoration",
                      "Interior and cabin repairs"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-md bg-surface-subtle border border-border-light">
                        <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-text-primary font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RV Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full bg-brand-primary/5 flex items-center justify-center">
                      <Truck className="h-7 w-7 text-brand-primary" />
                    </div>
                    <h2 className="font-heading font-bold text-3xl text-brand-primary">RV Repairs</h2>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Your RV is both a vehicle and a living space. We repair interior and light structural elements to keep it comfortable and safe.
                  </p>

                  <div className="grid gap-4">
                    {[
                      "Wall, ceiling, and floor repairs",
                      "Water damage treatment inside RV",
                      "Light slide-out alignment work",
                      "Cabinetry and fixture repair",
                      "Light electrical troubleshooting"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-md bg-surface-subtle border border-border-light">
                        <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-text-primary font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </Container>
          </Section>

          {/* --- WHY PRECISION MATTERS --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                  Why Precision Matters
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Marine and RV structures face unique challenges that standard home repairs don't address.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Gauge,
                    title: "Vibration & Movement",
                    desc: "Structures must handle constant motion without failing."
                  },
                  {
                    icon: Droplets,
                    title: "Moisture & Weather",
                    desc: "Materials must resist water intrusion and corrosion."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Limited Access",
                    desc: "Repairs often require working in tight, complex spaces."
                  }
                ].map((item, i) => (
                  <Card key={i} variant="default" className="text-center pt-6">
                    <CardHeader>
                      <div className="mx-auto h-12 w-12 rounded-full bg-brand-primary/5 flex items-center justify-center mb-2">
                        <item.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section spacing="lg" background="dark" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Ready to Schedule Service?
              </h2>
              <p className="text-xl text-text-muted mb-10">
                If your boat or RV needs attention, we can inspect the issue and recommend the right repair plan.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="accent" size="lg" className="text-lg w-full sm:w-auto">
                  <Link to="/contact">Request Consultation</Link>
                </Button>
              </div>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
