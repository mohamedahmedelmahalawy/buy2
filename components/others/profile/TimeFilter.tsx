"use client";

import { useState } from "react";
import clsx from "clsx";

const filters = ["All time", "30 days", "90 Days"];

export default function TimeFilter() {
  const [active, setActive] = useState(0);

  return (
    <div className="inline-flex rounded-2xl bg-gray-100 p-1">
      {filters.map((filter, index) => (
        <button
          key={filter}
          onClick={() => setActive(index)}
          className={clsx(
            "rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200",
            active === index
              ? "bg-white text-black shadow-sm"
              : "text-gray-500 hover:text-black"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}