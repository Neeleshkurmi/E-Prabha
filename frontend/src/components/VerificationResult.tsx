import { CheckCircle, XCircle, AlertTriangle, Calendar, User, GraduationCap, Building, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface VerificationResultProps {
  result: {
    status: "verified" | "invalid" | "suspicious";
    confidence: number;
    certificate: {
      id: string;
      name: string;
      course: string;
      institution: string;
      issueDate: string;
      graduationDate?: string;
    };
    verification: {
      blockchainHash?: string;
      timestamp: string;
      verifiedBy: string;
    };
    warnings?: string[];
  };
}

const VerificationResult = ({ result }: VerificationResultProps) => {
  const getStatusIcon = () => {
    switch (result.status) {
      case "verified":
        return <CheckCircle className="h-8 w-8 text-success" />;
      case "invalid":
        return <XCircle className="h-8 w-8 text-destructive" />;
      case "suspicious":
        return <AlertTriangle className="h-8 w-8 text-warning" />;
    }
  };

  const getStatusBadge = () => {
    switch (result.status) {
      case "verified":
        return <Badge className="bg-success text-success-foreground">✓ Verified</Badge>;
      case "invalid":
        return <Badge className="bg-destructive text-destructive-foreground">✗ Invalid</Badge>;
      case "suspicious":
        return <Badge className="bg-warning text-warning-foreground">⚠ Suspicious</Badge>;
    }
  };

  const getStatusColor = () => {
    switch (result.status) {
      case "verified":
        return "text-success";
      case "invalid":
        return "text-destructive";
      case "suspicious":
        return "text-warning";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Status Card */}
      <Card className="shadow-custom-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            {getStatusIcon()}
          </div>
          <CardTitle className={`text-3xl font-bold ${getStatusColor()}`}>
            Certificate {result.status === "verified" ? "Verified" : result.status === "invalid" ? "Invalid" : "Suspicious"}
          </CardTitle>
          <div className="flex justify-center mt-4">
            {getStatusBadge()}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Confidence Score</span>
                <span className={`text-sm font-medium ${getStatusColor()}`}>
                  {result.confidence}%
                </span>
              </div>
              <Progress 
                value={result.confidence} 
                className="h-2"
              />
            </div>
            
            {result.warnings && result.warnings.length > 0 && (
              <div className="bg-warning-light border border-warning/20 rounded-lg p-4">
                <h4 className="font-medium text-warning-foreground mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Warnings
                </h4>
                <ul className="text-sm space-y-1">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="text-warning-foreground">• {warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Certificate Details */}
      <Card className="shadow-custom-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="h-5 w-5 mr-2" />
            Certificate Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Recipient</p>
                  <p className="text-muted-foreground">{result.certificate.name}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Course/Program</p>
                  <p className="text-muted-foreground">{result.certificate.course}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Building className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Institution</p>
                  <p className="text-muted-foreground">{result.certificate.institution}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Issue Date</p>
                  <p className="text-muted-foreground">{result.certificate.issueDate}</p>
                </div>
              </div>
              
              {result.certificate.graduationDate && (
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Graduation Date</p>
                    <p className="text-muted-foreground">{result.certificate.graduationDate}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-start space-x-3">
                <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Certificate ID</p>
                  <p className="text-muted-foreground font-mono text-sm">{result.certificate.id}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Details */}
      <Card className="shadow-custom-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Verification Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground">Verified By</p>
                <p className="text-muted-foreground">{result.verification.verifiedBy}</p>
              </div>
              
              <div>
                <p className="font-medium text-foreground">Verification Time</p>
                <p className="text-muted-foreground">{result.verification.timestamp}</p>
              </div>
            </div>
            
            {result.verification.blockchainHash && (
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Blockchain Hash</p>
                  <p className="text-muted-foreground font-mono text-sm break-all">
                    {result.verification.blockchainHash}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VerificationResult;