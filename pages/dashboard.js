import Navbar from "@/components/Nav/Nav";
import { StyledHeading, FilterButtons } from "@/styles";
import styled from "styled-components";
import DoughnutComponent from "@/components/Doughnut/Doughnut";
import useSWR from "swr";

const StyledText = styled.p`
  padding-top: 60px;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const { data: transactions, error } = useSWR('/api/transactions', fetcher);
  
  if (error) return <div>Failed to load transactions</div>;
  if (!transactions) return <div>Loading...</div>;

  return (
    <>
      <StyledHeading>Dashboard</StyledHeading>
      <DoughnutComponent transactions={transactions} />
      <Navbar />
    </>
  );
}
