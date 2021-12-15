import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    status: "idel",
    transaction: [],
  },
  reducers: {
      addTransaction(state, action) {
          console.log(action.payload);
          state.status = 'success'
      state.transaction = [...state.transaction, action.payload.newTransaction];
    },
  },
});



export const transaction = (state) => state.transaction.transaction
export const {addTransaction} = transactionSlice.actions
export default transactionSlice.reducer;