import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "Errorr",
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      <h3>with reducer:</h3>
      {state.loading ? "Loading!!!" : state.post.body}
      <h3>{state.error}</h3>
    </div>
  );
};

export default DataFetchingTwo;
