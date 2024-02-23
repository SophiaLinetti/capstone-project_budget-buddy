import Navbar from "@/components/Nav/Nav";
import { StyledHeading } from "@/styles";
import styled from "styled-components";
import DoughnutComponent from "@/components/Doughnut/Doughnut";

const StyledText = styled.p`
  padding-top: 60px;
`;

export default function Dashboard() {
  return (
    <>
      <StyledHeading>Hello Sebo</StyledHeading>
      <StyledText></StyledText>
      <DoughnutComponent />
      <Navbar />
    </>
  );
}
