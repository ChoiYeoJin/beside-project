import React, { useState } from "react";
import Key from "./Key"; // Key 컴포넌트를 임포트합니다.

export default function Keyboard({ keys }: { keys: string[] }) {
  return (
    <>
      <div className="keyboard">
        {/* Row 1 */}
        <div className="flex justify-center">
          <Key character="`" isActive={keys.includes("`")} />
          <Key character="1" isActive={keys.includes("1")} />
          <Key character="2" isActive={keys.includes("2")} />
          <Key character="3" isActive={keys.includes("3")} />
          <Key character="4" isActive={keys.includes("4")} />
          <Key character="5" isActive={keys.includes("5")} />
          <Key character="6" isActive={keys.includes("6")} />
          <Key character="7" isActive={keys.includes("7")} />
          <Key character="8" isActive={keys.includes("8")} />
          <Key character="9" isActive={keys.includes("9")} />
          <Key character="0" isActive={keys.includes("0")} />
          <Key character="-" isActive={keys.includes("-")} />
          <Key character="=" isActive={keys.includes("=")} />
          <Key character="delete" isActive={keys.includes("delete")} />
        </div>
        {/* Row 2 */}
        <div className="flex justify-center">
          <Key character="tab" isActive={keys.includes("tab")} />
          <Key character="Q" isActive={keys.includes("Q")} />
          <Key character="W" isActive={keys.includes("W")} />
          <Key character="E" isActive={keys.includes("E")} />
          <Key character="R" isActive={keys.includes("R")} />
          <Key character="T" isActive={keys.includes("T")} />
          <Key character="Y" isActive={keys.includes("Y")} />
          <Key character="U" isActive={keys.includes("U")} />
          <Key character="I" isActive={keys.includes("I")} />
          <Key character="O" isActive={keys.includes("O")} />
          <Key character="P" isActive={keys.includes("P")} />
          <Key character="[" isActive={keys.includes("[")} />
          <Key character="]" isActive={keys.includes("]")} />
          <Key character="\\" isActive={keys.includes("\\")} />
        </div>
        {/* Row 3 */}
        <div className="flex justify-center">
          <Key character="caps" isActive={keys.includes("caps lock")} />
          <Key character="A" isActive={keys.includes("A")} />
          <Key character="S" isActive={keys.includes("S")} />
          <Key character="D" isActive={keys.includes("D")} />
          <Key character="F" isActive={keys.includes("F")} />
          <Key character="G" isActive={keys.includes("G")} />
          <Key character="H" isActive={keys.includes("H")} />
          <Key character="J" isActive={keys.includes("J")} />
          <Key character="K" isActive={keys.includes("K")} />
          <Key character="L" isActive={keys.includes("L")} />
          <Key character=";" isActive={keys.includes(";")} />
          <Key character="'" isActive={keys.includes("'")} />
          <Key character="enter" isActive={keys.includes("enter")} />
        </div>
        {/* Row 4 */}
        <div className="flex justify-center">
          <Key character="shift" isActive={keys.includes("shift")} />
          <Key character="Z" isActive={keys.includes("Z")} />
          <Key character="X" isActive={keys.includes("X")} />
          <Key character="C" isActive={keys.includes("C")} />
          <Key character="V" isActive={keys.includes("V")} />
          <Key character="B" isActive={keys.includes("B")} />
          <Key character="N" isActive={keys.includes("N")} />
          <Key character="M" isActive={keys.includes("M")} />
          <Key character="," isActive={keys.includes(",")} />
          <Key character="." isActive={keys.includes(".")} />
          <Key character="/" isActive={keys.includes("/")} />
          <Key character="shift" isActive={keys.includes("shift")} />
        </div>
        {/* Row 5 */}
        <div className="flex justify-center">
          <Key character="ctrl" isActive={keys.includes("ctrl")} />
          <Key character="window" isActive={keys.includes("window")} />
          <Key character="alt" isActive={keys.includes("alt")} />
          <Key character="space bar" isActive={keys.includes("space bar")} />
          <Key character="alt" isActive={keys.includes("alt")} />
          <Key character="fn" isActive={keys.includes("fn")} />
          <Key character="ctrl" isActive={keys.includes("ctrl2")} />
        </div>
      </div>
    </>
  );
}
