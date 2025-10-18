import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, GraduationCap, Calendar, Building, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateCard from "@/components/CertificateCard";

// Mock data for demonstration
const mockCertificates = [
  {
    id: "CERT-001-2024",
    name: "Bachelor of Technology in Computer Science",
    institution: "IIT Bombay",
    studentName: "Arjun Sharma",
    rollNumber: "200101001",
    fatherName: "Rajesh Sharma",
    motherName: "Priya Sharma",
    dateOfBirth: "2001-03-15",
    issueDate: "2024-05-15",
    graduationDate: "2024-05-15",
    cgpa: "9.2",
    percentage: "92.0",
    honors: "First Class with Distinction",
    division: "First Division",
    status: "verified" as const,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CERT-001-2024-IITB-CSE"
  },
  {
    id: "CERT-002-2023",
    name: "Master of Technology in Data Science",
    institution: "IIT Delhi",
    studentName: "Arjun Sharma",
    rollNumber: "230201045",
    fatherName: "Rajesh Sharma",
    motherName: "Priya Sharma",
    dateOfBirth: "2001-03-15",
    issueDate: "2023-12-10",
    graduationDate: "2023-12-10",
    cgpa: "9.5",
    percentage: "95.0",
    honors: "First Class with Honours",
    division: "First Division",
    status: "verified" as const,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CERT-002-2023-IITD-DS"
  },
  {
    id: "CERT-003-2022",
    name: "Post Graduate Diploma in Machine Learning",
    institution: "Indian Institute of Science",
    studentName: "Arjun Sharma",
    rollNumber: "220301089",
    fatherName: "Rajesh Sharma",
    motherName: "Priya Sharma",
    dateOfBirth: "2001-03-15",
    issueDate: "2022-08-20",
    graduationDate: "2022-08-20",
    cgpa: "9.8",
    percentage: "98.0",
    honors: "Gold Medal",
    division: "First Division",
    status: "verified" as const,
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CERT-003-2022-IISC-ML"
  }
];

const StudentWallet = () => {
  const [certificates] = useState(mockCertificates);

  const handleDownloadAll = () => {
    // Mock download functionality
    console.log("Downloading all certificates...");
  };

  const handleShareAll = () => {
    // Mock share functionality
    console.log("Sharing wallet...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-variant">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-primary/10">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground">My Digital Wallet</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your verified academic credentials, all in one secure place
            </p>
            
            {/* DigiLocker Integration Status */}
            <div className="flex items-center justify-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20 max-w-fit mx-auto">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Integrated with DigiLocker</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-custom">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {certificates.length}
                </div>
                <div className="text-sm text-muted-foreground">Total Certificates</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-custom">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">
                  {certificates.filter(cert => cert.status === "verified").length}
                </div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-custom">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {new Set(certificates.map(cert => cert.institution)).size}
                </div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </CardContent>
            </Card>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              onClick={handleDownloadAll} 
              className="flex items-center gap-2"
              variant="default"
            >
              <Download className="h-4 w-4" />
              Download All
            </Button>
            <Button 
              onClick={handleShareAll} 
              className="flex items-center gap-2"
              variant="outline"
            >
              <Share2 className="h-4 w-4" />
              Share Wallet
            </Button>
          </div>

          {/* Certificates Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground text-center">
              My Certificates
            </h2>
            
            <div className="grid gap-6 max-w-6xl mx-auto">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default StudentWallet;