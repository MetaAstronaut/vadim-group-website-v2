import * as React from "react";
import { Link } from "react-router-dom";
import { PageTemplate } from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, HeartHandshake, Award, Users } from "lucide-react";

import aboutContentRaw from "@/content/pages/about.md?raw";
import heroBg from "@/assets/vadim-portrait.jpg";

// Portfolio projects data
const portfolioProjects = {
  homeRepairs: [
    {
      title: "Water Damage Restoration",
      category: "Home Repair",
      description: "Complete drywall repair and repainting after bathroom leak",
      image: heroBg,
    },
    {
      title: "Kitchen Cabinet Repair",
      category: "Home Repair",
      description: "Cabinet door adjustment and hardware replacement",
      image: heroBg,
    },
    {
      title: "Deck Restoration",
      category: "Home Repair",
      description: "Complete deck sanding, staining, and weatherproofing",
      image: heroBg,
    },
    {
      title: "Basement Ceiling Repair",
      category: "Home Repair",
      description: "Drywall replacement and professional finishing",
      image: heroBg,
    },
    {
      title: "Window Frame Restoration",
      category: "Home Repair",
      description: "Rotted frame replacement and weather sealing",
      image: heroBg,
    },
    {
      title: "Interior Door Installation",
      category: "Home Repair",
      description: "New door installation with precise fitting",
      image: heroBg,
    },
  ],
  marineRV: [
    {
      title: "Boat Gelcoat Repair",
      category: "Marine Service",
      description: "Seamless hull restoration with color matching",
      image: heroBg,
    },
    {
      title: "RV Interior Rebuild",
      category: "RV Service",
      description: "Water damage repair and panel replacement",
      image: heroBg,
    },
    {
      title: "Marine Electrical Work",
      category: "Marine Service",
      description: "Complete lighting system installation and testing",
      image: heroBg,
    },
    {
      title: "RV Bathroom Restoration",
      category: "RV Service",
      description: "Water damage repair with proper sealing",
      image: heroBg,
    },
    {
      title: "Boat Deck Restoration",
      category: "Marine Service",
      description: "Non-slip surface repair and refinishing",
      image: heroBg,
    },
    {
      title: "RV Cabinet Repair",
      category: "RV Service",
      description: "Structural repair and refinishing",
      image: heroBg,
    },
  ],
};

// Portfolio Tabs Component
const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'home' | 'marine'>('all');
  
  const allProjects = [...portfolioProjects.homeRepairs, ...portfolioProjects.marineRV];
  
  const displayProjects = 
    activeTab === 'all' ? allProjects :
    activeTab === 'home' ? portfolioProjects.homeRepairs :
    portfolioProjects.marineRV;

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'all' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'home' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Home Repairs
        </button>
        <button
          onClick={() => setActiveTab('marine')}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-300
            ${activeTab === 'marine' 
              ? 'bg-brand-accent text-brand-primary shadow-md' 
              : 'bg-white border-2 border-border-light text-text-secondary hover:border-brand-accent/50'
            }
          `}
        >
          Marine & RV
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, i) => (
          <div 
            key={i}
            className="
              group
              bg-white 
              rounded-lg 
              overflow-hidden
              border border-border-light
              shadow-sm
              hover:shadow-md
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <Badge variant="outline" className="mb-3 text-brand-accent border-brand-accent/30">
                {project.category}
              </Badge>
              <h3 className="font-heading text-xl font-semibold text-brand-primary mb-2">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutPage = () => {
  return (
    <PageTemplate markdownContent={aboutContentRaw}>
      {({ frontmatter }) => (
        <div className="flex flex-col">
          
          {/* --- HERO --- */}
          <Section background="dark" className="relative py-20 lg:py-24">
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${heroBg})` }}
             />
             <div className="absolute inset-0 bg-gradient-overlay-dark" />
            
            <Container className="relative z-10">
              <div className="max-w-3xl space-y-6">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  About The Vadim Group
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  Built on European craftsmanship and a strong sense of responsibility. Bringing hands-on expertise and quality to every project.
                </p>
              </div>
            </Container>
          </Section>

          {/* --- STORY & PHILOSOPHY --- */}
          <Section spacing="lg">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="font-heading font-bold text-3xl text-brand-primary">Our Story</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Vadim Group was founded on a simple premise: doing things right. Vadim brings hands-on expertise and a commitment to quality to every project, whether it’s a home, boat, or RV.
                  </p>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Clients choose us because we arrive when promised, work efficiently, and deliver clean, precise results.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="font-heading font-bold text-2xl text-brand-primary mb-4">Our Philosophy</h3>
                    <blockquote className="pl-4 border-l-4 border-brand-accent italic text-text-secondary">
                      "We believe repairs should be done correctly the first time. No shortcuts. No temporary patches that create new problems later."
                    </blockquote>
                  </div>
                </div>
                
                <div className="relative">
                   <div className="aspect-[4/3] bg-surface-subtle rounded-lg overflow-hidden shadow-xl border border-border-light">
                      <img src={heroBg} alt="Vadim at work" className="w-full h-full object-cover" />
                   </div>
                   {/* Decorative element */}
                   <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-full -z-10" />
                   <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-primary/5 rounded-full -z-10" />
                </div>
              </div>
            </Container>
          </Section>

          {/* --- WHAT CLIENTS APPRECIATE --- */}
          <Section spacing="lg" background="subtle">
            <Container>
              <h2 className="font-heading font-bold text-3xl text-center text-brand-primary mb-12">
                What Clients Appreciate Most
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: "Reliability", desc: "Punctuality and consistent communication." },
                  { icon: Award, title: "Workmanship", desc: "Detailed, high-skill execution." },
                  { icon: HeartHandshake, title: "Trust", desc: "Thoughtful problem-solving and long-term relationships." }
                ].map((item, i) => (
                  <div key={i} className="bg-surface p-8 rounded-lg shadow-sm text-center border border-border-light hover:-translate-y-1 transition-transform duration-300">
                    <div className="mx-auto h-16 w-16 bg-brand-primary/5 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="h-8 w-8 text-brand-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* --- PORTFOLIO --- */}
          <Section spacing="lg">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-brand-accent font-semibold tracking-[0.08em] text-base uppercase block mb-3">
                  OUR PORTFOLIO
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                  Recent Projects
                </h2>
                <p className="text-xl text-text-secondary">
                  Quality craftsmanship across homes, boats, and RVs
                </p>
              </div>

              <PortfolioTabs />
            </Container>
          </Section>

          {/* --- CTA --- */}
          <Section spacing="lg" className="text-center">
            <Container size="md">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-primary mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-text-secondary mb-10">
                If you value precision, responsibility, and clear communication, Vadim Group is the right partner for your repair and restoration needs.
              </p>
              <Button asChild variant="accent" size="lg" className="text-lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Container>
          </Section>

        </div>
      )}
    </PageTemplate>
  );
};
