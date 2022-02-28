import { useContext, useState } from "react";
import { BankingContext } from "./banking-context";

const Banking = () => {
  const { balance, dispatch } = useContext(BankingContext);
  const [amount, setAmount] = useState("");
  return (
    <div className="">
      <h1>Balance is {balance}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={() => dispatch({ type: "WITHDRAW", amount })}>
        Withdraw
      </button>
      <button
        onClick={() => dispatch({ type: "DEPOSIT", amount }, setAmount(""))}
      >
        Deposit
      </button>
      <button>Fixed Deposit</button>
      <button>Delete Account</button>
    </div>
  );
};
export default Banking;
