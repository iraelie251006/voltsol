"use client"

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div>
              {/* <span className="text-white font-heading font-bold text-xl">V</span> */}
              <Image src={"/voltsol.jpeg"} alt="VoltSol Global Ltd" width={87} height={60}/>
            </div>
            <span className="font-heading font-bold text-xl md:text-2xl">VoltSol Global Ltd</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </a>
            <a href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
              Mission
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#solution" className="text-sm font-medium hover:text-primary transition-colors">
              Solution
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Investor Deck
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-glow">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
                Products
              </a>
              <a href="#conversion" className="text-sm font-medium hover:text-primary transition-colors">
                Conversion Kits
              </a>
              <a href="#fleet" className="text-sm font-medium hover:text-primary transition-colors">
                Fleet Solutions
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Investor Deck
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary-glow">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
