import React, { useState } from "react";
import Key from "./Key"; // Key 컴포넌트를 임포트합니다.
import Blank from "../Blank";

export default function Keyboard({ keys }: { keys: string[] }) {
  return (
    <div>
      <div className="keyboard  w-full flex">
        <Blank height="30px" />
        {/* Function Keys Row */}
        <div>
          <div className="flex justify-center gap-[3.83px]">
            <Key character="F1" isActive={keys.includes("esc")} />
            <Key character="F1" isActive={keys.includes("F1")} />
            <Key character="F2" isActive={keys.includes("F2")} />
            <Key character="F3" isActive={keys.includes("F3")} />
            <Key character="F4" isActive={keys.includes("F4")} />
            <Key character="F5" isActive={keys.includes("F5")} />
            <Key character="F6" isActive={keys.includes("F6")} />
            <Key character="F7" isActive={keys.includes("F7")} />
            <Key character="F8" isActive={keys.includes("F8")} />
            <Key character="F9" isActive={keys.includes("F9")} />
            <Key character="F10" isActive={keys.includes("F10")} />
            <Key character="F11" isActive={keys.includes("F11")} />
            <Key character="F12" isActive={keys.includes("F12")} />
          </div>

          {/* Row 1 */}
          <div className="flex justify-center gap-[3.83px]">
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
            <Key
              character="delete"
              size={3}
              isActive={keys.includes("delete")}
              fontSize={6.7}
            />
          </div>
          {/* Row 2 */}
          <div className="flex justify-center gap-[3.83px]">
            <Key
              character="tab"
              size={3}
              isActive={keys.includes("tab")}
              fontSize={6.7}
            />
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
            <Key character="\" isActive={keys.includes("\\")} />
          </div>
          {/* Row 3 */}
          <div className="flex justify-center gap-[3.83px]">
            <Key
              character="caps lock"
              size={4}
              isActive={keys.includes("caps lock")}
              fontSize={6.7}
            />
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
            <Key
              character="enter"
              size={4}
              isActive={keys.includes("enter")}
              fontSize={6.7}
              textPosition={"right"}
            />
          </div>
          {/* Row 4 */}
          <div className="flex justify-center gap-[3.83px]">
            <Key
              character="shift"
              size={3}
              width={55}
              isActive={keys.includes("shift")}
              fontSize={6.7}
            />
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
            <Key
              character="shift"
              size={3}
              width={55}
              isActive={keys.includes("shift")}
              fontSize={6.7}
              textPosition={"right"}
            />
          </div>
          {/* Row 5 */}
          <div className="flex justify-center gap-[3.83px]">
            <Key
              character="ctrl"
              isActive={keys.includes("Ctrl")}
              fontSize={6.7}
            />
            <Key
              character="option"
              isActive={keys.includes("window")}
              fontSize={6.7}
            />
            <Key
              character="alt"
              isActive={keys.includes("Alt")}
              fontSize={6.7}
            />
            <Key
              character=""
              size={3}
              width={170}
              isActive={keys.includes("space bar")}
            />
            <Key
              character="cmd"
              isActive={keys.includes("alt")}
              fontSize={6.7}
            />
            <Key
              character="option"
              isActive={keys.includes("Fn")}
              fontSize={6.7}
            />
            <Key
              character="ctrl"
              isActive={keys.includes("ctrl2")}
              fontSize={6.7}
              textPosition={"right"}
            />
          </div>
        </div>

        {/* 오른쪽 키 섹션 스페셜키, 방향키 */}
        <div className="flex justify-between flex-col ml-[10px]">
          {/* Special Keys (Right Upper Side) */}
          <div className="flex flex-col items-center">
            {/* First Column */}
            <div className="flex justify-center gap-[3.83px]">
              <Key
                character="Insert"
                isActive={keys.includes("Insert")}
                fontSize={6.7}
                textPosition="center"
              />
              <Key
                character="Home"
                isActive={keys.includes("Home")}
                fontSize={6.7}
                textPosition="center"
              />
              <Key
                character="Pgup"
                isActive={keys.includes("Pgup")}
                fontSize={6.7}
                textPosition="center"
              />
            </div>
            {/* Second Column */}
            <div className="flex justify-center gap-[3.83px]">
              <Key
                character="Delete"
                isActive={keys.includes("Delete")}
                fontSize={6.7}
                textPosition="center"
              />
              <Key
                character="End"
                isActive={keys.includes("End")}
                fontSize={6.7}
                textPosition="center"
              />
              <Key
                character="Pgdn"
                isActive={keys.includes("Pgdn")}
                fontSize={6.7}
                textPosition="center"
              />
            </div>
            {/* Third Column */}
            {/* <div className="flex flex-col">
              <Key character="Page Up" isActive={keys.includes("Page Up")} />
              <Key
                character="Page Down"
                isActive={keys.includes("Page Down")}
              />
            </div> */}
          </div>

          {/* Arrow Keys (Right Lower Side) */}
          <div className="flex flex-col items-center">
            <div className="">
              {" "}
              {/* Adjust margin as needed */}
              <Key
                character="↑"
                isActive={keys.includes("ArrowUp")}
                textPosition="center"
              />
            </div>
            <div className="flex justify-center gap-[3.83px]">
              <Key
                character="←"
                isActive={keys.includes("ArrowLeft")}
                textPosition="center"
              />
              <Key
                character="↓"
                isActive={keys.includes("ArrowDown")}
                textPosition="center"
              />
              <Key
                character="→"
                isActive={keys.includes("ArrowRight")}
                textPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
