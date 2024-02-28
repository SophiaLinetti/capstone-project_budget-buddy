import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: solid white 1.5px;
`;

export const NavbarLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.$active ? "#FFB228" : "#2D3250")};
  color: ${(props) => (props.$active ? "#2D3250" : "#FFB228")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  height: 100%;
  width: 100%;
  padding: 15px 0 0 0;
  border-radius: 5px;
`;

export const StyledLink = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
