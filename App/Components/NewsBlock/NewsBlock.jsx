import { Paper } from "@mui/material";
import React from "react";
import NewsBlockItem from "../NewsBlockItem/NewsBlockItem";

function NewsBlock() {
  return (
      <Paper
          elevation={3}
      sx={{
   
        height: "auto",
        padding: "5px 10px 10px 10px",
      
        borderRadius: 5,
      }}
    >
      <h3>News update</h3>
      <NewsBlockItem />
    </Paper>
  );
}

export default NewsBlock;
