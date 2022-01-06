import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const PostTransactions = createAsyncThunk(
  "transaction/PostTransactions",
  async (transaction) => {
    try {
      const res = await axios({
        method: "POST",
        url:"https://finance-app-nestjs.herokuapp.com/transactions/new",
        data: transaction,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    status: "idel",
    transaction: [],
  },
  reducers: {
    addTransaction(state, action) {
      console.log(action.payload);
      state.status = "success";
      state.transaction = [...state.transaction, action.payload.newTransaction];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(PostTransactions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(PostTransactions.fulfilled, (state, action) => {
        state.status = "success";
        state.transaction = action.payload;
      })
      .addCase(PostTransactions.rejected, (state, action) => {
        state.status = "fail";
      });
  },
});

export const transaction = (state) => state.transaction.transaction;
export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
