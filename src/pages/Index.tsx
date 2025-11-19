import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutVadimGroup from "@/components/AboutVadimGroup";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
