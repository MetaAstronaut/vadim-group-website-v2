import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Hammer, 
  Anchor, 
  Siren, 
  Phone, 
  Star,
  ChevronDown
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

export const HomePage = () => {
  const data = React.useMemo(() => getHomePageData(), []);
  
  // FAQ state - must be at component top level (Rules of Hooks)
  const [showAllFAQ, setShowAllFAQ] = useState(false);

  const serviceIcons = [Hammer, Anchor, Siren];

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
              <span className="block">Home Repair, Marine & RV</span>
              <span className="block">Services in</span>
              <div className="flex justify-center items-center h-[1.5em] overflow-hidden">
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
                  Get Free Estimate on WhatsApp
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
      <Section className="bg-surface-subtle py-12 md:py-20">
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
      {/* Design System v2.2: Horizontal Cards Layout */}
      <Section className="bg-brand-primary text-white py-20 px-10">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              {data.process.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              {data.process.title}
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

      {/* --- TESTIMONIALS --- */}
      {/* Design System v2.2: Section 6.9 - Testimonial Cards with Carousel */}
      <Section className="bg-surface-subtle py-20 md:py-24 overflow-hidden" style={{ isolation: 'isolate' }}>
        <Container className="overflow-visible">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
              {data.reviews.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
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
                name: "Jason M.",
                initials: "JM",
                avatarColor: "#E8F4F8",
                rating: 5,
                text: "Vadim was on time, very professional, and extremely clean with his work. He fixed a hidden leak inside our bathroom wall and restored the drywall perfectly — you can't even tell anything happened.",
                date: "2 weeks ago"
              },
              {
                id: 2,
                name: "Maria L.",
                initials: "ML",
                avatarColor: "#FFF4E6",
                rating: 5,
                text: "Fantastic experience. Vadim showed up exactly when he said he would, fixed our broken cabinet, and even adjusted two other doors without charging extra. Super polite, clean, and honest.",
                date: "1 month ago"
              },
              {
                id: 3,
                name: "Daniel S.",
                initials: "DS",
                avatarColor: "#F0E8FF",
                rating: 5,
                text: "We had water damage under our kitchen sink. The issue was diagnosed quickly, the damaged panel was replaced, everything sealed correctly, and the space was left spotless.",
                date: "2 months ago"
              },
              {
                id: 4,
                name: "Robert K.",
                initials: "RK",
                avatarColor: "#E8F4F8",
                rating: 5,
                text: "Fixed gelcoat damage on our boat hull. The repair is seamless and the color match is perfect. Very impressed with the attention to detail and craftsmanship.",
                date: "3 weeks ago"
              },
              {
                id: 5,
                name: "Sarah T.",
                initials: "ST",
                avatarColor: "#FFF4E6",
                rating: 5,
                text: "Our RV had electrical issues that no one else could diagnose. Vadim found and fixed the problem in one visit. Excellent technical knowledge and fair pricing.",
                date: "1 month ago"
              },
              {
                id: 6,
                name: "Michael B.",
                initials: "MB",
                avatarColor: "#F0E8FF",
                rating: 5,
                text: "Repaired water damage in our RV bathroom. The work was done professionally, everything sealed properly, and looks brand new. Highly recommend for RV repairs.",
                date: "2 weeks ago"
              },
              {
                id: 7,
                name: "Jennifer W.",
                initials: "JW",
                avatarColor: "#E8F4F8",
                rating: 5,
                text: "Called for emergency deck repair before guests arrived. Vadim responded quickly, completed quality work on time, and left everything clean. True professional.",
                date: "3 months ago"
              },
              {
                id: 8,
                name: "Thomas R.",
                initials: "TR",
                avatarColor: "#FFF4E6",
                rating: 5,
                text: "Marine electrical work on our cabin cruiser. All lighting and switches work perfectly now. Clean installation and thorough testing. Great service!",
                date: "1 month ago"
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
                    el: '.reviews-pagination',
                    dynamicBullets: false
                  }}
                  navigation={{
                    prevEl: '.reviews-button-prev',
                    nextEl: '.reviews-button-next'
                  }}
                  loop={true}
                  watchSlidesProgress={true}
                  grabCursor={true}
                  touchRatio={1}
                  touchAngle={45}
                  threshold={5}
                  simulateTouch={true}
                  allowTouchMove={true}
                  keyboard={{
                    enabled: true,
                    onlyInViewport: true
                  }}
                  a11y={{
                    prevSlideMessage: 'Previous review',
                    nextSlideMessage: 'Next review',
                    paginationBulletMessage: 'Go to review {{index}}'
                  }}
                  className="reviews-swiper"
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
                  className="reviews-button-prev hidden md:flex"
                  aria-label="View previous review"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  className="reviews-button-next hidden md:flex"
                  aria-label="View next review"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Pagination Dots */}
                <div className="reviews-pagination"></div>

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
                  .reviews-swiper {
                    overflow: hidden;
                    padding: 0 !important;
                    height: 340px !important;
                  }

                  .reviews-swiper .swiper-wrapper {
                    display: flex;
                    align-items: flex-start;
                    height: 100%;
                  }

                  .reviews-swiper .swiper-slide {
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
                  .reviews-button-prev,
                  .reviews-button-next {
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
                  
                  .reviews-button-prev {
                    left: -8px;
                  }
                  
                  .reviews-button-next {
                    right: -8px;
                  }
                  
                  .reviews-button-prev:hover,
                  .reviews-button-next:hover {
                    background: #C6A778;
                    color: white;
                    box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
                    transform: translateY(calc(-50% - 32px)) scale(1.05);
                  }

                  .reviews-button-prev:disabled,
                  .reviews-button-next:disabled {
                    opacity: 0.3;
                    cursor: not-allowed;
                  }
                  
                  /* Pagination Dots - Visible on all devices - FIXED SIZE */
                  .reviews-pagination {
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

                    .reviews-swiper {
                      cursor: grab;
                      overflow: hidden;
                      height: 320px !important;
                    }

                    .reviews-swiper:active {
                      cursor: grabbing;
                    }

                    .reviews-pagination {
                      margin-top: 24px;
                    }

                    /* Hide navigation buttons on mobile */
                    .reviews-button-prev,
                    .reviews-button-next {
                      display: none !important;
                    }
                  }

                  /* Tablet optimization */
                  @media (min-width: 640px) and (max-width: 1023px) {
                    .reviews-button-prev {
                      left: -4px;
                    }
                    
                    .reviews-button-next {
                      right: -4px;
                    }
                  }

                  /* Desktop */
                  @media (min-width: 1024px) {
                    .reviews-button-prev {
                      left: -8px;
                    }
                    
                    .reviews-button-next {
                      right: -8px;
                    }
                  }

                  /* Large desktop */
                  @media (min-width: 1280px) {
                    .reviews-button-prev {
                      left: -12px;
                    }
                    
                    .reviews-button-next {
                      right: -12px;
                    }
                  }
                `}</style>
              </div>
            );
          })()}
        </Container>
      </Section>

      {/* --- ABOUT US --- */}
      {/* Design System v2.2: Standard section with image layout */}
      <Section className="bg-surface py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            {/* Content Column - 50% width with balanced padding */}
            <div className="lg:pr-6">
               {/* Eyebrow Label */}
               <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                 {data.about.tag}
               </span>
               
               {/* H2 Title: Playfair Display, Oxford Blue */}
               <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                 {data.about.title}
               </h2>
               
               {/* Lead Quote - reduced gap from title */}
               <p className="text-lg text-text-secondary mb-6 font-semibold italic">
                 {data.about.quote}
               </p>
               
               {/* Body Description - split into two paragraphs */}
               {(() => {
                 const splitPoint = "We listen first";
                 const desc = data.about.description;
                 const splitIndex = desc.indexOf(splitPoint);
                 if (splitIndex > 0) {
                   const firstPara = desc.substring(0, splitIndex).trim();
                   const secondPara = desc.substring(splitIndex).trim();
                   return (
                     <div className="space-y-4 mb-10">
                       <p className="text-text-secondary leading-[1.65]">{firstPara}</p>
                       <p className="text-text-secondary leading-[1.65]">{secondPara}</p>
                     </div>
                   );
                 }
                 return (
                   <p className="text-text-secondary mb-10 leading-[1.65]">{desc}</p>
                 );
               })()}
               
               {/* Promise List - Enhanced spacing and markers */}
               <div className="space-y-6">
                 <h3 className="font-heading text-xl font-semibold text-brand-primary mb-6">
                   {data.about.promiseTitle}
                 </h3>
                 {data.about.promiseItems.map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                     {/* Enhanced Gold bullet point */}
                     <div className="h-2.5 w-2.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                     <span className="text-text-secondary text-[15px] md:text-base leading-[1.7]">{item}</span>
                   </div>
                 ))}
               </div>
               
               {/* CTA Button - See Our Work with increased spacing */}
               <div className="mt-12">
                 <Button 
                   asChild 
                   variant="outline"
                   className="
                     border-[1.5px] border-brand-accent 
                     text-brand-accent 
                     hover:bg-brand-accent hover:text-brand-primary hover:-translate-y-0.5
                     font-medium
                     py-3 px-6
                     transition-all duration-300
                   "
                 >
                   <Link to="/our-work" className="inline-flex items-center justify-center gap-2">
                     See Our Work
                     <ArrowRight className="h-4 w-4" />
                   </Link>
                 </Button>
               </div>
            </div>
            
            {/* Image Column - 50% width with balanced padding */}
            <div className="relative lg:pl-6">
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-brand-primary/5 relative group">
                 <img 
                   src={vadimPortrait} 
                   alt="Vadim - The Vadim Group" 
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-brand-primary/10" />
              </div>
              
              {/* Quote Overlay Card - Further reduced visual weight */}
              <div className="absolute -bottom-5 -left-5 bg-brand-primary/85 backdrop-blur-sm text-white p-5 max-w-[240px] shadow-md hidden lg:block rounded-sm">
                <p className="font-heading text-base italic leading-[1.65] opacity-95">
                  "{data.about.closing}"
                </p>
              </div>
            </div>
          </div>
        </Container>
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
            {/* FAQ Logic - moved useState to component top level */}
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Fix the Problem — Fast and Professionally
          </h2>

          {/* Trust statement before CTA - softer color to not compete with button */}
          <p className="text-lg md:text-xl text-gray-400 font-medium mb-8">
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
                href={`${data.cta.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for my repair project.")}`}
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
