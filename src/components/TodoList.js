export function TodoList(props) {
  function makeList() {
    return props.todoList.map((listItem, i) => {
      // console.log(i)
      return (
        <div key={i}>
          <li style={{ display: "inline" }}>{listItem}</li>
          <button onClick={() => props.handleDelete(i)}>X</button>
          <button id="myBtn" onClick={() => props.toggleModal(i)}>
            Edit
          </button>
        </div>
      );
    });
  }

  return <ul>{makeList()}</ul>;
}
