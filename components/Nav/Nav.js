import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarLink, NavbarWrapper } from "@/styles";

export default function Navbar() {
  const router = useRouter();

  // "/" is our "Homepage"
  return (
    <NavbarWrapper>
      <Link href="/">
        <NavbarLink $active={router.pathname === "/"}>Transactions</NavbarLink>
      </Link>
      <Link href="/goals">
        <NavbarLink $active={router.pathname === "/goals"}>
          Saving Goals
        </NavbarLink>
      </Link>
    </NavbarWrapper>
  );
}
