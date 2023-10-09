import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    authData: { loading: false, user: { name: "demo", email: "d@gmail.com", role: "admin",token:"fuifweghfuigsaedfjkhfghui" }, error: false }
}

export const authSlice = createSlice({
    name: "authenticate",
    initialState,
    reducers: {
       
    },
},)

// export const {  } = authSlice.actions;
export default authSlice.reducer;
