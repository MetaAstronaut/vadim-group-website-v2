import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/archive/Header";
import Footer from "@/components/archive/Footer";
import { Button } from "@/components/archive/ui/button";
import { Input } from "@/components/archive/ui/input";
import { Textarea } from "@/components/archive/ui/textarea";
import { Label } from "@/components/archive/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/archive/ui/select";
import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2-4 business hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-dark/90" />
        <div className="absolute inset-0 bg-texture-noise opacity-20" />

        {/* Animated accent elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 right-1/3 w-[400px] h-[400px] bg-secondary-glow/8 rounded-full blur-[140px]" />

        <div className="container-custom text-center px-4 py-32 relative z-10">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
            Get in Touch
          </h1>

          {/* Decorative line */}
          <div className="flex items-center gap-4 py-2 justify-center mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>

          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your space? Contact us today for a free
            consultation and quote.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 p-10 shadow-premium">
              <h2 className="font-serif text-4xl font-bold mb-8 tracking-tight">
                Request a Free Quote
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className={`border-2 focus:border-secondary transition-colors ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className={`border-2 focus:border-secondary transition-colors ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(407) 555-0123"
                    className={`border-2 focus:border-secondary transition-colors ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={serviceType}
                    onValueChange={(value) => setValue("serviceType", value)}
                  >
                    <SelectTrigger
                      className={`border-2 focus:border-secondary transition-colors ${errors.serviceType ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-repairs">Home Repairs</SelectItem>
                      <SelectItem value="commercial">
                        Commercial Services
                      </SelectItem>
                      <SelectItem value="marine-rv">
                        Marine & RV Services
                      </SelectItem>
                      <SelectItem value="emergency">
                        Emergency Service
                      </SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-sm text-destructive">
                      {errors.serviceType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`border-2 focus:border-secondary transition-colors ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-secondary hover:bg-secondary-light text-white border-0 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-secondary to-secondary-glow" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Let's Connect
                </h2>
              </div>

              {/* Email */}
              <div className="space-y-3 bg-card/30 backdrop-blur-sm border-2 border-card-border rounded-xl p-6 hover:shadow-premium-lg transition-all duration-300 hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@thevadimgroup.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-3 bg-card/30 backdrop-blur-sm border-2 border-card-border rounded-xl p-6 hover:shadow-premium-lg transition-all duration-300 hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                    <p className="text-muted-foreground">
                      Sunday: Emergency Services Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="space-y-3 bg-card/30 backdrop-blur-sm border-2 border-card-border rounded-xl p-6 hover:shadow-premium-lg transition-all duration-300 hover:border-secondary/40">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                    <p className="text-muted-foreground">
                      We proudly serve Orlando and surrounding areas within a
                      50-mile radius. Contact us to confirm service availability
                      in your location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border-2 border-secondary/30 rounded-xl p-6 shadow-premium-lg">
                <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 2-4 business
                  hours during regular business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-2 justify-center">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
              <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
              Our Location
            </h2>

            <div className="border-2 border-card-border rounded-2xl overflow-hidden shadow-premium-lg mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95102373245!2d-81.81330678125!3d28.538336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orlando, FL Service Area Map"
              />
            </div>
            <div className="text-center text-muted-foreground bg-card/30 backdrop-blur-sm border-2 border-card-border rounded-xl p-6">
              <p className="mb-2 text-lg">
                📍 Serving Orlando, FL and surrounding areas
              </p>
              <p className="text-sm">
                50-mile service radius • Contact us to confirm your location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-glow/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <div className="flex items-center gap-4 mb-2 justify-center">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Why Choose The Vadim Group?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm border-2 border-card-border rounded-2xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 group">
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                ✓
              </div>
              <h3 className="font-semibold text-lg mb-3">Free Consultations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No-obligation quotes for all services
              </p>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm border-2 border-card-border rounded-2xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 group">
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                ⭐
              </div>
              <h3 className="font-semibold text-lg mb-3">5-Star Service</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Consistently rated excellent by our clients
              </p>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm border-2 border-card-border rounded-2xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 group">
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                🛡️
              </div>
              <h3 className="font-semibold text-lg mb-3">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Warranty on all workmanship
              </p>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm border-2 border-card-border rounded-2xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 group">
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                ⚡
              </div>
              <h3 className="font-semibold text-lg mb-3">Fast Response</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quick turnaround on all projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30 border-t border-border/40">
        <div className="container-custom text-center">
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            Ready to get started?
          </p>
          <Button
            size="lg"
            onClick={() => {
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-secondary hover:bg-secondary-light text-white border-0 shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            REQUEST A QUOTE
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
