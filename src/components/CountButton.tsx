import { countContext } from "../contexts/CountContext";

function CountButton() {
  const {countIncrement} = countContext()

  return (
    <button className="bg-gray-500 p-2 m-5" onClick={countIncrement}>
      Counter button
    </button>
  );
}

export default CountButton;
