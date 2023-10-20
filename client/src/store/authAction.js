import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//it is an demo setup of redux-toolkit this source code has not any business logic, When actual business logic is implemented these demo code will be deleted later

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    //const response = await userAPI.fetchById(userId)
    //return response.data
  }
);

const initialState = {
  authData: {
    loading: false,
    user: {
      name: "demo",
      email: "d@gmail.com",
      role: "admin",
      token: "fuifweghfuigsaedfjkhfghui",
    },
    error: false,
  },
};

export const authSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {},
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
