// Todo - add modal for editing
import Header from "./components/Header";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetTodoId, setTargetTodoId] = useState(-1);

  function handleSubmit(newTodo) {
    if (!newTodo) return;
    setTodoList([newTodo, ...todoList]);
  }

  function handleDelete(idToDelete) {
    setTodoList(
      todoList.filter((listItem, id) => {
        return id !== idToDelete;
      })
    );
  }

  function toggleModal(idToEdit) {
    if (!modalOpen) {
      console.log(idToEdit);
      setTargetTodoId(idToEdit);
    }
    setModalOpen(!modalOpen);
  }

  function handleEdit(newTodo, targetId) {
    setTodoList(
      todoList.map((element, i) => {
        if (i === targetId) {
          return newTodo;
        }
        return element;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <EditModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        todoList={todoList}
        targetTodoId={targetTodoId}
        handleEdit={handleEdit}
      />
      <Todo handleSubmit={handleSubmit} />
      <span></span>
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        toggleModal={toggleModal}
      />
    </div>
  );
}

export default App;
