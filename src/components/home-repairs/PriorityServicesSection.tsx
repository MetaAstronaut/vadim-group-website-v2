import * as React from "react";
import { Zap, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface PriorityServicesSectionProps {
  whatsappLink: string;
}

export const PriorityServicesSection: React.FC<PriorityServicesSectionProps> = ({ whatsappLink }) => {
  const coversList = [
    "Minor water-related damage",
    "Moisture-affected drywall & trim",
    "Damaged flooring",
    "Cabinet/drawer issues",
    "Shower/tub/tile problems",
    "Weather-exposed exterior areas",
    "Pre-listing or guest-ready repairs"
  ];

  return (
    <Section className="bg-brand-primary py-16 md:py-20">
      <Container className="max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <Zap 
                className="h-7 w-7 text-brand-accent" 
                fill="currentColor"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Label */}
          <span className="text-brand-accent font-bold tracking-wider text-sm uppercase block mb-4">
            EMERGENCY SERVICES
          </span>

          {/* Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Priority Scheduling for Urgent Repairs
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When a repair can't wait, we move your project to the front of the line. Ideal for situations where fast attention helps prevent additional damage or disruption at home.
          </p>
        </div>

        {/* Main Priority Card */}
        <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-6 md:p-8 mb-5 transition-all duration-300 hover:border-brand-accent hover:bg-white/[0.08] hover:shadow-[0_8px_24px_rgba(198,167,120,0.15)]">
          {/* Card Title */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-5">
            Fast scheduling for issues that can worsen or disrupt daily living
          </h3>

          {/* Covers Section */}
          <div className="mb-6">
            <h4 className="font-bold text-white mb-3 text-base md:text-lg">Covers:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {coversList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-accent mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button inside card */}
          <div>
            <Button
              asChild
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 md:h-14 px-6 md:px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-300 ease-out text-base w-full md:w-auto"
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              <a
                href={`${whatsappLink}?text=${encodeURIComponent("Hi, I have an urgent repair that needs priority scheduling.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <WhatsAppIcon />
                Get Priority Help via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Response Times & How It Works - 2 mini blocks in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Response Times */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
              <Clock className="h-5 w-5 text-brand-accent" />
              Response Times
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>WhatsApp assessment: 2–4 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Scheduling: 24–48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Clear communication at every step</span>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-white/5 border border-brand-accent/20 rounded-lg p-5 md:p-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base md:text-lg">
              <MessageSquare className="h-5 w-5 text-brand-accent" />
              How It Works
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Send a photo + brief description</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>We assess urgency and timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent shrink-0">•</span>
                <span>Your job is prioritized in our schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

