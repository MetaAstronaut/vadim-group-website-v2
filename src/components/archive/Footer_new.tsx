import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const primaryLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Home Repairs",
      href: "/home-repairs",
    },
    {
      name: "Marine & RV Services",
      href: "/marine-rv",
    },
    {
      name: "Specialized Services",
      href: "/other-services",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Terms of Service",
      href: "/terms",
    },
  ];
  return (
    <footer className="bg-primary pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white font-['Playfair_Display']">
              The Vadim Group
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Premium repair services for homes, businesses and marine vessels
              throughout the Orlando area
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300 border border-white/10"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300 border border-white/10"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300 border border-white/10"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="space-y-4">
              {primaryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/60 hover:text-secondary-light transition-colors text-base group"
                >
                  <span className="inline-flex items-center">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-secondary-light transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-white/60 group">
                <Mail className="h-5 w-5 text-secondary-light mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                <a
                  href="mailto:info@thevadimgroup.com"
                  className="hover:text-secondary-light transition-colors text-base"
                >
                  info@thevadimgroup.com
                </a>
              </div>
              <div className="flex items-start gap-4 text-white/60 group">
                <MapPin className="h-5 w-5 text-secondary-light mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-base">
                  Orlando, Lake Nona, Hunters Creek
                  <br />& surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} The Vadim Group. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-secondary-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
