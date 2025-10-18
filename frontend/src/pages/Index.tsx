import { Shield, CheckCircle, Building2, Users, ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable blockchain technology ensures certificates cannot be forged or tampered with, providing 100% authenticity guarantee."
    },
    {
      icon: CheckCircle,
      title: "Instant Verification",
      description: "Get instant verification results with QR code scanning or certificate ID lookup - no waiting, no paperwork."
    },
    {
      icon: Building2,
      title: "Institution Integration",
      description: "Seamless integration with universities and educational institutions for bulk certificate uploads and management."
    },
    {
      icon: Users,
      title: "DigiLocker Compatible",
      description: "Fully integrated with India's DigiLocker system for secure storage and easy access to verified digital certificates."
    }
  ];

  return (
    <div className="bg-background">
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                  Welcome to E-PRABHA
                </h1>
                <div className="bg-gradient-primary p-6 rounded-2xl shadow-glow">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                    Electronic Platform for Reliable Academic Blockchain-based Hash Authentication
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  India's premier digital certificate verification system that revolutionizes academic credential authentication through cutting-edge blockchain technology, ensuring tamper-proof verification and instant validation for students, institutions, and employers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/verify">
                    <Upload className="h-5 w-5 mr-2" />
                    Verify Certificate
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Revolutionizing Academic Verification in India
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                E-PRABHA combines blockchain security with government integration to create 
                the most trusted certificate verification platform in the country.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full shadow-custom-md hover:shadow-custom-lg transition-smooth">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the digital revolution in academic verification. Experience the future 
                of secure, instant, and tamper-proof certificate authentication with E-PRABHA.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6"
                asChild
              >
                <Link to="/verify">
                  Start Verifying Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
