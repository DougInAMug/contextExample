import { useContext, createContext, useState } from "react";

interface ContextType {
  contextValue: number;
  countIncrement: () => void;
}

export const CountContext = createContext<ContextType>({
  contextValue: 0,
  countIncrement: () => {},
});

export const countContext = () => useContext(CountContext);

function ContextProvider({ children }: { children: any }) {
  const [contextValue, setContextValue] = useState(0);
  function countIncrement() {
    setContextValue(contextValue + 1);
  }
  return (
    <CountContext.Provider
      value={{
        contextValue,
        countIncrement,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export default ContextProvider