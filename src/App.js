// Todo - add modal for editing

import Header from "./components/Header";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setNewTodo(value);
  }

  function handleSubmit() {
    if (!newTodo) return;
    setTodoList([newTodo, ...todoList]);
    setNewTodo("");
    console.log(todoList);
  }

  function handleDelete(idToDelete) {
    setTodoList(
      todoList.filter((listItem, id) => {
        return id !== idToDelete;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <Todo
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        handleChange={handleChange}
      />
      <span></span>
      <TodoList todoList={todoList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
