const AddTransaction = () => {
  return (
    <div className="mt-6">
      <h1 className="font-semibold text-sm ">Add New Transaction</h1>
      <hr />
      <div>
        <h2 className="font-semibold text-xs mt-3">Text</h2>{" "}
        <input
          type="text"
          placeholder="Enter Text"
          className="my-1 font-semibold text-xs p-1 border-zinc-400 border-2 rounded w-full"
        />
      </div>
      <div>
        <h2 className="font-semibold text-xs mt-2">Amount</h2>
        <h2 className="font-semibold text-xs">
          (Negative - Expense, Positive - Income)
        </h2>
        <input
          type="text"
          placeholder="Enter Amount"
          className="my-1 font-semibold text-xs p-1 border-zinc-400 border-2 rounded w-full"
        />
      </div>
      <button className=" py-1 mt-2 font-semibold bg-purple-500 text-white w-full rounded border-zinc-400 border-2">
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
