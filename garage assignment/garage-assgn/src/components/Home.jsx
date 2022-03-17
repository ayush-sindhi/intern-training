import React from 'react'
import HomeCards from './HomeCards'
import Navbar from './Navbar'

function Home(){
  return (
    <div>
      <Navbar/>
      <img src="static/img1.png" alt="img" />
      <HomeCards/>
    </div>
  )
}

export default Home