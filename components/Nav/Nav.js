import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";



// csss team export to styles.js pleeeeeeeeease
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavbarLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? "#007aff" : "#333")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

export default function Navbar() {

  const router = useRouter();

  return (
    <NavbarWrapper>
      <Link href="/" passHref>
        <NavbarLink active={router.pathname === "/"}>
          Transactions
        </NavbarLink>
      </Link>
      <Link href="/goals" passHref>
        <NavbarLink active={router.pathname === "/goals"}>
           Saving Goals
        </NavbarLink>
      </Link>
    </NavbarWrapper>
  );
};

