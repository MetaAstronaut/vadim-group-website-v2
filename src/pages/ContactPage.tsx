import * as React from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import contactContentRaw from "@/content/pages/contact.md?raw";
import heroBg from "@/assets/hero-bg.jpg";

export const ContactPage = () => {
  const [formState, setFormState] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate submission
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <PageTemplate markdownContent={contactContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO --- */}
          <Section background="dark" className="relative py-16 lg:py-20">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-overlay-dark" />
            
            <Container className="relative z-10">
              <div className="max-w-3xl">
                <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  If you have a repair need, a question, or want to share photos of a problem, we’re ready to help. We typically respond within 2–4 business hours.
                </p>
              </div>
            </Container>
          </Section>

          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Contact Info Column */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="space-y-6">
                    <h3 className="font-heading font-bold text-2xl text-brand-primary">Contact Info</h3>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">Email</h4>
                        <a href="mailto:info@thevadimgroup.com" className="text-brand-accent hover:underline">
                          info@thevadimgroup.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">Service Area</h4>
                        <p className="text-text-secondary">
                          Orlando, Lake Nona, Hunters Creek & surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">Response Time</h4>
                        <p className="text-text-secondary">
                          Typically 2–4 business hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card variant="outlined" className="bg-surface-subtle border-none">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-brand-primary mb-2">What to include:</h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Description of issue</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Photos (if possible)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Preferred timeframe</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form Column */}
                <div className="lg:col-span-8">
                  <Card className="p-6 md:p-8 shadow-lg border-border-light">
                    {formState === "success" ? (
                      <div className="text-center py-12 space-y-4">
                        <div className="h-16 w-16 bg-semantic-success/10 text-semantic-success rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-primary">Message Sent!</h3>
                        <p className="text-text-secondary">
                          Thank you for reaching out. We will review your request and get back to you shortly.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setFormState("idle")}
                          className="mt-4"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input label="Name" placeholder="Your Name" required />
                          <Input label="Email" type="email" placeholder="you@example.com" required />
                        </div>
                        
                        <Input label="Phone" type="tel" placeholder="(407) 555-0123" />
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-text-primary">How can we help?</label>
                          <textarea 
                            className="flex w-full rounded-sm border border-border-light bg-surface px-3 py-2 text-sm ring-offset-background placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary focus-visible:border-brand-primary min-h-[150px]"
                            placeholder="Describe your repair needs..."
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          variant="accent" 
                          className="w-full md:w-auto"
                          loading={formState === "submitting"}
                        >
                          Send Message
                        </Button>
                      </form>
                    )}
                  </Card>
                </div>

              </div>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
