import React from 'react'
import NumberFormat from 'react-number-format';
import './sub.css';

function Sub(props) {
 
const renderer=()=>
{
  if(props.Cart.length===0) return (
  <> 
  <div>
 
  <div className="card" >
          <div className="card-body">
            
            <h5 className="card-title"style={{height: "3rem",overflow: "scroll",objectFit:"contain"}}>Cart is empty</h5>
            <h5 className="card-title"style={{height: "3rem",overflow: "scroll",objectFit:"contain"}}>Please add items</h5>
            
            
          </div>
        </div>
    </div>
   
  </>
)
return props.Cart.map((item)=>{
  console.log("item: ",item[0])
return (<> 
  <div>
  <div className="card " style={{height: "10rem",width:"100%",fontSize:".8rem"}}>
          <div className="card-body">
            
            <h5 className="card-title"style={{height: "3rem",overflow: "scroll",objectFit:"contain",}}>{item[0].title}</h5>
            <NumberFormat style={{height: "2rem" ,width:"100%"}}className="card-text" value={item[0].price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <div><a href="#" className="btn btn-primary" onClick={()=>props.handler(item[0].id)}>remove</a>
          </div></div>
        </div>
    </div>
  </>)}

)
 
}

return (
  <> 
     {renderer()}
  </>
)

}

export default Sub