import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PenToolIcon as Tool, Package } from "lucide-react";

export function ToolsAvailability() {
  return (
    <Card>
      {/* Card wrapper for the tools availability section */}

      {/* Card header containing the title */}
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-4">
          Tools and Equipments Availability
        </CardTitle>
      </CardHeader>
      {/* Card content holding the data */}
      <CardContent>
        {/* Grid layout for displaying the availability stats */}
        <div className="grid gap-4">
          {/* Flexbox for rental items section */}
          <div className="flex items-center gap-4">
            <Tool className="h-5 w-5" />
            {/* Flexbox for text and progress bar */}
            <div className="flex-1">
              <div className="text-sm font-medium">Rental Items</div>
              {/* Flexbox for progress bar and percentage */}
              <div className="flex items-center justify-between">
                {/* Background progress bar */}
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm">90%</span>
              </div>
            </div>
          </div>
          {/* Flexbox for spare parts section */}
          <div className="flex items-center gap-4">
            {/* Icon for spare parts */}

            <Package className="h-5 w-5" />
            {/* Flexbox for text and progress bar */}
            <div className="flex-1">
              <div className="text-sm font-medium">Spare Parts</div>
              {/* Flexbox for progress bar and percentage */}
              <div className="flex items-center justify-between">
                {/* Background progress bar */}
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="ml-2 text-sm">75%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
