"use client";
import { Icon } from "@iconify-icon/react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../ui/sidebar";
import Image from "next/image";
import Link from "next/link";
const sideBarList = [
  { name: "Dashboard", icon: "ep:menu", link: "/" },
  { name: "My Tasks", icon: "hugeicons:task-01", link: "/tasks" },
  { name: "Lists", icon: "simple-line-icons:list", link: "/lists" },
  { name: "Attendance", icon: "uil:calendar", link: "/attendance" },
  {
    name: "Requests",
    icon: "material-symbols:post-add",
    link: "/requests",
  },
  { name: "Shifts", icon: "streamline:circle-clock", link: "/shifts" },
  { name: "Store", icon: "hugeicons:store-03", link: "/store" },
  { name: "Settings", icon: "uil:setting", link: "/settings" },
  { name: "Support", icon: "material-symbols:help-outline", link: "/support" },
];

export default function SidebarCustom() {
  const pathname = usePathname();
  return (
    <Sidebar className="m-6 h-[calc(100vh-48px)] rounded-lg bg-white data-[mobile=true]:m-0 border-none shadow-sm shadow-shadow-card">
      <SidebarHeader>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="flex flex-col gap-3 p-0 mt-8">
          {sideBarList.map((item) => (
            <Link
              href={item.link}
              key={item.icon}
              className={`${pathname === item.link ? "text-brand font-semibold bg-[#e9ecf5] border border-r-4 border-r-brand border-y-0 border-l-0" : "text-[#B0B0B0]"}`}
            >
              <div className="flex items-center gap-3 px-8 py-4">
                <div className="flex justify-center h-6 w-6 items-center shrink-0">
                  <Icon icon={item.icon} width={24} height={24} />
                </div>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row items-center gap-2 text-error font-medium">
        <Link href={""}>
          <div className="flex items-center gap-3 px-8 py-4">
            <div className="flex justify-center h-6 w-6 items-center shrink-0">
              <Icon
                icon="solar:logout-2-outline"
                flip="horizontal"
                width={24}
                height={24}
              />
            </div>
            <span>Logout</span>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
