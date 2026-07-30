import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export function NewsBreadcrumbBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="space-x-4">
        <BreadcrumbItem>
          <div className="flex items-center gap-3 text-brand font-medium text-sm"></div>
          <Link href="/" className="flex items-center gap-2 text-brand">
            <Icon
              icon="weui:arrow-outlined"
              width={16}
              height={16}
              flip="horizontal"
            />
            Back
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbPage className="text-[1.5rem] font-semibold">
            News
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
