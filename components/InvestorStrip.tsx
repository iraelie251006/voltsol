"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, TrendingUp, Target, Users } from "lucide-react";
import Link from "next/link";

const InvestorStrip = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "RWF 45M",
      label: "Revenue Target 2027",
    },
    {
      icon: Target,
      value: "5,000",
      label: "Rider Goal by 2027",
    },
    {
      icon: Users,
      value: "5+",
      label: "Team Members",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="border-2 border-primary/20 overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Traction & Pitch */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium">Open for Investment</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Join Rwanda&apos;s{" "}
                <span className="text-gradient">Electric Revolution</span>
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                VoltSol is seeking <strong className="text-foreground">RWF 10,000,000</strong> to scale production, expand our shop network, and accelerate our path to 5,000 riders by 2027.
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="font-heading font-bold text-lg">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary-glow shadow-lg">
                  {/* make it downloadable link file */}
                  <Link 
                  href="/VoltSol Global Ltd pitch Deck.pdf" 
                  target="_blank" className="flex items-center" 
                  download={"VoltSol Global Ltd pitch Deck.pdf"}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Pitch Deck
                  </Link>
                  
                </Button>
                <Button variant="outline" className="border-2">
                  <Link href={"https://wa.me/250780158711?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"}>
                    Book Investor Call
                  </Link>
                  
                </Button>
              </div>
            </div>

            {/* Right: Use of Funds */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="font-heading font-bold text-xl mb-6">Use of Funds</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Production Scale-up</span>
                    <span className="text-sm font-bold">40%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow w-[40%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Shop Network Expansion</span>
                    <span className="text-sm font-bold">30%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow w-[30%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Marketing & Sales</span>
                    <span className="text-sm font-bold">20%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow w-[20%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">R&D & Innovation</span>
                    <span className="text-sm font-bold">10%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-glow w-[10%]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm leading-relaxed">
                  <strong className="text-primary">Expected ROI:</strong> Projecting 3x returns within 4 years with positive unit economics and scalable model.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InvestorStrip;
