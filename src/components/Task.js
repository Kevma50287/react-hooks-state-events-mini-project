import React from "react";

function Task({text, category, deleteItem}) {

  //general pattern: when using form submit, or when data needs to be altered
  //in a parent component reliant on data from a child component
  //use a handlerFunction to pass in the parameters as arguments
  function handleDelete(){
    deleteItem(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
