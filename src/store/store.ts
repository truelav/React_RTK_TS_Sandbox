import { configureStore, combineReducers } from "@reduxjs/toolkit";
// ...
import counterReducer from "../features/counterSlice";
import imageReducer from "../images/imageSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: imageReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
