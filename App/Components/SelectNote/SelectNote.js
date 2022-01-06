import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectNote({ note, setNote }) {
  const noteArr = [{text:'Food'},{text:'Taxi'}, {text:'Other'}, {text:'Study'}, {text:'Food'},{text:'Food'} ,{text:'Food'}];
  const handler = (e) => {
    setNote(e.target.value);
  };

  return (
    <Box sx={{ width:'100%'}}>
      <FormControl fullWidth>
              <InputLabel id="note">Note</InputLabel>
        <Select
          labelId="note"
          id="note"
          label="note"
          value={note}
          onChange={handler}
        >
                  {noteArr.map((item,index) => {
                      return <MenuItem key={index} value={item.text} >{item.text}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
