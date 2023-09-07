import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomesExpenses from "./components/IncomesExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

export default function Home() {
  return (
    <div className="w-full h-screen flex bg-slate-50">
      <div className="m-auto">
        <Header />
        <Balance />
        <IncomesExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}
