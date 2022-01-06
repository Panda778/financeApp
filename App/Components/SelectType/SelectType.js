import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { walletData } from "../../Redux/feachers/walletSlice";

export default function SelectType({ type, setType }) {
  const types = [
    {
      type: "income",
    },
    { type: "exprense" },
  ];

  console.log(type);
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="takecard"
          value={type}
          onChange={handleChange}
        >
          {types.map((item, index) => {
            return (
              <MenuItem key={index} value={item.type}>
                {item.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
