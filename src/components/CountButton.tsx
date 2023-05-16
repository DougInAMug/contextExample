interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function CountButton(props: Props) {
  function handleClick() {
    props.setCount((prev) => prev + 1);
  }
  return (
    <button className="bg-gray-500 p-2 m-5" onClick={handleClick}>
      Counter button
    </button>
  );
}

export default CountButton;
