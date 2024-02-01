import Image from "next/image";

type ImageButtonProps = {
  imageSrc: string;
  onClick: () => void;
};

export default function ImageButton({ imageSrc, onClick }: ImageButtonProps) {
  return (
    <div onClick={onClick}>
      {/* <button
        style={{ backgroundColor: backgroundColor }}
        className="rounded-full"
        onClick={onClick}
      >
        <img src={imageSrc} alt={text} className="w-6 h-6 mr-2" />
        {text}
      </button> */}
      <Image src={imageSrc} alt="social" width={52} height={52} />
    </div>
  );
}
