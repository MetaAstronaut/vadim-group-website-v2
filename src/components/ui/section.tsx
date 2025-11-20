import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      spacing: {
        default: "py-16 md:py-24",
        sm: "py-8 md:py-12",
        lg: "py-24 md:py-32",
        none: "py-0",
      },
      background: {
        default: "bg-transparent",
        subtle: "bg-surface-subtle",
        dark: "bg-brand-primary text-text-inverse",
        primary: "bg-brand-primary text-text-inverse",
        secondary: "bg-brand-secondary text-white",
      },
    },
    defaultVariants: {
      spacing: "default",
      background: "default",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

/**
 * Section component for consistent vertical spacing and background colors.
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, background, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ spacing, background }), className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };

