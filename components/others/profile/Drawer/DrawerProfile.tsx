import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import InfoSection from "./InfoSection";

export function UserDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger className="text-[#756EF3] text-[12px] cursor-pointer">
        Full Info
      </SheetTrigger>

      <SheetContent side="right" className=" h-auto w-96 rounded-2xl ">
        <SheetHeader>
          <SheetTitle className="text-[18px] font-semibold">
            More details
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 overflow-y-auto">
          <InfoSection
            icon="ant-design:phone-outlined"
            label="Phone"
            value="123456789"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
