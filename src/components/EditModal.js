import React, {useState} from "react";


export function EditModal(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }
  function handleClick() {
    props.handleEdit(inputText,props.targetTodoId);

    setInputText("");
  }

  if (props.modalOpen) {
    console.log(props);
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => props.toggleModal()}>
            &times;
          </span>
          <h4>Task to Update:</h4>
          <p>{props.todoList[props.targetTodoId]}</p>
          <input onChange={handleChange} value={inputText} placeholder="Insert new task name..." />
          <span><button onClick={handleClick}>Save</button></span>
        </div>
      </div>
    );
  }
  return null;
}
