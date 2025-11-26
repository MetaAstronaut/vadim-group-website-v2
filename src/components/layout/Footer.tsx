import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { getFooterData } from "@/utils/contentParsers";
import { cn } from "@/lib/utils";
import vgLogo from "@/assets/VG_logo_main2.png";

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
    <footer className="relative bg-primary-900 text-text-inverse border-t-2 border-accent-500/20 pt-32 pb-12 overflow-hidden">
      {/* Background Watermark/Logo - VG */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 opacity-[0.03] pointer-events-none select-none">
         <span className="text-[40rem] leading-none font-heading font-bold text-white tracking-tight">VG</span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo + Brand Name with Full Descriptor */}
            <div className="flex items-start gap-3">
              <img 
                src={vgLogo} 
                alt="The Vadim Group Logo" 
                className="w-12 h-12 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white tracking-tight leading-tight" aria-label={brand.logoAlt}>
                  The Vadim Group
                </span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-accent-500 font-semibold mt-1">
                  Premium Repair & Restoration
                </span>
                <span className="text-[8px] uppercase tracking-wider text-white/60 font-medium mt-0.5">
                  Home • Marine • RV
                </span>
              </div>
            </div>
            
            {/* SEO-Optimized Description - 3 lines max */}
            <p className="text-text-inverse/70 leading-relaxed text-sm max-w-md">
            Professional repair and restoration services for homes, boats, and RVs in Orlando and nearby areas.
            Reliable repair work, clear pricing, and service you can trust.
            </p>
            
            {/* Service Areas - SEO Keywords */}
            <div>
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider block mb-2">
                Service Area
              </span>
              <p className="text-text-inverse/60 text-xs leading-relaxed">
                Orlando • Lake Nona • Hunters Creek<br />
                Winter Park • Lake Mary • Kissimmee
              </p>
            </div>
            
            {/* Social Icons - Gold Circles */}
            <div className="flex items-center gap-4">
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
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white border-b border-white/10 pb-3 inline-block">
              {quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {quickLinks.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-text-inverse/70 hover:text-accent-500 transition-colors text-sm tracking-wide hover:translate-x-1 inline-block duration-200"
                  >
                    {item.name === "About" ? "Our Work" : item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white border-b border-white/10 pb-3 inline-block">
              {contact.title}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 transition-colors">
                  <Phone className="h-4 w-4 text-accent-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider block">
                    {contact.whatsappLabel}
                  </span>
                  <a 
                    href={`${contact.whatsappHref}?text=${encodeURIComponent("Hi, I'd like to get a free estimate for my repair project.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-accent-500 transition-colors text-sm"
                  >
                    Get Free Estimate on WhatsApp
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
                    className="text-white/90 hover:text-accent-500 transition-colors text-sm break-all"
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
                    Business Hours
                  </span>
                  <p className="text-white/90 text-sm">
                    {contact.hours}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white border-b border-white/10 pb-3 inline-block">
              {legal.title}
            </h4>
            <ul className="space-y-3">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-text-inverse/40 text-xs tracking-wide">
            {copyrightText}
          </p>
        </div>
      </Container>
    </footer>
  );
};
