import React from "react";
import Task from "./Task";

function TaskList({taskArr, deleteItem}) {
  const createTasks = taskArr.map((e, i) => {
    return (
      <Task key={i} text={e.text} category={e.category} deleteItem={deleteItem} />
    )
  })
  return (
    <div className="tasks">
      {/* display a Arr of tasks using Task component */}
      {createTasks}
    </div>
  );
}

export default TaskList;
