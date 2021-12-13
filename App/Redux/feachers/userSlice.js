import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const singUpUser = createAsyncThunk(
  "user/singUpUser",
  async (userData) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://finance-app-nestjs.herokuapp.com/auth/signup",
        data: userData,
      });

      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idel",
    data: {
      email: "",
      password: "",
      name: "",
      secondName: "",
    },
  },
    reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(singUpUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(singUpUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data.name = action.payload.name;
        state.data.email = action.payload.email;
        state.data.password = action.payload.password;
        state.data.secondName = action.payload.secondName;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(singUpUser.rejected, (state, action) => {
        state.status = "fail";
        localStorage.removeItem("user");
      });
  },
});


export default userSlice.reducer


export const UserDatas = (state) => state.user.data
export const UserStatus =(state)=> state.user.status