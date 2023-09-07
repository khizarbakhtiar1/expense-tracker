const IncomesExpenses = () => {
  return (
    <div
      className="my-3 py-2 flex gap-x-14 items-center justify-center bg-white
     border-zinc-400 border-2 rounded"
    >
      <div className="">
        <h2 className="font-semibold text-xs">INCOME</h2>
        <h3 className="font-semibold text-md text-green-500">$500.00</h3>
      </div>
      <div>
        <h2 className="font-semibold text-xs ">EXPENSE</h2>
        <h3 className="font-semibold text-md text-red-500">$240</h3>
      </div>
    </div>
  );
};

export default IncomesExpenses;
