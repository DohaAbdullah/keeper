function List(props) {
  return (
    <li
      className={`list-text ${props.className}`}
      onClick={() =>{
        props.onClick(props.id)
      }}
      id={props.id}
    >
      {props.children}
    </li>
  );
}

export default List;
