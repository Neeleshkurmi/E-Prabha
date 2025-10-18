import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Share2, QrCode, Calendar, Building, Award, Hash, Eye, EyeOff, User, UserCheck, FileText, School } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Certificate {
  id: string;
  name: string;
  institution: string;
  studentName: string;
  rollNumber: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  issueDate: string;
  graduationDate: string;
  cgpa: string;
  percentage: string;
  honors: string;
  division: string;
  status: "verified" | "pending" | "invalid";
  qrCode: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [showQR, setShowQR] = useState(false);
  const [showFullInfo, setShowFullInfo] = useState(false);

  const handleDownloadRendered = () => {
    console.log(`Downloading rendered template: ${certificate.id}`);
    // Mock download functionality for rendered template
  };

  const handleDownloadUniversity = () => {
    console.log(`Downloading university template: ${certificate.id}`);
    // Mock download functionality for university template
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: certificate.name,
          text: `Check out my verified ${certificate.name} from ${certificate.institution}`,
          url: window.location.href
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      console.log("Link copied to clipboard");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "invalid":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 border border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{certificate.name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>{certificate.institution}</span>
            </div>
          </div>
          <Badge className={getStatusColor(certificate.status)}>
            {certificate.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Basic Certificate Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Student:</span>
            <span className="font-medium text-foreground">{certificate.studentName}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Roll No:</span>
            <span className="font-medium text-foreground">{certificate.rollNumber}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Graduated:</span>
            <span className="font-medium text-foreground">{certificate.graduationDate}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Division:</span>
            <span className="font-medium text-foreground">{certificate.division}</span>
          </div>
        </div>

        {/* Full Information Toggle Button */}
        <div className="flex justify-center pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFullInfo(!showFullInfo)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            {showFullInfo ? (
              <>
                <EyeOff className="h-4 w-4" />
                Hide Full Details
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                Show Full Details
              </>
            )}
          </Button>
        </div>

        {/* Full Information - Animated */}
        {showFullInfo && (
          <div className="animate-fade-in space-y-4 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Father's Name:</span>
                <span className="font-medium text-foreground">{certificate.fatherName}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mother's Name:</span>
                <span className="font-medium text-foreground">{certificate.motherName}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Date of Birth:</span>
                <span className="font-medium text-foreground">{certificate.dateOfBirth}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Issue Date:</span>
                <span className="font-medium text-foreground">{certificate.issueDate}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">CGPA:</span>
                <span className="font-medium text-foreground">{certificate.cgpa}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Percentage:</span>
                <span className="font-medium text-foreground">{certificate.percentage}%</span>
              </div>
              
              <div className="flex items-center gap-2 md:col-span-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Honors:</span>
                <span className="font-medium text-foreground">{certificate.honors}</span>
              </div>
            </div>
          </div>
        )}

        {/* Certificate ID */}
        <div className="flex items-center gap-2 text-sm bg-muted/50 p-3 rounded-lg">
          <Hash className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">ID:</span>
          <span className="font-mono text-foreground">{certificate.id}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Button 
            onClick={handleDownloadRendered} 
            size="sm" 
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Download as Rendered Template
          </Button>
          
          <Button 
            onClick={handleDownloadUniversity} 
            size="sm" 
            variant="secondary"
            className="flex items-center gap-2"
          >
            <School className="h-4 w-4" />
            Download as University Template
          </Button>
          
          <Button 
            onClick={handleShare} 
            size="sm" 
            variant="outline"
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm" 
                variant="outline"
                className="flex items-center gap-2"
              >
                <QrCode className="h-4 w-4" />
                QR Code
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Certificate QR Code</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4 p-4">
                <div className="bg-white p-4 rounded-lg">
                  <img 
                    src={certificate.qrCode} 
                    alt={`QR Code for ${certificate.name}`}
                    className="w-48 h-48"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Scan this QR code to verify the authenticity of this certificate
                </p>
                <div className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded">
                  {certificate.id}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;