"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <div className="mt-6">
      <h1 className="font-bold text-s mb-2 ">History</h1>
      <hr className="border-black" />
      {transaction.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
