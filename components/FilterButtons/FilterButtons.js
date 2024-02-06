import List from "../List/List";

export default function FilterButtons(filter, onFilterChange, transactions) {
  function showIncomes(type) {
    const incomeTransactions = transactions.filter(
      (transaction) => transaction.type === "Income"
    );
    onFilterChange(incomeTransactions);
  }

  function showExpenses(type) {
    const expenseTransactions = transactions.filter(
      (transaction) => transaction.type === "expense"
    );
    onFilterChange(expenseTransactions);
  }

  return (
    <>
      <button onClick={() => showIncomes("Income")}>Income</button>
      <button onClick={() => showExpenses("Expense")}>Expense</button>
    </>
  );
}
