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
  Calendar,
  ShieldCheck,
  ChevronDown,
  Clock,
  MessageSquare,
  Star
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Assets
import heroBg from "@/assets/marine-rv-hero.jpg";

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

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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
              {/* PRIMARY CTA: Gold button (Facebook Messenger) - 56px height */}
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
                  href="https://m.me/vadimgroup"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    <MessengerIcon />
                  </span>
                  Get a Free Estimate on Messenger
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
                <Link to="/about">See Our Work</Link>
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
                      <span>Send photos on Facebook Messenger</span>
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
                      href="https://m.me/vadimgroup"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        <MessengerIcon />
                      </span>
                      Get a Free Estimate on Messenger
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
                  href="https://m.me/vadimgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessengerIcon />
                  Request Priority Help on Facebook
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
                  <span>Facebook Messenger assessment: 2–4 hours</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {data.whyMatters.blocks.map((block, i) => (
               <div key={i} className="bg-white p-6 rounded-lg border border-border-light shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all duration-300">
                 <h3 className="font-heading text-xl font-bold text-brand-primary mb-4">
                   {block.title}
                 </h3>
                 <ul className="space-y-3">
                   {block.points.map((point, j) => (
                     <li key={j} className="flex items-start gap-3 text-text-secondary">
                       <span className="text-brand-accent shrink-0" style={{ marginTop: '0.35em', lineHeight: 1 }}>•</span>
                       <span className="text-sm leading-relaxed">{point}</span>
                     </li>
                   ))}
                 </ul>
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
      {/* COLOR SCHEME: Light Grey (#F1F5F9) - Subtle contrast for benefits */}
      <Section className="bg-surface-subtle py-24">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">WHY CHOOSE US</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">Why Marine & RV Owners Trust The Vadim Group</h2>
            <p className="text-text-secondary text-lg leading-relaxed">Boat and RV owners across the Orlando area rely on us for clean, precise repair work and calm, dependable service. Every project — from fiberglass patching to moisture diagnostics to interior panel repairs — is handled with care, honesty, and full respect for your vessel.</p>
          </div>

          {/* Two-column layout: Left = Bullet Points + CTA (40%), Right = Carousel (60%) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            {/* Left Column - Bullet Points + CTA - 2 columns */}
            <div className="flex flex-col h-full lg:col-span-2">
              <div className="space-y-5 flex-grow">
                {[
                  {
                    title: "Clean, precise workmanship",
                    description: "We repair your boat or RV with careful attention to detail — clean finishes, no shortcuts, no mess left behind"
                  },
                  {
                    title: "Long-lasting repair solutions",
                    description: "We focus on durable, high-quality results that prevent repeat issues and help extend the life of your vessel"
                  },
                  {
                    title: "Transparent, honest pricing",
                    description: "Clear timelines, clear estimates, no pressure, and no hidden fees — just straightforward communication"
                  },
                  {
                    title: "On-time and dependable",
                    description: "We show up when promised, keep you informed, and respect your travel plans and schedule"
                  },
                  {
                    title: "Respect for your boat, RV, and onboard systems",
                    description: "Professional handling, minimal disruption, and repairs done the right way — with respect for how you use your vessel"
                  }
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="h-6 w-6 text-brand-accent shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary mb-1">{bullet.title}</h3>
                      <p className="text-base text-text-secondary leading-relaxed">{bullet.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button with Micro-copy */}
              <div className="mt-8 pt-8 border-t border-border-light">
                <Button 
                  asChild
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold h-12 px-8 transition-all duration-300 w-full md:w-auto"
                >
                  <Link to="/about" className="inline-flex items-center justify-center gap-2">
                    View Full Portfolio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-text-muted mt-3 text-center md:text-left">
                  See before/after results from real marine & RV owners
                </p>
              </div>
            </div>

            {/* Right Column - Portfolio Carousel - 3 columns */}
            <div className="relative w-full h-full flex items-center lg:col-span-3">
              {/* Portfolio Carousel */}
              {(() => {
                // Placeholder portfolio data - filtered by "marine-rv" category
                // TODO: Replace with real portfolio data from about page when available
                const portfolioItems = [
                  {
                    id: 1,
                    category: "marine-rv",
                    title: "RV Water Damage Restoration",
                    subtitle: "Moisture Intrusion",
                    description: "Removed damaged paneling, dried interior framing thoroughly, and rebuilt with moisture-resistant materials — finish matches perfectly.",
                    beforeImage: "/images/portfolio/rv-water-before.jpg",
                    afterImage: "/images/portfolio/rv-water-after.jpg"
                  },
                  {
                    id: 2,
                    category: "marine-rv",
                    title: "Boat Gelcoat Repair",
                    subtitle: "Dock Impact",
                    description: "Repaired deep gelcoat scratches, color-matched perfectly, and blended seamlessly — you cannot tell where the repair was done.",
                    beforeImage: "/images/portfolio/boat-gelcoat-before.jpg",
                    afterImage: "/images/portfolio/boat-gelcoat-after.jpg"
                  },
                  {
                    id: 3,
                    category: "marine-rv",
                    title: "Motorhome Electrical Repair",
                    subtitle: "Electrical System",
                    description: "Diagnosed failed connection points, repaired wiring properly, tested every circuit — back on the road within hours.",
                    beforeImage: "/images/portfolio/rv-electrical-before.jpg",
                    afterImage: "/images/portfolio/rv-electrical-after.jpg"
                  }
                ];

                return (
                  <div className="portfolio-carousel-wrapper w-full max-w-full">
                    <Swiper
                      modules={[Autoplay, Pagination, Navigation]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ 
                        delay: 4000, 
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                      }}
                      pagination={{ 
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet portfolio-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active portfolio-bullet-active',
                        el: '.portfolio-pagination-marine-rv'
                      }}
                      navigation={{
                        prevEl: '.portfolio-button-prev-marine',
                        nextEl: '.portfolio-button-next-marine'
                      }}
                      loop={true}
                      className="portfolio-swiper"
                    >
                      {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="rounded-lg overflow-hidden h-full" style={{ isolation: 'isolate' }}>
                            <div className="bg-white shadow-lg border border-border-light h-full rounded-lg overflow-hidden">
                              {/* Before/After Images */}
                              <div className="grid grid-cols-2 gap-2 p-2 bg-white">
                              <div className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-gray-400 text-sm font-medium">Before</span>
                                </div>
                              </div>
                              <div className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-gray-400 text-sm font-medium">After</span>
                                </div>
                              </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                              <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">
                                {item.title}
                              </h3>
                              <Badge variant="accent" className="mb-3 text-xs px-3 py-1 pointer-events-none">
                                {item.subtitle}
                              </Badge>
                              <p className="text-sm text-text-secondary leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button 
                      className="portfolio-button-prev-marine hidden md:flex"
                      aria-label="View previous project"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button 
                      className="portfolio-button-next-marine hidden md:flex"
                      aria-label="View next project"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="portfolio-pagination-marine-rv"></div>

                    {/* Carousel Styles */}
                    <style>{`
                      /* Remove hover effects from badges */
                      .portfolio-swiper .pointer-events-none {
                        pointer-events: none;
                        transition: none;
                      }

                      .portfolio-carousel-wrapper {
                        position: relative;
                        padding-bottom: 48px;
                        padding-left: 52px;
                        padding-right: 52px;
                        width: 100%;
                        max-width: 100%;
                      }

                      .portfolio-swiper {
                        width: 100%;
                        max-width: 100%;
                        overflow: hidden;
                        background: transparent !important;
                      }

                      .portfolio-swiper .swiper-wrapper {
                        align-items: stretch;
                        background: transparent !important;
                      }

                      .portfolio-swiper .swiper-slide {
                        height: auto;
                        display: flex;
                        background: transparent !important;
                      }

                      .portfolio-swiper .swiper-slide > div {
                        width: 100%;
                        background: transparent !important;
                      }

                      .portfolio-swiper .swiper-slide > div > div {
                        background: white !important;
                      }

                      /* Navigation Buttons - Same style as reviews */
                      .portfolio-button-prev-marine,
                      .portfolio-button-next-marine {
                        position: absolute;
                        top: 45%;
                        transform: translateY(-50%);
                        width: 44px;
                        height: 44px;
                        background: rgba(198, 167, 120, 0.12);
                        border-radius: 50%;
                        color: #B8935A;
                        border: none;
                        cursor: pointer;
                        z-index: 10;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
                      }
                      
                      .portfolio-button-prev-marine {
                        left: 0;
                      }
                      
                      .portfolio-button-next-marine {
                        right: 0;
                      }
                      
                      .portfolio-button-prev-marine:hover,
                      .portfolio-button-next-marine:hover {
                        background: #C6A778;
                        color: white;
                        box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
                        transform: translateY(-50%) scale(1.05);
                      }

                      .portfolio-button-prev-marine:disabled,
                      .portfolio-button-next-marine:disabled {
                        opacity: 0.3;
                        cursor: not-allowed;
                      }

                      /* Pagination Dots */
                      .portfolio-pagination-marine-rv {
                        display: flex !important;
                        justify-content: center;
                        align-items: center;
                        gap: 8px;
                        margin-top: 24px;
                        height: 16px;
                      }
                      
                      .portfolio-bullet {
                        width: 12px !important;
                        height: 12px !important;
                        background: transparent;
                        border: 2px solid #C6A778;
                        opacity: 0.6;
                        transition: opacity 0.3s ease, background 0.3s ease;
                        cursor: pointer;
                      }

                      .portfolio-bullet:hover {
                        opacity: 1;
                      }
                      
                      .portfolio-bullet-active {
                        background: #C6A778 !important;
                        opacity: 1 !important;
                      }

                      /* Mobile optimization */
                      @media (max-width: 767px) {
                        .portfolio-button-prev-marine,
                        .portfolio-button-next-marine {
                          display: none !important;
                        }

                        .portfolio-swiper {
                          cursor: grab;
                          width: 100%;
                          max-width: 100%;
                        }

                        .portfolio-swiper:active {
                          cursor: grabbing;
                        }

                        .portfolio-carousel-wrapper {
                          width: 100%;
                          max-width: 100%;
                          padding-left: 0;
                          padding-right: 0;
                        }
                      }

                      /* Tablet adjustments */
                      @media (min-width: 768px) and (max-width: 1023px) {
                        .portfolio-carousel-wrapper {
                          padding-left: 48px;
                          padding-right: 48px;
                        }
                      }
                    `}</style>
                  </div>
                );
              })()}
            </div>
          </div>
        </Container>
      </Section>

      {/* --- TESTIMONIALS --- */}
      {/* Design System v2.2: Section 6.9 - Testimonial Cards with Carousel */}
      {/* COLOR SCHEME: White (#FFFFFF) - Clean showcase for social proof */}
      <Section className="bg-surface py-20 md:py-24 overflow-hidden" style={{ isolation: 'isolate' }}>
        <Container className="overflow-visible">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
              {data.reviews.tag}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              {data.reviews.title}
            </h2>
            {/* Google Verification Badge - Moved to Header */}
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <GoogleLogo />
              <span className="text-base">Verified reviews from Google Business</span>
            </div>
          </div>

          {/* Reviews Data with Avatars */}
          {(() => {
            const reviewsData = [
              {
                id: 1,
                name: "Tom R.",
                location: "Orlando",
                initials: "TR",
                avatarColor: "#E8F4F8",
                rating: 5,
                text: "After discovering water damage in our RV's rear bedroom, Vadim removed the affected paneling, thoroughly dried the interior framing, and rebuilt everything with moisture-resistant materials. The finish matches perfectly and the repair is completely solid. The pricing was fair and explained clearly from the start.",
                date: "3 weeks ago"
              },
              {
                id: 2,
                name: "Lisa M.",
                location: "Winter Park",
                initials: "LM",
                avatarColor: "#FFF4E6",
                rating: 5,
                text: "Our boat's gelcoat had deep scratches from dock impact. Vadim repaired the damaged area, color-matched the finish perfectly, and blended it seamlessly — you absolutely cannot tell where the repair was done. Professional work at a reasonable price.",
                date: "1 month ago"
              },
              {
                id: 3,
                name: "Michael D.",
                location: "Kissimmee",
                initials: "MD",
                avatarColor: "#F0E8FF",
                rating: 5,
                text: "We had multiple electrical issues in our Class A motorhome that left us stranded. Vadim diagnosed the failed connection points, repaired the wiring properly, tested every circuit, and had us back on the road within hours. Clean work and honest communication throughout.",
                date: "2 weeks ago"
              },
              {
                id: 4,
                name: "Jennifer B.",
                location: "Lake Nona",
                initials: "JB",
                avatarColor: "#E8F4F8",
                rating: 5,
                text: "Vadim restored our pontoon boat's soft deck area after years of moisture intrusion. He replaced the damaged decking, reinforced the structure, and resealed everything properly — the deck is now completely solid and safe. Highly professional and detail-oriented.",
                date: "1 month ago"
              },
              {
                id: 5,
                name: "Carlos P.",
                location: "Winter Park",
                initials: "CP",
                avatarColor: "#FFF4E6",
                rating: 5,
                text: "After a roof leak damaged our travel trailer's interior wall and cabinet, Vadim rebuilt the structure, replaced all moisture-affected materials, and refinished the surfaces to match the original perfectly. The workspace was left spotless and the repair is flawless.",
                date: "2 months ago"
              }
            ];

            return (
              <div className="relative reviews-carousel-wrapper md:px-8 lg:px-12 max-w-full py-2" style={{ minHeight: '480px' }}>
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 }
                  }}
                  autoplay={{ 
                    delay: 5000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet reviews-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active reviews-bullet-active',
                    el: '.reviews-pagination-marine-rv',
                    dynamicBullets: false
                  }}
                  navigation={{
                    prevEl: '.reviews-button-prev-marine-rv',
                    nextEl: '.reviews-button-next-marine-rv'
                  }}
                  loop={true}
                  watchSlidesProgress={true}
                  simulateTouch={false}
                  allowTouchMove={true}
                  touchRatio={1}
                  touchAngle={45}
                  threshold={5}
                  keyboard={{
                    enabled: true,
                    onlyInViewport: true
                  }}
                  a11y={{
                    prevSlideMessage: 'Previous review',
                    nextSlideMessage: 'Next review',
                    paginationBulletMessage: 'Go to review {{index}}'
                  }}
                  className="reviews-swiper-marine-rv"
                >
                  {reviewsData.map((review) => (
                    <SwiperSlide key={review.id}>
                      <div 
                        className="
                          bg-white rounded-md p-5 md:p-7
                          border border-border-light 
                          shadow-sm 
                          hover:border-brand-accent hover:shadow-lg
                          transition-all duration-300 
                          flex flex-col
                          h-full
                          w-full
                        "
                      >
                        {/* Star Rating: 18px gold stars with enhanced contrast */}
                        <div className="flex gap-1 mb-4 md:mb-5 shrink-0" role="img" aria-label="Rated 5 out of 5 stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className="w-[18px] h-[18px] fill-[#B8935A] text-[#B8935A] drop-shadow-sm" 
                              aria-hidden="true"
                            />
                          ))}
                        </div>

                        {/* Quote Text: Italic, properly clamped with ellipsis */}
                        <blockquote 
                          className="
                            text-text-primary 
                            italic 
                            text-[15px] md:text-base
                            leading-[1.6]
                            mb-4 md:mb-5 
                            flex-grow
                            review-text-clamp
                          "
                        >
                          "{review.text}"
                        </blockquote>

                        {/* Divider - Visual separator between review and author */}
                        <div className="border-t border-border-light mb-4 md:mb-5 pt-4 md:pt-5"></div>

                        {/* Footer: Avatar + Name + Date */}
                        <div className="mt-auto flex items-center gap-3 shrink-0">
                          {/* Avatar with Initials */}
                          <div 
                            className="
                              w-12 h-12 
                              rounded-full 
                              flex items-center justify-center
                              shrink-0
                            "
                            style={{ backgroundColor: review.avatarColor }}
                          >
                            <span className="text-brand-primary font-semibold text-base">
                              {review.initials}
                            </span>
                          </div>
                          
                          {/* Name and Date */}
                          <div className="flex flex-col">
                            <div className="font-semibold text-brand-primary">
                              {review.name}
                            </div>
                            <div className="text-sm text-text-muted">
                              {review.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons - Outside carousel */}
                <button 
                  className="reviews-button-prev-marine-rv hidden md:flex"
                  aria-label="View previous review"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  className="reviews-button-next-marine-rv hidden md:flex"
                  aria-label="View next review"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Pagination Dots */}
                <div className="reviews-pagination-marine-rv"></div>

                {/* Custom Swiper Styles */}
                <style>{`
                  /* Carousel wrapper with proper padding and overflow control */
                  .reviews-carousel-wrapper {
                    padding-bottom: 64px;
                    padding-top: 8px;
                    position: relative;
                    overflow: visible;
                  }

                  /* Swiper container - FIXED HEIGHT to prevent layout shift */
                  .reviews-swiper-marine-rv {
                    overflow: hidden;
                    padding: 0 !important;
                    height: 340px !important;
                  }

                  .reviews-swiper-marine-rv .swiper-wrapper {
                    display: flex;
                    align-items: flex-start;
                    height: 100%;
                  }

                  .reviews-swiper-marine-rv .swiper-slide {
                    height: 100%;
                    padding: 8px 0;
                    display: flex;
                  }

                  /* Text clamping for review quotes - proper ellipsis */
                  .review-text-clamp {
                    display: -webkit-box !important;
                    -webkit-line-clamp: 4 !important;
                    -webkit-box-orient: vertical !important;
                    overflow: hidden !important;
                    text-overflow: ellipsis !important;
                    word-wrap: break-word;
                    word-break: break-word;
                    max-height: calc(1.6em * 4);
                  }

                  /* Navigation Buttons - Positioned outside, hidden on mobile */
                  .reviews-button-prev-marine-rv,
                  .reviews-button-next-marine-rv {
                    position: absolute;
                    top: 50%;
                    transform: translateY(calc(-50% - 32px));
                    width: 44px;
                    height: 44px;
                    background: rgba(198, 167, 120, 0.12);
                    border-radius: 50%;
                    color: #B8935A;
                    border: none;
                    cursor: pointer;
                    z-index: 10;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
                  }
                  
                  .reviews-button-prev-marine-rv {
                    left: -8px;
                  }
                  
                  .reviews-button-next-marine-rv {
                    right: -8px;
                  }
                  
                  .reviews-button-prev-marine-rv:hover,
                  .reviews-button-next-marine-rv:hover {
                    background: #C6A778;
                    color: white;
                    box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
                    transform: translateY(calc(-50% - 32px)) scale(1.05);
                  }

                  .reviews-button-prev-marine-rv:disabled,
                  .reviews-button-next-marine-rv:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                  }
                  
                  /* Pagination Dots - Visible on all devices - FIXED SIZE */
                  .reviews-pagination-marine-rv {
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    margin-top: 32px;
                    position: relative;
                    height: 16px;
                    min-height: 16px;
                  }
                  
                  .reviews-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background: transparent;
                    border: 2px solid #C6A778;
                    opacity: 0.6;
                    transition: opacity 0.3s ease, background 0.3s ease;
                    cursor: pointer;
                    display: inline-block;
                    flex-shrink: 0;
                  }

                  .reviews-bullet:hover {
                    opacity: 1;
                  }
                  
                  .reviews-bullet-active {
                    background: #C6A778 !important;
                    opacity: 1 !important;
                  }

                  /* Mobile optimization */
                  @media (max-width: 767px) {
                    .reviews-carousel-wrapper {
                      padding-bottom: 56px;
                      padding-top: 8px;
                      overflow: visible;
                    }

                    .reviews-swiper-marine-rv {
                      overflow: hidden;
                      height: 320px !important;
                    }

                    .reviews-pagination-marine-rv {
                      margin-top: 24px;
                    }

                    /* Hide navigation buttons on mobile */
                    .reviews-button-prev-marine-rv,
                    .reviews-button-next-marine-rv {
                      display: none !important;
                    }
                  }

                  /* Tablet optimization */
                  @media (min-width: 640px) and (max-width: 1023px) {
                    .reviews-button-prev-marine-rv {
                      left: -4px;
                    }
                    
                    .reviews-button-next-marine-rv {
                      right: -4px;
                    }
                  }

                  /* Desktop */
                  @media (min-width: 1024px) {
                    .reviews-button-prev-marine-rv {
                      left: -8px;
                    }
                    
                    .reviews-button-next-marine-rv {
                      right: -8px;
                    }
                  }

                  /* Large desktop */
                  @media (min-width: 1280px) {
                    .reviews-button-prev-marine-rv {
                      left: -12px;
                    }
                    
                    .reviews-button-next-marine-rv {
                      right: -12px;
                    }
                  }
                `}</style>
              </div>
            );
          })()}
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

          {/* PRIMARY CTA: Gold Facebook Messenger button with icon - ENLARGED */}
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
                href="https://m.me/vadimgroup"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <span className="w-[28px] h-[28px] flex items-center justify-center">
                  <MessengerIcon />
                </span>
                Get a Free Estimate on Messenger
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
