import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Hammer, 
  Anchor, 
  Siren, 
  Phone, 
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Assets
import heroBg from "@/assets/home-hero.png";
import vadimPortrait from "@/assets/vadim-portrait.jpg";

import { Layout } from "@/components/layout/Layout";
import { Helmet } from 'react-helmet-async';
import { getHomePageData } from "@/utils/contentParsers";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

// Animation Fallback
const MotionDiv = ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>;

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const CityRotator = () => {
  const cities = [
    "Orlando",
    "Lake Nona",
    "Hunters Creek",
    "Winter Park",
    "Lake Mary",
    "Kissimmee"
  ];
  
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the width of the longest city name
  useEffect(() => {
    if (measureRef.current) {
      const width = measureRef.current.offsetWidth;
      setMaxWidth(width);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cities.length);
        // Small delay to ensure the DOM has updated with new city off-screen
        requestAnimationFrame(() => {
             setIsExiting(false);
        });
      }, 600); // Match transition duration
    }, 3500); // 3.5 seconds pause between changes

    return () => clearInterval(interval);
  }, []);

  // Find the longest city for measurement
  const longestCity = cities.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <span 
      className="relative inline-block overflow-hidden"
      style={{ 
        width: maxWidth ? `${maxWidth}px` : 'auto',
        minWidth: '200px',
        height: '1.2em',
        verticalAlign: 'bottom'
      }}
    >
      {/* Hidden measurement span to calculate max width */}
      <span 
        ref={measureRef}
        className="opacity-0 pointer-events-none absolute whitespace-nowrap font-bold"
        aria-hidden="true"
      >
        {longestCity}
      </span>

      {/* Animated city name with absolute positioning - NO glow effect */}
      <span 
        className={`
          absolute left-0 right-0 top-0 text-center
          whitespace-nowrap text-white font-bold
          transition-transform duration-[600ms] ease-out
          ${isExiting 
            ? '-translate-y-full' 
            : 'translate-y-0'
          }
        `}
        aria-live="polite"
      >
        {cities[index]}
      </span>
      
      {/* Hidden content for SEO crawlers */}
      <span className="sr-only" aria-hidden="true">
        Orlando, Lake Nona, Hunters Creek, Winter Park, Lake Mary, and Kissimmee
      </span>
    </span>
  );
};

export const HomePage = () => {
  const data = React.useMemo(() => getHomePageData(), []);

  const serviceIcons = [Hammer, Anchor, Siren];
  const mockDates = ["2 weeks ago", "1 month ago", "2 months ago"];

  return (
    <Layout>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:title" content={data.seo.ogTitle} />
        <meta property="og:description" content={data.seo.ogDescription} />
        <meta property="og:image" content={data.seo.ogImage} />
        <link rel="canonical" href="https://thevadimgroup.com/" />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        {/* Enhanced gradient overlay for better contrast */}
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85))'
          }}
          aria-hidden="true" 
        />

        <Container className="relative z-10 h-full flex flex-col justify-center py-16 md:py-24">
          <MotionDiv className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h1 className="font-heading font-bold text-[36px] md:text-6xl lg:text-7xl text-white tracking-tight flex flex-col items-center gap-1 md:gap-3" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)' }}>
              <span className="block">Home Repair, Marine & RV</span>
              <span className="block">Services in</span>
              <div className="flex justify-center items-center h-[1.2em] overflow-visible">
                 <CityRotator />
              </div>
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-[1.6] text-[18px] md:text-[20px]" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              Fast, reliable repair for homes, boats, and RVs in the Orlando area
            </p>

            {/* CTA Buttons - Enlarged as per requirements */}
            {/* Mobile: flex-col with 12px gap, Desktop: flex-row with 16px gap */}
            <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3 md:gap-4 pt-6 md:pt-8">
              {/* PRIMARY CTA: Gold button (WhatsApp) - 56px height */}
              <Button 
                asChild 
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 md:h-[56px] px-8 min-w-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                style={{ fontSize: '18px', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }}
              >
                <a 
                  href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for home/marine/RV repair.")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    <WhatsAppIcon />
                  </span>
                  Free WhatsApp Quote
                </a>
              </Button>

              {/* SECONDARY CTA: White outline (Contact) - 56px height */}
              <Button 
                asChild 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-14 md:h-[56px] px-8 min-w-[200px] transition-all duration-300"
                style={{ fontSize: '18px', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '32px', paddingRight: '32px' }}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </MotionDiv>
        </Container>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <WhyChooseUs data={data.whyChooseUs} />

      {/* --- SERVICES SECTION --- */}
      {/* Design System v2.2: Section 6.2 - Service Cards with equal heights */}
      <Section className="bg-bg-subtle py-12 md:py-20">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Eyebrow label: 16px, semi-bold, uppercase, gold, tracked */}
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              {data.services.tag}
            </span>
            {/* H2: Playfair Display, text-primary */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              {data.services.title}
            </h2>
            <p className="text-xl text-text-secondary">
              {data.services.description}
            </p>
          </div>

          {/* Service Cards Grid - Equal heights with new structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-fr">
            {data.services.items.map((item, i) => {
                const Icon = serviceIcons[i] || Hammer;
                return (
                    <div 
                      key={i} 
                      className="
                        group
                        bg-white rounded-lg p-6 md:p-8
                        border border-border-light 
                        shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                        hover:border-brand-accent hover:shadow-md hover:-translate-y-1
                        transition-all duration-300 ease-out
                        flex flex-col
                      "
                    >
                        {/* Icon Container: with hover effect and rounded corners */}
                        <div className="h-16 w-16 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:scale-105 group-hover:bg-brand-accent transition-all duration-300">
                            <Icon className="h-12 w-12" strokeWidth={1.5} />
                        </div>
                        
                        {/* Card Title: H3, Playfair Display */}
                        <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                          {item.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-[15px] text-text-secondary mb-5 leading-[1.5]">
                          {item.description}
                        </p>
                        
                        {/* Features with Categories - grow to push footer down */}
                        <div className="space-y-4 mb-6 flex-grow">
                            {item.features.map((feature, idx) => (
                                <div key={idx}>
                                    {feature.category && (
                                        <h4 className="font-bold text-base text-brand-primary mb-2">
                                            {feature.category}
                                        </h4>
                                    )}
                                    <ul className="space-y-1.5 text-[14px] text-text-secondary leading-[1.8]">
                                        {feature.items.map((featureItem, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2">
                                                <span className="text-brand-accent mt-0.5">•</span>
                                                <span>{featureItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA Button: Outlined button style with enhanced hover */}
                        <div className="mt-auto">
                          <Button 
                            asChild 
                            variant="outline"
                            className="
                              w-full md:w-auto
                              border-[1.5px] border-brand-accent 
                              text-brand-accent 
                              hover:bg-brand-accent hover:text-brand-primary hover:-translate-y-0.5
                              font-medium
                              py-3 px-6
                              transition-all duration-300
                            "
                          >
                              <Link to={item.linkHref} className="inline-flex items-center justify-center gap-2">
                                {item.linkText}
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                          </Button>
                          
                          {/* Footer Note for Emergency Services */}
                          {item.footerNote && (
                            <p className="text-[13px] text-text-muted text-center mt-3">
                              {item.footerNote}
                            </p>
                          )}
                        </div>
                    </div>
                );
            })}
          </div>
        </Container>
      </Section>

      {/* --- PROCESS SECTION --- */}
      {/* Design System v2.2: Section 6.8 - Timeline/Process Visualization */}
      <Section className="bg-brand-primary text-white py-24 md:py-32">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-medium tracking-[0.08em] text-sm uppercase block mb-4">
              {data.process.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              {data.process.title}
            </h2>
          </div>

          {/* Timeline: Vertical layout with connector line - DS v2.2 Section 6.8 */}
          <div className="relative max-w-3xl mx-auto">
            {/* Connector Line: 2px gold line at 40% opacity */}
            <div 
              className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 bg-brand-accent/40" 
              aria-hidden="true"
            />

            {/* Process Steps */}
            <div className="space-y-12 md:space-y-16 relative z-10">
              {data.process.steps.map((step, i) => (
                <div 
                  key={i}
                  className="flex gap-6 md:gap-8 items-start"
                >
                  {/* Step Number Badge: 48px mobile, 56px desktop - DS v2.2 Section 6.8 */}
                  <div className="
                    w-12 h-12 md:w-14 md:h-14 
                    rounded-full 
                    bg-brand-accent 
                    text-brand-primary 
                    font-bold 
                    flex items-center justify-center 
                    text-xl md:text-2xl 
                    shrink-0 
                    relative z-10
                    shadow-[0_0_0_4px] shadow-brand-primary
                  ">
                    {i + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pt-1 md:pt-2">
                    {/* Title: Playfair Display, gold on dark - DS v2.2 Section 6.8 */}
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-brand-accent mb-3">
                      {step.title}
                    </h3>
                    {/* Description: Body text, light gray */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* --- TESTIMONIALS --- */}
      {/* Design System v2.2: Section 6.9 - Testimonial Cards */}
      <Section className="bg-bg-surface py-24 md:py-32">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-medium tracking-[0.08em] text-sm uppercase block mb-4">
              {data.reviews.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary">
              {data.reviews.title}
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Verified reviews from Google Business
            </p>
          </div>

          {/* Review Cards Grid - DS v2.2 Section 6.9: Equal heights enforced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.reviews.items.map((review, i) => (
              <div 
                key={i}
                className="
                  bg-white rounded-md p-6 md:p-8 
                  border border-border-light 
                  shadow-sm 
                  hover:border-brand-accent hover:shadow-md hover:-translate-y-1
                  transition-all duration-300 
                  flex flex-col
                  min-h-[320px]
                "
              >
                {/* Header: 5-Star Rating + Google Logo */}
                <div className="flex justify-between items-start mb-4 shrink-0">
                  {/* Star Rating: 20px gold stars - DS v2.2 Section 6.9 */}
                  <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-brand-accent text-brand-accent" 
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  {/* Google Verification Badge */}
                  <GoogleLogo />
                </div>

                {/* Quote Text: Italic, line-clamp max 6 lines */}
                <blockquote className="
                  text-text-primary 
                  italic 
                  text-base 
                  leading-relaxed 
                  mb-6 
                  flex-grow
                  line-clamp-6
                ">
                  "{review.quote}"
                </blockquote>

                {/* Footer: Author + Timestamp */}
                <div className="mt-auto border-t border-border-light pt-4 flex flex-col gap-1 shrink-0">
                  <div className="font-semibold text-brand-primary">
                    {review.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {mockDates[i % mockDates.length]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --- ABOUT US --- */}
      {/* Design System v2.2: Standard section with image layout */}
      <Section className="bg-bg-subtle py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div>
               {/* Eyebrow Label */}
               <span className="text-brand-accent font-medium tracking-[0.08em] text-sm uppercase block mb-4">
                 {data.about.tag}
               </span>
               
               {/* H2 Title: Playfair Display, Oxford Blue */}
               <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                 {data.about.title}
               </h2>
               
               {/* Lead Quote */}
               <p className="text-lg text-text-secondary mb-6 font-semibold italic">
                 {data.about.quote}
               </p>
               
               {/* Body Description */}
               <p className="text-text-secondary mb-8 leading-relaxed">
                 {data.about.description}
               </p>
               
               {/* Promise List */}
               <div className="space-y-4">
                 <h3 className="font-heading text-xl font-semibold text-brand-primary mb-4">
                   {data.about.promiseTitle}
                 </h3>
                 {data.about.promiseItems.map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     {/* Gold bullet point */}
                     <div className="h-2 w-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                     <span className="text-text-secondary">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
            
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-brand-primary/5 relative group">
                 <img 
                   src={vadimPortrait} 
                   alt="Vadim - The Vadim Group" 
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
              
              {/* Quote Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 max-w-xs shadow-xl hidden lg:block rounded-sm">
                <p className="font-heading text-xl italic leading-relaxed">
                  "{data.about.closing}"
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- FAQ --- */}
      {/* Design System v2.2: Section 6.10 - FAQ Accordion */}
      <Section className="bg-bg-surface py-24 md:py-32">
        <Container max-width="container-md">
           {/* Section Header */}
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-medium tracking-[0.08em] text-sm uppercase block mb-4">
              {data.faq.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary">
              {data.faq.title}
            </h2>
          </div>

          {/* FAQ Accordion - DS v2.2 Section 6.10 */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {data.faq.items.map((item, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="
                    bg-white 
                    border border-border-light 
                    rounded-md 
                    px-6 py-2
                    hover:border-brand-accent/50
                    transition-colors duration-200
                  "
                >
                  {/* Question Button - Playfair Display, 18-20px */}
                  <AccordionTrigger className="
                    text-left 
                    text-lg md:text-xl 
                    font-heading 
                    font-semibold 
                    text-brand-primary
                    hover:text-brand-primary
                    py-4
                    [&[data-state=open]]:text-brand-accent
                  ">
                    {item.question}
                  </AccordionTrigger>
                  
                  {/* Answer Panel - Body text, gray */}
                  <AccordionContent className="
                    text-text-secondary 
                    text-base 
                    leading-relaxed
                    pb-4
                  ">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Closing Text */}
            <p className="text-center mt-12 text-text-secondary leading-relaxed">
              {data.faq.closing}
            </p>
          </div>
        </Container>
      </Section>

      {/* --- FINAL CTA --- */}
      {/* Design System v2.2: Section 6.6 - CTA Block with hierarchy */}
      <div id="contact"></div>
      <Section className="bg-brand-primary text-white py-24 md:py-32 text-center relative overflow-hidden">
        <Container className="relative z-10">
          {/* CTA Headline: H2, white on dark */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            {data.cta.title}
          </h2>
          
          {/* Value Proposition: Body Lg */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {data.cta.description}
          </p>
          
          {/* Info Box: Glassmorphism card */}
          <div className="
            bg-white/5 
            p-8 
            rounded-md 
            max-w-2xl 
            mx-auto 
            border border-white/10 
            backdrop-blur-sm 
            mb-10
          ">
            <h3 className="text-brand-accent font-bold text-xl mb-2">
              {data.cta.footerText}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {data.cta.footerSubtext}
            </p>
          </div>

          {/* CTA Buttons: Primary (Gold) + Secondary (White outline) - DS v2.2 Section 6.6 */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* PRIMARY CTA: Gold button */}
            <Button 
              asChild 
              className="
                bg-brand-accent 
                hover:bg-brand-accent-hover 
                text-brand-primary 
                font-semibold 
                text-lg 
                h-14 
                px-8 
                min-w-[200px]
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
               <a 
                 href={data.cta.whatsappLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2"
               >
                 <Phone className="h-5 w-5" />
                 {data.cta.whatsappText.replace(/\[.*?\]/, '').trim()}
               </a>
            </Button>
            
            {/* SECONDARY CTA: White outline */}
            <Button 
              asChild 
              variant="outline" 
              className="
                border-2 border-white/40 
                text-white 
                hover:bg-white/10 
                hover:border-white/60
                text-lg 
                h-14 
                px-8
                min-w-[200px]
                transition-all duration-300
              "
            >
               <Link to="/contact">Use Contact Form</Link>
            </Button>
          </div>
        </Container>
      </Section>

    </Layout>
  );
};
