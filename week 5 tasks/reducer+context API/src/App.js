import Banking from "./Banking";
import { BankingContextProvider } from "./banking-context";
import "./styles.css";

export default function App() {
  return (
    <BankingContextProvider>
      <div className="App">
        <Banking />
      </div>
    </BankingContextProvider>
  );
}
