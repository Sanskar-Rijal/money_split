export default function Button({ children, Click = () => {} }) {
  return (
    <button className="button" onClick={() => Click()}>
      {children}
    </button>
  );
}
