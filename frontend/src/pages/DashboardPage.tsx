import { DashboardSidebar } from "../components/DashboardSidebar";
import { RentalTools } from "../components/RentalTools";
import { WorkOrderStatus } from "../components/WorkOrderStatus";
import { MissingItems } from "../components/MissingItems";
import { ToolsAvailability } from "../components/ToolsAvailability";
import { RestockItems } from "../components/RestockItems";
import { ReceptionSummaryCard } from "../components/ReceptionSummary";
import { SidebarProvider } from "../components/ui/sidebar";

// Mock data for the dashboard
const mockData = {
  workOrders: [
    {
      id: "01",
      toolRef: "6465",
      teamMember: "Alex Noman",
      status: "Completed" as const,
      duration: "15:00",
    },
    {
      id: "02",
      toolRef: "5665",
      teamMember: "Razib Rahman",
      status: "In Progress" as const,
      duration: "05:00",
    },
    {
      id: "03",
      toolRef: "1755",
      teamMember: "Luke Norton",
      status: "Not Started" as const,
      duration: "00:00",
    },
  ] as const,
  missingItems: [
    { toolRef: "6465", teamMember: "Alex Noman" },
    { toolRef: "6466", teamMember: "Alex Noman" },
    { toolRef: "6467", teamMember: "Alex Noman" },
  ] as const,
  restockItems: [
    { toolRef: "6465", toolEquipment: "Screws", stockStatus: "Low" as const },
    {
      toolRef: "6466",
      toolEquipment: "Wires (electrical)",
      stockStatus: "None" as const,
    },
    { toolRef: "6467", toolEquipment: "Bolts", stockStatus: "None" as const },
  ] as const,
  receptionSummary: {
    packagesReceived: 10,
    processedPackages: 5,
  } as const,
};
export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar for navigation */}
        <DashboardSidebar />

        <main className="flex-2 p-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Left Column - Dashboard content */}
          <div className="space-y-4">
            <div className="">
              <RentalTools workOrders={mockData.workOrders} />
              {/* Display rental tools and work orders */}
            </div>
            <div className="flex-[2]">
              <MissingItems items={mockData.missingItems} />
              {/* Display missing items */}
            </div>
            <div className="flex-[1]"></div>
            <RestockItems items={mockData.restockItems} />
            {/* Display restock items */}
          </div>
          {/* Right Column - Dashboard summary and analytics */}
          <div className="space-y-10">
            <div className="">
              {/* Display work order status as a pie chart */}
              <WorkOrderStatus />
            </div>
            <div className="">
              {/* Display tool availability */}
              <ToolsAvailability />
            </div>
            <div className="">
              {/* Display reception summary */}
              <ReceptionSummaryCard summary={mockData.receptionSummary} />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
// export default function DashboardPage() {
//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen">
//         <DashboardSidebar />
//         <main className="flex-1 p-6 space-y-4 flex flex-col">
//           {/* Row 1 */}
//           <div className="flex space-x-4 flex-grow">
//             <div className="flex-[2] h-full">
//               <RentalTools workOrders={mockData.workOrders} />
//             </div>
//             <div className="flex-[1] h-full">
//               <WorkOrderStatus />
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="flex space-x-4 flex-grow">
//             <div className="flex-[2] h-full">
//               {" "}
//               {/* Flex 2x for the wider box */}
//               <MissingItems items={mockData.missingItems} />
//             </div>
//             <div className="flex-[1.5] h-full">
//               {" "}
//               {/* Flex 1x for the smaller box */}
//               <ToolsAvailability />
//             </div>
//           </div>

//           {/* Row 3 */}
//           <div className="flex space-x-4 flex-gr">
//             <div className="flex-[2] h-full">
//               {" "}
//               {/* Flex 2x for the wider box */}
//               <RestockItems items={mockData.restockItems} />
//             </div>
//             <div className="flex-[1.7] h-full">
//               {/* Flex 1x for the smaller box */}
//               <ReceptionSummaryCard summary={mockData.receptionSummary} />
//             </div>
//           </div>
//         </main>
//       </div>
//     </SidebarProvider>
//   );
// }
