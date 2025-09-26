import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UploadForm from "@/components/UploadForm";
import VerificationResult from "@/components/VerificationResult";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, School } from "lucide-react";
import { motion } from "framer-motion";

const Verify = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const mockResult = {
        status: Math.random() > 0.3 ? "verified" : "invalid",
        confidence: Math.floor(Math.random() * 30) + 70,
        certificate: {
          id: "CERT-2024-001234",
          name: "Ram Tyagi",
          course: "Master of Computer Science",
          institution: "University of Technology",
          issueDate: "June 15, 2024",
          graduationDate: "May 20, 2024",
        },
        verification: {
          blockchainHash: "0x1234567890abcdef1234567890abcdef12345678",
          timestamp: new Date().toLocaleString(),
          verifiedBy: "E-PRABHA",
        },
        warnings: Math.random() > 0.7 ? ["Minor formatting inconsistency detected"] : undefined,
      };
      
      setResult(mockResult);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Verify Certificate Authenticity
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your certificate to instantly verify its authenticity using our advanced 
            blockchain-based verification system.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          <UploadForm onFileUpload={handleFileUpload} loading={loading} />
          
          {result && (
            <div className="space-y-6">
              <VerificationResult result={result} />
              
              {/* Show Document Section */}
              {result.status === "verified" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="shadow-custom-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Show Document
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                          onClick={() => console.log("Showing rendered template...")}
                          variant="default" 
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Show in Rendered Template
                        </Button>
                        
                        <Button 
                          onClick={() => console.log("Showing university template...")}
                          variant="outline" 
                          className="flex items-center gap-2"
                        >
                          <School className="h-4 w-4" />
                          Show in University Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Verify;