import Form from "@/components/Form/Form";
import List from "@/components/List/List";

export default function HomePage({
  handleSubmit,
  transactions,
  onAddTransaction,
}) {
  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form handleSubmit={handleSubmit} onAddTransaction={onAddTransaction} />
      <List transactions={transactions} />
    </div>
  );
}
