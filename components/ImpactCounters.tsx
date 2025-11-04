"use client"

import { useEffect, useState, useRef } from "react";
import { Leaf, Users, MapPin } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const increment = end / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="text-4xl md:text-6xl font-heading font-bold text-primary animate-counter">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const ImpactCounters = () => {
  const impacts = [
    {
      icon: Leaf,
      value: 350,
      suffix: "T",
      label: "CO₂ Emissions Saved",
      description: "Equivalent to 70 cars off the road",
    },
    {
      icon: Users,
      value: 1250,
      suffix: "+",
      label: "Riders Onboard",
      description: "Growing community across Rwanda",
    },
    {
      icon: MapPin,
      value: 2.5,
      suffix: "M",
      label: "Kilometers Powered",
      description: "Clean miles driven on VoltSol",
    },
  ];

  return (
    <section id="mission" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-primary-glow">Mission</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Making a real difference in Rwanda&apos;s transportation landscape.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary-glow" />
                </div>
                <Counter end={impact.value} suffix={impact.suffix} />
                <div className="text-xl font-heading font-semibold mt-3 mb-2">
                  {impact.label}
                </div>
                <p className="text-secondary-foreground/70 text-sm">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Goal Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary-glow/10 to-accent/10 border-2 border-primary/20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Target: 5,000 Riders by 2027
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Help us reach our goal of 1,250 tons of CO₂ saved annually and create sustainable jobs for hundreds of Rwandans.
            </p>
            <div className="w-full bg-secondary-foreground/10 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000"
                style={{ width: '25%' }}
              />
            </div>
            <div className="text-sm text-secondary-foreground/70 mt-2">25% of target achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;
