import { ClipboardList, Eye, FileText, Wrench, Sparkles, MessageCircle } from "lucide-react";

const About = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "1",
      title: "Request & Assessment",
      description: "You send details or photos of the problem, and we review the situation.",
    },
    {
      icon: Eye,
      number: "2",
      title: "On-Site Inspection",
      description: "We visit your property, boat, or RV to identify the true root cause.",
    },
    {
      icon: FileText,
      number: "3",
      title: "Clear Estimate",
      description: "You receive a clear, transparent estimate with no hidden costs.",
    },
    {
      icon: Wrench,
      number: "4",
      title: "Repair & Restoration",
      description: "Work is done correctly the first time, using appropriate materials and methods.",
    },
    {
      icon: Sparkles,
      number: "5",
      title: "Cleanup & Quality Review",
      description: "The workspace is left clean, and the result is reviewed together.",
    },
    {
      icon: MessageCircle,
      number: "6",
      title: "Follow-Up",
      description: "We remain available for questions and future support.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">
              Our Process
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            How Our Repair Process Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A straightforward, professional approach to every repair project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-card border-2 border-card-border hover:border-secondary/40 rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2">
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-premium">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-500">
                    <step.icon className="h-7 w-7 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
