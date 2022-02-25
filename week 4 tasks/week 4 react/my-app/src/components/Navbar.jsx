import React from 'react';
import "./Navbar.css";

const Navbar = (props) => {
  return (
    // <ul>
    //   <li>{props.firstbev}</li>
    //   <li>{props.secondbev}</li>
    //   <li>green tea</li>
    // </ul>
    <div className='container'>
      <div className="one">
        <h6>{props.title}</h6>
        <div className='inn'>
          <div className='inn1'>{props.num}</div>
          <div className="inn2">{props.num1}</div>
        </div>
      </div>
      <div className="other">
        <img src={props.logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar