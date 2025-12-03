import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Share2, Target, PenTool, Mail, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that bring organic traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand across all social platforms.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with precision-targeted paid campaigns that convert.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Tell your story with compelling content that resonates with your audience.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Make informed decisions with comprehensive data analysis and reporting.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Grow Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your brand and achieve measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 hover-lift group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
