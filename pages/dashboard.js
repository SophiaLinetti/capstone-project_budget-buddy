import Navbar from "@/components/Nav/Nav";
import { StyledHeading, Main, HeadingWrapper } from "@/styles";
import DoughnutComponent from "@/components/Doughnut/Doughnut";
import useSWR from "swr";

export default function Dashboard() {
  const { data: transactions, error } = useSWR("/api/transactions");

  if (error) return <div>Failed to load transactions</div>;
  if (!transactions) return <div>Loading...</div>;

  return (
    <>
      <HeadingWrapper>
        <StyledHeading>Dashboard</StyledHeading>
      </HeadingWrapper>
      <Main>
        <DoughnutComponent transactions={transactions} />
      </Main>
      <Navbar />
    </>
  );
}
