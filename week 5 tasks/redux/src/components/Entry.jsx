import { useDispatch } from "react-redux";
import { deleteEntry } from "../actions/Actions";

const Entry = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEntry(props.entry.id));
  };
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <div className="">{props.entry.item}</div>
      <div className="">{props.entry.calories} kcal</div>
      <button className="btn-close" onClick={handleDelete}></button>
    </div>
  );
};
export default Entry;
