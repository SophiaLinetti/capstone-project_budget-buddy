import Navbar from "@/components/Nav/Nav";
import { StyledHeading, Main, HeadingWrapper } from "@/styles";
import DoughnutComponent from "@/components/Doughnut/Doughnut";

export default function Dashboard({ transactions }) {
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
