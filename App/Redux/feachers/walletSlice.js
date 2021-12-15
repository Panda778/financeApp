import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    status: "idel",
    wallet: [],
  },
  reducers: {
    addCard(state, action) {
      (state.status = "success"),
        (state.wallet = [...state.wallet, action.payload.newCard]);
    },
  },
});

export const { addCard } = walletSlice.actions;

export default walletSlice.reducer;
