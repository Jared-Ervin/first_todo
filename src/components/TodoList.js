import React from "react";

export function TodoList(props) {
  function makeList() {
      console.log(props)
    return props.todoList.map((listItem, id) => {
      return <li>{listItem}</li>;
    });
  }

  return <ul>{makeList()}</ul>;
}
