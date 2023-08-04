import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [payedByUser, setPayedByUser] = useState("");
    const payedByFriend = bill ? +bill - +payedByUser : ""; 
    const [whoIsPaying, setWhoIsPaying] = useState("user");
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!bill || !payedByUser) return;
  
      onSplitBill(whoIsPaying === "user" ? payedByFriend : -payedByUser);
    }
  
    return (
      <>
        <form className="form-split-bill" onSubmit={handleSubmit}>
          <h2> Split A Bill With {selectedFriend.name}</h2>
  
          <label htmlFor="bill"> 💰 Bill Value</label>
          <input
            id="bill"
            type="text"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
  
          <label htmlFor="Expense">🧍‍♂️ Your Expense</label>
          <input
            id="Expense"
            type="text"
            value={payedByUser}
            onChange={(e) =>
              setPayedByUser(
                Number(e.target.value) > bill
                  ? payedByUser
                  : Number(e.target.value)
              )
            }
          />
          <label htmlFor="expense"> 👩🏽‍🤝‍👩🏼 {selectedFriend.name}'s Expense</label>
          <input
            id="expense"
            type="text"
            value={Math.abs(payedByFriend)}
            disabled
          />
  
          <label htmlFor="Expense"> 🤑 Who is Paying The Bill ? </label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option></option>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
  
          <Button>split bill</Button>
        </form>
      </>
    );
  }
  