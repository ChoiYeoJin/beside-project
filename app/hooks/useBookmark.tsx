import { useUserStore } from "@/store/UserStore";
import { isUserLoggedIn } from "@/utils/storage";
import { useEffect, useState } from "react";

export default function useBookmark() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const getBookmarkShortcuts = useUserStore(
    (state) => state.getBookmarkShortcuts
  );
  const getBookmarkPrograms = useUserStore(
    (state) => state.getBookmarkPrograms
  );
  const bookmarkPrograms = useUserStore((state) => state.bookmarkPrograms);
  const bookmarkShortcuts = useUserStore((state) => state.bookmarkShortcuts);

  const [currShortcuts, setCurrShortcuts] = useState<string[]>();
  const [currPrograms, setCurrPrograms] = useState<string[]>();

  const onBookmarkInit = async () => {
    if (!isUserLoggedIn()) {
      return;
    }
    await getBookmarkShortcuts();
    await getBookmarkPrograms();

    setCurrShortcuts(bookmarkShortcuts.map((item) => item.id));
    setCurrPrograms(bookmarkPrograms.map((item) => item.id));

    setIsLoaded(true);
  };

  // useEffect(() => {
  //   if (bookmarkShortcuts.length > 0) {
  //     setCurrShortcuts(bookmarkShortcuts.map((item) => item.id));
  //   }
  // }, [bookmarkShortcuts]); // bookmarkShortcuts 상태가 변경될 때마다 실행

  // useEffect(() => {
  //   if (bookmarkPrograms.length > 0) {
  //     console.log(bookmarkPrograms);
  //     setCurrPrograms(bookmarkPrograms.map((item) => item.id));
  //   }
  // }, [bookmarkPrograms]);

  return {
    onBookmarkInit,
    currShortcuts,
    currPrograms,
    bookmarkPrograms,
    bookmarkShortcuts,
    isLoaded,
  };
}
