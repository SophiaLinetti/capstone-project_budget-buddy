import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";

export default function HomePage({
  transactions,
  onAddTransaction,
  transactionFilter,
  onFilterChange,
}) {
  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons
        transactionFilter={transactionFilter}
        onFilterChange={onFilterChange}
        transactions={transactions}
      />
      <List transactions={transactions} transactionFilter={transactionFilter} />
    </div>
  );
}
