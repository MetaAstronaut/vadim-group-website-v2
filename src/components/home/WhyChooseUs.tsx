import * as React from "react";
import { 
  Clock, 
  Award, 
  Sparkles, 
  BadgeDollarSign 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import vadimPortrait from "@/assets/vadim-portrait.jpg";

interface WhyChooseUsData {
  tag: string;
  title: string;
  description: string;
  closing: string;
  bullets: string[];
}

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

/**
 * WhyChooseUs Component - Design System v2.2 compliant
 * Feature cards with icons following Section 6.7 (Icon System)
 * Updated: 2x2 grid layout, enhanced tag styling, improved quote section
 */
export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  const icons = [
    Clock,           // Reliable scheduling
    Award,           // High-quality workmanship
    Sparkles,        // Clean, respectful work
    BadgeDollarSign  // Transparent pricing
  ];

  return (
    <Section className="bg-surface py-12 md:py-20 relative overflow-hidden">
      {/* Subtle Background Pattern - Updated gold color to match v2.2 */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A778_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Label: 16px, semi-bold, uppercase, gold, tracked */}
          <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
            {data.tag}
          </span>
          
          {/* H2: Playfair Display, Oxford Blue */}
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-5">
            {data.title}
          </h2>
          
          {/* Subtitle: max-width 800px */}
          <p className="text-lg text-text-secondary leading-relaxed max-w-[800px] mx-auto">
            {data.description}
          </p>
        </div>

        {/* Benefits Grid - 2x2 layout, equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-5xl mx-auto mt-10 md:auto-rows-fr">
          {data.bullets.map((benefit, index) => {
            const Icon = icons[index] || Award;
            
            return (
              <Card 
                key={index}
                className="
                  group 
                  bg-white
                  border border-border-light
                  rounded-lg
                  shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                  hover:border-brand-accent 
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all 
                  duration-300 
                  ease-out
                "
              >
                <CardContent className="p-5 md:p-6 flex flex-col items-center text-center h-full">
                  {/* Icon Container: 64px circle with light gold background */}
                  <div className="
                    w-16 h-16 
                    rounded-full 
                    bg-brand-accent/10
                    flex items-center justify-center 
                    mb-4 
                    group-hover:bg-brand-accent/15
                    transition-all 
                    duration-300
                    shrink-0
                  ">
                    <Icon 
                      className="w-8 h-8 text-brand-accent transition-transform duration-300 group-hover:scale-110" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Benefit Text */}
                  <p className="text-text-primary font-medium text-[15px] leading-[1.4]">
                    {benefit}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Block - Enhanced with avatar and attribution */}
        <div className="max-w-[900px] mx-auto mt-12">
          <div className="
            relative 
            bg-[#F8F9FA]
            rounded-xl 
            p-6 md:p-8
            border border-brand-accent/15
            shadow-[0_2px_8px_rgba(15,23,42,0.04)]
          ">
            {/* Flex container for avatar + content */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start shrink-0">
                <div className="relative">
                  <img 
                    src={vadimPortrait} 
                    alt="Vadim Shakin" 
                    className="
                      w-16 h-16 md:w-20 md:h-20 
                      rounded-full 
                      object-cover 
                      border-4 border-brand-accent
                      shadow-[0_4px_12px_rgba(15,23,42,0.1)]
                    "
                  />
                </div>
              </div>
              
              {/* Quote and Attribution */}
              <div className="flex-1">
                <blockquote className="relative">
                  <p className="
                    text-[17px] md:text-[18px] 
                    font-medium 
                    text-brand-primary 
                    italic 
                    leading-[1.6]
                    mb-3
                  ">
                    {data.closing}
                  </p>
                </blockquote>
                
                {/* Attribution */}
                <div className="mt-3">
                  <div className="font-semibold text-brand-primary">
                    Vadim Shakin
                  </div>
                  <div className="text-[15px] text-text-secondary">
                    • CEO, The Vadim Group
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

