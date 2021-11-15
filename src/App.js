import Header from "./components/Header";
import {Todo} from "./components/Todo";
import {TodoList} from "./components/TodoList";
import { useState } from "react";

function App() {

  // move state management here
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  function handleChange(event){
      const value = event.target.value
      setNewTodo(value)
  }

  function handleSubmit() {
      setTodoList([newTodo, ...todoList])
      setNewTodo('')
      console.log(todoList)
  }


  return (
    <div className="App">
     <Header/>
     <Todo handleSubmit={handleSubmit} newTodo={newTodo} handleChange={handleChange}/>
     <span></span>
     <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
