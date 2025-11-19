import { CheckCircle } from "lucide-react";
import vadimPortrait from "@/assets/vadim-portrait.jpg";
const AboutVadimGroup = () => {
  const promises = [
    "Precision workmanship based on European standards",
    "Accurate diagnostics and long-lasting solutions",
    "Fast response for urgent situations",
    "Clean, organized workflow and minimal disruption",
    "Clear estimates with no hidden costs",
  ];
  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[140px]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Image side - offset for visual interest */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-tertiary/10 rounded-3xl blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl shadow-premium-xl">
                <img
                  src={vadimPortrait}
                  alt="Vadim professional portrait"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-6 -right-6 bg-card border-2 border-card-border rounded-2xl p-6 shadow-premium-lg backdrop-blur-sm">
                <div className="text-4xl font-bold text-secondary font-serif">
                  15+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Why Homeowners Choose The Vadim Group
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Vadim Group combines European craftsmanship with calm, professional service. Every project is handled with precision, responsibility, and respect for your home or vessel.
            </p>

            <div className="space-y-10 mb-8">
              <ul className="space-y-5">
                {promises.map((promise, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-secondary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-base text-foreground/80 leading-relaxed">
                      {promise}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                We handle every repair with calm urgency, professional care, and full responsibility.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutVadimGroup;
