import { Home, Building2, Anchor } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/archive/ui/card";
const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Repairs & Restoration",
      description:
        "Your home deserves repairs that last, not quick fixes that create new problems later. We handle wall and ceiling repair, painting, trim, light structural corrections, drywall replacement, and deck/fence repairs.",
      accent: "from-secondary/20 to-secondary/5",
      link: "/repairs"
    },
    {
      icon: Anchor,
      title: "Marine & RV Repair Services",
      description:
        "Boats and RVs require the right materials, techniques, and attention to detail. We provide gelcoat repair, deck and cabin repairs, light electrical troubleshooting, and water damage treatment.",
      accent: "from-secondary-light/20 to-secondary-light/5",
      link: "/marine-rv"
    },
    {
      icon: Building2,
      title: "Emergency & Urgent Repairs",
      description:
        "Some issues cannot wait. We handle active leaks, storm damage, broken fixtures creating safety hazards, minor structural concerns, and urgent RV or boat issues with priority scheduling.",
      accent: "from-tertiary/20 to-tertiary/5",
      link: "/emergency"
    },
  ];
  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-32 left-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px]" />

      <div className="container-custom relative">
        {/* Section header - asymmetric design */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">
              What We Offer
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Detailed, high-quality repair and restoration work for homes, boats, and RVs
          </p>
        </div>

        {/* Services grid - staggered layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative ${index === 1 ? "lg:mt-12" : ""}`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card with premium styling */}
              <div className="relative h-full bg-card border-2 border-card-border hover:border-secondary/40 rounded-2xl p-10 transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-50">
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.accent} rounded-bl-3xl`}
                  />
                </div>

                {/* Icon */}
                <div className="relative mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.accent} flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-500`}
                  >
                    <service.icon className="h-8 w-8 text-secondary relative z-10" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-secondary group/link">
                  <span className="text-sm font-medium uppercase tracking-wider group-hover/link:text-secondary-dark transition-colors">
                    Learn More
                  </span>
                  <div className="w-8 h-[2px] bg-secondary group-hover/link:w-12 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-24 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for?
          </p>
          <button className="group inline-flex items-center gap-3 text-secondary hover:text-secondary-dark transition-colors">
            <span className="text-base font-semibold uppercase tracking-wider">
              View All Services
            </span>
            <div className="w-8 h-[2px] bg-secondary group-hover:w-12 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;
