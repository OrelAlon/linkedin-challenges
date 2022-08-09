import { useContext } from "react";
import TestContext from "./TestContext";

const Example = () => {
  const { example } = useContext(TestContext);

  const handleClick = () => console.log(example);

  return (
    <div>
      <h3>Example</h3>
      <button onClick={handleClick}>Push</button>
    </div>
  );
};

export default Example;
