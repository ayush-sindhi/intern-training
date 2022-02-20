import React from 'react'

const Contacts = (props) => {
  return (
    <>
    <div className="list-group">
        {props.contacts.map(item=>{
            return (
                <>
                <li className="list-group-item">
                    {item.name}
                    <br/>
                    {item.email}
                    <button className="btn btn-danger ms-3" onClick={()=>props.handleDelete(item.email)}>Delete</button>
                    <button className="btn btn-warning ms-3" onClick={()=>props.hadleEdit(item.email)}>Edit</button>
                </li>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Contacts