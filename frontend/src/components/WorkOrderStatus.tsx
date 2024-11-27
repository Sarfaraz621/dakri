import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Sample data representing work order status
const data = [
  { name: "Completed", value: 7 },
  { name: "Work in Progress", value: 3 },
  { name: "Due", value: 2 },
];

// Color codes for each pie section
const COLORS = ["#00C49F", "#0088FE", "red"];

export function WorkOrderStatus() {
  return (
    <Card className="w-[500px]">
      {/* Card container for the Work Order Status section */}
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Work Order Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Flexbox layout to split the chart and legend */}
        <div className="flex items-center justify-between">
          {/* Container for the pie chart */}
          <div className="h-[200px] w-1/2">
            {/* Responsive container to make the chart resize */}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data} // Data to be displayed in the pie chart
                  cx="50%" // Centering the pie chart horizontally
                  cy="50%" // Centering the pie chart vertically
                  innerRadius={60} // The inner radius of the pie chart (donut-style)
                  outerRadius={80} // The outer radius of the pie chart
                  fill="#8884d8" // Default color for the pie slices
                  paddingAngle={0} // No padding between pie slices
                  dataKey="value" // The data field used to represent the size of each slice
                >
                  {/* Mapping over the data to assign colors to each pie slice */}
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`} // Unique key for each pie slice
                      fill={COLORS[index % COLORS.length]} // Assign color based on the COLORS array
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Container for the legend */}
          <div className="w-1/2 pl-4">
            {/* Mapping through data to display the legend */}
            {data.map((entry, index) => (
              // Each legend item
              <div key={`legend-${index}`} className="flex items-center mt-2">
                <div
                  className="w-4 h-4 mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }} // Background color for the legend item
                ></div>
                <span>
                  {entry.name}: {entry.value}
                  {/* Label and value for each category */}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
