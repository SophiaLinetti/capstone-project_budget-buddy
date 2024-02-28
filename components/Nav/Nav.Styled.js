import styled from "styled-components";
import Link from "next/link";

export const LinkStyles = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
`;

export const NavbarLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.$active ? "" : "")};
  color: ${(props) => (props.$active ? "" : "")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  height: 100%;
  width: 100%;
  padding: 15px 0 0 0;
`;
