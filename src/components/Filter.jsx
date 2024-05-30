export default function Filter({ onFilterChange }) {
  const checkboxChecked = (event) => {
    const category = event.currentTarget.name;
    onFilterChange(category);
  };

  return (
    <div>
      <label htmlFor="sofa">Sofa</label>
      <input type="checkbox" name="sofa" onChange={checkboxChecked} />
      <label htmlFor="chair">Chair</label>
      <input type="checkbox" name="chair" onChange={checkboxChecked} />
      <label htmlFor="table">Table</label>
      <input type="checkbox" name="table" onChange={checkboxChecked} />
    </div>
  );
}
