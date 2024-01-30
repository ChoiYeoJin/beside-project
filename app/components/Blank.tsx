type BlankProps = {
  height: string;
};

export default function Blank({ height }: BlankProps) {
  return <div style={{ height: height }}></div>;
}
