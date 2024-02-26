import styled from "styled-components";
import { categories } from "../../utils/transactionCategories.js";
const StyledDropdown = styled.select`
  margin-left: 5px;
  padding: 5px 0 5px 0;
`;
export default function FilterCategory({ onSetSelectedCategory }) {
  function handleCategoryChange(event) {
    onSetSelectedCategory(event.target.value);
  }
  return (
    <>
      Filter by:
      <StyledDropdown onChange={handleCategoryChange}>
        <option value="">All</option>
        {categories.map((category, index_) => (
          <option key={index_} value={category}>
            {category}
          </option>
        ))}
      </StyledDropdown>
    </>
  );
}
