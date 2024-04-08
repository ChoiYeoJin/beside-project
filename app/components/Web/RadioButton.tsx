import React, { ChangeEvent } from "react";

type RadioButtonProps = {
  selected: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ selected, onChange }: RadioButtonProps) => {
  return (
    <div className="flex w-full items-start">
      {/* 각 라디오 버튼이 전체 너비의 50%를 차지하도록 설정 */}
      <div className="w-1/2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={selected === "option1"}
            onChange={onChange}
            className="hidden"
          />
          <span className="relative h-6 w-6 rounded-full border-2 border-[#CCCCCC] mr-2 flex items-center justify-center bg-white">
            {selected === "option1" && (
              <span className="block rounded-full bg-[#CCCCCC] h-3 w-3"></span>
            )}
          </span>
          Mac
        </label>
      </div>

      <div className="w-1/2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="radio"
            value="option2"
            checked={selected === "option2"}
            onChange={onChange}
            className="hidden"
          />
          <span className="relative h-6 w-6 rounded-full border-2 border-[#CCCCCC] mr-2 flex items-center justify-center bg-white">
            {selected === "option2" && (
              <span className="block rounded-full bg-[#CCCCCC] h-3 w-3"></span>
            )}
          </span>
          Window
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
