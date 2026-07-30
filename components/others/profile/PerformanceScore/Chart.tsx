"use client";
//interfaces&types
import { iPerformanceSectionProps } from "../../../../types/UserTypes";
//libraries
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
//-----------------------------------
export default function PerformanceChart({
  value,
  colors,
}: iPerformanceSectionProps) {
  return (
    <div className="h-75 my-6">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={value} dataKey="value" outerRadius={130} paddingAngle={1}>
            {value.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
