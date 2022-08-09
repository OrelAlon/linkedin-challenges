import { createContext, useState } from "react";

const TestContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [example, setExample] = useState([
    { id: 1, text: "working!" },
    { id: 2, text: "yes baby" },
  ]);
  return (
    <TestContext.Provider value={{ example }}>{children}</TestContext.Provider>
  );
};

export default TestContext;
