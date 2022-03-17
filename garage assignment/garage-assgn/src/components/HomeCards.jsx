import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

function HomeCards(){
    const cards=useSelector(store=>store.Cards)

    const shuff=cards.sort(()=>0.5-Math.random());

    let selct=shuff.slice(0,4);

  return (
    <div>
           {<div className="d-flex flex-wrap p-3">
    {selct.map((el) => {
      return <Card card={el}  />;
    })}
  </div>}
    </div>
  )
}

export default HomeCards