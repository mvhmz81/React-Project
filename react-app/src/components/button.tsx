interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "dark";
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
