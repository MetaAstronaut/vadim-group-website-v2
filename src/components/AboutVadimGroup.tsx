import { CheckCircle, Home, Building2, Ship, ClipboardList, AlertCircle, Calendar } from "lucide-react";
import vadimPortrait from "@/assets/vadim-portrait.jpg";
const AboutVadimGroup = () => {
  const promises = ["We listen first — understanding your needs and vision", "We work with precision — on time and on budget", "We deliver results that not only last but elevate how you live and work", "We stand behind our work with comprehensive warranties and guarantees"];
  const expertise = [{
    icon: Home,
    text: "Home renovations and custom builds"
  }, {
    icon: Building2,
    text: "Business and commercial remodeling"
  }, {
    icon: Ship,
    text: "Boat and RV maintenance and redesign"
  }, {
    icon: ClipboardList,
    text: "Full-service project management"
  }, {
    icon: AlertCircle,
    text: "Emergency repair services"
  }, {
    icon: Calendar,
    text: "Preventative maintenance programs"
  }];
  return <section className="section-padding bg-muted/20 relative overflow-hidden">
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
                <img src={vadimPortrait} alt="Vadim professional portrait" className="w-full h-auto object-cover" />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-6 -right-6 bg-card border-2 border-card-border rounded-2xl p-6 shadow-premium-lg backdrop-blur-sm">
                <div className="text-4xl font-bold text-secondary font-serif">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">About Us</span>
            </div>

            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About The Vadim Group
            </h2>
            
            <p className="text-2xl text-secondary-dark mb-8 font-semibold font-serif italic">
              Precision. Passion. Perfection.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              The Vadim Group is a multidisciplinary team of professionals who share a commitment to excellence. Whether renovating a home, upgrading a business space, or restoring a boat or RV, every project reflects our signature blend of quality craftsmanship and refined aesthetics.
            </p>
            
            <div className="space-y-10 mb-12">
              <h3 className="font-serif text-3xl font-semibold text-foreground">Our Promise</h3>
              <ul className="space-y-5">
                {promises.map((promise, index) => <li key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-secondary/20 transition-colors">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-base text-foreground/80 leading-relaxed">{promise}</span>
                  </li>)}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-semibold text-foreground">Our Expertise Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => {
                const Icon = item.icon;
                return <div key={index} className="flex items-start gap-3 p-5 bg-card/50 border border-card-border hover:border-secondary/30 rounded-xl hover:shadow-premium transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="text-sm text-foreground leading-relaxed pt-2">{item.text}</span>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutVadimGroup;