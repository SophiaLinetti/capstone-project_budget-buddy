import Navbar from "@/components/Nav/Nav";
import { StyledHeading, Main } from "@/styles";
import DoughnutComponent from "@/components/Doughnut/Doughnut";

export default function Dashboard({ transactions }) {
  return (
    <>
      <StyledHeading>Dashboard</StyledHeading>
      <Main>
        <DoughnutComponent transactions={transactions} />
      </Main>
      <Navbar />
    </>
  );
}
