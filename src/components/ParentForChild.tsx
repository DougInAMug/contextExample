import { ReactNode } from "react";
import Child from "./Child";

interface Props {
  children?: ReactNode;
  count: number;
}

function ParentForChild(props: Props) {
  return (
    <div className="grid place-items-center bg-red-400 w-1/2 m-5 p-5">
      <h1 className="text-xl font-bold">Parent</h1>
        <Child count={props.count} />
    </div>
  );
}

export default ParentForChild;
