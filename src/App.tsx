import Parent from "./components/Parent";
import Child from "./components/Child";
import CountButton from "./components/CountButton";
import CountContext from "./contexts/CountContext";

function App() {  
  return (
    <CountContext>
      <div className="bg-red-700 grid place-items-center m-5 p-5">
        <h1 className="text-3xl font-bold">App</h1>
        <Parent>
          <CountButton />
        </Parent>
        <Parent>
          <Child />
        </Parent>
      </div>
    </CountContext>
  );
}

export default App;
