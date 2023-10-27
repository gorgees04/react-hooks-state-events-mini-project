function NewTaskForm({
  categories,
  text,
  category,
  onTaskFormSubmit,
  handleText,
  handleCategory,
}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
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
