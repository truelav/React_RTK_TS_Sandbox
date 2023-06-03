import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
// import { userSlice } from "./features/User/UserSlice";
import { fetchUsers } from "./store/reducers/ActionCreators";

import "./styles.css";

export default function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading && <h1>Loading ...</h1>}
      {error && <h1>There was an error, please try again later!</h1>}
      <h1>Hello CodeSandbox</h1>
      <div>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
