export default function FilterCategory({ onSetSelectedCategory }) {
  const handleCategoryChange = (event) => {
    onSetSelectedCategory(event.target.value);
  };
  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="Salary">Salary</option>
        <option value="Hobby">Hobby</option>
        <option value="Food">Food</option>
        <option value="Household">Household</option>
        <option value="Health">Health</option>
        <option value="Other">Others</option>
      </select>
    </div>
  );
}
