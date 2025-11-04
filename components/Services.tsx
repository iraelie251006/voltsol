import { Bike, Wrench, Package, Headphones, PenTool, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Electric Bicycles (E-Bikes)",
      description: "Locally designed and assembled e-bikes for urban and rural transport.",
      color: "text-primary",
    },
    {
      icon: Wrench,
      title: "Bicycle Conversion Kits",
      description: "Kits that convert ordinary bicycles into electric-powered ones.",
      color: "text-accent",
    },
    {
      icon: Package,
      title: "Accessories & Spare Parts",
      description: "Batteries, motors, chargers, and other essential e-bike components.",
      color: "text-primary-glow",
    },
    {
      icon: Headphones,
      title: "Maintenance & After-Sales Services",
      description: "Repair, servicing, and customer support for e-bikes and conversions.",
      color: "text-primary",
    },
    {
      icon: PenTool,
      title: "Custom Design & Assembly",
      description: "Tailored e-bike models for delivery companies, schools, and organizations.",
      color: "text-accent",
    },
    {
      icon: GraduationCap,
      title: "E-Mobility Training (Planned)",
      description: "Technical training for youth and mechanics in e-bike assembly and maintenance.",
      color: "text-primary-glow",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive electric mobility solutions for individuals, businesses, and communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
