import Parent from "./components/Parent";
import Child from "./components/Child";
import CountButton from "./components/CountButton";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-red-700 grid place-items-center m-5 p-5">
      <h1 className="text-3xl font-bold">App</h1>
      <h2>State shared/updated with prop-drilling</h2>
      <Parent>
        <CountButton setCount={setCount} />
      </Parent>
      <Parent>
        <Child count={count} />
      </Parent>
    </div>
  );
}

export default App;
