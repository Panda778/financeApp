import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import InputField from "../InputField/InputField";
import ToDoList from "../ToDoList/ToDoList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { todosData } from "../../Redux/feachers/todoSlice";
import { addTodo } from "../../Redux/feachers/todoSlice";

function ToDo() {
  const [text, setText] = useState("");

 
  console.log('here',todosData);
   const dispatch = useDispatch(addTodo);
   const addTask = () => {
     if (text.trim().length) {
       dispatch(addTodo({ text }));
       setText("");
     }
   };
   
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
      <InputField  text={text} setText={setText} handleSubmit={addTask} />
      <Box>
        <ToDoList  />
      </Box>
    </Box>
  );
}

export default ToDo;
