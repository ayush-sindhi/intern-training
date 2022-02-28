import { useContext } from "react";
import { ExpenseContext } from "../expense-context";
import Entry from "./Entry";

const Entries = () => {
  const { entries } = useContext(ExpenseContext);
  return (
    <div className="mt-3">
      <h4 className="display-6">Entries</h4>
      <hr />
      <div className="list-group">
        {entries.map((el) => {
          return <Entry entry={el} />;
        })}
      </div>
    </div>
  );
};
export default Entries;
