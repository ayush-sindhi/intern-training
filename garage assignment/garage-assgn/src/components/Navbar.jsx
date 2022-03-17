import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="/">Garage Forums <br></br>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyb6tXML0NLzkJrkL_4VYhFNxU-xItBa_Egusqp=CAU" alt="..." height="36" />
    </a>
    <div>
        
    <ul className="nav nav-pills p-3 border bg-info bg-opacity-70 border-4  ">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/forums">Forums</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar