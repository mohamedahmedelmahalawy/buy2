import { Icon } from "@iconify/react";
import Image from "next/image";
import AchievementBadge from "@/public/icons/reward.png";
interface User {
  name: string;
  email: string;
  image?: string | null;
  role: string;
  phoneNumber: string;
  totapoints: number;
}

const UserInfo = () => {
  const user: User = {
    name: "Amr Mater",
    email: "AmrMater@example.com",
    image: "",
    role: "flutter developer",
    phoneNumber: "(+989) 099943232555",
    totapoints: 1000,
  };
  const userInfo: { label: string; value: string }[] = [
    { label: "Role", value: user.role },
    { label: "Phone number", value: user.phoneNumber },
    { label: "Email", value: user.email },
  ];

  return (
    <div className="flex items-center justify-between rounded-[24px] p-6 bg-white">
      <div className="flex gap-4">
        {/* User Avatar */}
        {user.image ? (
          <Image src={user.image} alt={user.name} width={80} height={80} />
        ) : (
          <div className="bg-[#EAF2FF] w-fit flex items-end  rounded-[20px]">
            <Icon
              icon="solar:user-bold"
              width={80}
              height={80}
              color="#B4DBFF"
            />
          </div>
        )}
        <div className="flex flex-col gap-2.75">
          {/* User name */}
          <div className="flex w-fit h-fit items-center gap-4">
            <p className="text-[18px] font-semibold">{user.name}</p>
            <span className="text-[#756EF3] text-[12px]">Full Info</span>
          </div>
          {/* User Info Section */}
          <div className="flex flex-row gap-14">
            {userInfo.map((info, index) => (
              <div key={index} className="flex flex-col gap-0.5">
                <p className="text-[14px] text-muted-foreground">
                  {info.label}:
                </p>
                <p className="text-[14px]">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* User Total Points */}
      <div className="flex flex-row gap-3 bg-[#FAFAFB]">
        <div className="bg-[#756EF3]/10 w-12 h-12 flex justify-center items-center rounded-[20px]">
          <Image
            src={AchievementBadge}
            alt="Achievement Badge"
            width={24}
            height={24}
          />
        </div>
        <div>
          <p className="text-[14px]">Total Points</p>
          <p className="text-[18px] text-[#756EF3] font-semibold">
            {user.totapoints}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
