import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../store/reducers/ActionCreators";
import { IUser } from "./IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  value: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  value: 0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    usersFetchingStart(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default userSlice.reducer;
// export default userSlice.actions
