import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
`;
const StyledHint = styled.p`
  font-size: 13px;
  text-align: center;
  color: var(--red-color);
`;
const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 0.7rem 1rem;
  border-radius: 99rem;
  text-transform: uppercase;
`;
const CancleButton = styled(StyledButton)`
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
`;

const AddButton = styled(StyledButton)`
  color: var(--primary-color);
  background-color: var(--secondary-color);
`;

export { StyledForm, StyledHint, StyledButton, CancleButton, AddButton };
