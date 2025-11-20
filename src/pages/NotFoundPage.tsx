import * as React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <Layout>
      <Section className="flex-1 flex items-center justify-center min-h-[60vh]">
        <Container className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading font-bold text-8xl text-brand-primary/10">404</h1>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary">
              Page Not Found
            </h2>
            <p className="text-xl text-text-secondary max-w-md mx-auto">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="default" size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" /> Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <ArrowLeft className="mr-2 h-5 w-5" /> Contact Us
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

