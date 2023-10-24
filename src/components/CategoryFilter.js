function CategoryFilter({
  categories,
  onClickFilterCategories,
  selectedCategory,
}) {
  

  const categoryBtn = categories.map((category, i) => {
    return (
      <button
        className={category === selectedCategory ? "selected" : ""}
        key={i}
        onClick={(event) => onClickFilterCategories(event, category)}
        value={category}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;
