"use client";
import Card from "@/app/components/Card";
import fetchData from "@/utils/fetch";
import { isProgramBookmarked } from "@/utils/storage";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";

export default function BookmarkList() {
  const { data } = useSWR<Program[]>("/shortcut-keys/programs", fetchData);

  return (
    <div className={`grid gap-[11px] grid-cols-3`}>
      {data?.map((item) => {
        if (!isProgramBookmarked(item.platform)) return null;
        return (
          <Link href={`/pages/list/${item.platform}`} key={item.platform}>
            <Card height="60px" imgSrc={item.image_url} />
          </Link>
        );
      })}

      <Link href={"/pages/bookmark"}>
        <div className="flex items-center justify-center h-[60px] rounded-md font-semibold text-base text-gray300 bg-gray100">
          더보기
        </div>
      </Link>
    </div>
  );
}
