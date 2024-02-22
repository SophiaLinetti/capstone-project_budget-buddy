import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarLink, NavbarWrapper } from "@/styles";
import styled from "styled-components";

const StyledLink = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  top: 20px;
`;

export default function Navbar() {
  const router = useRouter();

  // "/" is our "Homepage"
  return (
    <NavbarWrapper>
      <StyledLink>
        <Link href="/">
          <NavbarLink $active={router.pathname === "/"}>
            Transactions
          </NavbarLink>
        </Link>
      </StyledLink>
      <StyledLink>
        <Link href="/goals">
          <NavbarLink $active={router.pathname === "/goals"}>
            Saving Goals
          </NavbarLink>
        </Link>
      </StyledLink>
    </NavbarWrapper>
  );
}
