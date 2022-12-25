import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";
import List from "../components/list";

function ToDoList() {
  const [inputValue, setInputValue] = useState();
  const [itemsList, setItemsList] = useState([]);

  function addItem() {
    setItemsList((prev) => [...prev, inputValue]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  function doneItem(id) {
    setItemsList(itemsList.filter((item, index) => index !== id));
  }

  return (
    <div className="todolist-container">
      <div className="list-container">
        <div className="todolist-title-container">
          <p className="todolist-title">To-Do List</p>
        </div>
        <div className="input-button-container">
          <Input className="todolist-input" onChange={handleOnChange} />
          <Button className="add-button" type="submit" onClick={addItem}>
            Add
          </Button>
        </div>
        <div className="list-items-wrapper">
          <ul className="unorder-list">
            {itemsList.map((item, index) => (
              <List key={index} id={index} onClick={doneItem}>
                {item}
              </List>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
