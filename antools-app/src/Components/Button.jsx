function Button({ children, color, active, padding, btnClass, showModal }) {
  return (
    <button
      onClick={showModal}
      className={`button ${active ? "active" : ""} ${btnClass ? btnClass : ""}`}
      style={{ color: color, padding: padding }}
    >
      {children}
    </button>
  );
}

export default Button;
