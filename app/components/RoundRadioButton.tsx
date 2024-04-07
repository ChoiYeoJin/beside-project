import React, { useState } from "react";

const RadioButton = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col p-4 space-y-2">
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="os"
          value="mac"
          checked={selected === "mac"}
          onChange={handleChange}
          className="form-radio h-6 w-6 text-gray-600 border-gray-300 focus:ring-gray-500"
        />
        <span className="ml-2">Mac</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          name="os"
          value="windows"
          checked={selected === "windows"}
          onChange={handleChange}
          className="form-radio h-6 w-6 text-gray-600 border-gray-300 focus:ring-gray-500"
        />
        <span className="ml-2">Windows</span>
      </label>
    </div>
  );
};

export default RadioButton;
