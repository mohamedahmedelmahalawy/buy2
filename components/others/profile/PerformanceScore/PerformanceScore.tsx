interface ProgressBarProps {
  score: number;
}
const numbers = [0, 20, 40, 60, 80, 100];
export default function ProgressBar({ score }: ProgressBarProps) {
  return (
    <div className="w-full mt-6">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-[14px] font-medium">Performance Score</h2>
        <span className="text-[18px] font-bold text-green-600">{score}</span>
      </div>

      {/* Bar */}
      <div className="relative">
        <div className="h-3 rounded-full bg-green-100" />

        <div
          className={`absolute top-1/2 w-5 h-5 rounded-full bg-green-500 border-4 border-white -translate-y-1/2 ${score > 100 ? "hidden" : ""}`}
          style={{ left: `calc(${score}% - 10px)` }}
        />
      </div>

      {/* Numbers */}
      <div className="flex justify-between text-sm text-gray-400 mt-3">
        {numbers.map((number) => (
          <span key={number}>{number}</span>
        ))}
      </div>
      {/*Score Status */}
      <div
        className={`w-full rounded-[10px] text-[14px] font-medium p-4 mt-3 flex items-center justify-center 
        ${
          score >= 80
            ? "bg-green-100 text-green-600"
            : score >= 60
              ? "bg-green-100 text-green-600"
              : score >= 40
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
        }`}
      >
        {score >= 80
          ? "Great"
          : score >= 60
            ? "Good"
            : score >= 40
              ? "Average"
              : "Bad"}{" "}
        Performance
      </div>
    </div>
  );
}
