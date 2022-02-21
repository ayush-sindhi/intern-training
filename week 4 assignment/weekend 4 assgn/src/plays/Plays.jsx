import React,{useState,useEffect} from 'react';
import Play from './play';
import './play.css';
import Nav from './navbar/Nav';
import Sub from './Sub/Sub';
function Plays() {
  const [cart, setcart] = useState([]);
  const [data, setdata] = useState({data:[],flag:false});

  const fetchdata=()=>fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=>setdata({data:data,flag:true}));
  useEffect(() => {
    fetchdata()
  }, []);

  
 
const carthandler=(id)=>{console.log(cart);
  cart.splice(0,0, data.data.filter(item=>item.id===id));
  setcart(cart);
}

const cartremovehandler=(id)=>{
    console.log(id)
    const index=cart.findIndex(item=>item.id===id);
    cart.splice(index,1); 
    setcart(cart);
    
   
}

const renderer=()=>{
  //console.log(data.flag)
  if(data.flag)
  {  
    
      return data.data.map(item=>{
       return(
      
        <>
             <Play data={item} handler={carthandler} />
        </>
      )
      })
     
  }
  return <h1>please wait..........</h1>
}

  
  
  
  return (
    <><Nav Cart={cart} handler={cartremovehandler}/>
     <div className="grid-container row">
      {renderer()}
      </div>
    </>
  )
}

export default Plays