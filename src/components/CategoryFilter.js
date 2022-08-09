import React from "react";

function CategoryFilter({ categories, filter, setFilter }) {

  const createButtons = categories.map((e) => {
    const isSelected = e === filter ? 'selected' : null
    return (
      <button
        key={e}
        className={isSelected}
        onClick={() => setFilter(e)}
      >{e}</button>
    )
  }
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {createButtons}
    </div>
  );
}

export default CategoryFilter;
