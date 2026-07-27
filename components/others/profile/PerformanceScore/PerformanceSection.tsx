//data
import { MetricData, MetricCOLORS } from "../../../../data/UserData";
//components
import Chart from "./Chart";
import { MetricSection } from "./Metric";
import PerformanceScore from "./PerformanceScore";
//-----------------------------------
export default function PerformanceSection() {
  return (
    <div className="max-w-115 w-full rounded-[24px] p-6 bg-white">
      <div>
        <h1 className="text-[16px] text-black">Performance</h1>
        <p className="text-[10px] text-[#B0B0B0]">
          Your monthly analized performance.
        </p>
      </div>
      <Chart value={MetricData} colors={MetricCOLORS} />
      <MetricSection value={MetricData} colors={MetricCOLORS} />
      <PerformanceScore score={79} />
    </div>
  );
}
