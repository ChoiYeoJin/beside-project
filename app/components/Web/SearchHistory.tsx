"use client";

import { useQuery } from "react-query";
import Blank from "../Blank";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData, fetchDataAuthorized } from "@/utils/fetch";
import { isUserLoggedIn } from "@/utils/storage";

export default function SearchHistory() {
  const pathname = usePathname();
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    setPlatform(pathname.split("/").pop() ?? "");
  }, []);

  const { data: data, status } = useQuery<Shortcut[]>(
    ["shortcuts", platform],
    () => fetchData<Shortcut[]>(`/shortcut-keys/?platform=${platform}`),
    {
      staleTime: Infinity,
    }
  );

  const { data: history } = useQuery<Shortcut[]>(
    ["shortcuts", platform],
    () => fetchDataAuthorized<Shortcut[]>(`/shortcut-keys/click-history/`),
    {
      staleTime: Infinity,
      enabled: isUserLoggedIn(),
    }
  );

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <div className="w-full h-full py-5 px-[22px]">
      <Blank height="60px" />
      <div className="flex flex-col  text-gray300">
        <div>문자</div>
      </div>
    </div>
  );
}
