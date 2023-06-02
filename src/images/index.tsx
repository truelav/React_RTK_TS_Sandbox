import { useAppDispatch, useAppSelector } from "./../hooks";

import { fetchImages } from "./imageSlice";

export default function App() {
  const posts = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>images - {posts.loading && "loading..."}</h1>
      <button
        onClick={() => {
          const res = dispatch(fetchImages());
          console.log("res", res);
          res
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }}
      >
        fetch posts
      </button>
      <ul>
        {posts.images.map((el, i) => (
          <li key={i}>{JSON.stringify(el)}</li>
        ))}
      </ul>
    </div>
  );
}
