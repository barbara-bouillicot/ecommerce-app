import React from 'react';

export default function Filter({ onFilterChange, selectedCategories }) {
  const buttonClicked = (event) => {
    const category = event.currentTarget.name;
    onFilterChange(category);
  };

  const isActive = (category) => selectedCategories.includes(category.toLowerCase());

  return (
    <div>
      <button
        name="sofa"
        onClick={buttonClicked}
        className={`filter-tag ${isActive("sofa") ? 'active' : ''}`}
      >
        Sofa
      </button>
      <button
        name="chair"
        onClick={buttonClicked}
        className={`filter-tag ${isActive("chair") ? 'active' : ''}`}
      >
        Chair
      </button>
      <button
        name="table"
        onClick={buttonClicked}
        className={`filter-tag ${isActive("table") ? 'active' : ''}`}
      >
        Table
      </button>
    </div>
  );
}
