import styled from "styled-components";

export default function Modal({ children }) {
  return (
    <ModalBackround>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackround>
  );
}
const ModalBackround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  min-width: 80%;
`;
