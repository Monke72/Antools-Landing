function Button({ children, color, active }) {
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      style={{ color: color }}
    >
      {children}
    </button>
  );
}

export default Button;
