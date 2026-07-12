"use client";

import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import WorkedToday from "./WorkedToday";
import { cn } from "@/lib/utils";

type AttendanceData = {
  checkInTime: string | null;
  checkOutTime: string | null;
  isPresent: boolean;
};

export default function Attendance({ className }: { className?: string }) {
  const [attendanceData, setAttendanceData] = useState<AttendanceData>({
    checkInTime: null,
    checkOutTime: null,
    isPresent: false,
  });

  function handleAttendance() {
    setAttendanceData((prev) => {
      // Clock in
      if (!prev.isPresent) {
        return {
          isPresent: true,
          checkInTime: new Date().toISOString(),
          checkOutTime: null,
        };
      }

      // Clock out
      return {
        ...prev,
        isPresent: false,
        checkOutTime: new Date().toISOString(),
      };
    });
  }

  return (
    <div className={cn("max-w-122.25 rounded-3xl bg-white p-6", className)}>
      <div className="mb-[1.53rem] flex justify-between gap-4">
        <div className="flex-1">
          <div>
            <h3 className="text-base font-medium">Attendance</h3>

            <p className="mt-[0.12rem] text-[0.625rem] text-gray-400">
              Get to work, but don’t forget to have a break.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Icon icon="ph:fingerprint-light" width={24} height={24} />

            <p className="text-[0.625rem]">
              {attendanceData.isPresent
                ? "You are marked present today."
                : "You've not marked yourself as present today."}
            </p>
          </div>

          <div className="mt-[1.97rem] flex items-center gap-[3.13rem]">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-success" />

              <span className="text-[0.625rem]">
                Clock in{" "}
                <span className="text-success">
                  {attendanceData.checkInTime
                    ? new Date(attendanceData.checkInTime).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        },
                      )
                    : "--"}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-error" />

              <span className="text-[0.625rem]">
                Clock out{" "}
                <span className="text-error">
                  {attendanceData.checkOutTime
                    ? new Date(attendanceData.checkOutTime).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        },
                      )
                    : "--"}
                </span>
              </span>
            </div>
          </div>
        </div>

        <WorkedToday
          checkInTime={attendanceData.checkInTime}
          checkOutTime={attendanceData.checkOutTime}
        />
      </div>

      <Button
        type="button"
        onClick={handleAttendance}
        className="w-full bg-brand px-8 py-6 text-base font-medium"
      >
        {attendanceData.isPresent ? "Clock out" : "Clock in"}
      </Button>
    </div>
  );
}
