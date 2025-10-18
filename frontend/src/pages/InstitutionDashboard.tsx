import { useState } from "react";
import { Upload, FileCheck, AlertTriangle, Building2, Download, Eye, File, Archive, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const InstitutionDashboard = () => {
  const [uploading, setUploading] = useState(false);
  const [showFailedArchive, setShowFailedArchive] = useState(false);

  const mockUploadHistory = [
    {
      id: "BATCH-001",
      filename: "btech_graduates_2024_batch1.csv",
      date: "2024-09-25",
      total: 150,
      successful: 147,
      failed: 3,
      status: "completed",
    },
    {
      id: "BATCH-002", 
      filename: "mtech_certificates_spring_2024.csv",
      date: "2024-09-20",
      total: 89,
      successful: 89,
      failed: 0,
      status: "completed",
    },
    {
      id: "BATCH-003",
      filename: "pgdm_diploma_records.csv", 
      date: "2024-09-15",
      total: 45,
      successful: 42,
      failed: 3,
      status: "processing",
    },
  ];

  const mockFailedUploads = [
    {
      id: "BATCH-004",
      filename: "invalid_certificates_batch.csv",
      date: "2024-09-10",
      total: 25,
      successful: 0,
      failed: 25,
      status: "failed",
      errors: ["Invalid file format", "Missing required fields"]
    },
    {
      id: "BATCH-005",
      filename: "corrupted_data.csv",
      date: "2024-09-05",
      total: 15,
      successful: 3,
      failed: 12,
      status: "failed",
      errors: ["Data corruption detected", "Certificate ID conflicts"]
    }
  ];

  const handleBulkUpload = () => {
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  const handleFileUpload = () => {
    setUploading(true);
    // Simulate file upload
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "processing":
        return <Badge className="bg-warning text-warning-foreground">Processing</Badge>;
      case "failed":
        return <Badge className="bg-destructive text-destructive-foreground">Failed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">IIT Bombay - Institution Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your certificate uploads and monitor verification status
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Certificates"
              value="1,247"
              description="from last month"
              icon={FileCheck}
              trend={{ value: 12, isPositive: true }}
            />
            <DashboardCard
              title="Successful Uploads"
              value="98.7%"
              description="success rate"
              icon={Upload}
              trend={{ value: 2.1, isPositive: true }}
            />
            <DashboardCard
              title="Pending Verification"
              value="23"
              description="awaiting review"
              icon={AlertTriangle}
            />
            <DashboardCard
              title="Active Batches"
              value="3"
              description="being processed"
              icon={Building2}
            />
          </div>

          {/* Bulk Upload Section */}
          <Card className="mb-8 shadow-custom-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Bulk Certificate Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Upload multiple certificates at once using a CSV file. Make sure your file includes 
                  all required fields: student name, course, certificate ID, issue date.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleBulkUpload}
                    disabled={uploading}
                    className="bg-gradient-primary hover:shadow-glow transition-smooth"
                  >
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload CSV File
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={handleFileUpload}
                    disabled={uploading}
                    variant="secondary"
                  >
                    {uploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <File className="h-4 w-4 mr-2" />
                        Upload Individual Files
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Template
                  </Button>
                  
                  <Button 
                    onClick={() => setShowFailedArchive(true)}
                    variant="outline"
                    className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Archive className="h-4 w-4 mr-2" />
                    View Failed Uploads
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upload History */}
          <Card className="shadow-custom-lg">
            <CardHeader>
              <CardTitle>Upload History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Batch ID</TableHead>
                    <TableHead>Filename</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Success</TableHead>
                    <TableHead>Failed</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockUploadHistory.map((upload) => (
                    <TableRow key={upload.id}>
                      <TableCell className="font-medium">{upload.id}</TableCell>
                      <TableCell>{upload.filename}</TableCell>
                      <TableCell>{upload.date}</TableCell>
                      <TableCell>{upload.total}</TableCell>
                      <TableCell className="text-success">{upload.successful}</TableCell>
                      <TableCell className="text-destructive">{upload.failed}</TableCell>
                      <TableCell>{getStatusBadge(upload.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Failed Uploads Archive Modal */}
          {showFailedArchive && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-destructive">Failed Uploads Archive</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setShowFailedArchive(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Batch ID</TableHead>
                        <TableHead>Filename</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Failed</TableHead>
                        <TableHead>Errors</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockFailedUploads.map((upload) => (
                        <TableRow key={upload.id}>
                          <TableCell className="font-medium">{upload.id}</TableCell>
                          <TableCell>{upload.filename}</TableCell>
                          <TableCell>{upload.date}</TableCell>
                          <TableCell>{upload.total}</TableCell>
                          <TableCell className="text-destructive">{upload.failed}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {upload.errors.map((error, index) => (
                                <div key={index} className="text-xs text-muted-foreground">
                                  • {error}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default InstitutionDashboard;