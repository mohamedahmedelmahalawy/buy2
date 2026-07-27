import StatsCard from "@/components/reusable_components/StatsCard/StatsCard";
import TimeFilter from "./TimeFilter";

export default function AttendanceSectioin() {
  return (
    <div className="w-full h-fit  flex flex-col gap-4 rounded-[24px] p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
      <div className="flex flex-col ">
        <h2 className="text-[16px] font-semibold">Attendance</h2>
        <p className="text-[10px] font-normal text-muted-foreground">
          Attendance history analized during the month.
        </p>
      </div>
      <TimeFilter />
      </div>
      {/* Stats Card Section  */}
      <div className="grid grid-cols-2 gap-3">
        <StatsCard
          title="Attendance Rate"
          value="42%"
          progress={200}
          max={300}
          leftLabel="0 Days"
          rightLabel="300 Days"
        />

        <StatsCard
          title="Recorded Hours"
          value={25}
          progress={25}
          max={40}
          leftLabel="0 Hours"
          rightLabel="40 Hours"
        />

        <StatsCard
          title="Punctuality Score"
          value={45}
          progress={45}
          max={100}
          leftLabel="0 Days"
          rightLabel="100 Days"
        />
        {/* title card */}
        <div className="flex justify-between items-center rounded-[20px] bg-[#FAFAFB] p-6">
          <h1 className="text-[14px]  ">Average Lateness</h1>
          <p className="text-[18px] font-semibold  ">82</p>
        </div>
      </div>
    </div>
  );
}
