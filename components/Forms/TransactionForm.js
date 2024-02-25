import { formatDate } from "../../utils/normalizeUtils.js";
import { categories } from "../../utils/transactionCategories.js";
import { StyledForm, StyledHint, StyledButton } from "./Forms.Styled.js";

export default function TransactionForm({
  onAddTransaction,
  formType,
  onCloseModal,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const transactionData = {
      ...data,
      amount: parseInt(data.amount, 10),
      date: data.date ? formatDate(data.date) : formatDate(new Date()),
    };

    if (formType === "saving transaction") {
      transactionData.category = "Savings transfer";
      transactionData.description = "no description";
      transactionData.type = "Saving";
    }

    onAddTransaction(transactionData);
    onCloseModal();
  }

  return (
    <section>
      <h2>Add a {formType}</h2>
      <StyledForm onSubmit={handleSubmit}>
        {formType === "transaction" && (
          <>
            <label htmlFor="date__id">Date*</label>
            <input id="date__id" name="date" type="date" required />
            <fieldset>
              <legend>Type of Transactions*</legend>
              <input
                name="type"
                id="expense__id"
                type="radio"
                value="Expense"
                required
              />
              <label htmlFor="expense__id">Expense</label>
              <input
                name="type"
                id="income__id"
                type="radio"
                value="Income"
                required
              />
              <label htmlFor="income__id">Income</label>
            </fieldset>
          </>
        )}

        <label htmlFor="amount__id">Amount in EUR* </label>
        <input
          id="amount__id"
          type="number"
          name="amount"
          min="1"
          max="10000000"
          step="1"
          pattern="[0-9]+"
          required
        />
        {formType === "transaction" && (
          <>
            <label htmlFor="category__id">Category* </label>
            <select id="category__id" name="category" required>
              <option value="">--Choose Category--</option>
              {categories.map((category, index_) => (
                <option key={index_} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="description__id">Description: </label>
            <textarea
              id="description__id"
              name="description"
              max="50"
            ></textarea>
          </>
        )}
        <StyledHint>All fields with * are required!</StyledHint>
        <StyledButton type="submit">Add {formType}</StyledButton>
        <StyledButton type="button" onClick={() => onCloseModal(null)}>
          Cancel {formType}
        </StyledButton>
      </StyledForm>
    </section>
  );
}
