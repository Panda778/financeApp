import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'



const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id:uuidv4(),
        text: action.payload.text,
        complete: false,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    handleChange(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      });
    },
    handleEditById(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
            todo.text = action.payload.editText
        }
        return todo
      })
    }
  },
});

export const { addTodo, deleteTodo, handleChange ,handleEditById} = todoSlice.actions;
export const todosData = (state) => state.todos.todos;
console.log(todosData);
export default todoSlice.reducer;
