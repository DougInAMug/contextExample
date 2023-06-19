import ParentForButton from "./components/ParentForButton";
import { useState } from "react";
import ParentForChild from "./components/ParentForChild";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-red-700 grid place-items-center m-5 p-5">
      <h1 className="text-3xl font-bold">App</h1>
      <h2>State shared/updated with prop-drilling</h2>
      <ParentForButton setCount={setCount}></ParentForButton>
      <ParentForChild count={count}></ParentForChild>
    </div>
  );
}

export default App;
