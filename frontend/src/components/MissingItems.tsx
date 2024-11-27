import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AlertTriangle } from "lucide-react";
import type { ReadonlyMissingItems } from "../assets/types_dashboard";

// Defining the interface for MissingItems component's props
interface MissingItemsProps {
  items: ReadonlyMissingItems;
}

// MissingItems component that takes a list of missing items as props
export function MissingItems({ items }: MissingItemsProps) {
  return (
    // Wrapper div with rounded corners, border, and background color
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        {/* Header section with an alert icon and title */}
        <div className="flex items-center gap-2 mb-4">
          {/* Displaying an alert icon with a yellow color */}
          <AlertTriangle className="h-8 w-8 text-yellow-500" />
          {/* Title for the section */}
          <h2 className="text-2xl font-semibold">Missing Items</h2>
        </div>
        {/* Table displaying missing items */}
        <Table>
          {/* Table header with column names */}
          <TableHeader>
            <TableRow>
              {/* Column for Tool Reference */}
              <TableHead>Tool ref.</TableHead>
              {/* Column for Team Member */}
              <TableHead>Team Member</TableHead>
              {/* Empty column for actions */}
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          {/* Table body where rows of missing items are dynamically rendered */}
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.toolRef}>
                {" "}
                {/* Unique key for each row */}
                {/* Tool reference cell */}
                <TableCell>{item.toolRef}</TableCell>
                {/* Team member cell */}
                <TableCell>{item.teamMember}</TableCell>
                <TableCell>
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
