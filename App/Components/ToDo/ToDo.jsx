import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import InputField from "../InputField/InputField";
import ToDoList from "../ToDoList/ToDoList";
import { useSelector } from "react-redux";
function ToDo({ text, setText, handleSubmit }) {

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h1" variant={"h4"}>
          TODO
        </Typography>
        <img src="/logo.svg" alt="" width="80px" />
      </Box>
      <InputField text={text} setText={setText} handleSubmit={handleSubmit} />
      <Box>
        <ToDoList />
      </Box>
    </Box>
  );
}

export default ToDo;
