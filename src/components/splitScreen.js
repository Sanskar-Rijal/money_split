import Button from "./Button";

export default function FormSplitBills() {
  return (
    <form className="form-split-bill">
      <h2>Split A bill with xyz</h2>

      <label>💸 Total Bill</label>
      <input type="number" required placeholder="100" />

      <label>🏄‍♀️ Your expense</label>
      <input type="number" required placeholder="50" />

      <label>👯‍♀️ xyz expense</label>
      <input type="number" disabled placeholder="50" />

      <label>👯‍♀️ Who is paying?</label>
      <select name="friend">
        <option value="one">You</option>
        <option value="two">Xyz</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
