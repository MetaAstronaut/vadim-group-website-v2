import Header from "@/components/archive/Header";
import Hero from "@/components/archive/Hero";
import Services from "@/components/archive/Services";
import AboutVadimGroup from "@/pages/archive/AboutVadimGroup";
import About from "@/pages/archive/About";
import Testimonials from "@/components/archive/Testimonials";
import CTA from "@/components/archive/CTA";
import Footer from "@/components/archive/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutVadimGroup />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
