function Input(props) {
  return (
    <input
      className={`login-input ${props.className || ""}`}
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
    />
  );
}

export default Input;
