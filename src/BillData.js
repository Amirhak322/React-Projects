import { useState } from "react";

export function BillData({ name, onHandleBalance, balance }) {
  const [yourExpense, setYourExpense] = useState(null);
  const [bill, setBill] = useState(null);
  const [payer, setPayer] = useState("You");
  function handleBalance(e) {
    e.preventDefault();
    console.log(balance);
    onHandleBalance(
      payer === "You"
        ? Number(bill - yourExpense + balance)
        : Number(balance - yourExpense)
    );
  }
  return (
    <form className="form-split-bill" onSubmit={handleBalance}>
      <h2>Split a Bill with {name}</h2>
      <label>💵 Bill Value</label>
      <input onChange={(e) => setBill(Number(e.target.value))} />
      <label>👦 Your expense </label>
      <input onChange={(e) => setYourExpense(Number(e.target.value))} />
      <label>👨 {name}'s expense</label>
      <input
        value={bill - yourExpense >= 0 ? bill - yourExpense : "Wrong Input"}
        disabled
      />
      {/* </input> */}
      <label>🤑 Who is paying the bill?</label>
      <select onChange={(e) => setPayer(e.target.value)}>
        <option>You</option>
        <option>{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
