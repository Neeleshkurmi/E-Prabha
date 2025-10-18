import { Shield, FileCheck, Building2, Settings, Wallet, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Verify Certificate", path: "/verify" },
    { name: "Student Wallet", path: "/student-wallet" },
    { name: "Institution", path: "/institution" },
    { name: "Admin", path: "/admin" },
  ];

  const resources = [
    { name: "Documentation", path: "#" },
    { name: "API Reference", path: "#" },
    { name: "Guides", path: "#" },
    { name: "Blog", path: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Cookie Policy", path: "#" },
  ];

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">E-PRABHA</span>
            </div>
            <p className="text-muted-foreground">
              India's premier digital certificate verification system revolutionizing academic credential authentication through blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <a 
                    href={resource.path} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  Ministry of Education, Government of India
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  +91 11 1234 5678
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  support@eprabha.gov.in
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © {currentYear} E-PRABHA. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <a 
                key={item.path} 
                href={item.path} 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;