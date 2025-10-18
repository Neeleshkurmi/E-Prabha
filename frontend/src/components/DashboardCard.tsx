import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  className = "" 
}: DashboardCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`shadow-custom-md hover:shadow-custom-lg transition-smooth ${className}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            {trend && (
              <span className={trend.isPositive ? "text-success" : "text-destructive"}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
            {description && <span>{description}</span>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardCard;