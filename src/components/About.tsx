import { Award, Users, ThumbsUp, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Years of hands-on experience across multiple trades",
    },
    {
      icon: ThumbsUp,
      title: "Quality Guaranteed",
      description: "We stand behind every job with our satisfaction guarantee",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time, on-budget, and always professional",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision and satisfaction are our top priorities",
    },
  ];

  return (
    <section className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">Our Values</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-8">Experience You Can Trust</h2>
          <div className="divider-elegant"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
            The Vadim Group combines traditional craftsmanship with modern techniques to deliver
            exceptional results across all repair disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mx-auto mb-8 w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <value.icon className="h-11 w-11 text-secondary transition-transform group-hover:scale-110 duration-500" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{value.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
