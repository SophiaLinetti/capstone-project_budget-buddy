import Navbar from "@/components/Nav/Nav";
import { StyledHeading } from "@/styles";
import DoughnutComponent from "@/components/Doughnut/Doughnut";

export default function Dashboard({ transactions }) {
  return (
    <>
      <StyledHeading>Dashboard</StyledHeading>
      <DoughnutComponent transactions={transactions} />
      <Navbar />
    </>
  );
}
