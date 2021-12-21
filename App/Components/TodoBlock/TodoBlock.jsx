import { Paper, Typography, Box } from "@mui/material";

import React from "react";
import TodoBlockItem from "../TodoBlockItem/TodoBlockItem";

function TodoBlock() {
  return (
    <Paper elevation={3} sx={{  borderRadius: 5 }}>
      <Typography
        sx={{ paddingTop: 2, marginLeft: 3, paddingBottom: 1 }}
        component={"p"}
        variant="h6"
      >
        Tasks
      </Typography>
      <Box sx={{ paddingBottom: 1, marginLeft: 1, paddingRight: 1 }}>
        <TodoBlockItem />
      </Box>
    </Paper>
  );
}

export default TodoBlock;
