export default function FilterButtons({ onHandleSetFilter }) {
  return (
    <div>
      <button onClick={() => onHandleSetFilter("Income")}>Income</button>
      <button onClick={() => onHandleSetFilter("Expense")}>Expense</button>
    </div>
  );
}
