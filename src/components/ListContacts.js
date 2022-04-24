import React from 'react'
import Contact from './Contact';

const ListContacts = (props) => {

const deleteContact =(id)=>{
	props.getId(id);
}	

const renderContacts = props.contacts.map((contact,index)=>{
	return(
		<Contact contact={contact} clickHandler={deleteContact} key={index}/>
	);
})

  return (
	<div>
		{renderContacts}
	</div>
  )
}
export default ListContacts;
