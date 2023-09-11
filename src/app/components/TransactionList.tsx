"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <div className="mt-6">
      <h1 className="font-semibold text-sm ">History</h1>
      {transaction.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
