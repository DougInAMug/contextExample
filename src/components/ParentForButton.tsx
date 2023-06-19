import { ReactNode } from "react";
import CountButton from "./CountButton";

interface Props {
  children?: ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function ParentForButton(props: Props) {
  return (
    <div className="grid place-items-center bg-red-400 w-1/2 m-5 p-5">
      <h1 className="text-xl font-bold">Parent</h1>
        <CountButton setCount={props.setCount} />
    </div>
  );
}

export default ParentForButton;
