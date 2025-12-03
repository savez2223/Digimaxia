import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Palette, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Design and build fast, responsive, SEO-friendly websites tailored to your brand and goals. From landing pages to full-scale web apps, we ship production-ready UI.",
    features: [
      "Custom UI & Frontend",
      "Responsive & SEO-ready",
      "CMS & Headless Integration",
      "Performance Optimization",
      "Deployment & Maintenance",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "End-to-end mobile and web app development with modern stacks. Scalable architecture, clean code, and smooth user experiences across platforms.",
    features: [
      "iOS/Android & PWA",
      "API & Auth Integration",
      "State & Data Layer",
      "CI/CD & Testing",
      "Analytics & Crash Reporting",
    ],
  },
  {
    icon: Palette,
    title: "Designing",
    description:
      "Brand-first design systems and UX/UI that convert. Get cohesive visuals across web, app, and marketing touchpoints.",
    features: [
      "Brand Identity & Styleguide",
      "Wireframes & Prototypes",
      "UI Kits & Design Systems",
      "Illustrations & Icons",
      "Marketing Creatives",
    ],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive
              <span className="gradient-text"> Digital Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              From strategy to execution, we provide end-to-end digital
              marketing services that drive growth and deliver measurable
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="gradient" className="group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass-card p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your goals and find the perfect combination of
                services for your business.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="group">
                  Schedule a Consultation
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

export default Services;
