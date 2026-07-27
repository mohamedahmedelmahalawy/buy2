import AttendanceSectioin from "@/components/others/profile/AttendanceSectioin";
import PerformanceSection from "@/components/others/profile/PerformanceScore/PerformanceSection";
import Rewards from "@/components/others/profile/Rewards";
import UserInfo from "@/components/others/profile/UserInfo";

//-----------------------------------
export default function Profile() {
  return (
    <div className="flex flex-col gap-4">
      <UserInfo />
      <Rewards />
      <div className="flex gap-4">
      <PerformanceSection />
        <AttendanceSectioin />
      </div>
    </div>
  );
}
