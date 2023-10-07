import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//it is an demo setup of redux-toolkit this source code has not any business logic, When actual business logic is implemented these demo code will be deleted later

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        //const response = await userAPI.fetchById(userId)
        //return response.data
    }
)

const initialState = {
    authData: { loading: false, user: { name: "demo", email: "d@gmail.com", role: "admin",token:"fuifweghfuigsaedfjkhfghui" }, error: false }
}

export const authSlice = createSlice({
    name: "authenticate",
    initialState,
    reducers: {
        // tempurariFunction: (state, action) => {
        //     state.tempData.push({ id: nanoid(), message: action.payload })
        // }
    },
    //asyncReducers
    asyncReducers: (builder) => {
        // // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchUserById.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     state.tempData.push(action.payload)
        // })
    },
},)


// export const {  } = authSlice.actions;
export default authSlice.reducer;


// Later, dispatch the thunk as needed in the app
//dispatch(fetchUserById(123))