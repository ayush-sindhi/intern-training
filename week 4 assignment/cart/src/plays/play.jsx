import React from 'react'
import NumberFormat from 'react-number-format';
function Play(props) {
  
  return (<>
    <div className="g-col-6">
        <div className="card" style={{height: "35rem",width:"100%",fontSize:".8rem"}}>
          <img src={props.data.image} style={{height: "15rem",overflow: "scroll",objectFit:"contain",}}className="card-img-top" alt="..."/>
          <div className="card-body">
            <NumberFormat className="card-text" value={props.data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <h5 className="card-title"style={{height: "5rem",overflow: "scroll",objectFit:"contain",}}>{props.data.title}</h5>
            <p className="card-text" style={{height: "10rem",overflow: "scroll",objectFit:"contain",}}>{props.data.description}</p>
            <a href="#" className="btn btn-primary" onClick={()=>props.handler(props.data.id)}>Add to cart</a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Play