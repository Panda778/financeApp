import { Paper } from "@mui/material";
import React from "react";
import NewsBlockItem from "../NewsBlockItem/NewsBlockItem";

function NewsBlock() {
  return (
      <Paper
          elevation={3}
      sx={{
        width: "747px",
        height: "420px",
        padding: "5px 28px 30px 30px",
        marginTop: 5,
        borderRadius: 5,
      }}
    >
      <h3>News update</h3>
      <NewsBlockItem />
    </Paper>
  );
}

export default NewsBlock;
