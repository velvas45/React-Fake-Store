type ButtonPropsType = {
  text: string;
  selected?: boolean;
  onClicked: () => void;
};

const Button = ({
  text,
  selected,
  onClicked = () => {},
}: ButtonPropsType): React.ReactElement => {
  return (
    <button
      className={"px-6 py-1.5 rounded-3xl text-lg text-[#505050] font-medium border border-solid border-[#505050] hover:bg-[#212121] hover:text-white transition-all".concat(
        selected ? " bg-[#212121] text-white" : ""
      )}
      onClick={onClicked}
    >
      {text}
    </button>
  );
};

export default Button;
