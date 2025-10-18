import { Shield, Users, AlertTriangle, TrendingUp, Eye, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const verificationData = [
    { month: "Jan", verifications: 450 },
    { month: "Feb", verifications: 620 },
    { month: "Mar", verifications: 580 },
    { month: "Apr", verifications: 750 },
    { month: "May", verifications: 890 },
    { month: "Jun", verifications: 1240 },
    { month: "Jul", verifications: 1180 },
    { month: "Aug", verifications: 1450 },
    { month: "Sep", verifications: 1320 },
  ];

  const blacklistedCertificates = [
    {
      id: "CERT-FAKE-001",
      reason: "Fraudulent document",
      institution: "Fake University",
      dateAdded: "2024-09-20",
      reportedBy: "System Auto-Detection",
    },
    {
      id: "CERT-FAKE-002", 
      reason: "Altered certificate",
      institution: "Real College",
      dateAdded: "2024-09-18",
      reportedBy: "Manual Review",
    },
    {
      id: "CERT-FAKE-003",
      reason: "Duplicate serial number",
      institution: "Tech Institute",
      dateAdded: "2024-09-15",
      reportedBy: "Automated Check",
    },
  ];

  const suspiciousActivity = [
    {
      id: "ACT-001",
      type: "Multiple failed verifications",
      description: "Same certificate uploaded 15 times",
      severity: "high",
      timestamp: "2024-09-25 14:30",
    },
    {
      id: "ACT-002",
      type: "Suspicious formatting",
      description: "Certificate with irregular font patterns",
      severity: "medium", 
      timestamp: "2024-09-25 12:15",
    },
    {
      id: "ACT-003",
      type: "Institution mismatch",
      description: "Certificate claims invalid institution",
      severity: "high",
      timestamp: "2024-09-25 09:45",
    },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-destructive text-destructive-foreground">High</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
      case "low":
        return <Badge variant="secondary">Low</Badge>;
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor system-wide verification activity and manage security
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Verifications"
              value="12,847"
              description="this month"
              icon={Shield}
              trend={{ value: 18, isPositive: true }}
            />
            <DashboardCard
              title="Active Institutions"
              value="47"
              description="verified partners"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
            />
            <DashboardCard
              title="Flagged Documents"
              value="23"
              description="requires review"
              icon={AlertTriangle}
              trend={{ value: -12, isPositive: false }}
            />
            <DashboardCard
              title="System Uptime"
              value="99.97%"
              description="last 30 days"
              icon={TrendingUp}
              trend={{ value: 0.1, isPositive: true }}
            />
          </div>

          {/* Verification Trend Chart */}
          <Card className="mb-8 shadow-custom-lg">
            <CardHeader>
              <CardTitle>Verification Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={verificationData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="verifications" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Suspicious Activity */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Suspicious Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suspiciousActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-foreground">{activity.type}</h4>
                          {getSeverityBadge(activity.severity)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blacklist Management */}
            <Card className="shadow-custom-lg">
              <CardHeader>
                <CardTitle>Blacklisted Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Certificate ID</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blacklistedCertificates.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-mono text-sm">{cert.id}</TableCell>
                        <TableCell className="text-sm">{cert.reason}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
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
        </motion.div>
      </main>
    </div>
  );
};

export default AdminDashboard;