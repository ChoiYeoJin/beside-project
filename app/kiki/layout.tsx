"use client";

import { useFooterStore } from "@/store/FooterStore";
import WebHeader from "../components/header/WebHeader";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHidden = useFooterStore((state) => state.isHidden);
  return (
    <>
      <WebHeader />
      <section>{children}</section>
    </>
  );
}
