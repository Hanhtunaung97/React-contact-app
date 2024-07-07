// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { authReducer } from "./reducer/action.reducer";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth.slice";
import contactSlice from "./slice/contact.slice";
import { apiService } from "./services/api.service";

// const reducer = combineReducers({
//   auth: authReducer,

// });
// export const store = createStore(reducer, {}, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contact: contactSlice,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
