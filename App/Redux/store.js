import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feachers/todoSlice";
import userSlice from "./feachers/userSlice";

export const store = configureStore({
    reducer: ({
        user: userSlice,
        todos: todoSlice
       
    })
})
