import { ModalBackround, ModalContainer } from "./Modal.Styled";

export default function Modal({ children }) {
  return (
    <ModalBackround>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackround>
  );
}
