import { Button, Checkbox, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { todosData } from "../../Redux/feachers/todoSlice";

import TodoListItem from "../TodoListItem/TodoListItem";

function ToDoList() {
  const todos = useSelector(todosData);

  console.log(todos);
  return (
    <List >

      {todos.map((todo, index) => {
        return <TodoListItem key={todo.id} {...todo} />;
      })}
    </List>
  );
}

export default ToDoList;
