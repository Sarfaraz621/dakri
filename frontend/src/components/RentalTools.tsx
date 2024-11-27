import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { ReadonlyWorkOrders } from "../assets/types_dashboard";
import { PenToolIcon as Tool } from "lucide-react";

// Defining the interface for RentalTools component's props
interface RentalToolsProps {
  workOrders: ReadonlyWorkOrders;
}

// RentalTools component displaying rental tools and their respective work orders
export function RentalTools({ workOrders }: RentalToolsProps) {
  return (
    // Wrapper for the entire card
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {/* Icon for the tool section */}
          <Tool className="h-8 w-8" />
          <h2 className="text-2xl font-semibold">Rental Tools</h2>
        </div>
        {/* Table component to display the list of work orders */}
        <Table>
          <TableHeader>
            <TableRow>
              {/* Header for work order ID */}
              <TableHead>Work Order</TableHead>
              {/* Header for tool reference */}
              <TableHead>Tool ref.</TableHead>
              {/* Header for team members */}
              <TableHead>Team Member</TableHead>
              {/* Header for status */}
              <TableHead>Status</TableHead>
              {/* Header for duration */}
              <TableHead>Duration</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          {/* Body of the table containing actual data */}
          <TableBody>
            {workOrders.map((order) => (
              <TableRow key={order.id}>
                {/* Each row corresponds to one work order */}
                {/* Displaying the work order ID */}
                <TableCell>{order.id}</TableCell>
                {/* Displaying the tool reference*/}
                <TableCell>{order.toolRef}</TableCell>
                {/* Displaying the team members */}
                <TableCell>{order.teamMember}</TableCell>
                {/* Displaying the status with dynamic styling */}
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                    {/* Displaying the status */}
                  </span>
                </TableCell>
                <TableCell>{order.duration}</TableCell>
                {/* Displaying the duration */}
                <TableCell>
                  {/* Action button to view more details */}
                  <Button
                    className="bg-blue-600 text-white"
                    variant="outline"
                    size="sm"
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
