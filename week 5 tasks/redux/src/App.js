import AddEntry from "./components/AddEntry";
import Entries from "./components/Entries";
import TotalCalories from "./components/TotalCalories";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <TotalCalories />
      <AddEntry />
      <Entries />
    </div>
  );
}
