import * as React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriorityBadgeProps {
  className?: string;
  variant?: "default" | "large";
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ 
  className,
  variant = "default" 
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full transition-all duration-300",
        "bg-brand-accent/15 text-brand-accent border border-brand-accent",
        "hover:bg-brand-accent/25 hover:border-brand-accent hover:shadow-md",
        variant === "large" ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs",
        "font-bold uppercase tracking-wider",
        "shadow-sm",
        className
      )}
      style={{
        borderWidth: '1px',
        boxShadow: '0 1px 3px rgba(198, 167, 120, 0.2)'
      }}
      title="Fast response for urgent situations"
      role="status"
      aria-label="Priority service available"
    >
      <Zap 
        className={cn(
          "animate-pulse",
          variant === "large" ? "h-4 w-4" : "h-3 w-3"
        )} 
        fill="#C6A778"
        stroke="#C6A778"
        aria-hidden="true"
      />
      <span className="text-brand-accent">Priority Available</span>
    </div>
  );
};

