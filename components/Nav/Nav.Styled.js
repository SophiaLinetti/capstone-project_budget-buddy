import styled from "styled-components";
import Link from "next/link";

export const LinkStyles = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--primary-color);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: 2px solid var(--secondary-color);
`;

export const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  font-size: ${(props) => (props.$active ? "40px" : "30")};
  transition: font-size 0.3s;
`;

export const IconBase = styled.span`
  &:before {
    font-family: "Material Symbols Outlined";
    font-size: ${(props) =>
      props.$active ? "40px" : "30px"}; // bigger icon for active link
    display: inline-block;
    vertical-align: middle;
    color: black;
    cursor: pointer;
    transition: font-size 0.5s;
    background-image: linear-gradient(
      to left,
      var(--secondary-color),
      var(--icon-color)
    );
    color: transparent;
    background-clip: text;
  }
`;

export const TransactionIcon = styled(IconBase)`
  &:before {
    content: "account_balance";
  }
`;

export const DashboardIcon = styled(IconBase)`
  &:before {
    content: "query_stats";
  }
`;

export const SavingsIcon = styled(IconBase)`
  &:before {
    content: "savings";
  }
`;

export const PlusIcon = styled(IconBase)`
  &:before {
    content: "key";
  }
`;
