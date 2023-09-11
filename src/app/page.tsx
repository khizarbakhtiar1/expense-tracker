import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomesExpenses from "./components/IncomesExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

export default function Home() {
  return (
    <GlobalProvider>
      <div className="w-full h-screen flex bg-slate-50">
        <div className="m-auto">
          <Header />
          <hr className="border-black" />
          <br />
          <Balance />
          <IncomesExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}
