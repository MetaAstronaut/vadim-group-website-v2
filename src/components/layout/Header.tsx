import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Home Repairs", href: "/home-repairs" },
  { name: "Specialized Services", href: "/specialized-services" },
  { name: "Marine & RV", href: "/marine-rv" },
  { name: "Commercial", href: "/commercial" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-brand-primary/95 backdrop-blur-md py-3 shadow-md border-white/10"
          : "bg-brand-primary py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo Area */}
        <Link 
          to="/" 
          className="flex items-center gap-2 relative z-50 group"
        >
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight group-hover:text-brand-accent transition-colors">
              The Vadim Group
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-accent font-medium">
              Craftsmanship & Restoration
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent relative py-1",
                location.pathname === item.href
                  ? "text-brand-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-accent"
                  : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            asChild 
            variant="accent" 
            size="sm"
            className="font-semibold shadow-lg shadow-brand-accent/10"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-sm transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-brand-primary z-40 flex flex-col pt-24 px-6 transition-transform duration-300 lg:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-2xl font-heading font-medium transition-colors hover:text-brand-accent border-b border-white/5 pb-4",
                  location.pathname === item.href
                    ? "text-brand-accent"
                    : "text-white/90"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild variant="accent" className="w-full text-lg h-14">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

