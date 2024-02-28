import GlobalStyle from "../styles";
import useSWR, {mutate} from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());



export default function App({ Component, pageProps }) {

  const { data: transactions, error } = useSWR('/api/transactions', fetcher);

  async function handleAddTransaction(newTransaction) {
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    });
  
    if (!response.ok) {
      console.error('Failed to add transaction');
    } else {
      const addedTransaction = await response.json();
      // Optimistically update the local data and revalidate
      mutate('/api/transactions', [...transactions, addedTransaction], false);
    }
  }
  


  async function handleDeleteTransaction(_id) {
    const response = await fetch(`/api/transactions/${_id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      // Handle errors
      console.error('Failed to delete transaction');
    } else {
      // Update local state to remove the deleted transaction
      setTransactions((currentTransactions) =>
        currentTransactions.filter((transaction) => transaction._id !== _id)
      );
    }
  }



  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        onAddTransaction={handleAddTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </>
  );
}
