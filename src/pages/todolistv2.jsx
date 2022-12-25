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

function ToDoListV2() {
  const [inputValue, setInputValue] = useState();
  const [itemsList, setItemsList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  function addItem() {
    console.log(nextId++);
    setItemsList((prev) => [...prev, { id: nextId, value: inputValue }]);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    setInputValue(value);
    console.log(value);
  }

  // function doneItem(e) {
  //   setIsDone((prev) => !isDone);
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
              <li
                className={isDone ? "cross-list-text" : "list-text"}
                key={index}
              >
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

export default ToDoListV2;
