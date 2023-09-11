"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num: any) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc: any, num: any, i: any, orig: any) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

const Transaction = ({ transaction }: any) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div
      className="flex justify-between my-3 p-2 bg-white border-zinc-400 border-2 rounded
     text-xs font-semibold text-zinc-800 "
    >
      <div className="ml-2 font-bold">{transaction.text}</div>
      <div className="font-bold">
        {sign}
        {moneyFormatter(transaction.amount)}
        <button
          className="ml-2 px-1 rounded bg-red-500 text-white"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Transaction;
