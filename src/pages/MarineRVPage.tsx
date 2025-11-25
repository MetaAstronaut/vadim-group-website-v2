import * as React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Anchor, 
  Truck, 
  Gauge, 
  Droplets, 
  AlertTriangle, 
  Zap,
  Wrench,
  Phone,
  Quote,
  Siren,
  Calendar,
  ShieldCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import heroBg from "@/assets/blog/seasonal-maintenance.jpg";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from 'react-helmet-async';
import { getMarineRVPageData } from "@/utils/contentParsers";

// Animation Fallback
const MotionDiv = ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>;

export const MarineRVPage = () => {
  const data = React.useMemo(() => getMarineRVPageData(), []);

  const serviceIcons = [Anchor, Zap, Droplets, Gauge]; // Structural, Electrical, Water, Engine

  return (
    <Layout>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:title" content={data.seo.ogTitle} />
        <meta property="og:description" content={data.seo.ogDescription} />
        <meta property="og:image" content={data.seo.ogImage} />
        <link rel="canonical" href="https://thevadimgroup.com/marine-rv" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-brand-primary/90" aria-hidden="true" />
        
        <Container className="relative z-10 text-center">
          <MotionDiv className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-sm font-medium mb-2">
               <Anchor className="h-4 w-4" /> Marine & RV Specialists
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight">
              {data.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-brand-accent/90">
              {data.hero.subtitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {data.hero.description}
            </p>
            <div className="pt-8">
              <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold text-lg h-14 px-8">
                <Link to="/contact">Request Consultation</Link>
              </Button>
            </div>
          </MotionDiv>
        </Container>
      </div>

      {/* --- SERVICES GRID --- */}
      <Section className="bg-bg-subtle py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.services.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.services.title}</h2>
            <p className="text-text-secondary">{data.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.services.categories.map((category, i) => {
                const Icon = serviceIcons[i] || Truck;
                return (
                    <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <CardHeader className="pb-2 flex flex-row items-center gap-4">
                            <div className="h-14 w-14 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors shrink-0">
                                <Icon className="h-7 w-7" />
                            </div>
                            <CardTitle className="text-xl font-bold text-brand-primary">{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-text-secondary mb-4">
                                {category.description}
                            </p>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                {category.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-brand-accent">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                );
            })}
          </div>
        </Container>
      </Section>

      {/* --- EMERGENCY SECTION --- */}
      <Section className="bg-brand-primary text-white py-24">
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Siren className="h-8 w-8 text-brand-accent animate-pulse" />
                        <span className="text-brand-accent font-bold tracking-wider text-sm uppercase">{data.emergency.tag}</span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">{data.emergency.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{data.emergency.description}</p>
                    <p className="text-base text-gray-300 mb-8 border-l-4 border-brand-accent pl-4">
                        {data.emergency.priorityDescription}
                    </p>
                    
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 mb-8">
                        <h4 className="font-bold text-white mb-4">We can help with:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {data.emergency.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold text-lg h-14 px-8 w-full sm:w-auto">
                        <a href={data.cta.whatsappLink} target="_blank" rel="noopener noreferrer">
                            Request Urgent Help
                        </a>
                    </Button>
                    <p className="mt-4 text-sm text-gray-400 italic">{data.emergency.footer}</p>
                </div>
                <div className="hidden lg:block">
                    <div className="bg-white/5 rounded-xl p-12 border border-white/10 text-center">
                        <AlertTriangle className="h-16 w-16 text-brand-accent mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Don't Wait on Water Damage</h3>
                        <p className="text-gray-300">
                            Moisture issues in RVs and boats spread fast. Immediate action saves thousands in repair costs.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
      </Section>

      {/* --- WHY IT MATTERS --- */}
      <Section className="bg-bg-surface py-24">
        <Container max-width="container-md">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.whyMatters.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.whyMatters.title}</h2>
            <p className="text-text-secondary mb-8">{data.whyMatters.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {data.whyMatters.challenges.map((challenge, i) => (
               <div key={i} className="flex items-start gap-4 p-4 bg-bg-subtle rounded-lg border-l-4 border-brand-primary">
                 <Gauge className="h-6 w-6 text-brand-primary shrink-0 mt-1" />
                 <span className="text-text-primary font-medium">{challenge}</span>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* --- MAINTENANCE GUIDE --- */}
      <Section className="bg-bg-subtle py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.maintenance.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.maintenance.title}</h2>
            <p className="text-text-secondary">{data.maintenance.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Monthly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.monthly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Quarterly</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.quarterly.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Seasonal</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.seasonal.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full bg-brand-primary text-white border-none hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-white flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Annual</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-white/80">
                   {data.maintenance.tasks.annual.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
          </div>
        </Container>
      </Section>

      {/* --- WHY CHOOSE US --- */}
      <Section className="bg-brand-primary text-white py-24">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1">
               <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.whyChooseUs.tag}</span>
               <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{data.whyChooseUs.title}</h2>
               <div className="grid gap-4">
                 {data.whyChooseUs.bullets.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                     <CheckCircle2 className="h-6 w-6 text-brand-accent" />
                     <span className="text-lg font-medium">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="flex-1 w-full">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                   <h3 className="text-2xl font-heading font-bold text-brand-accent mb-6">{data.projects.title}</h3>
                   <div className="space-y-6">
                     {data.projects.items.map((project, i) => (
                        <div key={i} className="border-b border-white/10 last:border-0 pb-6 last:pb-0">
                            <h4 className="font-bold text-white mb-1">{project.title}</h4>
                            <p className="text-sm text-gray-400">{project.description}</p>
                        </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </Container>
      </Section>

      {/* --- TESTIMONIALS --- */}
      <Section className="bg-bg-surface py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.reviews.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">{data.reviews.title}</h2>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {data.reviews.items.map((review, i) => (
                <CarouselItem key={i}>
                  <div className="p-8 text-center space-y-6 bg-white rounded-xl shadow-sm border border-border-light mx-4">
                    <Quote className="h-12 w-12 text-brand-accent/20 mx-auto mb-4" />
                    <blockquote className="text-xl md:text-2xl font-heading leading-relaxed text-brand-primary italic">
                      "{review.quote}"
                    </blockquote>
                    <div className="font-bold text-brand-accent text-lg">— {review.author}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Container>
      </Section>

      {/* --- PROCESS --- */}
      <Section className="bg-bg-subtle py-24">
        <Container>
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.process.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.process.title}</h2>
            <p className="text-text-secondary">{data.process.description}</p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
             {data.process.steps.map((step, i) => (
               <div key={i} className="flex items-center gap-6 p-6 border border-border-light rounded-lg bg-white hover:border-brand-accent transition-colors group">
                 <div className="h-12 w-12 rounded-full bg-brand-primary text-white font-bold text-xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors">
                    {i + 1}
                 </div>
                 <h3 className="font-bold text-brand-primary text-lg">{step}</h3>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* --- FAQ --- */}
      <Section className="bg-bg-surface py-24">
        <Container max-width="container-md">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.faq.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary">{data.faq.title}</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm p-6">
              {data.faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b-border-light last:border-0">
                  <AccordionTrigger className="text-left text-base font-bold text-brand-primary hover:text-brand-accent">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-text-secondary text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* --- FINAL CTA --- */}
      <div id="contact"></div>
      <Section className="bg-brand-primary text-white py-24 text-center">
        <Container size="md">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">{data.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-10">
            {data.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold text-lg h-14 px-8">
               <a href={data.cta.whatsappLink} target="_blank" rel="noopener noreferrer">
                 <Phone className="mr-2 h-5 w-5" />
                 {data.cta.whatsappText}
               </a>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8">
               <Link to="/contact">Use Contact Form</Link>
            </Button>
          </div>
        </Container>
      </Section>

    </Layout>
  );
};
