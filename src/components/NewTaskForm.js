import React, { useState } from "react";

function NewTaskForm({
  categories,

  onTaskFormSubmit,
  // handleText,
  // handleCategory,
  // handleSubmit,
}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      category: category,
      text: text,
    };
    onTaskFormSubmit(newData);
    setText("");
    setCategory("Code");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categories.map((category) => {
            let option;
            if (category !== "All")
              option = (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            return option;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
