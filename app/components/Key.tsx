import React from "react";

type KeyProps = {
  character: string;
  isActive: boolean;
  size?: number;
  width?: number;
};

export default function Key({ character, isActive, size, width }: KeyProps) {
  // CSS 커스텀 속성을 설정합니다.
  const customStyle: React.CSSProperties & {
    "--key-flex-grow": string;
    "--key-width": string;
    filter: string;
  } = {
    "--key-flex-grow": `${size ?? 1}`,
    "--key-width": width ? `${width}px` : "20px",
    filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.05));",
  };

  const keyClass = isActive
    ? `flex flex-col justify-end bg-primary text-white p-1 rounded-[2px]`
    : `flex flex-col justify-end bg-white text-gray300 p-1 rounded-[2px]`;

  return (
    <div
      id={character}
      className={`${keyClass} flex-grow min-w-[var(--key-width)] min-h-[20px] mb-[3.5px] font-medium`}
      style={customStyle}
    >
      <p className="text-[6px]">{character}</p>
    </div>
  );
}
