import { Children } from "react";

export default function HorizontalSlide({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-auto whitespace-nowrap scroll-snap-x mx-[-16px]">
      {Children.map(children, (child, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className="inline-block scroll-snap-align mr-4 ml-4"
            >
              {child}
            </div>
          );
        } else {
          return (
            <div key={index} className="inline-block scroll-snap-align mr-4">
              {child}
            </div>
          );
        }
      })}
    </div>
  );
}
