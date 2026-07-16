import Attendance from "@/components/others/dashboard/Attendance";
import HeaderInfo from "@/components/others/dashboard/HeaderInfo";

export default function page() {
  return (
    <main className="flex flex-col gap-6">
      <HeaderInfo />
      <div className="flex flex-wrap gap-4 [&>*:nth-child(even)]:flex-1 [&>*:nth-child(even)]:max-w-none">
        <Attendance />
      </div>
    </main>
  );
}
