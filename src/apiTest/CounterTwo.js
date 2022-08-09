import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "-":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "--":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div> Count = {count.firstCounter}</div>
      <div> Count = {count.secoundCounter}</div>
      <button onClick={() => dispatch({ type: "+", value: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "+", value: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "-", value: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: "-", value: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: "--", value: 5 })}>--5</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
