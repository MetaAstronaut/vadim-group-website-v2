import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { getHeaderData } from "@/utils/contentParsers";
import vgLogo from "@/assets/VG_logo_main2.png";

// Facebook Messenger Icon Component
const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showCTA, setShowCTA] = React.useState(false);
  const location = useLocation();
  
  // Fetch data from markdown
  const { brand, nav, cta, mobileMenu } = React.useMemo(() => getHeaderData(), []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Intersection Observer for Hero section
  // On pages with hero: show CTA after scrolling past hero
  // On pages without hero (Our Work, Contact, About): always show CTA
  React.useEffect(() => {
    const heroSection = document.querySelector('[data-hero-section]');
    
    // If no hero section exists on this page, always show the CTA button
    if (!heroSection) {
      setShowCTA(true);
      return;
    }

    // Reset showCTA when navigating to a page with hero
    setShowCTA(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show CTA when hero is NOT intersecting (fully scrolled past)
          // Hide CTA when hero IS intersecting (back in viewport)
          setShowCTA(!entry.isIntersecting);
        });
      },
      {
        // Trigger when hero section is completely out of view
        threshold: 0,
        rootMargin: '0px'
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [location]); // Re-run when route changes

  // Calculate header classes based on scroll state
  // Always use the "scrolled" dark luxury style
  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
    "h-20 bg-[#0F172A]/95 backdrop-blur-md border-b border-accent-500/50 shadow-lg"
  );

  const linkClasses = (isActive: boolean) => cn(
    "text-sm font-medium tracking-wide transition-all duration-300 relative py-1",
    isActive
      ? "text-accent-500"
      : "text-white/90 hover:text-white",
    "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full",
    isActive && "after:w-full"
  );

  return (
    <header className={headerClasses}>
      <Container className="flex items-center justify-between h-full">
        {/* Logo Area */}
        <Link 
          to={brand.href} 
          className="flex items-center gap-3 relative z-50 group focus:outline-none"
          aria-label={brand.logoAlt}
        >
          {/* Logo Icon */}
          <img 
            src={vgLogo} 
            alt="The Vadim Group Logo" 
            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Brand Text */}
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-white leading-tight">
              {brand.name}
            </span>
            <span className="hidden md:block text-[9px] uppercase tracking-[0.15em] text-accent-500 font-semibold mt-0.5">
              Premium Repair & Restoration
            </span>
            <span className="hidden lg:block text-[8px] uppercase tracking-wider text-white/60 font-medium -mt-0.5">
              Home • Marine • RV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={linkClasses(location.pathname === item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Appears after scrolling past Hero */}
        <div className="hidden lg:flex items-center gap-4">
          {cta.showOnScroll && (
            <div
              className={cn(
                "transition-all duration-500 ease-out",
                showCTA 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 -translate-y-2 pointer-events-none"
              )}
              style={{ willChange: 'opacity, transform' }}
              aria-hidden={!showCTA}
            >
              <Button 
                asChild 
                className={cn(
                  "font-semibold rounded-[2px] px-5 h-9 text-sm transition-all duration-300",
                  "bg-accent-500 text-primary-900 hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5",
                  "border-none shadow-md"
                )}
                tabIndex={showCTA ? 0 : -1}
              >
                <a 
                  href={cta.href} 
                  target={cta.type === 'messenger' ? '_blank' : undefined} 
                  rel={cta.type === 'messenger' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2"
                >
                  {cta.showMessengerIcon && <MessengerIcon />}
                  Free Estimate on Messenger
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        {mobileMenu.enabled && (
          <button
            className={cn(
              "lg:hidden relative z-50 p-2 rounded-sm transition-colors focus:outline-none",
              "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {mobileMenu.overlay && (
          <div
            className={cn(
              "fixed inset-0 bg-[#0F172A] z-40 flex flex-col pt-32 px-8 transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) lg:hidden h-screen",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50" />
            
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-heading font-medium transition-colors py-2 border-b border-white/5",
                    location.pathname === item.href
                      ? "text-accent-500"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8">
                <div
                  className={cn(
                    "transition-all duration-500 ease-out",
                    showCTA 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 -translate-y-2"
                  )}
                  style={{ willChange: 'opacity, transform' }}
                  aria-hidden={!showCTA}
                >
                  <Button 
                    asChild 
                    className="w-full h-12 text-base font-semibold bg-accent-500 text-primary-900 hover:bg-accent-600 rounded-[2px] border-none"
                    tabIndex={showCTA ? 0 : -1}
                  >
                    <a 
                      href={cta.href}
                      target={cta.type === 'messenger' ? '_blank' : undefined} 
                      rel={cta.type === 'messenger' ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center gap-2"
                    >
                      {cta.showMessengerIcon && <MessengerIcon />}
                      Free Estimate on Messenger
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

