import { useState, useRef } from "react";
import { Upload, FileText, Image, QrCode, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface UploadFormProps {
  onFileUpload: (file: File) => void;
  loading?: boolean;
}

const UploadForm = ({ onFileUpload, loading = false }: UploadFormProps) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-custom-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          Verify Your Certificate
        </CardTitle>
        <p className="text-muted-foreground">
          Upload a certificate file or scan a QR code to verify its authenticity
        </p>
      </CardHeader>
      <CardContent>
        <motion.div
          className={`upload-zone ${dragActive ? "dragover" : ""} ${loading ? "opacity-50 pointer-events-none" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileDialog}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={handleFileSelect}
            className="hidden"
            disabled={loading}
          />
          
          {loading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">Verifying Certificate...</p>
              <p className="text-sm text-muted-foreground">Please wait while we analyze your document</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-primary mb-4" />
              <p className="text-lg font-medium text-foreground mb-2">
                Drop your certificate here or click to browse
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Supports PDF, JPG, PNG files up to 10MB
              </p>
              
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>PDF</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Image className="h-4 w-4" />
                  <span>Image</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <QrCode className="h-4 w-4" />
                  <span>QR Code</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        <div className="mt-6 flex justify-center space-x-4">
          <Button 
            onClick={openFileDialog} 
            disabled={loading}
            className="bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            <Upload className="h-4 w-4 mr-2" />
            Choose File
          </Button>
          <Button variant="outline" disabled={loading}>
            <QrCode className="h-4 w-4 mr-2" />
            Scan QR Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadForm;