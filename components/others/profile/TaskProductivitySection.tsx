import StatsCard from "@/components/reusable_components/StatsCard/StatsCard";
import TimeFilter from "./TimeFilter";

export default function TaskProductivitySection() {
  return (
    <div className="w-full h-fit flex flex-col gap-4 rounded-[24px] p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-[16px] font-semibold">Task Productivity</h2>
          <p className="text-[10px] font-normal text-muted-foreground">
            Task Productivity analized during the month.
          </p>
        </div>
        <TimeFilter />
      </div>
      {/* Stats Card Section  */}

      <StatsCard
        title="Deadline compliance"
        value="34"
        progress={34}
        max={100}
        leftLabel="0 Tasks"
        rightLabel="100 Tasks"
      />
      <div className="grid grid-cols-2 gap-3">
        <StatsCard
          title="Task Completion Rate"
          value={90}
          progress={90}
          max={100}
          leftLabel="0 Tasks"
          rightLabel="100 Tasks"
        />

        {/* title card */}
        <div className="flex justify-between items-center rounded-[20px] bg-[#FAFAFB] p-6">
          <h1 className="text-[14px]  ">Average Tasks Delay (In days)</h1>
          <p className="text-[18px] font-semibold  ">82</p>
        </div>
      </div>
    </div>
  );
}
