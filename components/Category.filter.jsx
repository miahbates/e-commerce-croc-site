import React from "react";

function CategoryFilter({ category, setCategory }) {
  return (
    <fieldset>
      <legend>Categories</legend>
      <label htmlFor="all">
        All
        <input
          type="radio"
          name="categories"
          id="all"
          value="all"
          checked={category === "all"}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <label htmlFor="classic">
        Classic
        <input
          type="radio"
          name="categories"
          id="classic"
          value="classic"
          checked={category === "classic"}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <label htmlFor="platform">
        Platform
        <input
          type="radio"
          name="categories"
          id="platform"
          value="platform"
          checked={category === "platform"}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
      <label htmlFor="boot">
        Boot
        <input
          type="radio"
          name="categories"
          id="boot"
          value="boot"
          checked={category === "boot"}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>
    </fieldset>
  );
}

export default CategoryFilter;
