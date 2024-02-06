import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";

export default function HomePage({
  transactions,
  onAddTransaction,
  filter,
  onFilterChange,
}) {
  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />
      <FilterButtons
        filter={filter}
        onFilterChange={onFilterChange}
        transactions={transactions}
      />
      <List transactions={transactions} filter={filter} />
    </div>
  );
}
