import { Check, Zap, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Results",
    description: "See measurable improvements in your digital presence within weeks, not months.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work with a passionate team of experts who treat your brand like their own.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 500 successful projects and counting, with industry-leading satisfaction rates.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your campaigns never miss a beat.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Success Is
              <span className="gradient-text"> Our Mission</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We don't just deliver services – we build partnerships. Our team combines creativity, 
              technology, and strategic thinking to help your brand thrive in the digital landscape.
            </p>

            <ul className="space-y-4">
              {["Data-driven strategies", "Transparent reporting", "Customized solutions", "Continuous optimization"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-card p-6 hover-lift ${index % 2 === 1 ? 'sm:mt-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
