import * as React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Hammer, 
  Droplets, 
  ShieldAlert, 
  Home as HomeIcon, 
  PaintBucket,
  Wrench,
  Phone,
  Quote,
  Siren,
  Clock,
  Calendar,
  ShieldCheck,
  ClipboardCheck
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
import heroBg from "@/assets/blog/common-repairs.jpg";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from 'react-helmet-async';
import { getHomeRepairsPageData } from "@/utils/contentParsers";

// Animation Fallback
const MotionDiv = ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>;

export const HomeRepairsPage = () => {
  const data = React.useMemo(() => getHomeRepairsPageData(), []);

  const serviceIcons = [PaintBucket, Wrench, ShieldAlert, HomeIcon, Droplets];

  return (
    <Layout>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:title" content={data.seo.ogTitle} />
        <meta property="og:description" content={data.seo.ogDescription} />
        <meta property="og:image" content={data.seo.ogImage} />
        <link rel="canonical" href="https://thevadimgroup.com/home-repairs" />
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
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {data.hero.description}
            </p>
            <div className="pt-8">
              <Button asChild className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold text-lg h-14 px-8">
                <Link to="/contact">Request a Quote</Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.categories.map((category, i) => {
                const Icon = serviceIcons[i] || Hammer;
                return (
                    <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                        <CardHeader className="pb-2">
                            <div className="h-12 w-12 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                                <Icon className="h-6 w-6" />
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
                    {/* Could add an emergency visual here, or just keep the layout clean text-heavy for urgency */}
                    <div className="bg-white/5 rounded-xl p-12 border border-white/10 text-center">
                        <Clock className="h-16 w-16 text-brand-accent mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Fast Response Time</h3>
                        <p className="text-gray-300">
                            When safety is at risk, we prioritize your call. Send photos via WhatsApp for the fastest assessment.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
      </Section>

      {/* --- EDUCATION --- */}
      <Section className="bg-bg-surface py-24">
        <Container max-width="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div>
                <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.education.tag}</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.education.title}</h2>
                <p className="text-text-secondary mb-6">
                  {data.education.description}
                </p>
                <div className="bg-brand-primary/5 p-6 rounded-lg border border-brand-primary/10">
                   <h4 className="font-bold text-brand-primary mb-2">{data.education.costTitle}</h4>
                   <p className="text-sm text-text-secondary">{data.education.costDesc}</p>
                </div>
             </div>
             <div>
                <h4 className="font-bold text-brand-primary mb-4">{data.education.causesTitle}</h4>
                <ul className="space-y-3">
                  {data.education.causes.map((item, i) => (
                    <li key={i} className="text-sm text-text-secondary pl-4 border-l-2 border-brand-accent/30">
                        <span className="font-bold text-brand-primary mr-1">{i + 1}.</span>
                        {item}
                    </li>
                  ))}
                </ul>
             </div>
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
               <CardHeader><CardTitle className="text-brand-primary flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Annual</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary">
                   {data.maintenance.tasks.annual.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
             <Card className="h-full bg-brand-primary text-white border-none hover:shadow-lg transition-shadow">
               <CardHeader><CardTitle className="text-white flex items-center gap-2"><Calendar className="h-5 w-5 text-brand-accent"/> Every 2-3 Years</CardTitle></CardHeader>
               <CardContent>
                 <ul className="list-disc list-inside space-y-2 text-white/80">
                   {data.maintenance.tasks.periodic.map((task, i) => <li key={i}>{task}</li>)}
                 </ul>
               </CardContent>
             </Card>
          </div>
        </Container>
      </Section>

      {/* --- WHY CHOOSE US --- */}
      <Section className="bg-bg-surface py-24">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1">
               <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.whyChooseUs.tag}</span>
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.whyChooseUs.title}</h2>
               <div className="grid gap-4">
                 {data.whyChooseUs.bullets.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-bg-subtle">
                     <CheckCircle2 className="h-6 w-6 text-brand-accent" />
                     <span className="text-lg text-brand-primary font-medium">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="flex-1 w-full">
                <div className="bg-brand-primary text-white p-8 rounded-xl shadow-xl">
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
      <Section className="bg-bg-subtle py-24">
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
      <Section className="bg-bg-surface py-24">
        <Container>
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.process.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.process.title}</h2>
            <p className="text-text-secondary">{data.process.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {data.process.steps.map((step, i) => (
               <div key={i} className="relative p-6 border border-border-light rounded-lg bg-bg-subtle hover:border-brand-accent transition-colors hover:-translate-y-1 group">
                 <div className="text-4xl font-bold text-brand-primary/10 absolute top-4 right-4 group-hover:text-brand-accent/20 transition-colors">{i + 1}</div>
                 <h3 className="font-bold text-brand-primary text-lg mb-2">{step.title}</h3>
                 <p className="text-sm text-text-secondary">{step.description}</p>
               </div>
             ))}
          </div>
        </Container>
      </Section>

      {/* --- FAQ --- */}
      <Section className="bg-bg-subtle py-24">
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
