"use client";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 className="font-bold  text-s  ">YOUR BALANCE</h4>
      <h1 className="font-serif font-extralight text-3xl">${total}</h1>
    </>
  );
};

export default Balance;
