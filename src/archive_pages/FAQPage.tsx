import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import faqContentRaw from "@/content/pages/faq.md?raw";
import heroBg from "@/assets/hero-bg.jpg";

export const FAQPage = () => {
  return (
    <PageTemplate markdownContent={faqContentRaw}>
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
                 Frequently Asked Questions
               </h1>
               <p className="text-xl text-text-muted max-w-2xl">
                 Common questions about our services, pricing, and process.
               </p>
             </Container>
           </Section>

           <Section spacing="lg">
             <Container size="md">
               <div className="space-y-8">
                 {[
                   { q: "Do you charge for estimates?", a: "We provide clear, transparent estimates. For standard projects, initial quotes are often free. Complex diagnostics may require a service fee, which is credited toward the repair." },
                   { q: "What areas do you serve?", a: "We primarily serve Orlando, Lake Nona, Hunters Creek, and surrounding areas." },
                   { q: "Are you licensed and insured?", a: "Yes, we operate professionally with appropriate licensing and insurance for our scope of work." },
                   { q: "Do you do emergency repairs?", a: "Yes, we offer priority scheduling for urgent issues like leaks or safety hazards." },
                   { q: "Do you work on weekends?", a: "Our standard hours are Monday-Friday, but we can accommodate weekend work for urgent needs or commercial clients requiring off-hours service." }
                 ].map((item, i) => (
                   <div key={i} className="border-b border-border-light pb-6 last:border-0">
                     <h3 className="font-bold text-lg text-brand-primary mb-2">{item.q}</h3>
                     <p className="text-text-secondary">{item.a}</p>
                   </div>
                 ))}
               </div>

               <div className="mt-12 text-center pt-8 border-t border-border-light">
                 <p className="text-text-secondary mb-4">Have a question not listed here?</p>
                 <Button asChild variant="outline">
                   <Link to="/contact">Contact Us</Link>
                 </Button>
               </div>
             </Container>
           </Section>
        </div>
      )}
    </PageTemplate>
  );
};
