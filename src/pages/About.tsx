import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy we create is focused on delivering measurable outcomes that impact your bottom line.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We treat every client as a partner and every project as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to give your brand a competitive edge.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great work happens when we work together. We believe in transparent communication and teamwork.",
  },
];

const team = [
  { name: "Alex Thompson", role: "Founder & CEO", initial: "A" },
  { name: "Jessica Wu", role: "Creative Director", initial: "J" },
  { name: "David Martinez", role: "Head of SEO", initial: "D" },
  { name: "Sarah Kim", role: "Social Media Lead", initial: "S" },
  { name: "Ryan Patel", role: "PPC Specialist", initial: "R" },
  { name: "Maya Johnson", role: "Content Strategist", initial: "M" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Story Behind
              <span className="gradient-text"> DigiSpark</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We're a team of passionate digital marketers, creatives, and strategists 
              dedicated to helping brands shine in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Spark to
                <span className="gradient-text"> Flame</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014, DigiSpark started with a simple belief: every brand deserves 
                to be seen. What began as a small team of three passionate marketers has grown 
                into a full-service digital marketing agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've helped over 500 businesses transform their digital presence, 
                from local startups to global enterprises. Our secret? We combine data-driven 
                strategies with creative excellence, always keeping your goals at the center of everything we do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be recognized as one of the leading digital marketing 
                agencies, but we've never lost the spark that started it all – the drive to 
                help your brand succeed.
              </p>
            </div>

            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative z-10 space-y-8">
                <div className="text-center p-6 border-b border-border/30">
                  <div className="text-5xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-6 border-b border-border/30">
                  <div className="text-5xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-5xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What We
              <span className="gradient-text"> Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-8 text-center hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the
              <span className="gradient-text"> Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of specialists brings together years of experience across 
              all areas of digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center hover-lift">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{member.initial}</span>
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
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
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We're always looking for talented individuals who share our passion for digital marketing.
              </p>
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="group">
                  Get in Touch
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

export default About;
