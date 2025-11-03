import { Battery, DollarSign, Leaf, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const ValueProps = () => {
  const values = [
    {
      icon: DollarSign,
      title: "Save 60% on Fuel",
      description: "Lower your transport costs with electric power. Average savings of RWF 200,000 per year.",
      color: "text-accent",
    },
    {
      icon: Leaf,
      title: "Zero Emissions",
      description: "Join the green revolution. Every e-bike prevents 2.5 tons of CO₂ emissions annually.",
      color: "text-primary",
    },
    {
      icon: Battery,
      title: "Long-Lasting Battery",
      description: "Up to 120km range on a single charge. Fast charging in just 4-6 hours.",
      color: "text-primary-glow",
    },
    {
      icon: Zap,
      title: "Powerful & Reliable",
      description: "500W-1000W motors built for Rwanda's terrain. 2-year warranty included.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-gradient">VoltSol</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Affordable, sustainable, and built for the future of East African mobility.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 ${value.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
