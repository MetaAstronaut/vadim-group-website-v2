import * as React from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface MicroCalloutProps {
  messengerLink: string;
  className?: string;
}

const MessengerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.447 5.514 3.713 7.236V22l3.398-1.868C10.014 20.372 10.99 20.5 12 20.5c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.071 12.414l-2.571-2.743-5.014 2.743L11.071 8.5l2.571 2.743L18.571 8.5l-5.5 5.914z"/>
  </svg>
);

export const MicroCallout: React.FC<MicroCalloutProps> = ({
  messengerLink,
  className,
}) => {
  return (
    <div className={cn("bg-gradient-to-r from-brand-accent/5 via-brand-accent/10 to-brand-accent/5 py-12", className)}>
      <Container className="max-w-4xl">
        <div className="text-center space-y-6">
          {/* Icon and Title */}
          <div className="flex items-center justify-center gap-3">
            <Zap className="h-6 w-6 text-brand-accent" fill="currentColor" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary">
              Need Urgent Repairs?
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            We offer priority scheduling for urgent situations. Response within 2-4 hours.
          </p>
          
          {/* CTA Button */}
          <Button
            asChild
            className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold h-12 px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <a
              href={messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <MessengerIcon />
              Get a Free Estimate on Messenger
            </a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

