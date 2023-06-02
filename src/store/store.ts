import { configureStore, combineReducers } from "@reduxjs/toolkit";
// ...
import counterReducer from "../features/counterSlice";
import imageReducer from "../images/imageSlice";
import userReducer from "../features/User/UserSlice";

const rootReducer = combineReducers({
  counterReducer,
  imageReducer,
  userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: imageReducer,
    user: userReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
