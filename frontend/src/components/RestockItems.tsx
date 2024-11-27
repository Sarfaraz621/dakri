import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import type { ReadonlyRestockItems } from "../assets/types_dashboard";

interface RestockItemsProps {
  items: ReadonlyRestockItems;
}

export function RestockItems({ items }: RestockItemsProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Restock Items</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tool ref.</TableHead>
              <TableHead>Tool/Equipment</TableHead>
              <TableHead>Stock Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.toolRef}>
                <TableCell>{item.toolRef}</TableCell>
                <TableCell>{item.toolEquipment}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      item.stockStatus === "Low"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stockStatus}
                  </span>
                </TableCell>
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
