import Form from "@/components/Form/Form";
import List from "@/components/List/List";

export default function HomePage({ transactions, onAddTransaction }) {
  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />
      <List transactions={transactions} />
    </div>
  );
}
