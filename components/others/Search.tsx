import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify-icon/react";

export function Search() {
  return (
    <Field orientation="horizontal" className="max-w-77.75 relative">
      <Input
        type="search"
        placeholder="Search..."
        className="pl-13 text-sm placeholder:text-inactive py-3 h-full rounded-[12px] bg-white border-none"
      />

      <Button
        className="absolute left-1
        bg-transparent  
        transition-none
        animate-none
        hover:bg-transparent
        hover:text-current
        hover:shadow-none
        active:scale-100
        hover:transition-none
        text-black
      "
        variant="ghost"
      >
        <Icon icon="mynaui:search" width={24} height={24} />
      </Button>
    </Field>
  );
}
