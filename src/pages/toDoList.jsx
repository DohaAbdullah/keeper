import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";
import CloseIcon from "../icons/closeIcon";

let dummyData = [
  { id: 1, value: "buy milk" },
  { id: 2, value: "work" },
  { id: 3, value: "sleep" },
];

let nextId = 0;

function ToDoList() {
  const [inputValue, setInputValue] = useState();
  const [itemsList, setItemsList] = useState([{ id: nextId, value: "" }]);

  function addItem() {
    console.log(nextId++);
    setItemsList((prev) => [...prev , { id: nextId , value: inputValue }]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    setInputValue(value);
    console.log(value);
  }

  // function deleteItem(e) {
  //   const { id } = e.target;
  //   console.log(id);
  //   const filteredItems = itemsList.filter((item) => item.id !== id);
  //   setItemsList(filteredItems);
  // }

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
        <div className="list-items-wrapper">
          <ul className="unorder-list">
            {itemsList.map((item, index) => (
              <li className="list-text" key={index}>
                {item.value}
                <CloseIcon
                  onClick={() => {
                    console.log(item.id);
                    setItemsList(itemsList.filter((ids) => ids.id !== item.id));
                  }}
                  id={item.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
