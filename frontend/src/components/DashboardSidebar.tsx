import { Home, PenToolIcon as Tool, Package, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import ReactLogo from "../assets/react.svg";

// DashboardSidebar component to render a sidebar with logo, menu items, and a settings icon

export function DashboardSidebar() {
  return (
    <Sidebar className="bg-zinc-800 text-white w-[80px]">
      {/* parent tag to contain logo sidebar-options and settings-icon in 1 flexbox */}
      <div className="my-5 flex items-center flex-col justify-between h-full">
        {/* Logo section: Displays the logo at the top */}
        <div className="">
          <img src={ReactLogo} alt="LOGO" />
        </div>
        {/* Sidebar options section: Contains the menu items */}
        <div className="flex flex-col items-center justify-center w-full h-auto p-5">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/* Menu Item for Home */}
                  <SidebarMenuItem>
                    <SidebarMenuButton className="p-3 mb-5">
                      <a
                        href="#"
                        className="flex items-center justify-center w-[100px] h-[100px] mb-1"
                      >
                        {/* Home icon with hover effect */}
                        <Home className="h-[25px] w-[25px] my-5 transition-all duration-200 ease-in-out hover:scale-125" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* Menu Item for Pen Tool (Tool) */}
                  <SidebarMenuItem>
                    <SidebarMenuButton className="p-3 mb-5">
                      {/* Pen Tool icon with hover effect */}
                      <a
                        href="#"
                        className="flex items-center justify-center w-[100px] h-[100px] mb-1"
                      >
                        <Tool className="h-6 w-6 transition-all duration-200 ease-in-out hover:h-7 hover:w-7" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* Menu Item for Package */}
                  <SidebarMenuItem>
                    <SidebarMenuButton className="p-3 mb-5">
                      {/* Package icon with hover effect */}
                      <a
                        href="#"
                        className="flex items-center justify-center w-[100px] h-[100px] mb-1"
                      >
                        <Package className="h-6 w-6 transition-all duration-200 ease-in-out hover:h-7 hover:w-7" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* Menu Item for another Pen Tool (Tool) */}
                  <SidebarMenuItem>
                    <SidebarMenuButton className="p-3 mb-5">
                      {/* Repeated Pen Tool icon with hover effect */}
                      <a
                        href="#"
                        className="flex items-center justify-center w-[100px] h-[100px] mb-1"
                      >
                        <Tool className="h-6 w-6 transition-all duration-200 ease-in-out hover:h-7 hover:w-7" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
        {/* Settings icon section: Positioned at the bottom of the sidebar */}
        <Settings className="bg-white text-black rounded-3xl w-10 h-10 p-2" />
      </div>
    </Sidebar>
  );
}
