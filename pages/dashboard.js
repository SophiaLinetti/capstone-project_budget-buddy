import Navbar from "@/components/Nav/Nav";
import { StyledHeading } from "@/styles";
import styled from "styled-components";
import Donut from "@/components/Donut/Donut";

const StyledText = styled.p`
  padding-top: 60px;
`;

export default function Dashboard() {
  return (
    <>
      <StyledHeading>Hello Sebo</StyledHeading>
      <StyledText>testiii</StyledText>
      <Donut />
      <Navbar />
    </>
  );
}
