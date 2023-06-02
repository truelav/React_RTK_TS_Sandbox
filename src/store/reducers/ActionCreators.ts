import axios from "axios";
import { IUser } from "../../features/User/IUser";
import { userSlice } from "../../features/User/UserSlice";
import { AppDispatch } from "../store";

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.usersFetchingStart);
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
      }, 500);
    } catch (e) {
      console.log(e);
      dispatch(userSlice.actions.usersFetchingError(e.message));
    }
  };
};
