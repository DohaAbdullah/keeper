function Input(props) {
  return (
    <input
      className={`login-input ${props.className || ""}`}
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
    />
  );
}

export default Input;
