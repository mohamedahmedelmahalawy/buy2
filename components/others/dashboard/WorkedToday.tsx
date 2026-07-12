"use client";

import { useEffect, useState } from "react";

type Props = {
  checkInTime: string | null;
  checkOutTime: string | null;
};

export default function WorkedToday({ checkInTime, checkOutTime }: Props) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (checkOutTime) return;

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [checkOutTime]);

  const endTime = checkOutTime ? new Date(checkOutTime) : now;

  const workedSeconds = checkInTime
    ? Math.max(
        0,
        Math.floor(
          (endTime.getTime() - new Date(checkInTime).getTime()) / 1000,
        ),
      )
    : 0;

  const totalWorkSeconds = 8 * 60 * 60;

  const progress = Math.min((workedSeconds / totalWorkSeconds) * 100, 100);

  const hours = Math.floor(workedSeconds / 3600);
  const minutes = Math.floor((workedSeconds % 3600) / 60);
  const seconds = workedSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes,
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className="relative flex h-44 w-44 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(
          #2949a8 ${progress}%,
          #e5e5e5 ${progress}%
        )`,
      }}
    >
      <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-white">
        <span className="text-3xl font-semibold">{formattedTime}</span>

        <span className="text-sm text-gray-400">Worked today</span>
      </div>
    </div>
  );
}
