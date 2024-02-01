"use client";

import { useFooterStore } from "@/store/FooterStore";
import Footer from "../components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHidden = useFooterStore((state) => state.isHidden);
  return (
    <>
      <section>{children}</section>
      {<Footer />}
    </>
  );
}
