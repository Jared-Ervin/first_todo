export function Todo(props) {
  return (
    <div>
      <input
        placeholder="What do you want to do?"
        onChange={props.handleChange}
        value={props.newTodo}
      />
      <button onClick={props.handleSubmit}>Submit</button>
    </div>
  );
}
