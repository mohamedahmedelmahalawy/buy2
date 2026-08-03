import NewsCard from "@/components/pages/news/NewsCard";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";
import Link from "next/link";

export default function News({ className }) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white p-6 flex flex-col gap-4 max-w-174.5",
        className,
      )}
    >
      <div className="flex justify-between items-center gap-4 mb-2">
        <div className="space-y-[0.12rem]">
          <h3 className="text-base font-medium text-black-white">News</h3>
          <p className="text-[0.625rem] text-foreground">
            Everything new in the company will be here
          </p>
        </div>

        <Link href="/news">
          <Button className="text-brand text-sm font-medium">View All</Button>
        </Link>
      </div>
      <NewsCard image={false} btn={false} />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}
