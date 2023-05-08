import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Parent(props: Props) {
  return (
    <div className="grid place-items-center bg-red-400 w-1/2 m-5 p-5">
      <h1 className="text-xl font-bold">Parent</h1>
      {props.children}
    </div>
  );
}

export default Parent;
