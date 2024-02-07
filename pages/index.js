import Form from "@/components/Form/Form";
import List from "@/components/List/List";
import FilterButtons from "@/components/FilterButtons/FilterButtons";
import { useState } from "react";


export default function HomePage({
  transactions,
  onAddTransaction,
  onDeleteTransaction,
}) {

export default function HomePage({ transactions, onAddTransaction }) {
  const [transactionFilter, setTransactionFilter] = useState("all");

  function handleSetFilter(filter) {
    setTransactionFilter(filter);
  }

  function filteredTransactions(transactions) {
    if (transactionFilter === "all") {
      return transactions;
    } else {
      return transactions.filter(
        (transaction) => transaction.type === transactionFilter
      );
    }
  }


  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form onAddTransaction={onAddTransaction} />

      <FilterButtons onHandleSetFilter={handleSetFilter} />
      <List
        transactions={transactions}
        transactionFilter={transactionFilter}
        onfilteredTransactions={filteredTransactions}
onDeleteTransaction={onDeleteTransaction}

      />
    </div>
  );
}
