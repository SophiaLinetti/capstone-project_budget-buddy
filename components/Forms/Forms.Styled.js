import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
`;

const StyledHint = styled.p`
  font-size: 13px;
  text-align: center;
  color: #ffb228;
`;

const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 0.7rem 1rem;
  border-radius: 3px;
  text-transform: uppercase;
`;

export { StyledForm, StyledHint, StyledButton };
