import { StyledDropdown } from "./FilterCategory.Styled.js";
import { categories } from "../../utils/transactionCategories.js";

export default function FilterCategory({ onSetSelectedCategory }) {
  function handleCategoryChange(event) {
    onSetSelectedCategory(event.target.value);
  }
  return (
    <>
      <StyledDropdown onChange={handleCategoryChange}>
        <option value="Filter" selected disabled>
          Filter by...
        </option>
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
