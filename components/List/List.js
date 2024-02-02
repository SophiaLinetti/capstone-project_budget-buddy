import { initialTransactions } from "@/ressources/data";

export default function List() {
  return (
    <>
      <ul>
        {initialTransactions.map((initialTransaction) => (
          <li key={initialTransactions.id}>
            {initialTransaction.date} - {initialTransaction.amount} EUR -{" "}
            {initialTransaction.category} -{initialTransaction.type} -{" "}
            {initialTransaction.description}
          </li>
        ))}
      </ul>
    </>
  );
}
