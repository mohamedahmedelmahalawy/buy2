import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icon } from "@iconify-icon/react";

export default function LoggedUserInfo() {
  return (
    <div className="flex items-center justify-between rounded-xl border gap-4 border-none">
      <div className="flex items-center p-3 bg-white rounded-[12px]">
        <Icon icon="boxicons:bell" width={24} height={24} />
      </div>

      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-[1.125rem] font-semibold">Mohamed Ahmed</p>
          <p className="text-[0.875rem] text-muted-foreground">
            Flutter Developer
          </p>
        </div>
      </div>
    </div>
  );
}
