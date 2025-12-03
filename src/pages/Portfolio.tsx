import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const categories = ["All", "SEO", "Social Media", "PPC", "Branding"];

const projects = [
  {
    title: "TechVision Rebrand",
    category: "Branding",
    description: "Complete digital rebrand for a tech startup, including website redesign and social media overhaul.",
    results: "+250% brand awareness",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "FreshBite SEO Campaign",
    category: "SEO",
    description: "Comprehensive SEO strategy for a food delivery service, achieving top rankings in competitive markets.",
    results: "+180% organic traffic",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "StyleHouse Social",
    category: "Social Media",
    description: "Multi-platform social media strategy for a fashion retailer, building an engaged community.",
    results: "500K+ followers gained",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "CloudSync PPC",
    category: "PPC",
    description: "Google Ads campaign for a SaaS company, optimizing cost per acquisition and conversion rates.",
    results: "-45% CPA reduction",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    title: "GreenLeaf Growth",
    category: "SEO",
    description: "Local SEO strategy for an eco-friendly products company, dominating regional search results.",
    results: "#1 rankings in 12 cities",
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "Luxe Living Social",
    category: "Social Media",
    description: "Premium content creation and influencer partnerships for a luxury real estate brand.",
    results: "3M+ impressions monthly",
    color: "from-amber-500/20 to-orange-500/20",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories That
              <span className="gradient-text"> Inspire</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of successful campaigns and see how we've helped 
              brands achieve extraordinary results.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card overflow-hidden hover-lift group cursor-pointer"
              >
                {/* Project Image Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10">{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-primary text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium">{project.results}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Happy Clients" },
              { value: "98%", label: "Success Rate" },
              { value: "$50M+", label: "Revenue Generated" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help your brand achieve extraordinary results.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
