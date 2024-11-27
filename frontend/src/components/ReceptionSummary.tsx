import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Package, PackageCheck } from "lucide-react";
import type { ReceptionSummary } from "../assets/types_dashboard";

// Defining the interface for ReceptionSummaryCard component's props
interface ReceptionSummaryProps {
  summary: ReceptionSummary;
}

// ReceptionSummaryCard component displaying reception summary data
export function ReceptionSummaryCard({ summary }: ReceptionSummaryProps) {
  return (
    <Card>
      {/* Card wrapper to hold the content */}

      <CardHeader>
        {/* Header of the card */}
        <CardTitle className="text-2xl font-semibold mb-4">
          {/* Title for the card */}
          Reception Summary
        </CardTitle>
      </CardHeader>
      {/* Content section of the card */}
      <CardContent>
        {/* Grid layout for item rows */}
        <div className="grid gap-4">
          {/* First row showing the number of packages received */}
          <div className="flex items-center gap-4">
            {/* Icon for packages received */}
            <Package className="h-8 w-8" />
            <div>
              <p className="text-sm font-medium leading-none">
                Packages Received
              </p>
              {/* Displaying the number of packages received dynamically */}
              <p className="text-2xl font-bold">{summary.packagesReceived}</p>
            </div>
          </div>
          {/* Second row showing the number of processed packages */}
          <div className="flex items-center gap-4">
            {/* Icon for processed packages */}
            <PackageCheck className="h-8 w-8" />
            <div>
              <p className="text-sm font-medium leading-none">
                Processed Packages
              </p>
              {/* Displaying the number of processed packages */}
              <p className="text-2xl font-bold">{summary.processedPackages}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
