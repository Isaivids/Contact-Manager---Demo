import React from 'react'
import './Contact.css';
import {AiFillCloseCircle, AiFillProfile} from 'react-icons/ai'

const Contact = (props) => {

  return (
    <div className='ct'>
      <div className='ct-container'>
        <p>Name : {props.contact.name}</p>
        <p>{props.contact.email}</p>
        <p>{props.contact.position}</p>
        <p>Mobile : {props.contact.mobile}</p>
        <AiFillCloseCircle onClick={()=> props.clickHandler(props.contact.id)} className="del-logo"/>
      </div>
      <div className='ct-icon'>
          <AiFillProfile/>
      </div>
    </div>
  )
}

export default Contact