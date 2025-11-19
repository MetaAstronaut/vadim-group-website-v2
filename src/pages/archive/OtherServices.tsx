import Header from "@/components/archive/Header";
import Footer from "@/components/archive/Footer";
import { Button } from "@/components/archive/ui/button";
import {
  Building2,
  Paintbrush,
  Lightbulb,
  AlertCircle,
  Ship,
  Wrench,
  Droplet,
  Armchair,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const OtherServices = () => {
  const commercialServices = [
    {
      icon: Building2,
      name: "Office renovations and updates",
      accent: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: Building2,
      name: "Retail space design and build-outs",
      accent: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: Paintbrush,
      name: "Commercial painting and flooring",
      accent: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: AlertCircle,
      name: "Emergency repair services",
      accent: "from-blue-500/20 to-blue-600/5",
    },
  ];

  const marineServices = [
    {
      icon: Ship,
      name: "Interior cabin repairs and upgrades",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Sparkles,
      name: "Gel coat repair and restoration",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Ship,
      name: "Teak and wood refinishing",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Armchair,
      name: "Upholstery repair and replacement",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Lightbulb,
      name: "Electrical system troubleshooting",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Droplet,
      name: "Plumbing repairs",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Wrench,
      name: "Structural repairs",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
    {
      icon: Sparkles,
      name: "Cosmetic restoration",
      accent: "from-cyan-500/20 to-cyan-600/5",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-dark/90" />
        <div className="absolute inset-0 bg-texture-noise opacity-20" />

        {/* Decorative accent elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-1/3 w-[500px] h-[500px] bg-secondary-glow/8 rounded-full blur-[140px]" />

        <div className="container-custom text-center px-6 relative z-10 py-32">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
            Specialized Services
          </h1>

          {/* Decorative line */}
          <div className="py-2 mb-6 flex justify-center">
            <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-transparent" />
          </div>

          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed font-light">
            Professional solutions for your business and recreational vehicles
          </p>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-32 left-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          {/* Section header - asymmetric design */}
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">
                Commercial Solutions
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Commercial & Business Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Your business environment impacts productivity, brand perception,
              and customer experience. The Vadim Group provides comprehensive
              commercial repair and renovation services.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
            {commercialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card with premium styling */}
                  <div className="relative h-full bg-card border-2 border-card-border hover:border-secondary/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-50">
                      <div
                        className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.accent} rounded-bl-3xl`}
                      />
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${service.accent} flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-500`}
                      >
                        <Icon className="h-7 w-7 text-blue-500 relative z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Marine & RV Services Section */}
      <section className="section-padding bg-muted/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          {/* Section header - asymmetric design */}
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">
                Marine & RV
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Marine & RV Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether it's your weekend escape or your home on wheels, we
              provide specialized repair and maintenance services for boats and
              RVs.
            </p>
          </div>

          {/* Services grid - staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
            {marineServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${index % 4 === 1 ? "lg:mt-8" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card with premium styling */}
                  <div className="relative h-full bg-card border-2 border-card-border hover:border-secondary/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-50">
                      <div
                        className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.accent} rounded-bl-3xl`}
                      />
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${service.accent} flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-500`}
                      >
                        <Icon className="h-7 w-7 text-cyan-500 relative z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden border-t border-border/40">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]" />

        <div className="container-custom text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us for specialized service consultation tailored to your
            unique needs.
          </p>
          <Button
            size="lg"
            className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
          >
            Email Us
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherServices;
