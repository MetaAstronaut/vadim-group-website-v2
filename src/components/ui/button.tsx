import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-sm",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white hover:bg-[#0A1520] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-border-light bg-surface hover:bg-surface-subtle hover:text-text-primary shadow-sm hover:-translate-y-0.5",
        ghost:
          "hover:bg-brand-primary/5 hover:text-brand-primary",
        accent:
          "bg-brand-accent text-brand-primary hover:bg-brand-accent-hover shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        link: "text-brand-primary underline-offset-4 hover:underline",
        destructive:
          "bg-semantic-error text-white hover:bg-semantic-error/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
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
 * Primary Button component based on Design System V2.
 * Supports loading state, polymorphism (asChild), and variants.
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
