import { useContext } from "react";
import { ExpenseContext } from "../expense-context";

const TotalBalance = () => {
  const { entries } = useContext(ExpenseContext);
  console.log(entries);
  const tBalance = entries.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
  return (
    <div className="">
      <h2 className="display-3 text-center">${tBalance}</h2>
    </div>
  );
};
export default TotalBalance;
