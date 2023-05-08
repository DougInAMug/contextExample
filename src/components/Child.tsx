import { ReactNode } from "react";
import { countContext } from "../contexts/CountContext";

interface Props {
  children?: ReactNode
}

function Child(props: Props) {
  const {contextValue} = countContext()
  return (
    <div className="grid place-items-center bg-red-200 w-1/2 m-5 p-5">
      Count: {contextValue}
      {props.children}
    </div>
  );
}

export default Child;
