import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Hammer, Droplets, ShieldAlert, Zap, Home as HomeIcon, Phone } from "lucide-react";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import homeRepairsContentRaw from "@/content/pages/home-repairs.md?raw";
import heroBg from "@/assets/blog/common-repairs.jpg";

export const HomeRepairsPage = () => {
  const services = [
    {
      icon: Hammer,
      title: "General Repairs",
      description: "Wall and ceiling repair, surface patching, painting, and trim work to restore your home's look and feel."
    },
    {
      icon: ShieldAlert,
      title: "Structural & Safety",
      description: "Addressing light structural issues, wood rot, framing repairs, and reinforcement of weakened areas."
    },
    {
      icon: Droplets,
      title: "Water Damage",
      description: "Drywall replacement, moisture restoration, and identifying leak sources to prevent future damage."
    },
    {
      icon: Zap,
      title: "Light Electrical",
      description: "Fixture replacement, outlet repair, and minor troubleshooting integrated with your repair project."
    },
    {
      icon: HomeIcon,
      title: "Exterior Repairs",
      description: "Fence, deck, and siding repairs to protect your property from weather and wear."
    }
  ];

  return (
    <PageTemplate markdownContent={homeRepairsContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO SECTION --- */}
          <Section background="dark" className="relative py-20 lg:py-24">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-overlay-dark" />
            
            <Container className="relative z-10">
              <div className="max-w-3xl space-y-6">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Home Repairs & Restoration
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Vadim Group provides high-skill residential repairs and restoration for homeowners who want the job done correctly the first time.
                </p>
                <Button asChild variant="accent" size="lg" className="text-lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </Container>
          </Section>

          {/* --- SERVICES GRID --- */}
          <Section spacing="lg">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading font-bold text-3xl text-brand-primary mb-4">
                  Comprehensive Repair Services
                </h2>
                <p className="text-text-secondary text-lg">
                  We focus on long-lasting solutions, not temporary fixes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, i) => (
                  <Card key={i} variant="elevated" className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-brand-primary/5 flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- PROCESS SECTION --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary">
                    Our Repair Process
                  </h2>
                  <p className="text-text-secondary text-lg">
                    We follow a disciplined process to ensure every repair meets our high standards of European craftsmanship.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { title: "Request & Assessment", desc: "You describe the issue or send photos." },
                      { title: "On-Site Inspection", desc: "We assess the root cause and scope." },
                      { title: "Clear Estimate", desc: "You receive a transparent, detailed estimate." },
                      { title: "Repair & Restoration", desc: "Work is done with precision and care." },
                      { title: "Cleanup & Review", desc: "We leave the space clean and verify results." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-primary">{step.title}</h4>
                          <p className="text-text-secondary text-sm mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border border-border-light">
                  <h3 className="font-heading font-bold text-2xl text-brand-primary mb-6">
                    Ready to Restore Your Home?
                  </h3>
                  <p className="text-text-secondary mb-8">
                    If you have damage, wear, or unfinished repairs, we’re here to help you bring your home back to its best condition.
                  </p>
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <Link to="/contact">
                      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>
        </div>
      )}
    </PageTemplate>
  );
};
