import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MessengerWidget } from "@/components/MessengerWidget";
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
          !hideHeader && "pt-20", // Reduced top padding to match header height (80px/5rem = 20)
          className
        )} 
        {...props}
      >
        {children}
      </main>

      {!hideFooter && <Footer />}
      
      {/* Facebook Messenger Widget - Available on all pages */}
      <MessengerWidget 
        messengerLink="https://m.me/vadimgroup"
        message="Hi! I'm interested in getting an estimate."
      />
    </div>
  );
};

