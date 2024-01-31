interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
}

export default function CheckBox({ checked, onChange }: CheckBoxProps) {
  return (
    <div
      onClick={onChange}
      className="flex items-center justify-center w-[40px] h-[40px] ml-[5px] rounded-[4px] text-[20px] font-medium bg-primary bg-opacity-10 text-primary border  border-primary"
    >
      {checked ? "✓" : ""}
    </div>
  );
}
