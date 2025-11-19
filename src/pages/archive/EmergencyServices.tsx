import { Button } from "@/components/archive/ui/button";
import { Card, CardContent } from "@/components/archive/ui/card";
import { Input } from "@/components/archive/ui/input";
import { Textarea } from "@/components/archive/ui/textarea";
import { Droplets, Wrench, Home, Shield, AlertTriangle } from "lucide-react";
import Header from "@/components/archive/Header";
import Footer from "@/components/archive/Footer";

const EmergencyServices = () => {
  const emergencyServices = [
    {
      icon: Droplets,
      title: "Water Damage & Flooding",
      description: "Immediate water extraction and damage mitigation",
    },
    {
      icon: Wrench,
      title: "Burst Pipes & Plumbing",
      description: "Emergency plumbing repairs to stop water damage",
    },
    {
      icon: Home,
      title: "Storm Structural Damage",
      description: "Emergency structural repairs and stabilization",
    },
    {
      icon: Shield,
      title: "Emergency Board-Up",
      description: "Secure your property after break-ins or damage",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/40 via-primary-dark/85 to-primary-dark/90" />
        <div className="absolute inset-0 bg-texture-noise opacity-20" />

        {/* Decorative accent elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10 text-center px-4 py-32">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
            <span className="text-secondary-glow">24/7</span> Emergency Repair
            Services
          </h1>

          {/* Decorative line */}
          <div className="flex items-center gap-4 py-2 justify-center mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>

          <p className="text-2xl text-white/90 mb-8 font-light">
            We're Here When You Need Us Most
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Submit your emergency request below and we'll respond immediately
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <p className="text-xl text-center max-w-4xl mx-auto text-muted-foreground font-light leading-relaxed">
            Home emergencies don't wait for convenient times. That's why The
            Vadim Group offers rapid-response emergency repair services for
            critical issues that can't wait.
          </p>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="mb-16">
            <div className="flex items-start gap-8 flex-col md:flex-row md:items-center">
              <div className="flex-1">
                <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
                  Emergency Services We Provide
                </h2>
                <p className="text-xl text-muted-foreground font-light">
                  Fast response when minutes matter
                </p>
              </div>
              <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-secondary md:self-end mb-6" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card
                key={index}
                className="group relative border-2 border-card-border hover:border-destructive/40 bg-card hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-destructive/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-16 h-16 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <service.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-gradient-to-b from-muted/30 via-destructive/5 to-muted/30 border-y border-destructive/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-noise opacity-5" />
        <div className="container-custom relative z-10">
          <div className="flex items-start gap-6 max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-2xl border-2 border-destructive/20">
            <AlertTriangle className="w-10 h-10 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-3xl font-bold mb-3 text-foreground">
                Important Note About Emergencies
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you're experiencing a life-threatening emergency (gas leak,
                electrical fire, severe flooding), please contact 911
                immediately. Once the immediate danger is resolved, we're here
                to help with repairs and restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Request Form */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <div className="flex items-start gap-8 flex-col">
                <div className="flex-1">
                  <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">
                    Request Emergency Service
                  </h2>
                  <p className="text-xl text-muted-foreground font-light">
                    Fill out the form below and we'll respond immediately
                  </p>
                </div>
                <div className="h-[2px] w-32 bg-gradient-to-r from-secondary-glow to-secondary" />
              </div>
            </div>

            <Card className="border-2 border-card-border shadow-premium-lg">
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        required
                        className="h-12 border-2 border-input focus:border-secondary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12 border-2 border-input focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="address"
                      className="text-sm font-medium text-foreground"
                    >
                      Property Address *
                    </label>
                    <Input
                      id="address"
                      placeholder="123 Main St, Orlando, FL 32801"
                      required
                      className="h-12 border-2 border-input focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="emergency-type"
                      className="text-sm font-medium text-foreground"
                    >
                      Type of Emergency *
                    </label>
                    <Input
                      id="emergency-type"
                      placeholder="e.g., Burst pipe, Electrical issue"
                      required
                      className="h-12 border-2 border-input focus:border-secondary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium text-foreground"
                    >
                      Emergency Description *
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Please describe the emergency in detail..."
                      required
                      className="min-h-[150px] resize-none border-2 border-input focus:border-secondary transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-destructive hover:bg-destructive/90 text-white h-14 text-lg font-semibold shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    REQUEST EMERGENCY SERVICE
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    We'll respond to your request as quickly as possible
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyServices;
