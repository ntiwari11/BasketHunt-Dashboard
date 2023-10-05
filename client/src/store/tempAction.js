import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

//it is an demo setup of redux-toolkit this source code has not any business logic, When actual business logic is implemented these demo code will be deleted later

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        //const response = await userAPI.fetchById(userId)
        //return response.data
    }
)

const initialState = {
    tempData: [{ id: 1, message: "setup redux toolkit" }],
}

export const tempSlice = createSlice({
    name: "temp",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.tempData.push({ id: nanoid(), message: action.payload })
        },
        removeMessage: (state, action) => {
            state.tempData = state.tempData.filter((item) => item.message !== action.payload)
        }
    },
    asyncReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            state.tempData.push(action.payload)
        })
    },
},)


export const { addMessage, removeMessage } = tempSlice.actions;
export default tempSlice.reducer;


// Later, dispatch the thunk as needed in the app
//dispatch(fetchUserById(123))