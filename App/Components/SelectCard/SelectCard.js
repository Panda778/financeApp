import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { walletData } from "../../Redux/feachers/walletSlice";

export default function SelectCard({wallet,setWallet}) {

  const walletDatas = useSelector(walletData);
  const handleChange = (event) => {
    setWallet(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">wallet</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="takecard"
          value={wallet}
          onChange={handleChange}
        >
          {walletDatas.map((item,index) => {
            return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>;
          })}
        </Select>

      </FormControl>
    </Box>
  );
}
