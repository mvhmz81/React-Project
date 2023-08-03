interface Props {
  onClose: () => void;
}
export const Alert2 = ({ onClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert2"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};
