export default function GoalsForm({  }) {
    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
     
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}> 
        <label htmlFor="name__id">  *Goal Name  </label>
            <input id="name__id" name="name" max="50" required /> 
            <br></br>
            <label htmlFor="savedAmount__id">*Already Saved Amount in EUR: </label>
          <input
            id="savedAmount__id"
            type="number"
            name="amount"
            min="0"
            max="10000000"
            step="1"
            pattern="[0-9]+"
            required
          ></input>
    <br></br>
            <label htmlFor="goalAmount__id">*Goal Amount in EUR: </label>
          <input
            id="goalAmount__id"
            type="number"
            name="amount"
            min="1"
            max="10000000"
            step="1"
            pattern="[0-9]+"
            required
          ></input>
    <br></br>
<button type="submit">Save Goal</button>
<button> Cancel</button>

         </form>
      </>
    );
  }
  