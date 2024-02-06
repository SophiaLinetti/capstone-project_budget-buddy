export default function FilterButtons({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("Income")}>Income</button>
      <button onClick={() => onFilterChange("Expense")}>Expense</button>
    </div>
  );
}
