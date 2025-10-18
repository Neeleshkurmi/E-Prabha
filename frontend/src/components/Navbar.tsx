import { Shield, FileCheck, Building2, Settings, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">E-PRABHA</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-1">
              <Button 
                variant={location.pathname === "/verify" ? "secondary" : "ghost"} 
                className="flex items-center space-x-2"
                asChild
              >
                <Link to="/verify">
                  <FileCheck className="h-4 w-4" />
                  <span>Verify</span>
                </Link>
              </Button>
              <Button 
                variant={location.pathname === "/student-wallet" ? "secondary" : "ghost"} 
                className="flex items-center space-x-2"
                asChild
              >
                <Link to="/student-wallet">
                  <Wallet className="h-4 w-4" />
                  <span>Student Wallet</span>
                </Link>
              </Button>
              <Button 
                variant={location.pathname === "/institution" ? "secondary" : "ghost"} 
                className="flex items-center space-x-2"
                asChild
              >
                <Link to="/institution">
                  <Building2 className="h-4 w-4" />
                  <span>Institution</span>
                </Link>
              </Button>
              <Button 
                variant={location.pathname === "/admin" ? "secondary" : "ghost"} 
                className="flex items-center space-x-2"
                asChild
              >
                <Link to="/admin">
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">
                Sign In
              </Link>
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth" asChild>
              <Link to="/signup">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;