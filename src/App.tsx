import "./styles.css";
// import Counter from "./features";
import Images from "./images";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        {/* <Counter /> */}
        <Images />
      </div>
    </Provider>
  );
}
