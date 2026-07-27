type Variant = "success" | "warning" | "danger";
// Props type
type ProgressBarProps = {
  value: number;
  max: number;
  variant?: Variant;
  leftLabel?: string;
  rightLabel?: string;
};

const variants = {
  success: {
    fill: "bg-green-500",
    track: "bg-green-100",
  },
  warning: {
    fill: "bg-orange-500",
    track: "bg-orange-100",
  },
  danger: {
    fill: "bg-red-500",
    track: "bg-red-100",
  },
};

export default function ProgressBar({
  value,               /* Value between 0 and max */
  max,                 /* Max value */
  variant,             /* Color variant */
  leftLabel,           
  rightLabel,
}: ProgressBarProps) {

  const percentage = Math.min((value / max) * 100, 100);
  const autoVariant: Variant = percentage >= 80 ? "success" : percentage >= 50 ? "warning" : "danger";
  const currentVariant = variant ?? autoVariant;

  return (
    <div>
      <div
        className={`relative h-2 rounded-full ${variants[currentVariant].track}`}
      >
        {/* Progress */}
        <div
          className={`h-full rounded-full ${variants[currentVariant].fill}`}
          style={{ width: `${percentage}%` }}
        />

        {/* Bubble */}
        <div
          className={`absolute top-1/2 
                     -translate-x-1/2 
                     -translate-y-1/2  
                     rounded-full px-3 py-1 text-xs font-medium text-white ${variants[currentVariant].fill}`}
          style={{ left: `${percentage}%` }}
        >
          {value}
        </div>
      </div>

      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}
