import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0 bg-texture-noise opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-glow/10 rounded-full blur-[160px]" />
      
      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-glow to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Asymmetric layout */}
          <div className="text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-secondary-glow" />
                <span className="text-sm uppercase tracking-[0.3em] text-secondary-glow font-bold">Get In Touch</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1]">
                Ready to Get
                <span className="block text-secondary-glow">Started?</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl leading-relaxed">
                Contact us today for a free consultation and quote. We're ready to bring your vision to
                life with unparalleled craftsmanship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 lg:justify-start justify-center">
                <Button 
                  size="lg" 
                  className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-xl hover:shadow-premium-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group text-base px-10 py-7 h-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>

            {/* Trust card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-premium-xl">
                <h3 className="font-serif text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                {[
                  "Free consultations",
                  "Transparent pricing",
                  "24/7 emergency service",
                  "Satisfaction guaranteed"
                ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-secondary-glow" />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;