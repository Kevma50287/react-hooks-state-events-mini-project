import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [selectedCat, setSelectedCat] = useState("Code")

  const makeOption = categories.filter((e)=> e !== "All")
  .map((e, i) => {return (<option key={i} >{e}</option>)})
  // console.log(makeOption)
  

  function handleSubmit (e){
    e.preventDefault()
    onTaskFormSubmit({text:text, category:selectedCat})
  }

  function handleNewText(e){
    setText(e.target.value)
  }

  function handleNewCategory(e){
    setSelectedCat(e.target.value)
  }


  return (
    //On submit we prevent default. Then we need to send information upwards (callback)
    //The information should be an object containing
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {/* render <option> elements for each category here */}
          {makeOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
