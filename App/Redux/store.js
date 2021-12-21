import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./feachers/todoSlice";
import transactionSlice from "./feachers/transactionSlice";
import userSlice from "./feachers/userSlice";


import walletSlice from "./feachers/walletSlice";

export const store = configureStore({
    reducer: ({
        user: userSlice,
        todos: todoSlice,
        transaction: transactionSlice,
        wallet: walletSlice,
  
       
    })
})
