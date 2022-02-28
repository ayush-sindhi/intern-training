import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions/Actions";

const AddEntry = () => {
  const [item, setItem] = useState("");
  const [calories, setCalories] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry({ item, calories }));
    setCalories("");
    setItem("");
  };
  return (
    <div className="border border-info rounded p-4 mt3">
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Food Item</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="description">Calories</label>
          <input
            type="text"
            id="Amount"
            className="form-control"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-3">Add Entry</button>
      </form>
    </div>
  );
};
export default AddEntry;
