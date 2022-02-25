import React from 'react'
import "./Tweet.css"
 
const Tweet = (props) => {
  return (
    <div className='container'>
        <div className="info">
            <div className='dp'><img src={props.tweet.dp} alt="" /></div>
            <div className="Name"><h4>{props.tweet.name}</h4></div>
            <div className="twitterUser"><h6>{props.tweet.twitterhandle}</h6></div>
        </div>
        <div className="idea">{props.tweet.tweet}</div>
        <hr />
        <div className="fame">
            <button onClick={()=>props.handleLike(props.tweet.id)}><i className="fa fa-thumbs-up" ></i></button>
            <button onClick={()=>props.handleDislike(props.tweet.id)}><i className="fa fa-thumbs-down"></i></button>
            <h5><span className="badge bg-secondary">{props.tweet.likes}</span></h5>
        </div>
    </div>
  )
}
 
export default Tweet
