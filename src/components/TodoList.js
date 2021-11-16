import React from "react";

export function TodoList(props) {
  function makeList() {
    console.log(props);
    return props.todoList.map((listItem, id) => {
      return <li onClick={() => props.handleDelete(id)}>{listItem}</li>;
    });
  }

  return <ul>{makeList()}</ul>;
}
