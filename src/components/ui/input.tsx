import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-12 w-full rounded-sm border bg-surface px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary focus-visible:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default: "border-border-light",
        error: "border-semantic-error focus-visible:ring-semantic-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

/**
 * Input component with built-in label and error message support.
 * Based on Design System V2: height 48px (h-12), radius 4px (rounded-sm).
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, label, error, id, ...props }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className="space-y-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-primary"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            inputVariants({ variant: error ? "error" : variant }),
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-semantic-error">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

