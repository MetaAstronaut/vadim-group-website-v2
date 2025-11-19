import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";
const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ["Home Repair", "Commercial", "Marine & RV"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: `url(${homeRepairsHero})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-primary-dark/85" />
        <div className="absolute inset-0 bg-texture-noise opacity-30" />
      </div>

      {/* Animated accent elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-32 left-1/3 w-[500px] h-[500px] bg-secondary-glow/8 rounded-full blur-[140px]" />

      <div className="relative z-10 container-custom px-6 py-32 lg:py-40">
        {/* Asymmetric layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content - takes more space */}
          <div className="lg:col-span-7 space-y-8">
            {/* Premium badge */}
            

            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              We Make Every Space Feel Like
              <span className="block text-secondary-glow mt-2">Home</span>
            </h1>

            {/* Decorative line */}
            <div className="py-2">
              <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-transparent" />
            </div>

            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl">
              Premium{" "}
              <span key={currentText} className="font-semibold text-secondary-glow transition-all duration-700 inline-block animate-fade-in">
                {rotatingTexts[currentText]}
              </span>{" "}
              Services
            </p>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Serving Orlando's most discerning clients with unparalleled craftsmanship
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-10 py-7 h-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                Emergency Service
              </Button>
            </div>
          </div>

          {/* Right side - Stats card with premium design */}
          <div className="lg:col-span-5 space-y-6">
            
            
            {/* Trust indicators */}
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>;
};
export default Hero;