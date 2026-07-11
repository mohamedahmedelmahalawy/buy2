import Header from "@/components/shared/Header";
import SidebarCustom from "@/components/shared/SidebarCustom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarCustom />

      <SidebarInset>
        <main className="flex-1 ml-6 p-6 bg-[#fafafb]">
          <Header />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
