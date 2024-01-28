type ImageButtonProps = {
  text: string;
  imageSrc: string;
  backgroundColor: string;
  onClick: () => void;
};

export default function ImageButton({
  text,
  imageSrc,
  backgroundColor,
  onClick,
}: ImageButtonProps) {
  return (
    <div className="w-full">
      <button
        style={{ backgroundColor: backgroundColor }}
        className={`flex items-center justify-center w-full h-12 px-4 py-2  bg-[${backgroundColor}] rounded-md shadow-md`}
        onClick={onClick}
      >
        <img src={imageSrc} alt={text} className="w-6 h-6 mr-2" />
        {text}
      </button>
    </div>
  );
}
