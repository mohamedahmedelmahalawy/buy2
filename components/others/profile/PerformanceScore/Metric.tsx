//interfaces&types
import { iPerformanceSectionProps } from "../../../../types/UserTypes";
//--------------------
export const MetricSection = ({ value, colors }: iPerformanceSectionProps) => {
  return (
    <div className="w-full flex flex-row justify-around">
      {value.map((entry, index) => (
        <div key={entry.name} className="flex flex-col justify-between my-2">
          <div
            className="w-4.5 h-1.5 rounded-full mb-2"
            style={{ backgroundColor: colors[index] }}
          />
          <h1 className="text-[12px]">{entry.name}</h1>
          <p className="font-semibold">{entry.value}</p>
        </div>
      ))}
    </div>
  );
};
