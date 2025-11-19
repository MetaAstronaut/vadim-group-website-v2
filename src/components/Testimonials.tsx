import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah M.",
      initials: "SM",
      avatar: null,
      text: "Vadim and his team transformed our dated kitchen into a modern masterpiece. The attention to detail was incredible, and they stayed on budget and on schedule. Highly recommend!",
      date: "2024-03-15",
      rating: 5,
      color: "bg-orange-500",
    },
    {
      name: "Robert L.",
      initials: "RL",
      avatar: null,
      text: "After storm damage left our roof leaking, The Vadim Group responded immediately. They not only fixed the emergency but identified other potential issues we hadn't noticed. True professionals.",
      date: "2024-02-28",
      rating: 5,
      color: "bg-red-500",
    },
    {
      name: "Jennifer K.",
      initials: "JK",
      avatar: null,
      text: "I've used The Vadim Group for everything from minor repairs to a complete office renovation. Consistent quality, fair pricing, and great communication every time.",
      date: "2024-01-20",
      rating: 5,
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real reviews from Google Business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            const shouldTruncate = testimonial.text.length > 150;
            const displayText = isExpanded || !shouldTruncate 
              ? testimonial.text 
              : testimonial.text.slice(0, 150) + "...";

            return (
              <Card
                key={testimonial.name}
                className="transition-all duration-300 p-6"
              >
                <CardContent className="p-0">
                  {/* Google Icon */}
                  <div className="absolute top-6 right-6 opacity-100">
                    <GoogleIcon />
                  </div>

                  {/* Header with Avatar and Name */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className={`${testimonial.color} w-12 h-12 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0`}>
                      {testimonial.initials}
                    </div>
                    
                    {/* Name and Date */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground/80 leading-relaxed mb-2 text-base">
                    {displayText}
                  </p>

                  {/* Read More Button */}
                  {shouldTruncate && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="text-secondary hover:text-secondary-glow text-sm font-medium transition-colors"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
