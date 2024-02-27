import Navbar from "@/components/Nav/Nav";
import { StyledHeading, FilterButtons } from "@/styles";
import styled from "styled-components";
import DoughnutComponent from "@/components/Doughnut/Doughnut";

const StyledText = styled.p`
  padding-top: 60px;
`;

export default function Dashboard({ transactions }) {
  return (
    <>
      <StyledHeading>Dashboard</StyledHeading>
      <DoughnutComponent transactions={transactions} />
      <Navbar />
    </>
  );
}
