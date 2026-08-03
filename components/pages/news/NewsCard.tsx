import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ image = true, btn = true }) {
  return (
    <div className="flex flex-col p-4 py-6 border border-[#E7E7E7] rounded-[1.25rem]">
      <div className="flex justify-between items-start 2xl:gap-12 gap-10">
        <div className="flex items-start gap-4">
          {image && (
            <Image
              src="https://placehold.co/112x112.png"
              alt="news"
              width={112}
              height={112}
              className="rounded-[1.25rem] object-cover"
            />
          )}
          <div>
            <h3 className="text-base font-semibold text-black-white">
              How to Write a Business Plan
            </h3>
            <p className="text-xs text-inactive mb-3">
              Added June 27, 2023 | 12:00 PM
            </p>
            <p className="text-[0.75rem] text-[#888]">
              The executive summary provides a snapshot of your business and its
              plans. This section should include your business’s name, location,
              products or services, mission statement, and the purpose of the
              plan. It should be concise yet compelling enough t...
            </p>
          </div>
        </div>
        {btn && (
          <Link href="/news/id">
            <Button className="bg-brand text-sm font-medium px-4 py-5">
              View details
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
