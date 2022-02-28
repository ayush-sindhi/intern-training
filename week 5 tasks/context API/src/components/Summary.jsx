import { useContext } from "react";
import { ExpenseContext } from "../expense-context";

const Summary = () => {
  const { entries } = useContext(ExpenseContext);
  let income = 0;
  let expense = 0;
  entries.forEach((element) => {
    if (element.amount > 0) {
      income += element.amount;
    } else {
      expense += element.amount;
    }
  });
  console.log(entries);
  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="card border-success">
            <div className="card-body text-center ">
              <h5 className="card-title text-center">Income</h5>
              <h4 className="text-success-display-5">${income}</h4>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div className="card border-danger">
            <div className="card-body text-center">
              <h5 className="card-title">Expense</h5>
              <h4>-${expense * -1}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
