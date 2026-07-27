import AttendanceSectioin from "@/components/others/profile/AttendanceSectioin";
import PerformanceSection from "@/components/others/profile/PerformanceScore/PerformanceSection";
import Rewards from "@/components/others/profile/Rewards";
import TaskProductivitySection from "@/components/others/profile/TaskProductivitySection";
import UserInfo from "@/components/others/profile/UserInfo";

//-----------------------------------
export default function Profile() {
  return (
    <div className="flex flex-col gap-4">
      <UserInfo />
      <Rewards />

      <div className="w-full flex flex-row gap-4">
      <PerformanceSection />
      <div className="w-full flex flex-col gap-4">
        <AttendanceSectioin />
        <TaskProductivitySection />
      </div>
      </div>
    </div>
  );
}
