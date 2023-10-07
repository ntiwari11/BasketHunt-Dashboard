import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authAction";
import cardListReducer from "./cardListAction";


const rootReducer = combineReducers({
    authReducer: authReducer,
    cardListReducer: cardListReducer,
  });

export const store = configureStore({
    reducer: rootReducer,
});