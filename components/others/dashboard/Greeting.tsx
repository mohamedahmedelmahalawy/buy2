import { Icon } from "@iconify-icon/react";

export default function Greeting() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">Hello Mohamed</h2>
        <Icon
          icon="mdi:hand-wave-outline"
          width={24}
          height={24}
          flip="horizontal"
        />
      </div>
      <h3 className="text-sm font-normal text-muted-foreground">
        Good Morning
      </h3>
    </div>
  );
}
