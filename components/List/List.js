import { transactions } from "@/ressources/data";

export default function List() {
  return (
    <>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.amount} EUR -{" "}
            {transaction.category} -{transaction.type} -{" "}
            {transaction.description}
          </li>
        ))}
      </ul>
    </>
  );
}
