/**
 * Represents a work order in the rental tools system.
 */
export interface WorkOrder {
  id: string;
  toolRef: string;
  teamMember: string;
  status: "Completed" | "In Progress" | "Not Started";
  duration: string;
}

/**
 * Represents a missing item in the inventory.
 */
export interface MissingItem {
  toolRef: string;
  teamMember: string;
}

/**
 * Represents an item that needs restocking.
 */
export interface RestockItem {
  toolRef: string;
  toolEquipment: string;
  stockStatus: "Low" | "None";
}

/**
 * Summarizes the reception of packages.
 */
export interface ReceptionSummary {
  packagesReceived: number;
  processedPackages: number;
}

// New types to handle readonly arrays
export type ReadonlyWorkOrders = readonly WorkOrder[];
export type ReadonlyMissingItems = readonly MissingItem[];
export type ReadonlyRestockItems = readonly RestockItem[];
