import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, X } from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Image src={"/voltsol.jpeg"} alt="VoltSol Global Ltd" width={70} height={70} className="rounded-full"/>
              </div>
              <span className="font-heading font-bold text-xl">VoltSol Global Ltd</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Building affordable electric mobility for Rwanda and East Africa.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61582990515343" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/voltsolglobal?t=0Llg6eyupo7kscJmeGqolw&s=09" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <X className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/voltsolglobal?utm_source=qr&igsh=MXFhZXJ1YzVsM3VhdA==" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/thierry-harerimana-333473379?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@voltsolglobal?_r=1&_t=ZM-915uklfmZqt" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <BsTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  E-Bikes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Conversion Kits
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Fleet Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Financing Options
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  +250 780 158 711
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  voltsolglobal@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 VoltSol Global Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
