import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestSocketProvider = ({ children }) => {
  const [name, setName] = useState("defaultName");
  const contextValue = {
    name,
    setName,
  };
  return (
    <TestContext.Provider value={contextValue}>{children}</TestContext.Provider>
  );
};
