import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { AddLike } from '../actions/Actions';

function Card(props){
    console.log(props.card.BlogTitle)
    const [likes, setlikes]=useState(0)
    const dispatch=useDispatch();
    const handler=()=>{
        dispatch(AddLike(props.card.Id));
        setlikes(likes+1);
    }
    return (
        <div>
            <div className="card m-3 border-4" style={{width: "18rem"}}>
        <h5 className="card-title bg-info bg-opacity-70 border-4 text-white">{props.card.Blogtitel}</h5>
       <img src="static/card/img1.png" className="card-img-top border-4" alt="..."/>
  <div className="card-body">
    
    
    <p className="card-text">{props.card.Comment[0].Comment}</p>
    
    <button onClick={handler} className="fa fa-thumbs-up btn  ms-1 border bg-info bg-opacity-70 border-4 text-white ">&emsp;{props.card.Likes}</button>
    <div className='m-2'>
    <Link to={`/fullcard/${props.card.Id}`} className="btn border bg-info bg-opacity-70 border-4  text-white">Show</Link>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card