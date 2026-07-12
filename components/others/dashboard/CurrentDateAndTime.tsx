"use client";
import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";

export default function CurrentDateAndTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateTime = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(updateTime);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="flex items-center gap-[1.13rem] bg-white px-4 py-[0.68rem] rounded-[0.75rem]">
      <div className="flex items-center p-3 bg-[#f2f1fe] rounded-[12px]">
        <Icon icon="mingcute:time-line" width={24} height={24} />
      </div>
      <div className="flex flex-col gap-[0.13rem]">
        <span className="text-inactive">Current date & time</span>
        <span>{formatter.format(currentDate)}</span>
      </div>
    </div>
  );
}
