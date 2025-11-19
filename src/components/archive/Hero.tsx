import { Button } from "@/components/archive/ui/button";
import { ArrowRight } from "lucide-react";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeRepairsHero})`,
        }}
      >
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
              Precision Home Repairs
              <span className="block text-secondary-glow mt-2">Done Right the First Time</span>
            </h1>

            {/* Decorative line */}
            <div className="py-2">
              <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-transparent" />
            </div>

            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl">
              Fast, reliable, European-quality repair and restoration for homes, boats, and RVs in the Orlando area.
            </p>

            <ul className="space-y-3 text-lg text-white/90">
              <li className="flex items-start gap-3">
                <span className="text-secondary-glow mt-1">✓</span>
                <span>On-time arrival and reliable scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-glow mt-1">✓</span>
                <span>High-skill craftsmanship and clean results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-glow mt-1">✓</span>
                <span>Transparent communication and fair pricing</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                size="lg"
                className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
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
    </section>
  );
};
export default Hero;
