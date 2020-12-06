import React, { useState } from "react";
import TodoForm from "./todoForm";
import { BiWindowClose } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <BiWindowClose
          onClick={() => removeTodo(todo.id)}
          className="deleteIcon"
        />
        <BiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="editIcon"
        />
      </div>
    </div>
  ));
}

export default Todo;
