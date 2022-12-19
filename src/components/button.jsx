
function Button(props) {
    return ( <button className={`app-button ${props.className}`} onClick={props.onClick} type={props.type} >{props.children}</button> );
}

export default Button;