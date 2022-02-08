import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

/* 'auth/register' could be anything, second argument is an async function */
// Register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
