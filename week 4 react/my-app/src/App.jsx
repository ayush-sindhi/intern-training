import React, { useState } from 'react';
import Contacts from './components/Contacts';
// import Tweets from './components/Twitter/Tweets';
//import Navbar from "./components/Navbar"
// import C1 from './components/C1';
// import C2 from './components/C2'
// import "./index.css"

// const App = () => {
//   return (
//       <div className='fin'>
//     <C1/>
//     <C2/>
//   </div>
//   )
// }


// const App=()=>{
//     const [count,setCount]=useState({count1:0,count2:6});
//     //const [countOne,setcountOne]=useState(6);
//     const handleClick=()=>{
//        setCount({...count,count1:count.count1+1});
//     }
//     const handleClickOne=()=>{
//         setCount({...count,count2:count.count2-1});
//     }
//     return(
//         <>
//         <h1>{count.count1}</h1>
//         <button onClick={handleClick}>Increment + +</button>
//         <h2>{count.count2}</h2>
//         <button onClick={handleClickOne}>Decrement - -</button>
//         </>
//     )
// }
// const App=()=>{
//     let [count,setCount]=useState(0);
//     const handleInc=()=>{
//        setCount(count=count+1);
//     }
//     const handleDec=()=>{
//         setCount(count=count-1);
//     }
//     return(
//         <>
//         <button onClick={handleInc}>Increment + +</button>
//         <h1>{count}</h1>
//         <button onClick={handleDec}>Decrement - -</button>
//         </>
//     )
// }
// const App=()=>{
//     let [count,setCount]=useState(0);
//     const handleInc=(val)=>{
//         if(val===1)
//        setCount(count=count+1);
//        else
//        setCount(count=count-1);
//     }
//     return(
//         <>
//         <button onClick={()=>handleInc(1)}>Increment + +</button>
//         <h1>{count}</h1>
//         <button onClick={()=>handleInc(2)}>Decrement - -</button>
//         </>
//     )
// }
// const App=()=>{
//     return(
//         <>
//         {/* <h1>Beverages</h1>
//         <Navbar firstbev="coffee" secondbev="tea"/> */}
//         <Navbar title="Today's Money" num="$53000" num1="+55%" logo="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-dollars-coin-icon-png-image_4142461.jpg"/>
//         <Navbar title="Today's Users" num="2300" num1="+3%" logo="2nd one"/>
//         <Navbar title="New Clients" num="+3462" num1="-2%" logo="3rd one"/>
//         <Navbar title="Sales" num="$103,430" num1="+5%" logo=""/>
//         </>
//     )
// }



// const App = () => {
//   return (
//     <>
//     <Tweets/>
//     </>
//   )
// }
// const App = () => {
//   const[info,setInfo]=useState("");
//   const handleClick=(event)=>{
//     event.preventDefault();
//   }
//   const handleChange=(event)=>{
//     console.log(event.target.value);
//     setInfo(event.target.value);
//   }
//   return (
//     <>
//     {/* uncontrolled input */}
//     <form>
//       <label htmlFor="">Enter Name</label>
//       <input type="text" placeholder='name' onChange={handleChange} value={info} />
//       <button onClick={handleClick}>Click me</button>
//     </form>
//     </>
//   )
// }


 
const App = () => {
  // Name State
  const [newName, setNewName] = useState("")
  // Email State
  const [newEmail, setNewEmail] = useState("")
  // Contacts State
  const [contacts, setContacts] = useState([
    {name:"Ram",email:"r@r.com"},
    {name:"Shyam",email:"s@s.com"},
    {name:"Ghanshyam",email:"g@g.com"},
  ])
  // Handling Name
  const handleNameChange=(event)=>{
    setNewName(event.target.value);
  }
  // Handling Email
  const handleEmailChange=(event)=>{
    setNewEmail(event.target.value)
  }
  // Adding Contact
  const handleContactSubmit=(event)=>{
    event.preventdefault();
    setContacts([...contacts,{name:newName,email:newEmail}]);
    setNewName("");
    setNewEmail("");
  }
  // Handling Delete
  const handleDelete=(emailId)=>{
    const newContacts=contacts.filter(item=>item.email!==emailId);
    setContacts(newContacts);
  }
  // Handling Edit
  const handleEdit=(emailId)=>{
    const newContacts=[...contacts];
    const index=newContacts.findIndex(el=>el.email===emailId);
    newContacts[index]={name:newName,email:newEmail};
    setContacts(newContacts);
    setNewName("");
    setNewEmail("");
  }
  return (
    <>
    <div className="container">
    <form>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleNameChange} value={newName}/>
       </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail}/>
      </div>
    </div>
    <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit}>Add Contact</button>
      </form>
    </div>
    <Contacts contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}
 
export default App
