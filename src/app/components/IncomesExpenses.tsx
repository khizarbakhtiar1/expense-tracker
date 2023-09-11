"use client";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

//Money formatter function
function moneyFormatter(num: any) {
  let p = num.split(".");
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

const IncomesExpenses = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div
      className="my-3 py-2 flex gap-x-14 items-center justify-around bg-white
     border-zinc-400 border-2 rounded"
    >
      <div className="">
        <h2 className="font-semibold text-xs">INCOME</h2>
        <h3 className="font-semibold text-md text-green-500">
          {moneyFormatter(income)}
        </h3>
      </div>
      <div>
        <h2 className="font-semibold text-xs ">EXPENSE</h2>
        <h3 className="font-semibold text-md text-red-500">
          {moneyFormatter(expense)}
        </h3>
      </div>
    </div>
  );
};

export default IncomesExpenses;
