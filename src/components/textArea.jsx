

function TextArea(props) {
  return (
    <textarea
      className="textarea"
      id={props.id}
      onClick={props.onClick}
      onChange={props.onChange}
      placeholder={props.placeholder}
      rows={props.rows}
      value={props.value}
      name={props.name}
    />
  );
}

export default TextArea;
