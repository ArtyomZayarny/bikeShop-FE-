import { useState } from "react";
import Slider from "@mui/material/Slider";

type Props = {
  maxPrice?: number;
};

export const RangeSlider = ({ maxPrice }: Props) => {
  const [value, setValue] = useState<number[]>([0, maxPrice!]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <input
          type="text"
          className=" bg-white rounded-md max-w-[103px] h-7 shadow focus:outline-none text-center"
          value={value[0]}
          onChange={() => {}}
        />
        <input
          type="text"
          className=" bg-white rounded-md max-w-[103px] h-7 shadow focus:outline-none text-center"
          value={value[1]}
          onChange={() => {}}
        />
      </div>
      <Slider
        defaultValue={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={maxPrice}
        sx={{
          color: "#B3BBBD",
          "& .MuiSlider-thumb": {
            height: 16,
            width: 16,
            backgroundColor: "#fff",
            fill: "#fff",
            filter: "drop-shadow(1px 1px 2px rgba(46, 66, 77, 0.10))",
          },
        }}
        size="small"
      />
    </div>
  );
};
