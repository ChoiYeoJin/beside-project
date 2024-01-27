"use client";
import { useState } from "react";
import Fuse, { FuseResult } from "fuse.js";

type ShortcutKey = {
  id: string;
  key: string;
  description: string;
};

const options = {
  includeScore: true,
  keys: ["key", "description"],
};

const shortcutKeys: ShortcutKey[] = [
  { id: "1", key: "Cmd/Ctrl + N", description: "새 파일 생성" },
  { id: "2", key: "Cmd/Ctrl + O", description: "파일 열기" },
  { id: "3", key: "Cmd/Ctrl + S", description: "파일 저장" },
  {
    id: "4",
    key: "Cmd/Ctrl + Shift + S",
    description: "다른 이름으로 파일 저장",
  },
  { id: "5", key: "Cmd/Ctrl + Z", description: "실행 취소" },
  { id: "6", key: "Cmd/Ctrl + Shift + Z", description: "다시 실행" },
  { id: "7", key: "Cmd/Ctrl + C", description: "복사" },
  { id: "8", key: "Cmd/Ctrl + X", description: "잘라내기" },
  { id: "9", key: "Cmd/Ctrl + V", description: "붙여넣기" },
  { id: "10", key: "Cmd/Ctrl + D", description: "선택 항목 복제" },
  { id: "11", key: "Cmd/Ctrl + A", description: "전체 선택" },
  { id: "12", key: "Cmd/Ctrl + G", description: "그룹 생성" },
  { id: "13", key: "Cmd/Ctrl + Shift + G", description: "그룹 해제" },
  { id: "14", key: "Cmd/Ctrl + Shift + K", description: "컴포넌트 생성" },
  {
    id: "15",
    key: "Cmd/Ctrl + Alt + K",
    description: "컴포넌트 인스턴스 생성",
  },
  { id: "16", key: "Cmd/Ctrl + B", description: "선택 항목 뒤로 보내기" },
  {
    id: "17",
    key: "Cmd/Ctrl + Shift + B",
    description: "선택 항목 맨 뒤로 보내기",
  },
  { id: "18", key: "Cmd/Ctrl + F", description: "찾기" },
  { id: "19", key: "Cmd/Ctrl + Shift + F", description: "바꾸기" },
  { id: "20", key: "Cmd/Ctrl + L", description: "레이어 리스트 토글" },
  { id: "21", key: "Cmd/Ctrl + R", description: "자 ruler 토글" },
  { id: "22", key: "Cmd/Ctrl + Y", description: "아웃라인 모드 토글" },
  { id: "23", key: "Cmd/Ctrl + +", description: "확대" },
  { id: "24", key: "Cmd/Ctrl + -", description: "축소" },
  { id: "25", key: "Cmd/Ctrl + 0", description: "실제 크기로 보기" },
  { id: "26", key: "Cmd/Ctrl + 1", description: "캔버스에 맞춤" },
  { id: "27", key: "Cmd/Ctrl + 2", description: "선택 항목에 맞춤" },
  { id: "28", key: "Cmd/Ctrl + T", description: "텍스트 편집 모드" },
  { id: "29", key: "Cmd/Ctrl + M", description: "측정 모드" },
  { id: "30", key: "Cmd/Ctrl + P", description: "프로토타입 모드" },
];

const fuse = new Fuse(shortcutKeys, options);

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FuseResult<ShortcutKey>[]>([]);

  const onSearch = (q: string) => {
    setQuery(q);
    const results = fuse.search(q);
    setResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="검색어 입력..."
      />
      <ul>
        {results.length !== 0 &&
          query !== "" &&
          results.map((result) => (
            <li key={result.item.key}>
              {result.item.key} by {result.item.description}
            </li>
          ))}
        {results.length === 0 &&
          query === "" &&
          shortcutKeys.map((shortcutKey) => (
            <li key={shortcutKey.key}>
              {shortcutKey.key} by {shortcutKey.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
