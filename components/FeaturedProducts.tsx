import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Battery, Gauge, Zap } from "lucide-react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "VoltSol Urban Pro",
      category: "E-Bike",
      price: "RWF 1,000,000",
      leasePrice: "RWF 35,000/month",
      image: "/hero-ebike.jpg",
      badge: "Best Seller",
      specs: [
        { icon: Battery, label: "120km Range" },
        { icon: Gauge, label: "45km/h Top Speed" },
        { icon: Zap, label: "750W Motor" },
      ],
    },
    {
      id: 2,
      name: "VoltSol Delivery Max",
      category: "E-Bike",
      price: "RWF 1,200,000",
      leasePrice: "RWF 48,000/month",
      image: "/product-1.jpg",
      badge: "For Business",
      specs: [
        { icon: Battery, label: "150km Range" },
        { icon: Gauge, label: "50km/h Top Speed" },
        { icon: Zap, label: "1000W Motor" },
      ],
    },
    {
      id: 3,
      name: "Conversion Kit Pro",
      category: "Conversion Kit",
      price: "RWF 650,000",
      leasePrice: "RWF 18,000/month",
      image: "/conversion-kit.jpg",
      badge: "DIY Solution",
      specs: [
        { icon: Battery, label: "100km Range" },
        { icon: Gauge, label: "40km/h Top Speed" },
        { icon: Zap, label: "500W Motor" },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our range of e-bikes and conversion kits designed for Rwanda&apos;s roads.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={100}
                  height={100}
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{product.name}</h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {product.specs.map((spec, idx) => {
                    const Icon = spec.icon;
                    return (
                      <div key={idx} className="text-center p-2 bg-muted/50 rounded-lg">
                        <Icon className="h-4 w-4 mx-auto mb-1 text-primary" />
                        <div className="text-xs text-muted-foreground">{spec.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">
                    {product.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    or {product.leasePrice} lease-to-own
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-primary hover:bg-primary-glow group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
