import Form from "@/components/Form/Form";
import List from "@/components/List/List";

export default function HomePage({
  // initialTransactions,
  handleSubmit,
  // addTransaction,
  // setTransaction,
  transactions, // prop mitgeben / runter reichen
}) {
  // const [transaction, setTransaction] = useState([]);
  // const addTransaction = (transaction) => {
  //   setTransaction([...transactions, transaction]);
  // };

  return (
    <div>
      <h1>Budget Buddy</h1>
      <Form handleSubmit={handleSubmit} />
      <List
        // initialTransactions={initialTransactions}
        transactions={transactions} // transaction runter in die liste reichen (upliften)
      />
    </div>
  );
}
