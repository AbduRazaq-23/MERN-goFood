import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Uri = "http://localhost:8000/api/v1/users";

//@dec asycthunk for api calls
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    const response = await axios.post(`${Uri}/register`, userData);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
