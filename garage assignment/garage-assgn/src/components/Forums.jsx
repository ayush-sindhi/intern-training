import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

function Forums(){
  const forums=useSelector(store=>store.Forums)
  console.log(forums);

  return(
    <div>
      {<div className="d-flex flex-wrap p-3">
        {forums.map((el)=>{
          return <Card card={el} />;
        })}
        </div>
        }
    </div>
  )
}
export default Forums