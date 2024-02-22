import styled from "styled-components";

const StyledDropdown = styled.select`
  margin-left: 5px;
  padding: 5px 0 5px 0;
`;

export default function FilterCategory({ onSetSelectedCategory }) {
  const handleCategoryChange = (event) => {
    onSetSelectedCategory(event.target.value);
  };
  return (
    <>
      Filter by:
      <StyledDropdown onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="Salary">Salary</option>
        <option value="Hobby">Hobby</option>
        <option value="Food">Food</option>
        <option value="Household">Household</option>
        <option value="Health">Health</option>
        <option value="Other">Others</option>
      </StyledDropdown>
    </>
  );
}
