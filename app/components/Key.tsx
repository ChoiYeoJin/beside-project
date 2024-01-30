type KeyProps = {
  character: string;
  isActive: boolean;
};

export default function Key({ character, isActive }: KeyProps) {
  const keyClass = isActive
    ? " text- bg-primary text-white m-1 p-1 rounded  cursor-pointer select-none border shadow-md"
    : "bg-white text-black m-1 p-1 rounded  cursor-pointer select-none border shadow-md";

  return (
    <div id={character} className={keyClass}>
      <p className="text-xs">{character}</p>
    </div>
  );
}
