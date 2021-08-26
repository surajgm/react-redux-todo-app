import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";

function App() {
  const todo = useSelector((state) => state.todo.todoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todo.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
