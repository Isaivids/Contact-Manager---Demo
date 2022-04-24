import React from 'react'

const Contact = (props) => {

  return (
    <div>
        <p>{props.contact.name} - {props.contact.email}- {props.contact.mobile}- {props.contact.position} </p>
        <button onClick={()=> props.clickHandler(props.contact.id)}>Delete</button>
    </div>
  )
}

export default Contact