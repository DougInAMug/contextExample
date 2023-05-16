import Parent from "./components/Parent";
import Child from "./components/Child";
import CountButton from "./components/CountButton";
import { CountContext } from "./contexts/CountContext";
import { useState } from "react";

function App() {
  const [countValue, setCountValue] = useState(0);
  return (
    <CountContext.Provider value={{countValue, setCountValue}}>
      <div className="bg-red-700 grid place-items-center m-5 p-5">
        <h1 className="text-3xl font-bold">App</h1>
        <h2>State shared/updated with context, minimal abstraction to context.ts</h2>
        <Parent>
          <CountButton />
        </Parent>
        <Parent>
          <Child />
        </Parent>
      </div>
    </CountContext.Provider>
  );
}

export default App;
