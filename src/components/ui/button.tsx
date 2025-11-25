import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Button Component - Design System v2.2 Section 6.1
 * 
 * Variants:
 * - default: Oxford Blue background (former secondary action, now for neutral CTAs)
 * - accent: GOLD background - PRIMARY CTA (main conversion actions)
 * - secondary: Transparent with border - SECONDARY CTA (supporting actions)
 * - outline: Light border for forms/cards
 * - ghost: Minimal hover only
 * - link: Text link style (tertiary CTA)
 * - destructive: Error/delete actions
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 rounded-sm",
  {
    variants: {
      variant: {
        // Oxford Blue - Neutral/Default actions
        default:
          "bg-brand-primary text-white hover:bg-[#0A1520] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        
        // GOLD - PRIMARY CTA (Design System v2.2: Primary button = Gold)
        accent:
          "bg-brand-accent text-brand-primary hover:bg-brand-accent-hover shadow-md hover:shadow-lg hover:-translate-y-1 active:translate-y-0 font-semibold",
        
        // SECONDARY CTA - Outline variant (supports primary without competing)
        secondary:
          "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        
        // Standard outline for forms
        outline:
          "border border-border-light bg-white hover:bg-surface-subtle hover:border-brand-accent/30 shadow-sm hover:-translate-y-0.5",
        
        // Ghost button - minimal
        ghost:
          "hover:bg-brand-primary/5 hover:text-brand-primary",
        
        // Tertiary CTA - Text link with arrow
        link: 
          "text-brand-accent underline-offset-4 hover:underline hover:text-brand-accent-hover p-0 h-auto",
        
        // Destructive actions
        destructive:
          "bg-semantic-error text-white hover:bg-semantic-error/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-4 py-2 text-sm", // 40px height - DS v2.2 Small button
        default: "h-12 px-6 py-3 text-base", // 48px height - DS v2.2 Standard
        lg: "h-14 px-8 py-4 text-lg", // 56px height - DS v2.2 Large button
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

/**
 * Button component - Design System v2.2 compliant
 * 
 * Key Changes in v2.2:
 * - Primary CTA is now GOLD (accent variant), not blue
 * - Secondary CTA uses border with transparent bg
 * - Proper size scale: sm(40px), default(48px), lg(56px)
 * - Enhanced hover states with lift effect
 * - Link variant for tertiary CTAs
 * 
 * Supports loading state, polymorphism (asChild), and accessibility.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // If asChild is true, we can't easily inject the loader without breaking Slot semantics
    // unless we clone the child, which Slot already does.
    // For simplicity/stability: if loading, we render the loader inside.
    // BUT if asChild is true, we must return EXACTLY ONE child.
    
    const content = (
      <>
        {loading && <Loader2 className="animate-spin" />}
        {children}
      </>
    );

    if (asChild) {
      // When asChild is true, we should not inject extra nodes like Loader2 adjacent to children
      // because Radix Slot expects a single child.
      // We'll render children directly. If loading is needed with asChild, 
      // the consumer should handle the loading state UI inside the child component.
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={disabled || loading}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
