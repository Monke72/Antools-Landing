function Button({ children, color, active, padding, btnClass }) {
  return (
    <button
      className={`button ${active ? "active" : ""} ${btnClass ? btnClass : ""}`}
      style={{ color: color, padding: padding }}
    >
      {children}
    </button>
  );
}

export default Button;
