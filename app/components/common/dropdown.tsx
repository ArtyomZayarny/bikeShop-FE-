import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  options: string[];
};

export const DropDown = ({ options }: Props) => {
  const [size, setSize] = React.useState(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <Select
        id="demo-simple-select"
        value={size}
        onChange={handleChange}
        sx={{
          borderRadius: 0,
          backgroundColor: "white",
          "& .MuiInputBase-input": {
            fontSize: "12px",
            color: "#2E424D",
            fontWeight: "400",
            paddingBottom: "4px",
            paddingTop: "4px",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              fontSize: "12px",
              color: "#2E424D",
              fontWeight: "400",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
