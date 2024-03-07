import { useRouter } from "next/router";
import {
  NavbarWrapper,
  NavbarLink,
  TransactionIcon,
  DashboardIcon,
  SavingsIcon,
  PlusIcon,
  LinkStyles,
} from "./Nav.Styled";

export default function Navbar() {
  const router = useRouter();
  // "/" is our "Homepage"
  return (
    <NavbarWrapper>
      <LinkStyles href="/">
        <NavbarLink>
          <TransactionIcon $active={router.pathname === "/"} />
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/dashboard">
        <NavbarLink>
          <DashboardIcon $active={router.pathname === "/dashboard"} />
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/goals">
        <NavbarLink>
          <SavingsIcon $active={router.pathname === "/goals"} />
        </NavbarLink>
      </LinkStyles>

      <LinkStyles href="/budgetplus">
        <NavbarLink>
          <PlusIcon $active={router.pathname === "/budgetplus"} />
        </NavbarLink>
      </LinkStyles>
    </NavbarWrapper>
  );
}
