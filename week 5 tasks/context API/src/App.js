import AddEntry from "./components/AddEntry";
import Entries from "./components/Entries";
import Summary from "./components/Summary";
import TotalBalance from "./components/TotalBalance";
import { ExpenseProvider } from "./expense-context";
import "./styles.css";

export default function App() {
  return (
    <ExpenseProvider>
      <div className="container justify-content-center">
        <TotalBalance />
        <Summary />
        <AddEntry />
        <Entries />
      </div>
    </ExpenseProvider>
  );
}
