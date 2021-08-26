import React from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { todoActions } from "../features/todo-slice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(todoActions.setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItemDone"}>{name}</p>
    </div>
  );
};

export default TodoItem;
