import { Icon } from "@iconify/react";

interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
}

export default function InfoCard({
  icon,
  label,
  value,
}: InfoCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <Icon
        icon={icon}
        className="text-[#756EF3]"
        width={22}
        height={22}
      />

      <div>
        <p className="text-sm text-[#A6A6A6]">{label}</p>
        <p className="text-base font-semibold text-[#1C1C1C]">
          {value}
        </p>
      </div>
    </div>
  );
}