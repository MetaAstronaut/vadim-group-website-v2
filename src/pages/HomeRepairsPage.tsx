import * as React from "react";
import { useState } from "react";
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
  ClipboardCheck,
  ChevronDown
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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const HomeRepairsPage = () => {
  const data = React.useMemo(() => getHomeRepairsPageData(), []);
  
  // FAQ state for show more/less functionality
  const [showAllFAQ, setShowAllFAQ] = useState(false);

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

      {/* --- PROCESS SECTION --- */}
      {/* Design System v2.2: Horizontal Cards Layout */}
      <Section className="bg-brand-primary text-white py-20 px-10">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              {data.process.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              How Our Repair Process Works
            </h2>
          </div>

          {/* Horizontal Cards Grid */}
          <div className="relative max-w-7xl mx-auto">
            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {data.process.steps.map((step, i) => (
                <div 
                  key={i}
                  className="
                    group
                    bg-white/5
                    border border-[rgba(198,167,120,0.2)]
                    rounded-xl
                    p-6 md:p-8
                    md:h-[320px]
                    flex flex-col
                    transition-all duration-300 ease-out
                    hover:border-brand-accent
                    hover:-translate-y-1.5
                    hover:shadow-[0_8px_24px_rgba(198,167,120,0.25)]
                  "
                  style={{
                    animation: `fadeInLeft 600ms ease-out ${i * 100}ms both`
                  }}
                >
                  {/* Step Number Badge: 56px circle */}
                  <div className="
                    w-14 h-14
                    rounded-full 
                    bg-brand-accent 
                    text-brand-primary 
                    font-bold 
                    flex items-center justify-center 
                    text-2xl
                    mb-5
                    mx-auto md:mx-0
                    shrink-0
                    transition-transform duration-300 ease-out
                    group-hover:scale-105
                  ">
                    {i + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 flex flex-col text-center md:text-left">
                    {/* Title: Playfair Display, 20px, bold, gold - with min-height for alignment */}
                    <h3 className="font-heading text-xl font-bold text-brand-accent mb-3 leading-tight md:min-h-[56px]">
                      {step.title}
                    </h3>
                    
                    {/* Description: 14px, light gray, 3-4 lines max */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Keyframe animation for fade-in effect */}
        <style>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Disable animation on mobile for performance */
          @media (max-width: 767px) {
            @keyframes fadeInLeft {
              from, to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }
        `}</style>
      </Section>

      {/* --- FAQ --- */}
      {/* Design System v2.2: Section 6.10 - FAQ Accordion with Show More */}
      <Section className="bg-surface-subtle py-24 md:py-32">
        <Container max-width="container-md">
           {/* Section Header */}
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              {data.faq.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary">
              {data.faq.title}
            </h2>
          </div>

          {/* FAQ Accordion - DS v2.2 Section 6.10 - Enhanced UX with Show More */}
          <div className="max-w-3xl mx-auto">
            {/* FAQ Logic */}
            {(() => {
              const initialCount = 5;
              const displayedItems = showAllFAQ ? data.faq.items : data.faq.items.slice(0, initialCount);
              const hasMore = data.faq.items.length > initialCount;

              return (
                <>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {displayedItems.map((item, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`item-${i}`}
                        className="
                          group
                          bg-white 
                          border border-border-light 
                          rounded-md 
                          px-6 py-2
                          transition-all duration-300 ease-out
                          hover:border-brand-accent/40 hover:bg-brand-accent/[0.02]
                          data-[state=open]:border-brand-accent data-[state=open]:shadow-sm
                        "
                        style={{ 
                          animation: showAllFAQ && i >= initialCount ? `fadeIn 400ms ease-out ${(i - initialCount) * 80}ms both` : 'none' 
                        }}
                      >
                        {/* Question Button - Playfair Display, 18-20px - Text stays black when open */}
                        <AccordionTrigger 
                          className="
                            text-left 
                            text-lg md:text-xl 
                            font-heading 
                            font-semibold 
                            text-brand-primary/90
                            hover:text-brand-primary
                            py-4
                          "
                        >
                          {item.question}
                        </AccordionTrigger>
                        
                        {/* Answer Panel - Softer contrast, improved readability */}
                        <AccordionContent className="
                          text-text-secondary/80
                          text-[15px]
                          leading-[1.65]
                          pb-4
                        ">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  {/* Show More/Less Button */}
                  {hasMore && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => setShowAllFAQ(!showAllFAQ)}
                        className="
                          inline-flex items-center gap-2
                          text-brand-accent hover:text-brand-accent-hover
                          font-medium text-base
                          py-3 px-6
                          border border-brand-accent/30 hover:border-brand-accent
                          rounded-md
                          transition-all duration-300
                          hover:bg-brand-accent/5
                        "
                      >
                        {showAllFAQ ? 'Show Less Questions' : `Show ${data.faq.items.length - initialCount} More Questions`}
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform duration-300 ${showAllFAQ ? 'rotate-180' : ''}`}
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>
                  )}

                  {/* Fade-in animation for new questions */}
                  <style>{`
                    @keyframes fadeIn {
                      from {
                        opacity: 0;
                        transform: translateY(-10px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>
                </>
              );
            })()}
          </div>
        </Container>
      </Section>

      {/* --- FINAL CTA --- */}
      {/* Design System v2.2: Section 6.6 - Simplified CTA with single focus */}
      <div id="contact"></div>
      <Section className="bg-brand-primary text-white py-24 md:py-32 text-center relative overflow-hidden">
        <Container className="relative z-10">
          {/* Tag: FREE ESTIMATE */}
          <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-6">
            FREE ESTIMATE
          </span>
          
          {/* CTA Headline: H2, white on dark */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Restore Your Home?
          </h2>

          {/* Subtitle - added as per user request */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            If you have damage, wear, or unfinished repairs, we're here to help you bring your home back to its best condition.
          </p>

          {/* Trust statement before CTA - softer color to not compete with button */}
          <p className="text-base md:text-lg text-gray-400 font-medium mb-8">
            Free Estimate — No Pressure. No Hidden Fees.
          </p>

          {/* PRIMARY CTA: Gold WhatsApp button with icon - ENLARGED */}
          <div className="flex flex-col items-center gap-4">
            <Button 
              asChild 
              className="
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                text-xl
                h-[72px]
                px-12
                min-w-[320px]
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              <a 
                href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for home repair.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <span className="w-[28px] h-[28px] flex items-center justify-center">
                  <WhatsAppIcon />
                </span>
                Get Free Estimate on WhatsApp
              </a>
            </Button>
            
            {/* Secondary text link */}
            <Link 
              to="/contact"
              className="
                text-gray-300 
                hover:text-white 
                text-base
                inline-flex items-center gap-2
                transition-colors duration-200
                group
              "
            >
              Or email us your project details
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </Container>
      </Section>

    </Layout>
  );
};
