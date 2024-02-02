import GlobalStyle from "../styles";
import { transactions } from "@/ressources/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [transaction, setTransaction] = useState([]);
  const addTransaction = (transaction) => {
    setTransaction([...transactions, transaction]);
  };
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
