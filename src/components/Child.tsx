interface Props {
  count: number;
}

function Child(props: Props) {
  return (
    <div className="grid place-items-center bg-red-200 w-1/2 m-5 p-5">
      Count: {props.count}
    </div>
  );
}

export default Child;
