import { useState, useMemo } from "react";
/* import Header from "@/components/archive/Header";
import Footer from "@/components/archive/Footer"; */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/archive/ui/card";
import { Badge } from "@/components/archive/ui/badge";
import { Button } from "@/components/archive/ui/button";
import { Clock } from "lucide-react";
import diyRepairsImg from "@/assets/blog/diy-repairs.jpg";
import foundationProblemsImg from "@/assets/blog/foundation-problems.jpg";
import repairCostsImg from "@/assets/blog/repair-costs.jpg";
import seasonalMaintenanceImg from "@/assets/blog/seasonal-maintenance.jpg";
import repairVsReplaceImg from "@/assets/blog/repair-vs-replace.jpg";
import warrantyInsuranceImg from "@/assets/blog/warranty-insurance.jpg";
import commonRepairsImg from "@/assets/blog/common-repairs.jpg";
import chooseContractorImg from "@/assets/blog/choose-contractor.jpg";
import emergencyRepairsImg from "@/assets/blog/emergency-repairs.jpg";
import homeValueRoiImg from "@/assets/blog/home-value-roi.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const articles = [
    {
      id: 1,
      title: "10 Home Repairs You Should Never DIY",
      description:
        "Some repairs require professional expertise. Learn which projects to leave to the experts to avoid costly mistakes and safety hazards.",
      category: "Home Repairs",
      readingTime: "5 min",
      image: diyRepairsImg,
    },
    {
      id: 2,
      title:
        "How to Identify Foundation Problems Before They Become Catastrophic",
      description:
        "Early detection can save thousands. Discover the warning signs of foundation issues and when to call a professional.",
      category: "Structural",
      readingTime: "7 min",
      image: foundationProblemsImg,
    },
    {
      id: 3,
      title: "The True Cost of Delaying Home Repairs: A Breakdown",
      description:
        "Understanding how small problems become expensive disasters. Real examples of repair costs over time.",
      category: "Home Maintenance",
      readingTime: "4 min",
      image: repairCostsImg,
    },
    {
      id: 4,
      title: "Seasonal Home Maintenance Checklist for Every Homeowner",
      description:
        "Stay ahead of problems with our comprehensive seasonal maintenance guide for Florida homes.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: seasonalMaintenanceImg,
    },
    {
      id: 5,
      title: "When to Repair vs. Replace: A Guide for Major Home Systems",
      description:
        "Making smart decisions about your HVAC, roof, appliances, and more. Cost comparisons and lifespan expectations.",
      category: "Home Systems",
      readingTime: "8 min",
      image: repairVsReplaceImg,
    },
    {
      id: 6,
      title: "Understanding Home Warranty vs. Homeowners Insurance",
      description:
        "Know what's covered and what's not. Essential information every homeowner needs.",
      category: "Insurance",
      readingTime: "5 min",
      image: warrantyInsuranceImg,
    },
    {
      id: 7,
      title: "The Most Common Home Repairs and How to Prevent Them",
      description:
        "Prevention is cheaper than repair. Learn how to avoid the most frequent home issues.",
      category: "Home Maintenance",
      readingTime: "6 min",
      image: commonRepairsImg,
    },
    {
      id: 8,
      title: "How to Choose a Contractor: Red Flags and Green Lights",
      description:
        "Protect yourself from scams and ensure quality work. What to look for when hiring professionals.",
      category: "Tips & Advice",
      readingTime: "5 min",
      image: chooseContractorImg,
    },
    {
      id: 9,
      title: "Emergency Home Repairs: What to Do Before Help Arrives",
      description:
        "Quick actions that can minimize damage during plumbing leaks, power outages, and other emergencies.",
      category: "Emergency",
      readingTime: "4 min",
      image: emergencyRepairsImg,
    },
    {
      id: 10,
      title: "Increasing Home Value: Which Repairs Give the Best ROI?",
      description:
        "Smart investments for homeowners. Which repairs and improvements offer the highest return.",
      category: "Home Value",
      readingTime: "6 min",
      image: homeValueRoiImg,
    },
  ];

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(articles.map((article) => article.category)),
    );
    return ["All", ...uniqueCategories];
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") {
      return articles;
    }
    return articles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Home Repairs": "bg-primary/10 text-primary border-primary/20",
      Structural: "bg-destructive/10 text-destructive border-destructive/20",
      "Home Maintenance":
        "bg-secondary/10 text-secondary-foreground border-secondary/20",
      "Home Systems": "bg-accent text-accent-foreground border-accent/20",
      Insurance: "bg-muted text-foreground border-border",
      "Tips & Advice": "bg-primary/10 text-primary border-primary/20",
      Emergency: "bg-destructive/10 text-destructive border-destructive/20",
      "Home Value":
        "bg-secondary/10 text-secondary-foreground border-secondary/20",
    };
    return colors[category] || "bg-muted text-foreground border-border";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-dark/90" />
          <div className="absolute inset-0 bg-texture-noise opacity-20" />

          {/* Animated accent elements */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-32 right-1/3 w-[400px] h-[400px] bg-secondary-glow/8 rounded-full blur-[140px]" />

          <div className="container-custom text-center px-4 py-32 relative z-10">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
              Blog & Resources
            </h1>

            {/* Decorative line */}
            <div className="flex items-center gap-4 py-2 justify-center mb-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
              <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
            </div>

            <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto font-light leading-relaxed">
              Expert tips, guides, and insights to help you maintain and improve
              your property
            </p>
          </div>
        </section>

        {/* Category Filter & Blog Grid */}
        <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-glow/5 rounded-full blur-[100px]" />

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center gap-4 mb-2 justify-center">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
                <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
                <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Explore Our Articles
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Filter by category to find exactly what you need
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-secondary hover:bg-secondary-light text-white border-0 shadow-premium-lg hover:shadow-premium-xl"
                      : "border-2 border-card-border hover:border-secondary/40 hover:bg-card/50 shadow-md hover:shadow-premium-lg"
                  } hover:-translate-y-1`}
                >
                  {category}
                </Button>
              ))}
            </div>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-card-border hover:border-secondary/40 bg-card/50 backdrop-blur-sm shadow-premium-lg hover:shadow-premium-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-secondary to-transparent" />
                      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-secondary to-transparent" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium px-3 py-1"
                      >
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {article.readingTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-snug group-hover:text-secondary transition-colors font-semibold">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
