import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Anchor, 
  Truck, 
  Gauge, 
  Droplets, 
  Zap,
  Wrench,
  Quote,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Clock,
  MessageSquare
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

// City Rotator component for dynamic city display in hero
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
        height: '1.5em', // Increased to accommodate descenders
        verticalAlign: 'bottom',
        letterSpacing: '0.02em',
        lineHeight: '1.5',
        paddingBottom: '0.15em' // Extra space for descenders
      }}
    >
      {/* Hidden measurement span to calculate max width */}
      <span 
        ref={measureRef}
        className="opacity-0 pointer-events-none absolute whitespace-nowrap font-bold"
        aria-hidden="true"
        style={{ letterSpacing: '0.02em', lineHeight: '1.5' }}
      >
        {longestCity}
      </span>

      {/* Animated city name with absolute positioning */}
      <span 
        className={`
          absolute whitespace-nowrap text-white font-bold
          transition-transform duration-700 ease-out
        `}
        aria-live="polite"
        style={{ 
          letterSpacing: '0.02em',
          lineHeight: '1.5',
          left: '50%',
          top: 0,
          transform: isExiting ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(0)'
        }}
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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const MarineRVPage = () => {
  const data = React.useMemo(() => getMarineRVPageData(), []);
  
  // FAQ state for show more/less functionality
  const [showAllFAQ, setShowAllFAQ] = useState(false);

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
      <div 
        className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden"
        data-hero-section
      >
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
          <MotionDiv className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8">
            <h1 className="font-heading font-bold text-[36px] md:text-6xl lg:text-7xl text-white flex flex-col items-center gap-1 md:gap-3" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)', letterSpacing: '0.02em', lineHeight: '1.17' }}>
              <span className="block">Marine & RV Repair</span>
              <span className="block">Services in</span>
              <div className="flex justify-center items-center h-[1.5em] overflow-hidden">
                 <CityRotator />
              </div>
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-[1.6] text-[18px] md:text-[20px]" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
              {data.hero.subtitle}
            </p>

            {/* CTA Buttons - Same as home page */}
            {/* Mobile: flex-col with 12px gap, Desktop: flex-row with 16px gap */}
            <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-3 md:gap-4 pt-6 md:pt-8">
              {/* PRIMARY CTA: Gold button (WhatsApp) - 56px height */}
              <Button 
                asChild 
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-14 md:h-[56px] px-8 min-w-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out"
                style={{ 
                  fontSize: '18px', 
                  paddingTop: '16px', 
                  paddingBottom: '16px', 
                  paddingLeft: '32px', 
                  paddingRight: '32px',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <a 
                  href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for marine/RV repair.")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    <WhatsAppIcon />
                  </span>
                  Get Free Estimate on WhatsApp
                </a>
              </Button>

              {/* SECONDARY CTA: White outline (See Our Work) - 56px height */}
              <Button 
                asChild 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white/90 font-semibold h-14 md:h-[56px] px-8 min-w-[200px] transition-[background-color,border-color] duration-300 ease-out"
                style={{ 
                  fontSize: '18px', 
                  paddingTop: '16px', 
                  paddingBottom: '16px', 
                  paddingLeft: '32px', 
                  paddingRight: '32px',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <Link to="/our-work">See Our Work</Link>
              </Button>
            </div>
          </MotionDiv>
        </Container>
      </div>

      {/* --- SERVICES GRID --- */}
      <Section className="bg-surface py-24">
        <Container className="max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">{data.services.tag}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">{data.services.title}</h2>
            <p className="text-text-secondary">{data.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: Structural & Body Repairs */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Anchor className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Structural & Body Repairs (Light Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Clean, careful repair work for boat and RV exteriors, interiors, and structural surfaces — without full-scale rebuilding
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Gelcoat repair & surface restoration</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Fiberglass patching (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Deck, floor & ceiling panel repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Soft-spot correction (non-structural)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Interior wall, cabinet & bunk repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Light frame reinforcement</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Hatch, latch & hardware repairs</span></li>
                </ul>
              </div>
            </div>

            {/* Card 2: Electrical & Onboard Systems */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Zap className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Electrical & Onboard Systems (Non-Licensed Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Safe, precise troubleshooting and light electrical repair for interior systems and onboard components
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Lighting repairs & replacements</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Battery, fuse & wiring diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Switches, controls & interior systems</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Bathroom/kitchen system troubleshooting</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>RV slide-out alignment (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No high-voltage, shore-power, or major electrical servicing</span></li>
                </ul>
              </div>
            </div>

            {/* Card 3: Water Damage & Moisture Repair */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Droplets className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Water Damage & Moisture Repair
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Moisture intrusion is one of the most common issues in boats and RVs. We focus on fast, careful restoration to prevent long-term damage
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Leak tracing & moisture diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Interior drying (non-remediation)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Mold-safe material replacement</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Panel, ceiling & floor rebuild (light scope)</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Waterproofing corrections & sealing</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Seal & gasket repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No mold remediation or flood extraction</span></li>
                </ul>
              </div>
            </div>

            {/* Card 4: Engine & Mechanical Repairs */}
            <div className="group rounded-lg bg-white border-2 border-border-light shadow-md hover:shadow-xl hover:border-brand-accent/40 transition-[border-color,box-shadow] duration-300 p-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-6 shrink-0 group-hover:bg-brand-accent transition-colors duration-300">
                <Gauge className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl font-semibold text-brand-primary mb-3">
                Engine & Mechanical Repairs (Light Scope)
              </h3>

              {/* Brief Description */}
              <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                Smaller mechanical issues and engine-adjacent components — without performing major servicing or rebuilds
              </p>

              {/* Covers Section */}
              <div>
                <h4 className="font-bold text-brand-primary mb-3 text-sm">Covers:</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Starting issues diagnostics</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Minor engine repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Cooling system troubleshooting</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Belt & accessory repairs</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Non-invasive fuel system checks</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>Small mechanical adjustments</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-accent mt-0.5 shrink-0">•</span><span>No major engine rebuilds or full servicing</span></li>
                </ul>
              </div>
            </div>

            {/* Card 5: CTA Card - Full width on desktop */}
            <div className="md:col-span-2 bg-brand-primary text-white rounded-lg p-6 md:p-8 border-2 border-brand-primary shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                {/* Left side - Text content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-heading text-2xl font-semibold text-brand-accent mb-3">
                    Get a Quick Marine & RV Repair Estimate
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-base mb-5 leading-relaxed">
                    Fast, transparent pricing for marine and RV repairs — share photos and get timelines instantly
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Send photos on WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Get timelines and pricing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>Ask any questions</span>
                    </li>
                  </ul>
                </div>

                {/* Right side - CTA Buttons */}
                <div className="md:w-auto md:min-w-[280px] shrink-0">
                  <Button 
                    asChild
                    className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 px-6 text-sm w-full mb-3 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                  >
                    <a 
                      href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for marine/RV repair.")}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        <WhatsAppIcon />
                      </span>
                      Get Free Estimate on WhatsApp
                    </a>
                  </Button>
                  
                  {/* Secondary Link */}
                  <Link 
                    to="/contact"
                    className="text-white/80 hover:text-white text-sm inline-flex items-center gap-1 transition-colors duration-200 justify-center w-full"
                  >
                    Or email us your project details
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- EMERGENCY SERVICES SECTION --- */}
      <Section className="bg-brand-primary py-16 md:py-20">
        <Container className="max-w-[1200px]">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Zap 
                  className="h-7 w-7 text-brand-accent" 
                  fill="currentColor"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Label */}
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
              EMERGENCY SERVICES
            </span>

            {/* Title */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Priority Marine & RV Repairs When You Need Fast Help
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              When a boat or RV issue can't wait, we move your project to the front of the line. Fast attention helps prevent moisture damage, electrical failures, and trip-ending breakdowns.
            </p>
          </div>

          {/* Main Priority Card */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-6 md:p-8 mb-5 transition-all duration-300 hover:border-brand-accent hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(198,167,120,0.15)]">
            {/* Card Title */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-5">
              Priority attention for moisture, electrical, and structural issues
            </h3>

            {/* Covers Section */}
            <div className="mb-6">
              <h4 className="font-bold text-white mb-3 text-base md:text-lg">Covers:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Active leaks or moisture intrusion</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Soft spots in floors, decks, walls (light scope)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Minor electrical failures affecting operation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Starting or cooling issues (light repairs)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Weather-related or impact damage</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Pre-trip safety concerns</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>Water-damage areas that can quickly worsen</span>
                </li>
              </ul>
            </div>

            {/* CTA Button inside card */}
            <div>
              <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 md:h-14 px-6 md:px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out text-base w-full md:w-auto"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <a
                  href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I have an urgent marine/RV repair that needs priority scheduling.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <WhatsAppIcon />
                  Request Priority Help via WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Response Times & How It Works - 2 mini blocks in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Response Times */}
            <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
                <Clock className="h-5 w-5 text-brand-accent" />
                Response Times
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>WhatsApp assessment: 2–4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>Scheduling: 24–48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>Clear communication at every step</span>
                </li>
              </ul>
            </div>

            {/* How It Works */}
            <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
                <MessageSquare className="h-5 w-5 text-brand-accent" />
                How It Works
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>Send a photo + brief description</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>We assess urgency and timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent shrink-0">•</span>
                  <span>Your job is prioritized in our schedule</span>
                </li>
              </ul>
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
                  <div className="p-6 md:p-8 text-center space-y-5 md:space-y-6 bg-white rounded-xl shadow-sm border border-border-light mx-4">
                    <Quote className="h-12 w-12 text-brand-accent/20 mx-auto mb-4" />
                    <blockquote className="text-xl md:text-2xl font-heading leading-relaxed text-brand-primary italic">
                      "{review.quote}"
                    </blockquote>
                    {/* Divider - Visual separator */}
                    <div className="border-t border-border-light pt-5 md:pt-6"></div>
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
            Ready to Get Your Boat or RV Back in Shape?
          </h2>

          {/* Subtitle - Marine & RV specific */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            If your boat or RV needs attention, we can inspect the issue and recommend the right repair plan.
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
                href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for marine/RV repair.")}`}
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
