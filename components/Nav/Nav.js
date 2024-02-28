import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarWrapper, NavbarLink, StyledLink } from "./Nav.Styled";

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
        <Link href="/dashboard">
          <NavbarLink $active={router.pathname === "/dashboard"}>
            Dashboard
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
