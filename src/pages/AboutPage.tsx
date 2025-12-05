import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, HeartHandshake, Award, Users, Star } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import aboutContentRaw from "@/content/pages/about.md?raw";
import heroBg from "@/assets/vadim-portrait.jpg";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// Portfolio projects data
const portfolioProjects = {
  homeRepairs: [
    {
      title: "Water Damage Restoration",
      category: "Home Repair",
      description: "Complete drywall repair and repainting after bathroom leak",
      image: heroBg,
    },
    {
      title: "Kitchen Cabinet Repair",
      category: "Home Repair",
      description: "Cabinet door adjustment and hardware replacement",
      image: heroBg,
    },
    {
      title: "Deck Restoration",
      category: "Home Repair",
      description: "Complete deck sanding, staining, and weatherproofing",
      image: heroBg,
    },
    {
      title: "Basement Ceiling Repair",
      category: "Home Repair",
      description: "Drywall replacement and professional finishing",
      image: heroBg,
    },
    {
      title: "Window Frame Restoration",
      category: "Home Repair",
      description: "Rotted frame replacement and weather sealing",
      image: heroBg,
    },
    {
      title: "Interior Door Installation",
      category: "Home Repair",
      description: "New door installation with precise fitting",
      image: heroBg,
    },
  ],
  marineRV: [
    {
      title: "Boat Gelcoat Repair",
      category: "Marine Service",
      description: "Seamless hull restoration with color matching",
      image: heroBg,
    },
    {
      title: "RV Interior Rebuild",
      category: "RV Service",
      description: "Water damage repair and panel replacement",
      image: heroBg,
    },
    {
      title: "Marine Electrical Work",
      category: "Marine Service",
      description: "Complete lighting system installation and testing",
      image: heroBg,
    },
    {
      title: "RV Bathroom Restoration",
      category: "RV Service",
      description: "Water damage repair with proper sealing",
      image: heroBg,
    },
    {
      title: "Boat Deck Restoration",
      category: "Marine Service",
      description: "Non-slip surface repair and refinishing",
      image: heroBg,
    },
    {
      title: "RV Cabinet Repair",
      category: "RV Service",
      description: "Structural repair and refinishing",
      image: heroBg,
    },
  ],
};

// Portfolio Tabs Component
const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'home' | 'marine'>('all');
  
  const allProjects = [...portfolioProjects.homeRepairs, ...portfolioProjects.marineRV];
  
  const displayProjects = 
    activeTab === 'all' ? allProjects :
    activeTab === 'home' ? portfolioProjects.homeRepairs :
    portfolioProjects.marineRV;

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'all' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'home' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Home Repairs
        </button>
        <button
          onClick={() => setActiveTab('marine')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'marine' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Marine & RV
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, i) => (
          <div 
            key={i}
            className="
              group
              bg-white 
              rounded-lg 
              overflow-hidden
              border border-border-light
              shadow-sm
              hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <Badge variant="outline" className="mb-3 text-brand-accent border-brand-accent/30">
                {project.category}
              </Badge>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <PageTemplate markdownContent={aboutContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO SECTION --- */}
          <div 
            className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden"
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
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85))'
              }}
              aria-hidden="true" 
            />

            <Container className="relative z-10 py-16">
              <div className="max-w-4xl mx-auto text-center space-y-5">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight" style={{ textShadow: '0 2px 16px rgba(0, 0, 0, 0.3)' }}>
                  About The Vadim Group
                </h1>
                
                <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl" style={{ textShadow: '0 1px 8px rgba(0, 0, 0, 0.2)' }}>
                  Reliable, on-time repair and restoration services for homes, boats, and RVs — delivered with clean workmanship, clear communication, and no surprises
                </p>
              </div>
            </Container>
          </div>

          {/* --- OUR STORY --- */}
          <Section className="bg-surface py-24">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                    ABOUT US
                  </span>
                  <h2 className="font-heading font-bold text-3xl text-brand-primary">Our Story</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    The Vadim Group was created with one goal: to bring dependable, high-quality repair and restoration services to homeowners, boat owners, and RV owners across the Orlando area.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Vadim brings years of hands-on experience across multiple fields — from residential repairs to structural marine and RV restoration.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Clients trust us because we arrive when promised, communicate clearly, and deliver long-lasting results with clean, precise workmanship.
                  </p>
                </div>
                
                <div className="relative">
                   <div className="aspect-[4/3] bg-surface-subtle rounded-lg overflow-hidden shadow-xl border border-border-light">
                      <img src={heroBg} alt="Vadim at work" className="w-full h-full object-cover" />
                   </div>
                   {/* Decorative element */}
                   <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full -z-10" />
                   <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full -z-10" />
                </div>
              </div>
            </Container>
          </Section>

          {/* --- OUR PHILOSOPHY --- */}
          <Section className="bg-surface-subtle py-24">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                    CORE VALUES
                  </span>
                  <h2 className="font-heading font-bold text-3xl text-brand-primary mb-8">Our Philosophy</h2>
                  <p className="text-text-secondary text-xl leading-relaxed">
                    We believe repairs should be done properly the first time — with no shortcuts, no temporary fixes, and no hidden surprises
                  </p>
                  
                  <p className="text-text-secondary text-lg mt-6">
                    Our work is built on three principles:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    { icon: Award, title: "Precision", desc: "Clean, detailed workmanship in every environment: home, boat, or RV" },
                    { icon: HeartHandshake, title: "Clarity", desc: "Honest assessments, straightforward pricing, and proactive communication" },
                    { icon: Users, title: "Reliability", desc: "Accurate timelines and respect for your space and schedule" }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-lg shadow-sm text-center border border-border-light hover:shadow-md hover:border-brand-accent/40 transition-all duration-300">
                    <div className="mx-auto h-16 w-16 bg-brand-primary/5 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-primary mb-3">{item.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                </div>

                <blockquote className="text-center">
                  <p className="text-2xl italic text-brand-primary mb-4">
                    "Repairs should solve the problem — not postpone it"
                  </p>
                  <footer className="text-text-secondary font-semibold">
                    — Vadim, Founder
                  </footer>
                </blockquote>
              </div>
            </Container>
          </Section>

          {/* --- TESTIMONIALS --- */}
          <Section className="bg-surface py-20 md:py-24 overflow-hidden" style={{ isolation: 'isolate' }}>
            <Container className="overflow-visible">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                  CLIENT REVIEWS
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                  What Our Clients Say
                </h2>
                {/* Google Verification Badge */}
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
                    name: "Jennifer W.",
                    initials: "JW",
                    avatarColor: "#E8F4F8",
                    rating: 5,
                    text: "Vadim completed our home repair flawlessly — on time, clean, and with great attention to detail. A professional you can trust.",
                    date: "3 months ago"
                  },
                  {
                    id: 2,
                    name: "Thomas R.",
                    initials: "TR",
                    avatarColor: "#FFF4E6",
                    rating: 5,
                    text: "Exceptional marine repair work. Vadim diagnosed the issue quickly and restored our cabin systems perfectly. Highly recommended.",
                    date: "1 month ago"
                  },
                  {
                    id: 3,
                    name: "Jason M.",
                    initials: "JM",
                    avatarColor: "#F0E8FF",
                    rating: 5,
                    text: "We were preparing for a road trip and needed urgent RV help. Vadim responded fast, fixed the issue, and explained everything clearly.",
                    date: "2 weeks ago"
                  },
                  {
                    id: 4,
                    name: "Maria L.",
                    initials: "ML",
                    avatarColor: "#E8F4F8",
                    rating: 5,
                    text: "Fantastic experience. Vadim showed up exactly when he said he would, fixed our broken cabinet, and even adjusted two other doors without charging extra. Super polite, clean, and honest.",
                    date: "1 month ago"
                  },
                  {
                    id: 5,
                    name: "Daniel S.",
                    initials: "DS",
                    avatarColor: "#FFF4E6",
                    rating: 5,
                    text: "We had water damage under our kitchen sink. The issue was diagnosed quickly, the damaged panel was replaced, everything sealed correctly, and the space was left spotless.",
                    date: "2 months ago"
                  },
                  {
                    id: 6,
                    name: "Robert K.",
                    initials: "RK",
                    avatarColor: "#F0E8FF",
                    rating: 5,
                    text: "Fixed gelcoat damage on our boat hull. The repair is seamless and the color match is perfect. Very impressed with the attention to detail and craftsmanship.",
                    date: "3 weeks ago"
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
                        el: '.reviews-pagination-about',
                        dynamicBullets: false
                      }}
                      navigation={{
                        prevEl: '.reviews-button-prev-about',
                        nextEl: '.reviews-button-next-about'
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
                      className="reviews-swiper-about"
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
                      className="reviews-button-prev-about hidden md:flex"
                      aria-label="View previous review"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button 
                      className="reviews-button-next-about hidden md:flex"
                      aria-label="View next review"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="reviews-pagination-about"></div>

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
                      .reviews-swiper-about {
                        overflow: hidden;
                        padding: 0 !important;
                        height: 340px !important;
                      }

                      .reviews-swiper-about .swiper-wrapper {
                        display: flex;
                        align-items: flex-start;
                        height: 100%;
                      }

                      .reviews-swiper-about .swiper-slide {
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
                      .reviews-button-prev-about,
                      .reviews-button-next-about {
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
                      
                      .reviews-button-prev-about {
                        left: -8px;
                      }
                      
                      .reviews-button-next-about {
                        right: -8px;
                      }
                      
                      .reviews-button-prev-about:hover,
                      .reviews-button-next-about:hover {
                        background: #C6A778;
                        color: white;
                        box-shadow: 0 4px 12px rgba(198, 167, 120, 0.3);
                        transform: translateY(calc(-50% - 32px)) scale(1.05);
                      }

                      .reviews-button-prev-about:disabled,
                      .reviews-button-next-about:disabled {
                        opacity: 0.3;
                        cursor: not-allowed;
                      }
                      
                      /* Pagination Dots - Visible on all devices - FIXED SIZE */
                      .reviews-pagination-about {
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

                        .reviews-swiper-about {
                          overflow: hidden;
                          height: 320px !important;
                        }

                        .reviews-pagination-about {
                          margin-top: 24px;
                        }

                        /* Hide navigation buttons on mobile */
                        .reviews-button-prev-about,
                        .reviews-button-next-about {
                          display: none !important;
                        }
                      }

                      /* Tablet optimization */
                      @media (min-width: 640px) and (max-width: 1023px) {
                        .reviews-button-prev-about {
                          left: -4px;
                        }
                        
                        .reviews-button-next-about {
                          right: -4px;
                        }
                      }

                      /* Desktop */
                      @media (min-width: 1024px) {
                        .reviews-button-prev-about {
                          left: -8px;
                        }
                        
                        .reviews-button-next-about {
                          right: -8px;
                        }
                      }

                      /* Large desktop */
                      @media (min-width: 1280px) {
                        .reviews-button-prev-about {
                          left: -12px;
                        }
                        
                        .reviews-button-next-about {
                          right: -12px;
                        }
                      }
                    `}</style>
                  </div>
                );
              })()}
            </Container>
          </Section>

          {/* --- RECENT PROJECTS --- */}
          <Section className="bg-surface-subtle py-24">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                  OUR PORTFOLIO
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                  Recent Projects
                </h2>
                <p className="text-lg text-text-secondary">
                  Explore real repair and restoration work across homes, boats, and RVs.
                </p>
                <p className="text-lg text-text-secondary mt-2">
                  From water-damage drywall repairs to structural deck restoration and marine interior rebuilds — our portfolio shows the care and precision behind every project.
                </p>
              </div>

              <PortfolioTabs />

              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">
                    View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section className="bg-brand-primary text-white py-24 md:py-32 text-center relative overflow-hidden">
            <Container className="relative z-10">
              {/* Tag: FREE ESTIMATE */}
              <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-6">
                FREE ESTIMATE
              </span>
              
              {/* CTA Headline */}
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Work Together?
              </h2>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-400 font-medium mb-8 max-w-2xl mx-auto">
                If you value precision, responsibility, and clear communication, The Vadim Group is the right partner for your home, marine, or RV repair needs.
              </p>

              {/* PRIMARY CTA: Gold Facebook Messenger button with icon */}
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
                      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
                      </svg>
                    </span>
                    Get a Free Estimate on Messenger
                  </a>
              </Button>
                
                {/* Secondary text link */}
                <a 
                  href="mailto:info@thevadimgroup.com"
                  className="
                    text-gray-300 
                    hover:text-white 
                    text-base
                    inline-flex items-center gap-2
                    transition-colors duration-200
                    group
                  "
                >
                  Or email us at info@thevadimgroup.com
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
