import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState();
  const [itemsList, setItemsList] = useState([]);

  function addItem() {
    setItemsList((prev) =>[...prev , inputValue]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    console.log(value);
    setInputValue(value);
  }

  return (
    <div className="todolist-container">
      <div className="list-container">
        <div className="todolist-title-container">
          <p className="todolist-title">To-Do List</p>
        </div>
        <div className="input-button-container">
          <Input className="todolist-input" onChange={handleOnChange} />
          <Button className="add-button" type="submit " onClick={addItem}>
            Add
          </Button>
        </div>
        <ul className="unorder-list">
          {itemsList.map((item , index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
