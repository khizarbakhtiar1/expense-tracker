const AddTransaction = () => {
  return (
    <div>
      <h1>Add New Transaction</h1>
      <hr />
      <div>
        <h2>Text</h2> <input type="text" placeholder="Enter Text" />
      </div>
      <div>
        <h2>Amount</h2>
        <h2>(Negative - Expense, Positive - Income)</h2>{" "}
        <input type="text" placeholder="Enter Amount" />
      </div>
      <button className="border-black border-2">Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
