import React, { useState } from "react";
import "./Input.css";

import { useDispatch } from "react-redux";
import { todoActions } from "../features/todo-slice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const addTodoHandler = () => {
    dispatch(
      todoActions.saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <div className="input">
      <input type="text" value={input} onChange={inputHandler} />
      <button onClick={addTodoHandler}>Add</button>
    </div>
  );
};

export default Input;
