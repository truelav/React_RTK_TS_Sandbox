import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../hooks";
import { RootState } from "./../store";

import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  // omit rendering logic
  return (
    <div>
      <p>counter - {count}</p>

      <button onClick={() => dispatch(increment())}>increment</button>

      <button onClick={() => dispatch(decrement())}>decrement</button>

      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(text)))}>
        increase
      </button>
    </div>
  );
}
