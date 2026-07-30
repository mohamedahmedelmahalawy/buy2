import ProgressBar from "./ProgressBar";

type Variant = "success" | "warning" | "danger";

type StatsCardProps = {
  title: string;
  value: string | number;
  progress: number;
  max: number;
  leftLabel: string;
  rightLabel: string;
  variant?: Variant;
};

export default function StatsCard({
  title,
  value,
  progress,
  max,
  leftLabel,
  rightLabel,
  variant,
}: StatsCardProps) {
  return (
    <div className="rounded-[12px] border border-gray-200 bg-white p-3">
      <div className="mb-5.75 flex items-center justify-between">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <span className="text-xl font-semibold">{value}</span>
      </div>

      <ProgressBar
        value={progress}
        max={max}
        variant={variant}
        leftLabel={leftLabel}
        rightLabel={rightLabel}
      />
    </div>
  );
}
