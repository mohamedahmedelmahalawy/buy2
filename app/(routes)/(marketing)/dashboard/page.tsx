import Attendance from "@/components/others/dashboard/Attendance";
import HeaderInfo from "@/components/others/dashboard/HeaderInfo";
import News from "@/components/others/dashboard/News";

export default function page() {
  return (
    <main className="flex flex-col gap-6">
      <HeaderInfo />
      <div className="flex flex-wrap gap-4 [&>*:nth-child(even)]:flex-1 [&>*:nth-child(even)]:max-w-none">
        {/* grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr] */}
        <Attendance />
        <Attendance />
        <News />
      </div>
    </main>
  );
}
