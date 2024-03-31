"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../components/QueryClient";
import { useFooterStore } from "@/store/FooterStore";
import WebHeader from "../components/header/WebHeader";
import { ReactQueryDevtools } from "react-query/devtools";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHidden = useFooterStore((state) => state.isHidden);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WebHeader />
        <section>{children}</section>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
