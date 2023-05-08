import { CountContext } from "../contexts/CountContext";
import { useContext } from "react";

function Child() {
  const {countValue} = useContext(CountContext)
  return (
    <div className="grid place-items-center bg-red-200 w-1/2 m-5 p-5">
      Count: {countValue}
    </div>
  );
}

export default Child;
