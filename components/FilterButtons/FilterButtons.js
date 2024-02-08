export default function FilterButtons({ onHandleSetFilter }) {
  return (
    <div>
      <button onClick={() => onHandleSetFilter("Income")}>Income</button>
      <button onClick={() => onHandleSetFilter("Expense")}>Expense</button>
      <button onClick={() => onHandleSetFilter("all")}>All</button>
    </div>
  );
}
