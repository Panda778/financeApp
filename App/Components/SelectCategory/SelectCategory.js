import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { walletData } from "../../Redux/feachers/walletSlice";

export default function SelectCard({ category, setCategory }) {
  const categories = [{text: 'Food & Beverage'},{text: 'Transportation'},{text: 'Internet Bill'},{text: 'Other Utility Bills'},{text: 'education'},{text: 'other'}];
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="takecard"
          value={category}
          onChange={handleChange}
        >
          {categories.map((item, index) => {
            return (
              <MenuItem key={index} value={item.text}>
                {item.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
