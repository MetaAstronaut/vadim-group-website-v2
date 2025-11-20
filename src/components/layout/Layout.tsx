import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export const Layout = ({ 
  children, 
  className, 
  hideHeader = false, 
  hideFooter = false,
  ...props 
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-body font-body text-text-primary selection:bg-brand-accent/30">
      {!hideHeader && <Header />}
      
      <main 
        className={cn(
          "flex-1 flex flex-col", 
          !hideHeader && "pt-[88px] lg:pt-[96px]", // Offset fixed header height
          className
        )} 
        {...props}
      >
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

