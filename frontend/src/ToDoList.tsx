import { useState } from "react";
import { Task } from "./App";
import "./App.css";

interface Props {
  addTask: (arg0: string) => void;
  checkTask: (arg0: number) => void;
  removeTask: (arg0: number) => void;
  tasks: Task[];
}

export default function ToDoList({addTask, checkTask, removeTask, tasks}: Props) {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    addTask(newItem);
    setNewItem("");
  };

  return (
    <div>
      <div className="todolist-logo">
        <h1>Goober To Do List</h1>
      </div>

      <form className="Add-item" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="todolist-addItem" type="button">
          Add
        </button>
      </form>

      <ul
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          listStyleType: "none",
          padding: 0,
        }}
      >
        {tasks.map((item, index) => (
          <li key={index} className="todolist-item">
            <div className="wrapper">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                name={item.task}
                checked={item.isChecked}
                onChange={() => checkTask(index)}
              />
              <label htmlFor={`checkbox-${index}`}>{item.task}</label>
            </div>
            <button
              className="todolist-trashbutton"
              onClick={() => removeTask(index)}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
