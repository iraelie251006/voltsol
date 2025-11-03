"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"
        >
          <Image 
          src="/hero-ebike.jpg" 
          alt="Hero-bike" 
          fill
          className="bg-cover bg-center bg-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Building sustainable mobility for Rwanda</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-up [animation-delay:0.1s] opacity-0">
            Affordable Electric Mobility{" "}
            <span className="text-gradient">Built for Rwanda</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:0.2s] opacity-0">
            VoltSol makes commuting cheaper, cleaner and faster—e-bikes, conversion kits, and fleet solutions for East Africa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up [animation-delay:0.3s] opacity-0">
            <Button size="lg" className="bg-primary hover:bg-primary-glow shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
            size="lg" 
            variant="outline" 
            className="border-2 hover:bg-primary/5" 
            onClick={() => window.open("/VoltSol Global Ltd pitch Deck.pdf", "_blank")}>
              <Download className="mr-2 h-5 w-5" />
              Investor Deck
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-up [animation-delay:0.4s] opacity-0">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">1,250+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Riders Onboard</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">350T</div>
              <div className="text-xs md:text-sm text-muted-foreground">CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">2.5M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Km Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
