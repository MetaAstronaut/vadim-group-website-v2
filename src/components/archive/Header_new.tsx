import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/archive/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Home Repairs", path: "/home-repairs" },
    { name: "Specialized Services", path: "/other-services" },
    { name: "Emergency", path: "/emergency-services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-xl"
          : "bg-primary/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-bold text-white tracking-tight font-['Playfair_Display'] transition-all duration-300 group-hover:text-secondary-light">
              The Vadim Group
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                      location.pathname === link.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <Button
              size="sm"
              className="btn-premium bg-secondary hover:bg-secondary-light text-white border border-secondary/20 hover:border-secondary-light/30 shadow-lg hover:shadow-xl px-6"
            >
              Get a Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          <nav className="container-custom flex flex-col py-8 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors py-2 ${
                  location.pathname === link.path
                    ? "text-secondary-light"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-white/10">
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary-light"
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
