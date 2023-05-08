import { CountContext } from "../contexts/CountContext";
import { useContext } from "react";

function CountButton() {
  let { countValue, setCountValue} = useContext(CountContext)
  function handleClick(){
    setCountValue(countValue + 1)
  }
  return (
    <button className="bg-gray-500 p-2 m-5" onClick={handleClick}>
      Counter button
    </button>
  );
}

export default CountButton;
