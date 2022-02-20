import React,{useState} from 'react'
import Cart from '../Sub/Sub';
import '../Sub/sub.css'


function Nav(props) {
  const [flag, setflag] = useState(true);
  const flaghandler=()=>{
    if(flag)
    {setflag(false)}
    else
    {
      setflag(true)
    }
  }
  const cartremovehandler=(id)=>{ 
    props.handler(id);
    
   
  }
  return (<>
    <div><nav className="navbar navbar-dark bg-primary justify-content-between mb-3 p-3 fixed-top">
    <a className="navbar-brand">Shop here</a>
    <form className="form-inline">
      <button className="btn btn-outline-success my-2 my-sm-0 bg-light" style={{color:"blue"}} onClick={flaghandler}><i className="fa-solid fa-cart-plus"></i></button>
    </form>
    
  </nav>

  </div>
  
    
  <div className="cart " style={ flag ? { display:'none'} : {overflowY: 'scroll'}}><Cart  Cart={props.Cart} handler={cartremovehandler}/></div>
  
  </>
  )
}

export default Nav