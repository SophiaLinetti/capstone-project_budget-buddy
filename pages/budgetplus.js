import Navbar from "@/components/Nav/Nav";
import Product from "@/components/Product/Product";

import { StyledHeading, HeadingWrapper, Main } from "@/styles";

export default function BudgetPlus() {
  return (
    <>
      <HeadingWrapper>
        <StyledHeading>BudgetPlus</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        <Product />
      </Main>
      <Navbar />
    </>
  );
}
