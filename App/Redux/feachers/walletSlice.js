import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCard = createAsyncThunk(
  "wallet/createCard",
  async (walletData) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://finance-app-nestjs.herokuapp.com/wallet/new",
        data: walletData,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchAllWallets = createAsyncThunk(
  "wallet/fetchAllWalllets",
  async (data) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://finance-app-nestjs.herokuapp.com/wallet/${data.userId}`,
        data: data,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const deleteWallet = createAsyncThunk(
  "wallet/deleteWallet",
  async (data) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://finance-app-nestjs.herokuapp.com/wallet/${data.walletId}`,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const handleChangeWallet = createAsyncThunk(
  "wallet/handleChangeWallet",
  async (data) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://finance-app-nestjs.herokuapp.com/wallet/${data.walletId}`,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

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

  extraReducers(builder) {
    builder
      .addCase(createCard.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.status = "success";
        state.wallet = [...state.wallet, action.payload];
      })
      .addCase(createCard.rejected, (state, action) => {
        state.status = "fail";
        localStorage.removeItem("wallet");
      })

      .addCase(fetchAllWallets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllWallets.fulfilled, (state, action) => {
        state.status = "success";
        state.wallet = action.payload;
      })
      .addCase(fetchAllWallets.rejected, (state, action) => {
        state.status = "fail";
        localStorage.removeItem("wallet");
      })
      .addCase(deleteWallet.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteWallet.fulfilled, (state, action) => {
        state.status = "success";
        state.wallet = state.wallet.filter(
          (wallet) => wallet.id !== action.payload.walletId
        );
      })
      .addCase(deleteWallet.rejected, (state, action) => {
        state.status = "fail";
        localStorage.removeItem("wallet");
      })
      .addCase(handleChangeWallet.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(handleChangeWallet.fulfilled, (state, action) => {
        state.status = "success";
        state.wallet = state.wallet.map((wallet) => {
          if (wallet.id === action.payload.walletId) {
            wallet.name = action.payload.name;
            wallet.currency = action.payload.currency;
          }
          return wallet;
        });
      })
      .addCase(handleChangeWallet.rejected, (state, action) => {
        state.status = "fail";
        localStorage.removeItem("wallet");
      });
  },
});

export const { addCard } = walletSlice.actions;

export const walletData = (state) => state.wallet.wallet;

export default walletSlice.reducer;
