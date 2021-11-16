import { useState } from "react";

export function Todo(props) {
  const [newTodo, setNewTodo] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setNewTodo(value);
  }
  function handleClick() {
    props.handleSubmit(newTodo);
    setNewTodo("");
  }

  return (
    <div>
      <input
        placeholder="What do you want to do?"
        onChange={handleChange}
        value={newTodo}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
