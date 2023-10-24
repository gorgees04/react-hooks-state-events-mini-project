import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterData, setFilterData] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  // selectedCategory is for the className to change whenever Click to the btn
  // filterData is to track the value of select---option
  const handleClickFilter = (event, category) => {
    setSelectedCategory(category);
    setFilterData(event.target.value);
  };

  // filter data by category
  const filteredTaskData = tasks.filter((task) => {
    if (filterData === "All") {
      return true;
    } else {
      return task.category === filterData;
    }
  });

  //**********FORM HANDLE**********

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const onTaskFormSubmit = (e) => {
    e.preventDefault();
    const newData = {
      text: text,
      category: category,
    };
    console.log(newData);
    setTasks((prev) => [...prev, newData]);
    setText("");
    setCategory("Code");
  };
  //***************

  // Deelete btn
  const handleDelete = (text) => {
    console.log(text);
    const deletedData = tasks.filter((task) => task.text !== text);
    setTasks(deletedData);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onClickFilterCategories={handleClickFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        // taskFormData={taskFormData}
        text={text}
        category={category}
        // handleChanges={handleChanges}
        onTaskFormSubmit={onTaskFormSubmit}
        handleText={handleText}
        handleCategory={handleCategory}
      />
      <TaskList tasks={filteredTaskData} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
