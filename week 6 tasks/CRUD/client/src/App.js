import './App.css';
import Axios from 'axios';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    Axios.get("")
  },[])
  return (
    <div className="App">
     <h1>hello</h1>
    </div>
  );
}

export default App;
