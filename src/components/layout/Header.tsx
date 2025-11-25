import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { getHeaderData } from "@/utils/contentParsers";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
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
          className="flex items-center gap-2 relative z-50 group focus:outline-none"
          aria-label={brand.logoAlt}
        >
          <div className="flex flex-col">
            <span className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-white">
              {brand.name}
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {cta.showOnScroll && (
            <Button 
              asChild 
              variant="outline"
              className={cn(
                "font-medium rounded-[2px] px-6 transition-all duration-300",
                "border-accent-500 text-accent-500 bg-transparent hover:bg-accent-500 hover:text-primary-900"
              )}
            >
              <a 
                href={cta.href} 
                target={cta.type === 'whatsapp' ? '_blank' : undefined} 
                rel={cta.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2"
              >
                {cta.showWhatsappIcon && <MessageCircle className="h-4 w-4" />}
                {cta.label}
              </a>
            </Button>
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
                <Button 
                  asChild 
                  className="w-full h-12 text-lg font-semibold bg-accent-500 text-primary-900 hover:bg-accent-600 rounded-[2px] border-none"
                >
                  <a 
                    href={cta.href}
                    target={cta.type === 'whatsapp' ? '_blank' : undefined} 
                    rel={cta.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center gap-2"
                  >
                    {cta.showWhatsappIcon && <MessageCircle className="h-5 w-5" />}
                    {cta.label}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

