const AddEntry = () => {
  return (
    <div className="border border-info rounded p-4 mt-3">
      <form action="" className="form-group">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Amount</label>
          <input type="text" id="Amount" className="form-control" />
        </div>
      </form>
      <button className="btn btn-primary mt-3">Add Entry</button>
    </div>
  );
};
export default AddEntry;
