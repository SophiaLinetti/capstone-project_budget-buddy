import { useRouter } from "next/router";
import { NavbarWrapper, NavbarLink, StyledNav, LinkStyles } from "./Nav.Styled";

export default function Navbar() {
  const router = useRouter();
  // "/" is our "Homepage"
  return (
    <NavbarWrapper>
      <LinkStyles href="/">
        <NavbarLink $active={router.pathname === "/"}>Transactions</NavbarLink>
      </LinkStyles>

      <LinkStyles href="/dashboard">
        <NavbarLink $active={router.pathname === "/dashboard"}>
          Dashboard
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/goals">
        <NavbarLink $active={router.pathname === "/goals"}>
          Saving Goals
        </NavbarLink>
      </LinkStyles>
    </NavbarWrapper>
  );
}
