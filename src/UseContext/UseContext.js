import { useContext } from "react";
import { NamesContext } from "../App";

const UseContext = () => {
  const { names } = useContext(NamesContext);
  console.log(names);

  return (
    <div>
      {names.map((p) => (
        <div key={p.id}>{p.fName}</div>
      ))}
    </div>
  );
};

export default UseContext;
