import SidebarCustom from "@/components/shared/SidebarCustom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="p-6">
        <SidebarCustom />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
