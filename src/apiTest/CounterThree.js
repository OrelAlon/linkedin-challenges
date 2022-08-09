import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div> Count = {count}</div>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div> CountTwo = {countTwo}</div>
      <button onClick={() => dispatchTwo("+")}>+</button>
      <button onClick={() => dispatchTwo("-")}>-</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
};

export default CounterThree;
