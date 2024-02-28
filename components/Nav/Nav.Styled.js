import styled from "styled-components";
import Link from "next/link";

export const LinkStyles = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  display: flex;

  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
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

export const IconeBase = styled.span`
  &:before {
    font-family: "Material Symbols Outlined";
    font-size: ${(props) =>
      props.$active ? "40px" : "30px"}; // Größere Icons für aktiven Link
    display: inline-block;
    vertical-align: middle;
    color: black;
    cursor: pointer;
    transition: font-size 0.5s;
  }
`;

export const TransactionIcon = styled(IconeBase)`
  &:before {
    content: "account_balance";
  }
`;

export const DashboardIcon = styled(IconeBase)`
  &:before {
    content: "query_stats";
  }
`;

export const SavingsIcon = styled(IconeBase)`
  &:before {
    content: "savings";
  }
`;
