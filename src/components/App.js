import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //useStates to dynamically access changes in form input
  const [tasks, setTask] = useState(TASKS)
  const [categoryFilter, setCategoryFilter]= useState("All")
  // console.log(categoryFilter)
  function deleteItem(text) {
    const textArr = tasks.map((e) => e.text)
    const remIndex = textArr.indexOf(text)
    const newArr = tasks.filter((e, i) => {
      return i !== remIndex
    })
    setTask(newArr)
  }

  function onTaskFormSubmit(newTaskObj) {
    setTask([...tasks, newTaskObj])
  }

  const filteredTasks = tasks.filter((e, i)=>{
    if (categoryFilter === "All") {
      return true
    } else {
      return e.category === categoryFilter
    }
    
  })

  // console.log(filteredTasks)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={categoryFilter} setFilter={setCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList taskArr={filteredTasks} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
