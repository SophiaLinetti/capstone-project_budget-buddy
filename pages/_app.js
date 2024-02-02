import GlobalStyle from "../styles";
import { initialTransactions } from "@/ressources/data";
import { useState } from "react";
import Form from "@/components/Form/Form";

export default function App({ Component, pageProps }) {
  const [transactions, setTransactions] = useState(initialTransactions);

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log("Formdata: ", formData);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        initialTransactions={initialTransactions}
        addTransaction={addTransaction}
      />
      <Form handleSubmit={handleSubmit} />
    </>
  );
}
