import { useState } from "react";

type Props = {
  colors: string[];
};

export const ColorList = ({ colors }: Props) => {
  const [currentColor, setCurrentColor] = useState<null | string>(null);

  const handlePickColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <ul className="flex justify-between gap-2 flex-wrap">
      {colors.map((color) => (
        <li key={color} onClick={() => handlePickColor(color)}>
          <span
            className={`flex w-6 h-6 bg-[${color}] rounded-lg ${
              currentColor === color ? "border-2 border-regal-blue" : ""
            }`}
          ></span>
        </li>
      ))}
    </ul>
  );
};
