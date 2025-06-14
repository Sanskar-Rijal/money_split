import Button from "./Button";
import React from "react";

export default function FormSplitBills({ details, onSplitBill }) {
  const [Bill, setBill] = React.useState("");
  const [userExpense, setuserExpense] = React.useState("");
  const [whoisPaying, setwhoisPaying] = React.useState("one");

  const paidByFriend = Bill ? Bill - userExpense : "";

  function handleSubmit(event) {
    event.preventDefault(); //prevent page relod
    if (!Bill && !userExpense) return;
    onSplitBill(whoisPaying === "one" ? paidByFriend : -userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A bill with {details.name}</h2>

      <label>💸 Total Bill</label>
      <input
        type="number"
        required
        placeholder="100"
        value={Bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <label>🏄‍♀️ Your expense</label>
      <input
        type="number"
        required
        placeholder="50"
        value={userExpense}
        onChange={(event) =>
          setuserExpense(
            Number(event.target.value) > Bill
              ? userExpense
              : Number(event.target.value)
          )
        }
      />

      <label>👯‍♀️ {details.name} expense</label>
      <input type="number" disabled placeholder="50" value={paidByFriend} />

      <label>👯‍♀️ Who is paying?</label>
      <select
        name="friend"
        value={whoisPaying}
        onChange={(event) => setwhoisPaying(Number(event.target.value))}
      >
        <option value="one">You</option>
        <option value="two">{details.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
