import * as React from "react";
import { PageTemplate } from "@/components/PageTemplate";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import portfolioContentRaw from "@/content/pages/portfolio.md?raw";

export const PortfolioPage = () => {
  return (
    <PageTemplate markdownContent={portfolioContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col min-h-[60vh] justify-center">
          <Section>
            <Container className="text-center space-y-6">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-brand-primary">
                Portfolio
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                We are currently curating a selection of our best work. Check back soon to see examples of our precision craftsmanship.
              </p>
              <Button asChild variant="outline">
                <Link to="/">Return Home</Link>
              </Button>
            </Container>
          </Section>
        </div>
      )}
    </PageTemplate>
  );
};

