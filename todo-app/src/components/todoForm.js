import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //start from input
  const defaultRef = useRef(null);
  useEffect(() => {
    defaultRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      //id generator random 1 to 1000

      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo__input"
            onChange={handleChange}
            ref={defaultRef}
          />
          <button className="todo__button">UPDATE</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo__input"
            onChange={handleChange}
            ref={defaultRef}
          />
          <button className="todo__button">+ ADD</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
