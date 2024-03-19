import React from "react";

type TextPosition = "left" | "right" | "middle" | "center"; // left right middle => bottom position

type KeyProps = {
  character: string;
  isActive: boolean;
  size?: number;
  width?: number;
  fontSize?: number;
  textPosition?: TextPosition;
};

export default function Key({
  character,
  isActive,
  size,
  width,
  fontSize,
  textPosition,
}: KeyProps) {
  // 인라인 스타일 설정
  const customStyle: React.CSSProperties = {
    flexGrow: size ?? 1,
    minWidth: width ? `${width}px` : "20px",
    minHeight: "20px",
    height: "28px",
    width: width ? `${width}px` : "28px",
    marginBottom: "3.5px",
    fontSize: fontSize ? `${fontSize}px` : "10px", // 여기에서 fontSize를 직접적으로 지정
  };

  let positionClass = "flex-col justify-end";
  if (textPosition) {
    if (textPosition === "left") {
      positionClass = "flex-col justify-end";
    } else if (textPosition === "right") {
      positionClass = "flex-col justify-end items-end";
    } else if (textPosition === "middle") {
      positionClass = "flex-col justify-end items-center";
    } else if (textPosition === "center") {
      positionClass = "flex-col justify-center items-center";
    }
  }

  const keyClass = isActive
    ? `flex bg-primary text-white p-1 `
    : `flex  bg-[#f8f8f8] border-[0.48px] border-[#ccc] text-gray300 p-1`;

  return (
    <div
      id={character}
      className={`${keyClass} ${positionClass} flex-grow min-w-[var(--key-width)] font-medium rounded-[2.87px] `}
      style={customStyle} // 수정된 인라인 스타일 적용
    >
      <p>{character}</p>
    </div>
  );
}
