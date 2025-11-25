import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { getFooterData } from "@/utils/contentParsers";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export const Footer = () => {
  const { brand, quickLinks, contact, social, legal } = React.useMemo(() => getFooterData(), []);
  const currentYear = new Date().getFullYear();
  const copyrightText = legal.copyrightTemplate.replace('{year}', currentYear.toString());

  return (
    <footer className="relative bg-primary-900 text-text-inverse pt-32 pb-12 overflow-hidden">
      {/* Background Watermark/Logo */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.03] pointer-events-none select-none">
         <span className="text-[40rem] leading-none font-heading font-bold text-white">V</span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col space-y-2">
              <span className="font-heading font-bold text-4xl text-white tracking-tight" aria-label={brand.logoAlt}>
                {brand.name}
              </span>
              <div className="h-1 w-12 bg-accent-500 rounded-full" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent-500 font-medium pt-2">
                Craftsmanship & Restoration
              </span>
            </div>
            <p className="text-text-inverse/70 leading-relaxed text-base max-w-sm font-light">
              {brand.tagline}
            </p>
            
            {/* Social Icons - Gold Circles */}
            <div className="flex items-center gap-4 pt-4">
              {social.items.map((item) => {
                const Icon = iconMap[item.icon.toLowerCase()] || Facebook;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-accent-500/30 hover:border-accent-500 hover:bg-accent-500 transition-all duration-300"
                    aria-label={item.name}
                  >
                    <Icon className="h-4 w-4 text-accent-500 group-hover:text-primary-900 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-xl font-heading font-medium text-white border-b border-white/10 pb-4 inline-block">
              {quickLinks.title}
            </h4>
            <ul className="space-y-4">
              {quickLinks.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-inverse/70 hover:text-accent-500 transition-colors text-sm tracking-wide hover:translate-x-1 inline-block duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xl font-heading font-medium text-white border-b border-white/10 pb-4 inline-block">
              {contact.title}
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 transition-colors">
                  <Phone className="h-4 w-4 text-accent-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider block">
                    {contact.whatsappLabel}
                  </span>
                  <a 
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-accent-500 transition-colors font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 transition-colors">
                  <Mail className="h-4 w-4 text-accent-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider block">
                    {contact.emailLabel}
                  </span>
                  <a 
                    href={contact.emailHref} 
                    className="text-white/90 hover:text-accent-500 transition-colors font-medium"
                  >
                    {contact.emailHref.replace('mailto:', '')}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 transition-colors">
                  <MapPin className="h-4 w-4 text-accent-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider block">
                    Service Area
                  </span>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {contact.serviceArea.join(", ")}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal / Extra (Span 2) */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xl font-heading font-medium text-white border-b border-white/10 pb-4 inline-block">
              {legal.title}
            </h4>
            <ul className="space-y-4">
              {legal.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-inverse/60 hover:text-accent-500 transition-colors text-xs uppercase tracking-widest"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/5">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider block mb-2">
                    Business Hours
                </span>
                <span className="text-white/80 text-sm font-light">
                    {contact.hours}
                </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-inverse/40 text-xs tracking-wide">
            {copyrightText}
          </p>
          <div className="flex items-center gap-2 text-text-inverse/40 text-xs tracking-wide">
            <span>Designed with</span>
            <span className="h-px w-4 bg-accent-500/50"></span>
            <span className="text-accent-500/80 font-heading italic">precision</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
