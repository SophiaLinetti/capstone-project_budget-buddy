import { useRouter } from "next/router";
import {
  NavbarWrapper,
  NavbarLink,
  TransactionIcon,
  DashboardIcon,
  SavingsIcon,
  LinkStyles,
} from "./Nav.Styled";

export default function Navbar() {
  const router = useRouter();
  // "/" is our "Homepage"
  return (
    <NavbarWrapper>
      <LinkStyles href="/">
        <NavbarLink $active={router.pathname === "/"}>
          <TransactionIcon $active={router.pathname === "/"} />
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/dashboard">
        <NavbarLink $active={router.pathname === "/dashboard"}>
          <DashboardIcon $active={router.pathname === "/dashboard"} />
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/goals">
        <NavbarLink $active={router.pathname === "/goals"}>
          <SavingsIcon $active={router.pathname === "/goals"} />
        </NavbarLink>
      </LinkStyles>
    </NavbarWrapper>
  );
}
