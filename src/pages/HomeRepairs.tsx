import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/home-repairs-hero.jpg";
import { CheckCircle2, ClipboardCheck, FileText, Calendar, Wrench, Handshake, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HomeRepairs = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We'll get back to you within 24 hours."
    });
    setIsContactOpen(false);
  };

  const interiorServices = [
    { name: "Drywall Repair & Installation", desc: "Fixing holes, cracks, water damage, and texture matching" },
    { name: "Painting Services", desc: "Interior and exterior painting, color consultation, and specialty finishes" },
    { name: "Flooring Repair", desc: "Hardwood refinishing, tile replacement, carpet repair, and vinyl installation" },
    { name: "Door Repairs", desc: "Fixing squeaky hinges, alignment issues, lock installation, and door replacement" },
    { name: "Window Repairs", desc: "Broken glass replacement, seal repairs, weatherproofing, and frame restoration" },
    { name: "Ceiling Repairs", desc: "Water stain removal, popcorn ceiling removal, and crack repair" },
    { name: "Baseboard & Trim", desc: "Installation, replacement, and custom millwork" }
  ];

  const exteriorServices = [
    { name: "Siding Repair", desc: "Vinyl, wood, and fiber cement siding repair and replacement" },
    { name: "Gutter Services", desc: "Cleaning, repair, installation, and gutter guard systems" },
    { name: "Deck & Patio", desc: "Wood and composite deck repair, staining, sealing, and structural reinforcement" },
    { name: "Fence Repair", desc: "Post replacement, panel repair, gate adjustment, and staining" },
    { name: "Pressure Washing", desc: "House washing, driveway cleaning, deck restoration, and surface preparation" },
    { name: "Weatherproofing", desc: "Sealing, caulking, insulation upgrades, and moisture barrier installation" }
  ];

  const kitchenBathroom = [
    { name: "Plumbing Fixes", desc: "Faucet repair, leak fixes, drain cleaning, and toilet repairs" },
    { name: "Cabinet Repair", desc: "Hinge replacement, drawer repair, refinishing, and hardware upgrades" },
    { name: "Countertop Repair", desc: "Chip repair, seam repair, resealing, and minor crack fixes" },
    { name: "Tile & Grout", desc: "Tile replacement, grout repair and recoloring, caulking, and waterproofing" },
    { name: "Appliance Installation", desc: "Dishwasher, garbage disposal, range hood, and built-in appliance installation" }
  ];

  const electricalRepairs = [
    { name: "Outlet and Switch Replacement", desc: "Upgrading outlets, dimmer switches, and USB outlets" },
    { name: "Light Fixture Installation", desc: "Installing and upgrading interior and exterior lighting" },
    { name: "Ceiling Fan Installation and Repair", desc: "Professional installation, balancing, and repair services" },
    { name: "GFCI Outlet Installation", desc: "Safety outlet installation for wet areas" },
    { name: "Smoke Detector Installation", desc: "Comprehensive electrical system evaluation" }
  ];

  const structuralFoundation = [
    { name: "Foundation Crack Repair", desc: "Fixing cracks and preventing water intrusion" },
    { name: "Settling Issues Assessment", desc: "Professional evaluation of structural settling" },
    { name: "Load-Bearing Wall Modifications", desc: "Safe alterations to structural walls" },
    { name: "Beam and Joist Reinforcement", desc: "Strengthening structural support systems" },
    { name: "Structural Inspection Services", desc: "Detailed assessment of home structural integrity" }
  ];

  const hvacClimate = [
    { name: "Vent Repair and Cleaning", desc: "Ductwork maintenance and airflow optimization" },
    { name: "Thermostat Installation", desc: "Smart and programmable thermostat setup" },
    { name: "Ductwork Repair", desc: "Sealing leaks and improving system efficiency" },
    { name: "Insulation Installation", desc: "Enhancing energy efficiency and comfort" },
    { name: "Weatherstripping and Draft Prevention", desc: "Sealing air leaks around doors and windows" }
  ];

  const monthlyTasks = [
    "Test smoke and carbon monoxide detectors",
    "Check for plumbing leaks under sinks and around toilets",
    "Clean or replace HVAC filters",
    "Inspect weatherstripping around doors and windows",
    "Test GFCI outlets"
  ];

  const quarterlyTasks = [
    "Clean gutters and downspouts",
    "Inspect roof for damaged shingles",
    "Check caulking around tubs, showers, and sinks",
    "Test garage door safety features",
    "Inspect foundation for cracks"
  ];

  const annualTasks = [
    "Service HVAC system",
    "Inspect and clean chimney and fireplace",
    "Check attic and basement for moisture and pests",
    "Test sump pump (if applicable)",
    "Inspect exterior paint and siding",
    "Service water heater",
    "Check deck and patio for structural issues"
  ];

  const biannualTasks = [
    "Deep clean carpets and upholstery",
    "Inspect and service septic system",
    "Reseal driveway and walkways",
    "Inspect and treat wood for termites"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Home Repair Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/85" />
          <div className="absolute inset-0 bg-texture-noise opacity-20" />
        </div>
        
        {/* Decorative accent elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 left-1/3 w-[500px] h-[500px] bg-secondary-glow/8 rounded-full blur-[140px]" />
        
        <div className="container-custom relative z-10 text-center px-6 py-32 lg:py-40">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
            Comprehensive Home Repair Services
          </h1>
          
          {/* Decorative line */}
          <div className="py-2 mb-6 flex justify-center">
            <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-transparent" />
          </div>
          
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
            Your Trusted Partner for Every Home Repair Need
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">Expert Solutions</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Professional Repair Services for Every Part of Your Home
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              At The Vadim Group, we understand that your home is more than just a building – it's where life happens. From small fixes to major repairs, our skilled professionals deliver quality craftsmanship and reliable solutions that keep your home safe, comfortable, and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">Full Service</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Home Repair Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Click any category to explore our comprehensive repair services
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="interior" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Interior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {interiorServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exterior" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Exterior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {exteriorServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kitchen" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Kitchen & Bathroom
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {kitchenBathroom.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="electrical" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Electrical
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {electricalRepairs.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="structural" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Structural & Foundation
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {structuralFoundation.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hvac" className="border-2 border-card-border bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:border-secondary/40">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  HVAC & Climate Control
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {hvacClimate.map((service, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Home Maintenance Guide */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">Maintenance</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Home Maintenance Guide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Regular maintenance can prevent costly repairs and extend the life of your home's systems and structures
              </p>
            </div>
            
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="biannual">Every 2-3 Years</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Tasks</CardTitle>
                    <CardDescription>Essential checks to perform every month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {monthlyTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quarterly">
                <Card>
                  <CardHeader>
                    <CardTitle>Quarterly Tasks</CardTitle>
                    <CardDescription>Important maintenance every 3 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {quarterlyTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="annual">
                <Card>
                  <CardHeader>
                    <CardTitle>Annual Tasks</CardTitle>
                    <CardDescription>Comprehensive yearly maintenance checklist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {annualTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="biannual">
                <Card>
                  <CardHeader>
                    <CardTitle>Every 2-3 Years</CardTitle>
                    <CardDescription>Long-term maintenance for optimal home care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {biannualTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">Our Process</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
                How We Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our streamlined process ensures your repair project is handled professionally from start to finish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <ClipboardCheck className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Consultation & Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We listen carefully to understand your needs, inspect the issue thoroughly, and provide honest recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>Detailed Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You'll receive a clear, itemized estimate with no hidden fees. We explain every line item so you understand exactly what you're paying for.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work around your schedule. Whether you need evening or weekend service, we accommodate your availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <CardTitle>Expert Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our skilled professionals complete your repair using quality materials and proven techniques. We keep you updated throughout the project.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">5</span>
                  </div>
                  <CardTitle>Quality Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We inspect every detail to ensure the repair meets our high standards. Your satisfaction is our priority.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative group hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">6</span>
                  </div>
                  <CardTitle>Follow-Up Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand behind our work. After completion, we check in to ensure everything is perfect and answer any questions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex items-center gap-4 mb-6 justify-center">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-sm uppercase tracking-[0.25em] text-secondary-dark font-semibold">Why Choose Us</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
                The Vadim Group Difference
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Why homeowners trust us for their repair and renovation projects
              </p>
            </div>
            
            <div className="space-y-8 mb-12">
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                We Deliver:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Tailored solutions that reflect your lifestyle and brand</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Sustainable materials and modern techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Flawless finishes that enhance comfort and value</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Transparent communication and project integrity</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Professionals with years of specialized experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Premium materials sourced from trusted suppliers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Code-compliant work that passes inspections</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Clean job sites with respect for your property</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden border-t border-border/40">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]" />
        
        <div className="container-custom text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Request your free estimate today and discover why homeowners trust The Vadim Group
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsContactOpen(true)}
            className="group bg-secondary hover:bg-secondary-light text-white border-0 text-base px-10 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
          >
            Request Free Estimate
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request Free Estimate</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your repair needs..." 
                className="min-h-[120px]"
                required 
              />
            </div>
            <Button type="submit" className="w-full">Send Request</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default HomeRepairs;
