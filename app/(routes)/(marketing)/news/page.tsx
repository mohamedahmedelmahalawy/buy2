import { NewsBreadcrumbBasic } from "@/components/pages/news/NewsBreadcrumbBasic";
import NewsCard from "@/components/pages/news/NewsCard";
import NewsPagination from "@/components/pages/news/NewsPagination";

import { Separator } from "@/components/ui/separator";

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-4">
      <NewsBreadcrumbBasic />
      <div className="px-2 my-2">
        <Separator />
      </div>
      <NewsCard image={false} />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsPagination />
    </div>
  );
}
