import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Hammer, Anchor, Siren, Phone } from "lucide-react";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Assets
import heroBg from "@/assets/home-repairs-hero.jpg";

// Import markdown content directly
import homeContentRaw from "@/content/pages/home.md?raw";

export const HomePage = () => {
  return (
    <PageTemplate markdownContent={homeContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO SECTION --- */}
          <Section background="dark" className="relative overflow-hidden py-20 lg:py-32">
             {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBg})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 z-0 bg-gradient-overlay-dark" aria-hidden="true" />
            
            <Container className="relative z-10">
              <div className="max-w-3xl space-y-8">
                <Badge variant="accent" className="mb-4">
                  Orlando's Trusted Expert
                </Badge>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Precision Home Repairs Done Right the First Time
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Fast, reliable, European-quality repair and restoration for homes, boats, and RVs in the Orlando area.
                </p>
                
                <div className="space-y-4 pt-2">
                  {[
                    "On-time arrival and reliable scheduling",
                    "High-skill craftsmanship and clean results",
                    "Transparent communication and fair pricing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button asChild variant="accent" size="lg" className="text-lg font-semibold">
                    <Link to="/contact">
                      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40">
                    <Link to="/specialized-services">View Services</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          {/* --- VALUE PROPOSITION --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary">
                  Why Homeowners Choose The Vadim Group
                </h2>
                <p className="text-text-secondary text-lg">
                  We combine European craftsmanship with calm, professional service. Every project is handled with precision, responsibility, and respect.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Precision Workmanship", desc: "Based on European standards for durability and aesthetics." },
                  { title: "Accurate Diagnostics", desc: "We find the root cause, not just patch the symptom." },
                  { title: "Fast Response", desc: "Priority scheduling for urgent repair situations." },
                  { title: "Clean Workflow", desc: "We respect your space and leave it cleaner than we found it." },
                  { title: "Transparent Pricing", desc: "Clear estimates with no hidden costs or surprises." },
                  { title: "Calm Professionalism", desc: "Expert service without the sales pressure." }
                ].map((item, i) => (
                  <Card key={i} variant="default" className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-text-secondary">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- SERVICES OVERVIEW --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Service 1 */}
                <Card variant="elevated" className="flex flex-col h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-brand-primary/5 flex items-center justify-center mb-4">
                      <Hammer className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle>Residential Repairs</CardTitle>
                    <CardDescription>Restoration & Maintenance</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm text-text-secondary mb-6">
                      <li>• Wall and ceiling repair</li>
                      <li>• Drywall replacement</li>
                      <li>• Interior/Exterior painting</li>
                      <li>• Trim & hardware repair</li>
                    </ul>
                    <p className="text-sm text-text-secondary">
                      Your home deserves repairs that last, not quick fixes that create new problems later.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" className="w-full">
                      <Link to="/home-repairs">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 2 */}
                <Card variant="elevated" className="flex flex-col h-full border-brand-accent/20">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                      <Anchor className="h-6 w-6 text-brand-accent" />
                    </div>
                    <CardTitle>Marine & RV</CardTitle>
                    <CardDescription>Specialized Structural Work</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                     <ul className="space-y-2 text-sm text-text-secondary mb-6">
                      <li>• Gelcoat & surface repair</li>
                      <li>• Deck & cabin restoration</li>
                      <li>• Water damage treatment</li>
                      <li>• Light electrical work</li>
                    </ul>
                    <p className="text-sm text-text-secondary">
                      Specialized materials and techniques to withstand moisture, vibration, and weather.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" className="w-full border-brand-accent text-brand-primary hover:bg-brand-accent/10">
                      <Link to="/marine-rv">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 3 */}
                <Card variant="elevated" className="flex flex-col h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-semantic-error/10 flex items-center justify-center mb-4">
                      <Siren className="h-6 w-6 text-semantic-error" />
                    </div>
                    <CardTitle>Emergency Services</CardTitle>
                    <CardDescription>Urgent Response</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                     <ul className="space-y-2 text-sm text-text-secondary mb-6">
                      <li>• Active leaks</li>
                      <li>• Storm damage</li>
                      <li>• Safety hazards</li>
                      <li>• Structural concerns</li>
                    </ul>
                    <p className="text-sm text-text-secondary">
                      When issues can't wait, we provide calm, professional help with priority scheduling.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="destructive" className="w-full">
                      <Link to="/contact">Get Urgent Help</Link>
                    </Button>
                  </CardFooter>
                </Card>

              </div>
            </Container>
          </Section>

          {/* --- PROCESS SECTION --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary">
                  How Our Repair Process Works
                </h2>
                <p className="text-text-secondary text-lg">
                  Simple, transparent, and designed to reduce your stress.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Request & Assessment", desc: "Send details or photos. We review the situation quickly." },
                  { step: "02", title: "On-Site Inspection", desc: "We identify the true root cause, not just the symptom." },
                  { step: "03", title: "Clear Estimate", desc: "You receive a transparent quote with no hidden fees." },
                  { step: "04", title: "Repair & Restoration", desc: "Work is done right the first time with quality materials." },
                  { step: "05", title: "Cleanup & Review", desc: "We leave your space clean and review the results together." },
                  { step: "06", title: "Follow-Up Support", desc: "We remain available for any questions or future needs." }
                ].map((item, i) => (
                  <div key={i} className="relative p-6 rounded-lg bg-surface border border-border-light hover:border-brand-accent/50 transition-colors group">
                    <span className="text-6xl font-heading font-bold text-brand-primary/5 absolute top-4 right-4 group-hover:text-brand-accent/10 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-brand-primary mb-3 relative z-10">{item.title}</h3>
                    <p className="text-text-secondary relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- FINAL CTA --- */}
          <Section spacing="lg" background="dark" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Ready to Fix What's Bothering You?
              </h2>
              <p className="text-xl text-text-muted mb-10">
                From damaged walls to persistent leaks, we are ready to restore your space. Request a quote or send photos of your problem today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="accent" size="lg" className="text-lg w-full sm:w-auto">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <a href="tel:4075550123"><Phone className="mr-2 h-5 w-5" /> Call Us Now</a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/40">
                Typically respond within 2–4 business hours.
              </p>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
