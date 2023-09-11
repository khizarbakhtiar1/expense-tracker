"use client";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<any>(""); // Initialize amount as a number
  const { addTransaction } = useContext(GlobalContext);
  const onClick = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount), // Parse amount as a number
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="mt-6">
      <h1 className="font-bold text-s mb-2">Add New Transaction</h1>
      <hr className="border-black" />
      <form>
        <div>
          <h2 className="font-bold text-xs mt-3">Text</h2>{" "}
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="my-1 font-semibold text-xs p-1 border-zinc-400 border-2 rounded w-full"
          />
        </div>
        <div>
          <h2 className="font-bold text-xs mt-2">Amount</h2>
          <h2 className="font-bold text-xs">
            (Negative - Expense, Positive - Income)
          </h2>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount} // Convert amount to a string for input value
            onChange={(e) => setAmount(parseFloat(e.target.value))} // Parse amount as a float
            className="my-1 font-semibold text-xs p-1 border-zinc-400 border-2 rounded w-full"
          />
        </div>
      </form>
      <button
        onClick={onClick}
        className="py-1 mt-2 font-semibold bg-purple-500 text-white w-full rounded border-zinc-400 border-2"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
