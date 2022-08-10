import React, { useReducer } from "react";

export const UseReducer = () => {
  const initialState = {
    Msg: "hey",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "yel":
        return { Msg: "HEYYYY!" };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  console.log(initialState);
  return (
    <>
      <p>Msg: {state.Msg}</p>
      <button onClick={() => dispatch({ type: "yel" })}>push</button>
    </>
  );
};
