import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Home Repairs", href: "/home-repairs" },
  { name: "Specialized Services", href: "/specialized-services" },
  { name: "Marine & RV", href: "/marine-rv" },
  { name: "Commercial", href: "/commercial" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                The Vadim Group
              </span>
              <span className="text-xs uppercase tracking-widest text-brand-accent font-medium mt-1">
                Craftsmanship & Restoration
              </span>
            </div>
            <p className="text-text-muted leading-relaxed text-sm max-w-xs">
              Premium repair services for homes, businesses, and marine vessels throughout the Orlando area. Quality, trust, and European precision.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-brand-accent transition-colors p-2 hover:bg-white/5 rounded-full"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-muted hover:text-brand-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide block">
                    Email
                  </span>
                  <a 
                    href="mailto:info@thevadimgroup.com" 
                    className="text-text-muted hover:text-brand-accent transition-colors text-sm"
                  >
                    info@thevadimgroup.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/50 uppercase tracking-wide block">
                    Service Area
                  </span>
                  <span className="text-text-muted text-sm block">
                    Orlando, Lake Nona, Hunters Creek & surrounding areas
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal / Extra */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-muted hover:text-brand-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {currentYear} The Vadim Group. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            Designed with <span className="text-brand-accent">precision</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

